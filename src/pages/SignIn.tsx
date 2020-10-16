import { Intro } from "blue-react"
import React from "react"
import { BoxArrowRight } from "react-bootstrap-icons"
import GitHubLogin from "react-github-login"
import { appLogo, appTitle, getPhrase, GitHubAccess, gitHubOauthClientId, gitHubOauthUrl } from "../shared"

export interface SignInProps {
    setGitHubAccess: (access: GitHubAccess) => void
}

export function SignIn({ setGitHubAccess }: SignInProps) {
    return (
        <Intro logo={appLogo} title={appTitle}>
            <div className="text-center">
                <p className="lead">{getPhrase("Please sign in to see the content")}</p>

                <GitHubLogin
                    clientId={gitHubOauthClientId}
                    redirectUri=""
                    onSuccess={async ({ code }: { code: string }) => {
                        const res = await fetch(`${gitHubOauthUrl}?code=${code}`)
                        const access: GitHubAccess = await res.json()

                        setGitHubAccess(access)
                        localStorage.setItem("gitHubAccess", JSON.stringify(access))
                    }}
                    onFailure={(response: any) => console.error(response)}
                    scope={['user', 'repo']}
                    className="btn btn-primary btn-lg d-inline-flex align-items-center"
                >
                    <BoxArrowRight className="mr-1" /> Sign in with GitHub
                </GitHubLogin>
            </div>
        </Intro>
    )
}