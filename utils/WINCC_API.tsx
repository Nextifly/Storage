import axios from 'axios'

export const WINCC_API = axios.create({
    url: process.env.NEXT_PUBLIC_API_URL,
    auth: {
        username: process.env.NEXT_PUBLIC_WINCC_LOGIN || "",
        password: process.env.NEXT_PUBLIC_WINCC_PASSWORN || ""
    },
    headers: {
        "Content-Type": "application/json"
    }
})