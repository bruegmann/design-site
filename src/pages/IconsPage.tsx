import { Body, Header, HeaderTitle, Page } from "blue-react"
import React from "react"
import { Bootstrap, Code } from "react-bootstrap-icons"
import { appLogo, appTitle } from "../shared"

function IconsPage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle} />
            </Header>

            <Body containerClass="container pt-3">
                <article>
                    <h1 className="page-header">Bootstrap Icons</h1>
                    <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer"><Bootstrap /> Übersicht aller Icons</a><br />
                    <a href="https://www.npmjs.com/package/react-bootstrap-icons" target="_blank" rel="noopener noreferrer"><Code /> Icons als React Komponenten</a>
                </article>

                <article>
                    <h1 className="page-header">O-Collection</h1>
                    <p>
                        Von uns erworbene Icon-Collection von INCORS. Kann mit unserer Library{" "}
                        <a href="https://github.com/bruegmann/blueicon" target="_blank" rel="noopener noreferrer">blueicon</a>, bzw.{" "}
                        <a href="https://github.com/bruegmann/blueicon-colored" target="_blank" rel="noopener noreferrer">blueicon-colored</a>{" "}
                        bequem in Web-Anwendungen eingebunden werden.
                    </p>
                </article>
            </Body>
        </Page>
    )
}

export default IconsPage