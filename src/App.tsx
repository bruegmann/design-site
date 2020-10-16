import React, { useState } from "react"
import { Grid, SidebarMenu, MenuItem } from "blue-react"
import { BoxArrowLeft, House, List } from "react-bootstrap-icons"
import HomePage from "./pages/HomePage"

import "./styles/main.scss"
import { getPhrase, GitHubAccess } from "./shared"
import { SignIn } from "./pages/SignIn"
import { GitHubIcon } from "./assets/icons"

function Auth({ gitHubAccess, setGitHubAccess }: any) {
    if (gitHubAccess === null) {
        return <SignIn setGitHubAccess={setGitHubAccess} />
    }
    else {
        return <HomePage gitHubAccess={gitHubAccess} />
    }
}

function App() {
    let access = null
    const fromStorage = localStorage.getItem("gitHubAccess")
    if (fromStorage) {
        access = JSON.parse(fromStorage)
    }

    const [gitHubAccess, setGitHubAccess] = useState<GitHubAccess | null>(access)

    const signOut = () => {
        localStorage.removeItem("gitHubAccess")
        setGitHubAccess(null)
    }

    return (
        <Grid
            expandSidebar
            sidebarToggleIconComponent={<List />}
            pages={[
                {
                    name: "home",
                    component: <Auth gitHubAccess={gitHubAccess} setGitHubAccess={setGitHubAccess} />
                }
            ]}
        >
            <SidebarMenu
                bottomContent={
                    <div className="fluent-btn">
                        <div className="fluent-btn-ball" />

                        <a
                            href="https://github.com/bruegmann/design"
                            target="_blank" rel="noopener noreferrer"
                            className="blue-app-sidebar-btn btn has-label"
                        >
                            <GitHubIcon /> <span className="blue-app-sidebar-label">{getPhrase("All assets on GitHub")}</span>
                        </a>

                        {gitHubAccess !== null &&
                            <MenuItem onClick={signOut} icon={<BoxArrowLeft />} label="Sign out" />
                        }
                    </div>
                }
            >
                <MenuItem href="#" icon={<House />} label="Home" isHome />
            </SidebarMenu>
        </Grid>
    )
}

export default App