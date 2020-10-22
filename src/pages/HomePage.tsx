import React, { useEffect, useState } from "react"

import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, GitHubAccess, gitHubApiQuery, GitHubContent, GitHubContentResponse, GitHubTreeResponse } from "../shared"
import { SuiteLogo } from "../components/SuiteLogo"

export interface HomePageProps {
    gitHubAccess: GitHubAccess | null
}

function HomePage({ gitHubAccess }: HomePageProps) {
    const [contents, setContents] = useState<GitHubContentResponse | null>(null)
    const [currentFetch, setCurrentFetch] = useState<number>(0)

    const fetchContents = async () => {
        const contents = await gitHubApiQuery(gitHubAccess!, "https://api.github.com/repos/bruegmann/design/contents/suite-logos/icons") as GitHubContentResponse
        setContents(contents)
    }

    useEffect(() => {
        if (gitHubAccess !== null && contents === null) {
            fetchContents()
        }
    }, [gitHubAccess, contents])

    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle} />
            </Header>

            <Body containerClass="container pt-3">
                <h1 className="page-header">Organisations- und Produkt-Logos</h1>
                <div className="row">
                    {contents !== null && Array.isArray(contents) &&
                        contents.map((item: GitHubContent, key: number) =>
                            <SuiteLogo
                                gitHubAccess={gitHubAccess!}
                                key={item.sha}
                                item={item}
                                doFetch={currentFetch === key}
                                onFetched={() => setCurrentFetch(key + 1)}
                            />
                        )
                    }
                </div>
            </Body>
        </Page>
    )
}

export default HomePage