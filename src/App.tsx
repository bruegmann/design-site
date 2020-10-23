import React, { useState } from "react"
import { Grid, SidebarMenu, MenuItem } from "blue-react"
import { BadgeTm, BoxArrowLeft, CheckCircleFill, Collection, Droplet, ExclamationCircleFill, House, Images, InfoCircleFill, List, XCircleFill } from "react-bootstrap-icons"
import FontAndColorsPage from "./pages/FontAndColorsPage"
import LogosPage from "./pages/LogosPage"
import IconsPage from "./pages/IconsPage"

import "./styles/main.scss"
import { getPhrase, GitHubAccess } from "./shared"
import { SignIn } from "./pages/SignIn"
import { GitHubIcon } from "./assets/icons"

function Auth({ gitHubAccess, setGitHubAccess, TheComponent }: any) {
    if (gitHubAccess === null) {
        return <SignIn setGitHubAccess={setGitHubAccess} />
    }
    else {
        return <TheComponent gitHubAccess={gitHubAccess} />
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
                    name: "fonts-and-colors",
                    component: <Auth gitHubAccess={gitHubAccess} setGitHubAccess={setGitHubAccess} TheComponent={FontAndColorsPage} />
                },
                {
                    name: "logos",
                    component: <Auth gitHubAccess={gitHubAccess} setGitHubAccess={setGitHubAccess} TheComponent={LogosPage} />
                },
                {
                    name: "icons",
                    component: <Auth gitHubAccess={gitHubAccess} setGitHubAccess={setGitHubAccess} TheComponent={IconsPage} />
                }
            ]}
            statusIcons={{
                danger: <XCircleFill />,
                info: <InfoCircleFill />,
                success: <CheckCircleFill />,
                warning: <ExclamationCircleFill />
            }}
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

                        <a
                            href="https://bruegmann.github.io/blue-react"
                            target="_blank" rel="noopener noreferrer"
                            className="blue-app-sidebar-btn btn has-label"
                        >
                            <Collection /> <span className="blue-app-sidebar-label">Blue React</span>
                        </a>

                        {gitHubAccess !== null &&
                            <MenuItem onClick={signOut} icon={<BoxArrowLeft />} label="Sign out" />
                        }
                    </div>
                }
            >
                <MenuItem href="#/fonts-and-colors" icon={<Droplet />} label="Fonts und Farben" isHome />
                <MenuItem href="#/logos" icon={<BadgeTm />} label="Product-Logos" />
                <MenuItem href="#/icons" icon={<Images />} label="Icons" />
            </SidebarMenu>
        </Grid>
    )
}

export default App