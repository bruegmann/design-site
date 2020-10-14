export const appLogo = require("./logo.svg")
export const appTitle = "Corporate Design"

interface IPhrases {
    [key: string]: string[]
}

export const phrases: IPhrases = {
    "HELLO_WORLD": ["Hello World!", "Hallo Welt!"]
}

export function getPhrase(keyword: string, countryCode: string | undefined = undefined, _phrases: IPhrases | undefined = undefined) {
    countryCode = countryCode || (navigator.language).toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US"
    _phrases = _phrases || phrases

    if (_phrases[keyword]) {
        if (countryCode.indexOf("de-") > -1) {
            return _phrases[keyword][1]
        }
        else {
            return _phrases[keyword][0]
        }
    }
    else {
        return keyword
    }
}

export const proxy = "https://thingproxy.freeboard.io/fetch/"
// export const proxy = "http://localhost:4000/fetch/"

export interface GitHubAccess {
    access_token: string
    token_type: string
    scope: string
}

export interface GitHubTreeResponse {
    sha: string
    url: string
    tree: GitHubTree[]
}

export interface GitHubTree {
    path: string
    mode: string
    type: string
    sha: string
    size: number
    url: string
}