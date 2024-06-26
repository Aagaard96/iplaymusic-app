import SpotifyProvider from "next-auth/providers/spotify";


export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token = Object.assign({}, token, {
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    expires_at: account.expires_at,
                })
            }

            // check if the token has expired
            if (token.expires_at && Date.now() > Number(token.expires_at) * 1000 - 60 * 60 * 1000) {
                console.log('Token expired. Fetching a new one...')
                const res = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: token.refresh_token,
                        client_id: process.env.SPOTIFY_CLIENT_ID,
                        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
                    }),
                })

                const data = await res.json()

                if (data.error) {
                    console.error(data.error)
                } else {
                    token = Object.assign({}, token, {
                        access_token: data.access_token,
                        expires_at: data.expires_in ? Date.now() / 1000 + data.expires_in : token.expires_at,
                    })
                }
            }

            return token
        },
        async session({ session, token }) {
            if (session) {
                session.user = Object.assign({}, session.user, {
                    token: token.access_token,
                    expires_at: token.expires_at,
                })
            }
            return session
        },
    },
}

