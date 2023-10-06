
import { useNavStore } from '@/store/nav'
import { storeToRefs } from 'pinia'
const setActiveNav=(to,from,next,)=>{


    const navStore = useNavStore()
    const {adminNav_active} = storeToRefs(navStore)

    adminNav_active.value = to.meta.owner

    next();

  }
  export default setActiveNav