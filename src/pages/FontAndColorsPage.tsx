import React from "react"
import { Page, Header, HeaderTitle, Body, FluentBtn, Utilities } from "blue-react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { appLogo, appTitle, DesignSitePageProps } from "../shared"
import { Footer } from "../components/Footer"

function FontAndColorsPage({ gitHubAccess }: DesignSitePageProps) {
    const colors = {
        "normal": "2980B9",
        "heller": "3498DB",
        "dunkler": "096EB0",
        "sehr dunkel": "07507F",
    }

    const whenCopied = (copiedText: string) => {
        Utilities.setAlertMessage(`"${copiedText}" erfolgreich kopiert`, "success", true)
        setTimeout(() => {
            Utilities.resetAlertMessage("success")
        }, 2000)
    }

    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle} />
            </Header>

            <Body containerClass="container pt-3">
                <article>
                    <h1 className="page-header">Primärfarben</h1>

                    <div className="row">
                        {Object.keys(colors).map((colorWeight: string) => {
                            const colorCode = colors[colorWeight]
                            return (
                                <div key={colorWeight} className="col">
                                    <CopyToClipboard text={`#${colorCode}`} onCopy={whenCopied}>
                                        <FluentBtn
                                            className="btn btn-block"
                                            style={{ backgroundColor: `#${colorCode}`, height: "4rem" }}
                                            title="Klicken, um Code zu kopieren"
                                        />
                                    </CopyToClipboard>

                                    <p className="lead">
                                        {`#${colorCode}`}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </article>

                <article>
                    <h1 className="page-header">Work Sans</h1>
                    <p>
                        Die Work Sans wird u.a. auf unserer Website <a href="https://patorg.de" target="_blank" rel="noopener noreferrer">patorg.de</a> und auch in dieser Dokumentation verwendet.{" "}
                        Die Schriftarten wurden designt von Wei Huang und stehen unter <a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL" target="_blank" rel="noopener noreferrer">Open Font License</a>.
                    </p>
                    <p>
                        <a href="https://fonts.google.com/specimen/Work+Sans" target="_blank" rel="noopener noreferrer">Work Sans bei Google Fonts</a>
                    </p>
                </article>

                <article>
                    <h1 className="page-header">Schriftarten in Produkten</h1>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="thumbnail">
                                <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fc246ff9-d8cd-4f51-9836-ce2528cdc5f0/01-modern-system-fonts.png" style={{ cursor: "zoom-in" }}>
                                    <img src={require("../assets/01-modern-system-fonts-preview.png")} alt="Für jedes System die richtige Schriftart" />
                                </a>
                                <div className="caption">
                                    Quelle: <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/">Smashing Magazine</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <p>
                                Statt eine eigene Schriftart zu verwenden, wird in Produkten von uns auf die jeweilige System-Font zurückgegriffen. Bei Windows ist das
                                z.B. "Segoe UI", bei Mac OS "San Francisco" und bei Android "Roboto".
                        </p>
                            <p>
                                Bei klassischen Windows-Anwendungen ist "Segoe UI" bereits die Standard-Font.<br />
                                    Für Web-Anwendungen kann die System-Font mithilfe dieses CSS-Snippets festgelegt werden:
                        </p>

                            <pre>{`body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`}</pre>
                        </div>
                    </div>
                </article>

                <Footer />
            </Body>
        </Page>
    )
}

export default FontAndColorsPage