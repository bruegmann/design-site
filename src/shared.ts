import { Utilities } from "blue-react"

export const appLogo = require("./assets/logo.svg")
export const appTitle = "Corporate Design"

interface IPhrases {
    [key: string]: string[]
}

export const phrases: IPhrases = {
    "All assets on GitHub": ["All assets on GitHub", "Alle Assets auf GitHub"],
    "Please sign in to see the content": ["Please sign in to see the content", "Bitte anmelden, um die Inhalte sehen zu können"],
    "Get access to GitHub": ["Get access to GitHub", "Zugang zu GitHub bekommen"],
    "Privacy policy": ["Privacy policy", "Datenschutzerklärung"],
    "Imprint": ["Imprint", "Impressum"],
    "Sign in with GitHub": ["Sign in with GitHub", "Anmelden mit GitHub"]
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

export const gitHubOauthUrl = "http://localhost:4000/login/oauth/access_token"
export const proxy = "http://localhost:4000/fetch/"

// In production (bruegmann.github.io) we need another client ID then in development (localhost:3000)
export const gitHubOauthClientId = (!process.env.NODE_ENV || process.env.NODE_ENV === "development") ? "d64aa2c0928af6b72a90" : "0e88710af11826fb210a"

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

export async function gitHubApiQuery(gitHubAccess: GitHubAccess, url: string, caching: boolean = true): Promise<GitHubTreeResponse | GitHubContentResponse> {
    let headers = {
        "Authorization": `${gitHubAccess.token_type} ${gitHubAccess.access_token}`,
        "Content-Type": "application/json",
        "cache-control": "no-cache"
    }

    if (caching === false) {
        headers["cache-control"] = "no-cache"
    }

    const res = await Utilities.fetchData(`${proxy}${url}`, {
        method: "GET",
        headers
    })

    const treeResponse = await res.json()
    return treeResponse
}