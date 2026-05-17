// import { createAsyncThunk }
// from "@reduxjs/toolkit";
// import { authService }
// from "@/services/auth.service";



// export const loginThunk =
// createAsyncThunk(
//     "auth/login",

//     async (
//         payload: {
//             email: string;
//             password: string;
//         },
//         thunkAPI
//     ) => {
//         try {
//             const response =
//                 await authService.login(
//                     payload.email,
//                     payload.password
//                 );

//             /**
//              * response:
//              * {
//              *  success: true,
//              *  token: "...",
//              *  data: {...user}
//              * }
//              */

//             localStorage.setItem(
//                 "token",
//                 response.token
//             );

//             localStorage.setItem(
//                 "user",
//                 JSON.stringify(
//                     response.data
//                 )
//             );

//             return response;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(
//                 error.message
//             );
//         }
//     }
// );

// export const logoutThunk =
// createAsyncThunk(
//     "auth/logout",

//     async (_, thunkAPI) => {
//         try {
//             await authService.logout();

//             localStorage.removeItem(
//                 "token"
//             );

//             localStorage.removeItem(
//                 "user"
//             );

//             return true;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(
//                 error.message
//             );
//         }
//     }
// );


import {
    createAsyncThunk,
} from "@reduxjs/toolkit";

import authService
    from "@/services/auth.service";

/**
 * Login
 */
export const loginThunk =
    createAsyncThunk(
        "auth/login",

        async (
            payload: {
                email: string;
                password: string;
            },
            thunkAPI
        ) => {
            try {
                const response =
                    await authService.login(
                        {
                            email:
                                payload.email.trim(),
                            password:
                                payload.password,
                        }
                    );

                /**
                 * response:
                 * {
                 *   success: true,
                 *   token?: string,
                 *   data: user
                 * }
                 */

                /**
                 * Save localStorage
                 */
                if (
                    typeof window !==
                    "undefined"
                ) {
                    if (
                        response?.data
                    ) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(
                                response.data
                            )
                        );
                    }

                    /**
                     * Token optional
                     * vì backend có thể dùng session
                     */
                    if (
                        response?.token
                    ) {
                        localStorage.setItem(
                            "token",
                            response.token
                        );
                    }
                }

                return response;
            } catch (
                error: any
            ) {
                return thunkAPI.rejectWithValue(
                    error?.response
                        ?.data
                        ?.message ||
                        error?.message ||
                        "Đăng nhập thất bại."
                );
            }
        }
    );

/**
 * Logout
 */
export const logoutThunk =
    createAsyncThunk(
        "auth/logout",

        async (
            _,
            thunkAPI
        ) => {
            try {
                /**
                 * Call API logout
                 * nếu backend có route
                 */
                try {
                    await authService.logout();
                } catch {
                    /**
                     * Ignore nếu chưa có API
                     */
                }

                /**
                 * Clear localStorage
                 */
                if (
                    typeof window !==
                    "undefined"
                ) {
                    localStorage.removeItem(
                        "token"
                    );

                    localStorage.removeItem(
                        "user"
                    );
                }

                return true;
            } catch (
                error: any
            ) {
                return thunkAPI.rejectWithValue(
                    error?.response
                        ?.data
                        ?.message ||
                        error?.message ||
                        "Đăng xuất thất bại."
                );
            }
        }
    );