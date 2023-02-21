import Cookies from "js-cookie";

export const getAuthTokenFromCookies = (): string | undefined => {
    const token = Cookies.get("authToken");
    return token ? token : undefined;
};

export const setAuthTokenToCookies = (token: string): void => {
    Cookies.set("authToken", token, { expires: 1 });
};

export const deleteAuthTokenFromCookies = (): void => {
    Cookies.remove("authToken");
}
