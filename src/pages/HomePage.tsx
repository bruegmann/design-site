import React, { useEffect, useState } from "react"

import { Page, Header, HeaderTitle, Body, Utilities } from "blue-react"

import { appLogo, appTitle, getPhrase as _, GitHubAccess, gitHubApiQuery, GitHubContent, GitHubContentResponse, GitHubTree, GitHubTreeResponse, proxy } from "../shared"
import { SuiteLogo } from "../components/SuiteLogo"

export interface HomePageProps {
    gitHubAccess: GitHubAccess | null
}

function HomePage({ gitHubAccess }: HomePageProps) {
    const [contents, setContents] = useState<GitHubContentResponse | null>(null)

    useEffect(() => {
        if (gitHubAccess !== null && contents === null) {
            fetchContents()
        }
    }, [gitHubAccess, contents])

    const fetchContents = async (tree?: GitHubTreeResponse) => {
        const contents = await gitHubApiQuery(gitHubAccess!, "https://api.github.com/repos/bruegmann/design/contents/suite-logos/icons") as GitHubContentResponse
        setContents(contents)
    }

    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle} />
            </Header>

            <Body containerClass="container pt-3">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="page-header">Suite Logos</h1>
                        <div className="row">
                            {contents !== null &&
                                contents.map((item: GitHubContent) =>
                                    <SuiteLogo gitHubAccess={gitHubAccess!} key={item.sha} item={item} />
                                )
                            }
                        </div>
                    </div>

                </div>
            </Body>
        </Page>
    )
}

export default HomePage