declare module 'locomotive-scroll' {
    const LocomotiveScroll: any;
    export default LocomotiveScroll;
}


// src/types/locomotive-scroll.d.ts
// declare module 'locomotive-scroll' {
//     export interface LocomotiveScrollOptions {
//         // el: HTMLElement;
//         el: any;
//         smooth?: boolean;
//         lerp?: number;
//         direction?: 'vertical' | 'horizontal';
//         [key: string]: any;
//     }

//     export default class LocomotiveScroll {
//         constructor(options: LocomotiveScrollOptions);
//         update(): void;
//         destroy(): void;
//         start(): void;
//         stop(): void;
//         scrollTo(target: string | number | HTMLElement, options?: any): void;
//         on(event: string, callback: () => void): void;
//     }
// }
