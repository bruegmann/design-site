import React, { useEffect, useState } from "react"
import { ButtonDropdown, DropdownMenu, DropdownToggle } from "reactstrap"
import { GitHubAccess, gitHubApiQuery, GitHubContent, GitHubContentResponse } from "../shared"

export interface SuiteLogoItemProps {
    gitHubAccess: GitHubAccess
    item: GitHubContent
}

export function SuiteLogoItem({ gitHubAccess, item }: SuiteLogoItemProps) {
    const [files, setFiles] = useState<GitHubContentResponse | null>(null)
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const toggleDropdownOpen = () => setDropdownOpen(!dropdownOpen)

    const fetchFiles = async () => {
        let files = await gitHubApiQuery(gitHubAccess, item.url, false) as GitHubContentResponse
        files = files.sort((a: GitHubContent, b: GitHubContent) => {
            const aNumber = parseInt(a.name)
            const bNumber = parseInt(b.name)

            if (aNumber < bNumber) {
                return -1
            }
            if (aNumber > bNumber) {
                return 1
            }

            return 0
        })
        setFiles(files)
    }

    useEffect(() => {
        if (dropdownOpen === true && files === null) {
            fetchFiles()
        }
    }, [dropdownOpen])

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdownOpen}>
            <DropdownToggle caret>
                {item.name}
            </DropdownToggle>
            <DropdownMenu>
                {files !== null &&
                    files.map((file: GitHubContent) =>
                        <a key={file.sha} className="dropdown-item" href={file.download_url} target="_blank" rel="noopener noreferrer">
                            {file.name}
                        </a>
                    )
                }
            </DropdownMenu>
        </ButtonDropdown>
    )
    // }
}