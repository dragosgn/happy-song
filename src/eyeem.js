
const token= `gck7gaj6us00vfned6f4juagma3gfthv6entijb1`

const payload = {
    "requests":[
       {
          "tasks":[
             {
                "type":"TAGS"
             },
             {
                "type":"CAPTIONS"
             },
             {
                "type":"AESTHETIC_SCORE"
             }
          ],
          "image":{
             "url": "https://cdn.eyeem.com/thumb/f3e4327f06cd082545c053b50ec5a0704b7db22f-1408044750/5000/5000"
          }
       }
    ]
   }

const url = `https://vision-api.eyeem.com/v1/analyze`

export default async function eyeem(){

    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Authorization": `Bearer gck7gaj6us00vfned6f4juagma3gfthv6entijb1`,
            "content-type": 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
    }).then(data => data.json()).then(data => (data))

    return response
    
}