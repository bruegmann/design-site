import { Body, FluentBtn, Header, HeaderTitle, Page, Search, Switch } from "blue-react"
import React, { useState } from "react"
import { Bootstrap, Code } from "react-bootstrap-icons"
import { appLogo, appTitle, BlueiconKeywordsItem } from "../shared"
import keywords from "../data/blueicon-keywords.json"
import Icon from "../components/Icon"
import { Footer } from "../components/Footer"

function IconsPage() {
    const [itemsToShow, setItemsToShow] = useState<number>(40)
    const [blueIconColoredOn, setBlueIconColoredOn] = useState<boolean>(false)
    const toggleBlueIconColoredOn = () => setBlueIconColoredOn(!blueIconColoredOn)
    const [biCclass, setBiCclass] = useState<string>("")
    const [biAclass, setBiAclass] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    const showAllItems = () => {
        setItemsToShow(keywords.length)
    }

    const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if (target.value !== "") {
            showAllItems()
        }

        setSearch(target.value)
    }

    const showPathToOCollectionInternal = () => {
        prompt("Dafür einmal diese URL im Browser aufrufen:", "file:///Q:/VBRest.NET/Icons%20%28gekaufte%29/o_collection/search.html")
    }

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
                        bequem in Web-Anwendungen eingebunden werden.<br />
                        Die O-Collection darf nicht sublizensiert werden, deswegen wird sie nicht in Open Source-Projekten von uns verwendet.
                    </p>

                    <div className="row mb-3 align-items-center">
                        <div className="col">
                            <Search
                                body
                                reset
                                autoFocus
                                placeholder="Icons durchsuchen..."
                                value={search}
                                onChange={onSearchChange}
                            />
                        </div>

                        <div className="col">
                            <label className="d-inline-flex align-items-center mb-0">
                                <Switch checked={blueIconColoredOn} onChange={toggleBlueIconColoredOn} className="mr-1 mb-0" /> {"Mehrfarbige Icons"}
                            </label>
                        </div>

                        <div className="col">
                            <FluentBtn className="btn btn-outline-secondary btn-block" onClick={showPathToOCollectionInternal}>
                                {"Als PNG/SVG/XAML"}
                            </FluentBtn>
                        </div>
                    </div>

                    <div className="row">
                        {keywords.map((icon: BlueiconKeywordsItem, i: number) =>
                            (
                                (icon.iconName.includes(search)) || (icon.keywords.join(",").includes(search))
                            ) &&
                            (i <= itemsToShow) &&
                            <div key={i} className="col-md-6 mb-4">
                                <Icon
                                    icon={icon}
                                    blueIconColoredOn={blueIconColoredOn}
                                    biCclass={biCclass}
                                    biAclass={biAclass}
                                />
                            </div>
                        )}
                    </div>

                    {itemsToShow < keywords.length &&
                        <FluentBtn className="btn btn-secondary btn-block" onClick={showAllItems}>
                            {"Alle anzeigen"}
                        </FluentBtn>
                    }
                </article>

                <Footer />
            </Body>
        </Page>
    )
}

export default IconsPage