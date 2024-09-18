"use server"
import { cookies } from 'next/headers';

export async function createCookies(accessToken: string) {
    const cookiesApp = cookies();

    cookiesApp.set("accessToken", accessToken, {
        path: "/",
        httpOnly: true,
        sameSite: "strict"
    })
}