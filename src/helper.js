export const getAccessibilityLocalStorage = (key) => {
    let value = localStorage.getItem(key) // Get the JSON string stored with provided key in localStorage
    const defaultData = [
        { id: 0, title: 'font-size', value: 100 },
        { id: 1, title: 'letter-spacing', value: 1 },
        { id: 2, title: 'line-height', value: 100 },
        { id: 3, title: 'word-spacing', value: 1 },
    ]
    let accItems = null
    try {
        if (value === undefined || value === null) {
            // If the value is undefined or null, set the value to the default value
            accItems = defaultData
        } else {
            const parsedJSON = JSON.parse(value)

            accItems = parsedJSON
        }
    } catch (e) {
        accItems = defaultData
    }
    return accItems
}
export const saveAccessibilityLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}

export const setReadableStyle = (property, value) => {
    const unit =
        property === 'font-size' || property === 'line-height' ? '%' : 'px'
    const css =
        'hn-acc.hn-style { ' + property + ':' + value + unit + ' !important }'
    const body = document.body || document.getElementsByTagName('body')[0]
    let style = document.getElementById('hn-acc-style')
    if (!style) {
        style = document.createElement('style')
        style.id = 'hn-acc-style'
        style.type = 'text/css'
        body.appendChild(style)
    }
    style.innerHTML = ''
    style.appendChild(document.createTextNode(css))
}
