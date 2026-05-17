const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000";

export const authService = {
    async login(
        email: string,
        password: string
    ) {
        const response =
            await fetch(
                `${API_URL}/api/auth`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.message ||
                "Đăng nhập thất bại."
            );
        }

        return data;
    },

    async logout() {
        const response =
            await fetch(
                `${API_URL}/api/auth`,
                {
                    method: "DELETE",
                    credentials:
                        "include",
                }
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.message
            );
        }

        return data;
    }
};