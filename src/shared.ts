import { Utilities } from "blue-react"

export const appLogo = require("./logo.svg")
export const appTitle = "Corporate Design"

interface IPhrases {
    [key: string]: string[]
}

export const phrases: IPhrases = {
    "bsw-cti": ["BSWCti", "BSWCti"]
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
    truncated?: boolean
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

export type GitHubContentResponse = GitHubContent[]

export interface GitHubContent {
    download_url?: string
    git_url: string
    html_url: string
    name: string
    path: string
    sha: string
    size: number
    type: string
    url: string
    _links: GitHubLink
}

export interface GitHubLink {
    git: string
    html: string
    self: string
}

export async function gitHubApiQuery(gitHubAccess: GitHubAccess, url: string): Promise<GitHubTreeResponse | GitHubContentResponse> {
    const res = await Utilities.fetchData(`${proxy}${url}`, {
        method: "GET",
        headers: {
            "Authorization": `${gitHubAccess.token_type} ${gitHubAccess.access_token}`,
            "Content-Type": "application/json"
        }
    })

    const treeResponse = await res.json()
    return treeResponse
}