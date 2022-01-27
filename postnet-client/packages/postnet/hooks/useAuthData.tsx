import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

type UserData = {
    name: string,
    email: string,
    admin: boolean,
    accessToken: string
}

const useAuthData = (): [
    name: string,
    email: string,
    admin: boolean,
    loginUser: (userData: UserData) => void,
    logoutUser: () => void
] => {

    const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'email', 'name', 'admin']);
    const cookieScope: CookieSetOptions = { path: '/'};

    const loginUser = useCallback((userData: UserData) => {
        setCookie("accessToken", userData.accessToken, cookieScope);
        setCookie("email", userData.email, cookieScope)
        setCookie("name", userData.name, cookieScope);
        setCookie("admin", userData.admin, cookieScope);
    }, []);

    const logoutUser = useCallback(() => {
        removeCookie("accessToken", cookieScope);
        removeCookie("email", cookieScope);
        removeCookie("name", cookieScope);
        removeCookie("admin", cookieScope);

    }, []);



    return [cookies.name, cookies.email, (cookies.admin === 'true'), loginUser, logoutUser];
}

export default useAuthData;