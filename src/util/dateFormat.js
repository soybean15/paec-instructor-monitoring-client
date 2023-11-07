import { date } from 'quasar'


const formatDate =(_date, format)=>{
    return date.formatDate(_date, format)
}

export default formatDate