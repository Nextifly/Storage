import axios from 'axios'
import https from 'https'

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export const WINCC_API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    httpAgent: agent,
    auth: {
        username: process.env.NEXT_PUBLIC_WINCC_LOGIN || "",
        password: process.env.NEXT_PUBLIC_WINCC_PASSWORN || ""
    },
    headers: {
        "Content-Type": "application/json"
    }
})