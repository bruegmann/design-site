import React, { useEffect, useState } from "react"
import GitHubLogin from "react-github-login"

import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, getPhrase as _, GitHubAccess, GitHubTree, GitHubTreeResponse, proxy } from "../shared"

export interface HomePageProps {
    gitHubAccess: GitHubAccess | null
}

function HomePage({ gitHubAccess }: HomePageProps) {
    const [tree, setTree] = useState<GitHubTreeResponse | null>(null)

    useEffect(() => {
        if (gitHubAccess !== null) {
            fetchRepo()
        }
    }, [gitHubAccess])

    const fetchRepo = async () => {
        const res = await fetch(`${proxy}https://api.github.com/repos/bruegmann/design/git/trees/master`, {
            method: "GET",
            headers: {
                "Authorization": `${gitHubAccess.token_type} ${gitHubAccess.access_token}`,
                "Content-Type": "application/json"
            }
        })

        console.log(res)

        const json = await res.json()
        console.log(json)
        setTree(json)
    }

    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>HomePage</HeaderTitle>
            </Header>

            <Body containerClass="container">
                {tree !== null &&
                    <>
                        {tree.tree.map((file: GitHubTree) =>
                            <div key={file.sha} className="card">
                                <div className="card-body">
                                    <a href={file.url} className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                        {file.path}
                                    </a>
                                </div>
                            </div>
                        )}
                    </>
                }
            </Body>
        </Page>
    )
}

export default HomePage