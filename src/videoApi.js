const authToken =process.env.REACT_APP_VIMEO_AUTH

const searchUrl = query => `
    https://api.vimeo.com/videos?access_token=${authToken}&direction=desc&filter=CC&per_page=10&page=1&query=${query}&sort=relevant`


export default async function searchVideo(query){

    const response = await fetch( searchUrl(query), {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": 'application/json; charset=UTF-8'
        }
    }).then(data => data.json()).then(data => data)

    console.log(response)
    const linkList = response.data
                                .filter(({duration}) => duration > 10 && duration < 120)
                                .filter(({duration}) => duration > 10 && duration < 120)  
                                .map(d => {console.log(d); return d})                              
                                .map(d => ({
             __html: d.embed.html
    }))
    console.log(linkList, "link list")
    return linkList
}