// import {
//     createSlice,
//     PayloadAction,
// } from "@reduxjs/toolkit";

// import {
//     AuthState,
//     User,
// } from "./auth.type";

// import { loginThunk }
// from "./auth.thunk";

// const initialState:
// AuthState = {
//     user:
//         typeof window !==
//             "undefined"
//             ? JSON.parse(
//                 localStorage.getItem(
//                     "user"
//                 ) || "null"
//             )
//             : null,

//     token:
//         typeof window !==
//             "undefined"
//             ? localStorage.getItem(
//                 "token"
//             )
//             : null,

//     loading: false,

//     isAuthenticated:
//         typeof window !==
//             "undefined"
//             ? !!localStorage.getItem(
//                 "token"
//             )
//             : false,

//     error: null,
// };

// const authSlice =
//     createSlice({
//         name: "auth",

//         initialState,

//         reducers: {
//             logout(state) {
//                 state.user = null;
//                 state.token = null;
//                 state.isAuthenticated =
//                     false;

//                 localStorage.removeItem(
//                     "token"
//                 );

//                 localStorage.removeItem(
//                     "user"
//                 );
//             },

//             setUser(
//                 state,
//                 action:
//                     PayloadAction<User>
//             ) {
//                 state.user =
//                     action.payload;
//             },
//         },

//         extraReducers: (
//             builder
//         ) => {
//             builder

//                 .addCase(
//                     loginThunk.pending,
//                     (state) => {
//                         state.loading =
//                             true;

//                         state.error =
//                             null;
//                     }
//                 )

//                 .addCase(
//                     loginThunk.fulfilled,
//                     (
//                         state,
//                         action
//                     ) => {
//                         state.loading =
//                             false;

//                         state.user =
//                             action.payload
//                                 .data;

//                         state.token =
//                             action.payload
//                                 .token;

//                         state.isAuthenticated =
//                             true;
//                     }
//                 )

//                 .addCase(
//                     loginThunk.rejected,
//                     (
//                         state,
//                         action
//                     ) => {
//                         state.loading =
//                             false;

//                         state.error =
//                             action.payload as string;
//                     }
//                 );
//         },
//     });

// export const {
//     logout,
//     setUser,
// } = authSlice.actions;

// export default authSlice.reducer;


import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import {
    AuthState,
    User,
} from "./auth.type";

import {
    loginThunk,
    logoutThunk,
} from "./auth.thunk";

/**
 * Safe localStorage getter
 */
const getStoredUser =
    (): User | null => {
        if (
            typeof window ===
            "undefined"
        ) {
            return null;
        }

        const user =
            localStorage.getItem(
                "user"
            );

        return user
            ? JSON.parse(user)
            : null;
    };

const getStoredToken =
    (): string | null => {
        if (
            typeof window ===
            "undefined"
        ) {
            return null;
        }

        return localStorage.getItem(
            "token"
        );
    };

/**
 * Initial state
 */
const initialState:
    AuthState = {
    user:
        getStoredUser(),

    token:
        getStoredToken(),

    loading: false,

    isAuthenticated:
        !!getStoredUser(),

    error: null,
};

const authSlice =
    createSlice({
        name: "auth",

        initialState,

        reducers: {
            /**
             * Set user manually
             */
            setUser(
                state,
                action:
                    PayloadAction<User | null>
            ) {
                state.user =
                    action.payload;

                state.isAuthenticated =
                    !!action.payload;

                if (
                    typeof window !==
                    "undefined"
                ) {
                    if (
                        action.payload
                    ) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(
                                action.payload
                            )
                        );
                    } else {
                        localStorage.removeItem(
                            "user"
                        );
                    }
                }
            },

            /**
             * Logout local
             */
            logout(
                state
            ) {
                state.user =
                    null;

                state.token =
                    null;

                state.isAuthenticated =
                    false;

                state.error =
                    null;

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
            },
        },

        extraReducers: (
            builder
        ) => {
            builder

                /**
                 * LOGIN
                 */
                .addCase(
                    loginThunk.pending,
                    (
                        state
                    ) => {
                        state.loading =
                            true;

                        state.error =
                            null;
                    }
                )

                .addCase(
                    loginThunk.fulfilled,
                    (
                        state,
                        action
                    ) => {
                        state.loading =
                            false;

                        state.user =
                            action.payload
                                .data ??
                            null;

                        state.token =
                            action.payload
                                .token ??
                            null;

                        state.isAuthenticated =
                            true;

                        state.error =
                            null;

                        /**
                         * Save localStorage
                         */
                        if (
                            typeof window !==
                            "undefined"
                        ) {
                            localStorage.setItem(
                                "user",
                                JSON.stringify(
                                    action
                                        .payload
                                        .data
                                )
                            );

                            if (
                                action
                                    .payload
                                    .token
                            ) {
                                localStorage.setItem(
                                    "token",
                                    action
                                        .payload
                                        .token
                                );
                            }
                        }
                    }
                )

                .addCase(
                    loginThunk.rejected,
                    (
                        state,
                        action
                    ) => {
                        state.loading =
                            false;

                        state.user =
                            null;

                        state.token =
                            null;

                        state.isAuthenticated =
                            false;

                        state.error =
                            action.payload as string;
                    }
                )

                /**
                 * LOGOUT
                 */
                .addCase(
                    logoutThunk.fulfilled,
                    (
                        state
                    ) => {
                        state.user =
                            null;

                        state.token =
                            null;

                        state.isAuthenticated =
                            false;

                        state.error =
                            null;

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
                    }
                );
        },
    });

export const {
    logout,
    setUser,
} =
    authSlice.actions;

export default
    authSlice.reducer;