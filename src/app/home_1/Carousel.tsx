'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import Lenis from "lenis";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 1,
    label: "Spa & Beauty Center",
    title_1: 'Chăm sóc',
    title_2: 'toàn diện cơ thể',
    description: 'Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.',
    image: '/images/carousel_1.jpg',
  },
  {

    id: 2,
    label: "Spa & Beauty Center",
    title_1: 'Spa thư giãn',
    title_2: 'Và phục hồi',
    description: 'Tất cả những điều bạn cần để tận hưởng một trải nghiệm spa tuyệt vời đều có tại Spa chúng tôi.',
    image: '/images/carousel_2.jpg',
  },
  {
    id: 3,
    label: "Spa & Beauty Center",
    title_1: 'Liệu pháp spa',
    title_2: 'chuyên nghiệp',
    description: 'Chúng tôi mong muốn mang đến cho bạn trải nghiệm tuyệt vời nhất, nơi mà bạn có thể thư giãn, phục hồi và tận hưởng cuộc sống toàn diện nhất.',
    image: '/images/carousel_3.jpg',
  },
]

const flowers = [
  { id: 1, left: '50%', top: 200, src: '/images/flower_1.png', floatFactor: 1 },
  { id: 2, left: '15%', top: 350, src: '/images/flower_2.png', floatFactor: 1.2 },
  { id: 3, left: '45%', top: 550, src: '/images/flower_3.png', floatFactor: 0.8 },
  { id: 4, left: '60%', top: 400, src: '/images/flower_4.png', floatFactor: 1.1 },
  { id: 5, left: '80%', top: 150, src: '/images/flower_5.png', floatFactor: 1.3 },
]

type props = {
  setShowButton: any;
  // scrollInstanceRef: any
}
type CarouselProps = {
  setShowButton?: any;
  lenisRef?: any; // hoặc bạn có thể định nghĩa rõ kiểu hơn nếu biết rõ instance kiểu gì
}

export default function Carousel({ setShowButton, lenisRef }: CarouselProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0)
  const [flowerOffsets, setFlowerOffsets] = useState(flowers.map(() => 0))
  const velocityRef = useRef(0)
  const lastScrollYRef = useRef(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      // lenisRef.current = lenis;

      const onScroll = (lenisInstance: Lenis) => {
        const y = lenisInstance.scroll;

        if (y > 0) {
          lenisRef.current = lenis;
          // scrollInstanceRef.current = lenisInstance;
          setShowButton(y > 300);
        }

        const currentY = y;
        const deltaY = currentY - lastScrollYRef.current;
        velocityRef.current += deltaY * 0.6;
        lastScrollYRef.current = currentY;
      };

      lenis.on('scroll', onScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenis.off('scroll', onScroll);
        lenis.destroy();
        lenisRef.current = null;
      };
    }
  }, []);

  // Animation frame để update vị trí hoa & friction
  useEffect(() => {
    let animationFrame: number

    const update = () => {
      // Update vị trí từng flower dựa vào velocity
      setFlowerOffsets((prevOffsets) =>
        prevOffsets.map((offset, index) => {
          const floatFactor = flowers[index].floatFactor
          let newOffset = offset + velocityRef.current * floatFactor * 0.05
          newOffset = Math.min(Math.max(newOffset, 0), 1000) // clamp 0 - 1000
          return newOffset
        })
      )

      // Friction giảm velocity từ từ
      velocityRef.current *= 0.9

      // Time cho hiệu ứng floating
      setTime((prev) => prev + 0.02)

      animationFrame = requestAnimationFrame(update)
    }

    update()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="swiper-slide"
                >
                  <img
                    src={slide.image}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block', // loại bỏ khoảng trắng dư dưới ảnh
                    }}
                  />
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={slide.id}
                        className="content"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: {},
                          visible: {},
                          exit: {},
                        }}
                      >
                        <motion.span
                          className='carousel-label-m'
                          // style={{ fontSize: "20px", fontFamily: "'DM Sans', sans-serif", color: "rgb(18, 31, 56)" }}
                          initial={{ y: -200, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -200, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          {slide.label}
                        </motion.span>
                        <motion.h1
                          initial={{ x: -300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ y: -300, opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {slide.title_1}
                        </motion.h1>
                        <motion.h1
                          initial={{ x: -300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ y: -300, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.3 }}
                        >
                          {slide.title_2}
                        </motion.h1>
                        <motion.p
                          initial={{ x: -300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          {slide.description}
                        </motion.p>
                        <motion.button
                          onClick={() => router.push("/dat-hen")}
                          className="btn"
                          // className="hearder-call-know"
                          initial={{ y: 200, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 200, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          <span className='button-label'>Đặt Lịch Ngay</span> <span className='icon-right'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Flower layer */}
        <div className="flower-layer">
          {flowers.map((flower, index) => {
            const translateY = flowerOffsets[index]
            const isVisible = translateY < 800

            const sway = Math.sin(time * 2 + flower.id) * 10
            const rotateZ = Math.sin(time + flower.id) * 5

            const matrixTransform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${sway}, ${translateY}, 0, 1) rotateZ(${rotateZ}deg)`

            return (
              <img
                key={flower.id}
                src={flower.src}
                className={`flower ${!isVisible ? 'hidden' : ''}`}
                style={{
                  left: flower.left,
                  top: `${flower.top}px`,
                  transform: matrixTransform,
                }}
                alt=""
              />
            )
          })}
        </div>

        <style jsx>{`
        .carousel-wrapper {
          position: relative;
          overflow: hidden;
        }

        .carousel-container {
          position: relative;
          z-index: 1;
        }

        .flower-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
        }

        .flower {
          position: absolute;
          transition: opacity 0.3s ease;
          will-change: transform;
        }

        .flower.hidden {
          opacity: 0;
        }
      `}</style>
      </div>
    </>
  )
}



