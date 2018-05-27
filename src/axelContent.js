import { Base64 } from 'js-base64';

const query = 'obama'
const url = `https://sandbox-api.ipool.asideas.de/linguistics/entities?q=${query}&publisher="WELT"`

export default async function(){


    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Authorization": `Basic ${Base64.encode('user' + ':' + 'password')}`,
            "content-type": 'application/json; charset=UTF-8'
        }
    }).then(data => data.json()).then(data => console.log(data))



    return 'asdasd'
}