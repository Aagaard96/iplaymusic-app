// useSpotifyAuth.js

import { useState, useEffect } from "react"

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET

export default function useSpotifyAuth() {
    const [accessToken, setAccessToken] = useState("")

    useEffect(() => {
        const authParameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        }

        fetch("https://accounts.spotify.com/api/token", authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    return accessToken
}
