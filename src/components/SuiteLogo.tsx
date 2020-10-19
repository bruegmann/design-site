import React, { useEffect, useState } from "react"
import { ButtonGroup } from "reactstrap"
import { GitHubAccess, gitHubApiQuery, GitHubContent, GitHubContentResponse } from "../shared"
import { SuiteLogoItem } from "./SuiteLogoItem"

export interface SuiteLogoProps {
    doFetch: boolean
    gitHubAccess: GitHubAccess
    item: GitHubContent
    onFetched: () => void
}

export function SuiteLogo({ doFetch, gitHubAccess, item, onFetched }: SuiteLogoProps) {
    const [contents, setContents] = useState<GitHubContentResponse | null>(null)
    const [svgItem, setSvgItem] = useState<GitHubContent | null>(null)

    const fetchContents = async () => {
        const contents = await gitHubApiQuery(gitHubAccess, item.url) as GitHubContentResponse
        if (contents) {
            setContents(contents)
            onFetched()

            // Get SVG
            contents.forEach(async (item: GitHubContent) => {
                if (item.name === "svg") {
                    const svgContents = await gitHubApiQuery(gitHubAccess, item.url, false) as GitHubContentResponse
                    if (svgContents[0]) {
                        const svgItem = svgContents[0]
                        setSvgItem(svgItem)
                    }
                }
            })
        }
    }

    useEffect(() => {
        // Only fetch, when current item is defined to. This way one item will loaded after the other to avoid too many API calls at a time.
        if (contents === null && doFetch === true) {
            fetchContents()
        }
    }, [contents, doFetch])

    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mb-4">
                <div className="card-body">
                    {contents !== null ?
                        <>
                            <div className="square mb-4">
                                <div className="content">
                                    <img src={svgItem?.download_url} className="rs" alt={item.name} />
                                </div>
                            </div>
                            <h5>{item.name}</h5>

                            <ButtonGroup>
                                {contents.map((item: GitHubContent) =>
                                    <SuiteLogoItem key={item.sha} gitHubAccess={gitHubAccess} item={item} />
                                )}
                            </ButtonGroup>
                        </>
                        :
                        <div className="ph-item no-border">
                            <div className="ph-col-12">
                                <div className="square mb-4">
                                    <div className="content">
                                        <div className="ph-picture rs" />
                                    </div>
                                </div>
                                <h5>{item.name}</h5>

                                <div className="ph-row">
                                    <div className="ph-col-6 big" />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}