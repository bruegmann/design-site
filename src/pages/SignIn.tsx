import { Intro } from "blue-react"
import React from "react"
import { BoxArrowRight } from "react-bootstrap-icons"
import GitHubLogin from "react-github-login"
import { GitHubAccess, gitHubOauthClientId, gitHubOauthUrl } from "../shared"

export interface SignInProps {
    setGitHubAccess: (access: GitHubAccess) => void
}

export function SignIn({ setGitHubAccess }: SignInProps) {
    return (
        <Intro logo="/logo.svg" title="Please sign in to see the content">
            <div className="text-center">
                <GitHubLogin
                    clientId={gitHubOauthClientId}
                    redirectUri=""
                    onSuccess={async ({ code }: { code: string }) => {
                        console.log(code)

                        const res = await fetch(`${gitHubOauthUrl}?code=${code}`)

                        const access: GitHubAccess = await res.json()

                        setGitHubAccess(access)
                        localStorage.setItem("gitHubAccess", JSON.stringify(access))
                    }}
                    onFailure={(response: any) => console.error(response)}
                    scope={['user', 'repo']}
                    className="btn btn-primary btn-lg"
                >
                    <BoxArrowRight /> Sign in with GitHub
                </GitHubLogin>
            </div>
        </Intro>
    )
}