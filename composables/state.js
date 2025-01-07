// export const searchKeywordState = () => {
//     return useState(() => '')
// }

export const dMenuToggleStatus = () => {
    return useState(() => false)
}

export const sitesettingsState = () => {
    return useState(() => [])
}

export const desktopMenuState = () => {
    return useState(() => false)
}

export const mobileMenuState = () => {
    return useState(() => false)
}

export const globalPopupState = () => {
    return useState(() => false)
}

export const allCategoryState = () => {
    return useState(() => [])
}
export const specialTopContentState = () => {
    return useState(() => [])
}

export const NationalHomeContentState = () => {
    return useState(() => [])
}

export const singlePageStickyState = () => {
    return useState(() => false)
}

export const siteUrlState = () => {
    return useState(() => ({
        site_url: 'http://127.0.0.1:8000'
    }))
}
export const websiteUrlState = () => {
    return useState(() => ({
        website_url: 'http://localhost:3000'
    }))
}




