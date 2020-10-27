import React, { useEffect, useState } from "react"

import { Page, Body } from "blue-react"

import { DesignSitePageProps, gitHubApiQuery, GitHubContent, GitHubContentResponse } from "../shared"
import { SuiteLogo } from "../components/SuiteLogo"
import { Footer } from "../components/Footer"

function LogosPage({ gitHubAccess }: DesignSitePageProps) {
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
            <Body containerClass="container pt-3">
                <article>
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
                </article>

                <Footer />
            </Body>
        </Page>
    )
}

export default LogosPage