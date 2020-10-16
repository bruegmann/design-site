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

    useEffect(() => {
        if (dropdownOpen === true && files === null) {
            fetchFiles()
        }
    }, [dropdownOpen])

    const fetchFiles = async () => {
        const files = await gitHubApiQuery(gitHubAccess, item.url, false) as GitHubContentResponse
        setFiles(files)
    }

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