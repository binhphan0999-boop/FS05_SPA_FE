import { useState } from 'react';
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector }
    from "@/store/hooks";

import {
    selectUser,
    selectIsAuthenticated,
} from "@/store/slices/auth/auth.selector";

import {
    logoutThunk,
} from "@/store/slices/auth/auth.thunk";

export default function Header() {

    const router =
        useRouter();

    const [isToggle,
        setIsToggle] =
        useState(false);

    const [isMenuOpen,
        setIsMenuOpen] =
        useState(false);

    /**
     * Redux Auth
     */
    const user =
        useAppSelector(
            selectUser
        );

    const isAuthenticated =
        useAppSelector(
            selectIsAuthenticated
        );

    console.log("user", user);

    const toggleMenu =
        () => {
            setIsMenuOpen(
                !isMenuOpen
            );
        };

    const dispatch =
        useAppDispatch();

    const handleLogout =
        async () => {
            try {
                await dispatch(
                    logoutThunk()
                ).unwrap();

                router.push("/");
            } catch (error) {
                console.error(
                    "Logout error",
                    error
                );
            }
        };

    return (
        <div>
            <header className="header header__introduce">
                <nav className="nav container-gioithieu" style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                    <div className="nav__data nav__data__reponsive" >
                        <div>
                            <img
                                onClick={() => router.push("/")}
                                style={{ width: "207px", height: "80px", cursor: "pointer" }}
                                // src="/images/image1.jpeg"
                                src="/images/logo_m.png"
                                alt="logo"
                            // onClick={() => history.replace(`/`)}
                            />
                        </div>

                        <div className={isMenuOpen ? 'show-icon' : 'nav__toggle'} id="nav-toggle_1" onClick={toggleMenu}>
                            <i className="fa fa-bars nav__burger" aria-hidden="true"></i>
                            <i className="fa fa-times nav__close" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={isMenuOpen ? 'show-menu' : 'nav__menu'} id="nav-menu">
                        <ul className="nav__list">
                            <li><a
                                className={`nav__link header__hover__a active-header cursor-pointer`}
                                onClick={() => router.push("/")}
                            >TRANG CHỦ</a></li>

                            <li><a
                                // href="/gioithieu_1"
                                className="nav__link header__hover__a cursor-pointer"
                                onClick={() => router.push("/gioi-thieu")}
                            >GIỚI THIỆU</a></li>

                            {/* <!--=============== DROPDOWN 1 ===============--> */}
                            <li className="dropdown__item">
                                <div className="nav__link">
                                    DỊCH VỤ <i className="fa fa-angle-down dropdown__arrow"></i>
                                </div>

                                <ul className="dropdown__menu">
                                    <li
                                    >
                                        <a
                                            //  href="" 
                                            className="dropdown__link header__hover__a__n"
                                            onClick={() => router.push("/spa-thu-gian")}
                                        // onClick={(e) => {
                                        //     e.preventDefault();

                                        // }}
                                        >
                                            <i className="fa fa-dot-circle-o" aria-hidden="true" style={{ fontSize: "15px", color: "#9a563a" }}></i><span className="header__hover__a__n-v" style={{ color: "#444", padding: "5px 0", fontSize: "14px", fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}> SPA THƯ GIÃN</span>
                                        </a>
                                    </li>

                                    <li
                                    >
                                        <a
                                            className="dropdown__link header__hover__a__n"
                                            onClick={() => router.push("/chuyen-gia")}

                                        >
                                            <i className="fa fa-dot-circle-o" aria-hidden="true" style={{ fontSize: "15px", color: "#9a563a" }}></i><span className="header__hover__a__n-v" style={{ color: "#444", padding: "5px 0", fontSize: "14px", fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}> CHUYÊN GIA</span>
                                        </a>
                                    </li>
                                    <li
                                    >
                                        <a
                                            className="dropdown__link header__hover__a__n"
                                            onClick={() => router.push("/dat-hen")}

                                        >
                                            <i className="fa fa-dot-circle-o" aria-hidden="true" style={{ fontSize: "15px", color: "#9a563a" }}></i><span className="header__hover__a__n-v" style={{ color: "#444", padding: "5px 0", fontSize: "14px", fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}> ĐẶT HẸN</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li><a
                                className={`nav__link header__hover__a cursor-pointer`}
                                onClick={() => router.push("/san-pham")}
                            >SẢN PHẨM</a></li>

                            <li><a
                                className={`nav__link header__hover__a cursor-pointer`}
                                onClick={() => router.push("/tin-tuc")}
                            >TIN TỨC</a></li>

                            <li><a
                                className={`nav__link header__hover__a cursor-pointer`}
                                onClick={() => router.push("/lien-he")}
                            >LIÊN HỆ</a></li>

                            <li className="dropdown__item">
                                <div
                                    className="nav__link cursor-pointer"
                                >
                                    <i
                                        className="fa fa-user-circle mr-[6px]"
                                        aria-hidden="true"
                                        style={{
                                            color: "#9a563a",
                                            fontSize: "18px",
                                        }}
                                    />

                                    {isAuthenticated
                                        ? (
                                            <>
                                                <span
                                                    style={{
                                                        fontWeight:
                                                            700,
                                                    }}
                                                >
                                                    {user?.firstName ||
                                                        "Tài khoản"}
                                                </span>

                                                <i className="fa fa-angle-down dropdown__arrow"></i>
                                            </>
                                        )
                                        : (
                                            <>
                                                TÀI KHOẢN
                                                <i className="fa fa-angle-down dropdown__arrow"></i>
                                            </>
                                        )}
                                </div>

                                <ul className="dropdown__menu">

                                    {/* CHƯA LOGIN */}
                                    {!isAuthenticated && (
                                        <>
                                            <li>
                                                <a
                                                    className="dropdown__link header__hover__a__n cursor-pointer"
                                                    onClick={() =>
                                                        router.push(
                                                            "/dang-nhap"
                                                        )
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-sign-in"
                                                        aria-hidden="true"
                                                        style={{
                                                            fontSize:
                                                                "15px",
                                                            color:
                                                                "#9a563a",
                                                        }}
                                                    />

                                                    <span
                                                        className="header__hover__a__n-v"
                                                        style={{
                                                            color:
                                                                "#444",
                                                            padding:
                                                                "5px 0",
                                                            fontSize:
                                                                "14px",
                                                            fontFamily:
                                                                "'Montserrat', sans-serif",
                                                            fontWeight:
                                                                "bold",
                                                        }}
                                                    >
                                                        ĐĂNG NHẬP
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="dropdown__link header__hover__a__n cursor-pointer"
                                                    onClick={() =>
                                                        router.push(
                                                            "/tao-tai-khoan"
                                                        )
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-user-plus"
                                                        aria-hidden="true"
                                                        style={{
                                                            fontSize:
                                                                "15px",
                                                            color:
                                                                "#9a563a",
                                                        }}
                                                    />

                                                    <span
                                                        className="header__hover__a__n-v"
                                                        style={{
                                                            color:
                                                                "#444",
                                                            padding:
                                                                "5px 0",
                                                            fontSize:
                                                                "14px",
                                                            fontFamily:
                                                                "'Montserrat', sans-serif",
                                                            fontWeight:
                                                                "bold",
                                                        }}
                                                    >
                                                        TẠO TÀI KHOẢN
                                                    </span>
                                                </a>
                                            </li>
                                        </>
                                    )}

                                    {/* ĐÃ LOGIN */}
                                    {isAuthenticated && (
                                        <>
                                            <li>
                                                <a
                                                    className="dropdown__link header__hover__a__n cursor-pointer"
                                                    onClick={() =>
                                                        router.push(
                                                            "/ho-so"
                                                        )
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-user"

                                                        aria-hidden="true"
                                                        style={{
                                                            fontSize:
                                                                "15px",
                                                            color:
                                                                "#9a563a",
                                                        }}
                                                    />

                                                    <span
                                                        className="header__hover__a__n-v"
                                                        // onClick={() =>
                                                        //     router.push(
                                                        //         "/ho-so"
                                                        //     )
                                                        // }
                                                        style={{
                                                            color:
                                                                "#444",
                                                            padding:
                                                                "5px 0",
                                                            fontSize:
                                                                "14px",
                                                            fontFamily:
                                                                "'Montserrat', sans-serif",
                                                            fontWeight:
                                                                "bold",
                                                        }}
                                                    >
                                                        HỒ SƠ CÁ NHÂN
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="dropdown__link header__hover__a__n cursor-pointer"
                                                    onClick={() =>
                                                        router.push(
                                                            "/lich-su-dat-hen"
                                                        )
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-calendar"
                                                        aria-hidden="true"
                                                        style={{
                                                            fontSize:
                                                                "15px",
                                                            color:
                                                                "#9a563a",
                                                        }}
                                                    />

                                                    <span
                                                        className="header__hover__a__n-v"
                                                        style={{
                                                            color:
                                                                "#444",
                                                            padding:
                                                                "5px 0",
                                                            fontSize:
                                                                "14px",
                                                            fontFamily:
                                                                "'Montserrat', sans-serif",
                                                            fontWeight:
                                                                "bold",
                                                        }}
                                                    >
                                                        LỊCH ĐẶT HẸN
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="dropdown__link header__hover__a__n cursor-pointer"
                                                    onClick={
                                                        handleLogout
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-sign-out"
                                                        aria-hidden="true"
                                                        style={{
                                                            fontSize:
                                                                "15px",
                                                            color:
                                                                "#d9534f",
                                                        }}
                                                    />

                                                    <span
                                                        className="header__hover__a__n-v"
                                                        style={{
                                                            color:
                                                                "#d9534f",
                                                            padding:
                                                                "5px 0",
                                                            fontSize:
                                                                "14px",
                                                            fontFamily:
                                                                "'Montserrat', sans-serif",
                                                            fontWeight:
                                                                "bold",
                                                        }}
                                                    >
                                                        ĐĂNG XUẤT
                                                    </span>
                                                </a>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </li>

                            {/* <li><a
                                className={`nav__link header__hover__a cursor-pointer`}
                                onClick={() => router.push("/dang-nhap")}
                            >ĐĂNG NHẬP</a></li>
                            <li><a
                                className={`nav__link header__hover__a cursor-pointer`}
                                onClick={() => router.push("/tao-tai-khoan")}
                            >TẠO TÀI KHOẢN</a></li> */}

                            {/* <li><a href="/phukien" className={`nav__link header__hover__a`}
                            >PHỤ KIỆN</a></li> */}
                            <li className="nav__link">
                                <span className="hearder-search_1"><i className="fa fa-search" aria-hidden="true"></i></span>
                                <span className="hearder-shopping_1"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                {/* <span> */}
                                {/* <button className="hearder-call-know">LIÊN HỆ NGAY</button> */}
                                <button className="hearder-call-know" onClick={() => router.push("/lien-he")}>
                                    <span>LIÊN HỆ NGAY</span>
                                </button>
                                {/* </span> */}
                            </li>

                        </ul>


                    </div>
                </nav>
            </header>

        </div>
    );

}