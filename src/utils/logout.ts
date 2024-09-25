import { deleteCookie } from 'app/services/deleteCookie';
import Cookies from 'js-cookie';

export async function logout() {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach(cookie => {
        Cookies.remove(cookie)
    })
    await deleteCookie();

    
}