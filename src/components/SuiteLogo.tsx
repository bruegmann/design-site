import React, { useEffect, useState } from "react"
import { ButtonGroup } from "reactstrap"
import { getPhrase, GitHubAccess, gitHubApiQuery, GitHubContent, GitHubContentResponse } from "../shared"
import { SuiteLogoItem } from "./SuiteLogoItem"

export interface SuiteLogoProps {
    gitHubAccess: GitHubAccess
    item: GitHubContent
}

export function SuiteLogo({ gitHubAccess, item }: SuiteLogoProps) {
    const [contents, setContents] = useState<GitHubContentResponse | null>(null)
    const [svgItem, setSvgItem] = useState<GitHubContent | null>(null)

    const fetchContents = async () => {
        const contents = await gitHubApiQuery(gitHubAccess, item.url) as GitHubContentResponse
        if (contents) {
            setContents(contents)

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
        if (contents === null) {
            fetchContents()
        }
    }, [contents])

    return (
        <div className="col-md-6">
            <div className="card mb-4">
                <div className="card-body">
                    <img src={svgItem?.download_url} className="mb-4" alt={item.name} />
                    <h5>{item.name}</h5>

                    {contents !== null &&
                        <ButtonGroup>
                            {contents.map((item: GitHubContent) =>
                                <SuiteLogoItem key={item.sha} gitHubAccess={gitHubAccess} item={item} />
                            )}
                        </ButtonGroup>
                    }
                </div>
            </div>
        </div>
    )
}