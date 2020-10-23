import { Intro, Utilities } from "blue-react"
import React from "react"
import { BoxArrowRight } from "react-bootstrap-icons"
import GitHubLogin from "react-github-login"
import { Footer } from "../components/Footer"
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
                    onFailure={(response: any) => {
                        console.error(response)
                        Utilities.setAlertMessage(response.toString(), "danger", true)
                    }}
                    scope={['user', 'repo']}
                    className="btn btn-primary btn-lg d-inline-flex align-items-center"
                >
                    <BoxArrowRight className="mr-1" /> Sign in with GitHub
                </GitHubLogin>

                <div className="mt-3">
                    <a href="http://ijbwiki.patorg.org/index.php/GitHub" target="_blank" rel="noopener noreferrer">
                        {getPhrase("Get access to GitHub")}
                    </a>
                </div>
                <Footer />
            </div>
        </Intro>
    )
}