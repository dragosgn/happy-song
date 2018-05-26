import _ from 'lodash'



const processEntities = ({entities}) => {
    console.log(entities)
    const typeList = _.groupBy(entities, "type")
    console.log(typeList)

    return typeList
}



export default {
    processEntities
}