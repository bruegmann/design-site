import React from "react"
import { getPhrase } from "../shared"

export function Footer() {
    return (
        <div className="mt-5">
            <small>
                &copy; {new Date().getFullYear()} Brügmann Software GmbH | <a href="https://patorg.de/de/datenschutzerklaerung-2/" target="_blank" rel="noopener noreferrer">{getPhrase("Privacy policy")}</a> | <a href="https://patorg.de/de/impressum/">{getPhrase("Imprint")}</a>
            </small>
        </div>
    )
}