import { Intro } from "blue-react"
import React from "react"
import { BoxArrowRight } from "react-bootstrap-icons"
import GitHubLogin from "react-github-login"
import { GitHubAccess, proxy } from "../shared"

export interface SignInProps {
    setGitHubAccess: (access: GitHubAccess) => void
}

export function SignIn({ setGitHubAccess }: SignInProps) {
    return (
        <Intro logo="/logo.svg" title="Please sign in to see the content">
            <div className="text-center">
                <GitHubLogin
                    clientId="d64aa2c0928af6b72a90"
                    redirectUri=""
                    onSuccess={async ({ code }: { code: string }) => {
                        console.log(code)

                        // const res = await fetch(`${proxy}https://github.com/login/oauth/access_token`, {
                        //     method: "POST",
                        //     headers: {
                        //         "Accept": "application/json",
                        //         "Content-Type": "application/json"
                        //     },
                        //     body: JSON.stringify({
                        //         client_id: process.env.OAUTH_CLIENT_ID || "d64aa2c0928af6b72a90",
                        //         client_secret: process.env.OAUTH_CLIENT_SECRET || "adacdf77487f40bafae58263b8e398b39c9480c4",
                        //         code
                        //     })
                        // })

                        const res = await fetch(`http://localhost:5000?code=${code}`)

                        console.log(res)

                        const json = await res.json()
                        console.log(json)

                        return

                        const access: GitHubAccess = await res.json()

                        setGitHubAccess(access)
                        localStorage.setItem("gitHubAccess", JSON.stringify(access))
                    }}
                    onFailure={(response: any) => console.error(response)}
                    scope={['user', 'repo']}
                    className="btn btn-primary btn-lg"
                >
                    <BoxArrowRight /> Sign in with GitHub, yo!
                </GitHubLogin>
            </div>
        </Intro>
    )
}