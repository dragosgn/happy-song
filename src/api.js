const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
console.log(apiKey, "key")
const urls = {
    entities: `https://language.googleapis.com/v1/documents:analyzeEntities?key=${apiKey}`
}

export const analyzeEntities = async function (content, analysisType) {

    const payload = {
        document: {
            content,
            type: "PLAIN_TEXT"
        }
    }
    const response = await fetch(urls[analysisType], {
        method: "POST",
        headers: {
            "content-type": 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
    }).then(data => data.json()).then(data => data)

    return response
}


export default {analyzeEntities}

