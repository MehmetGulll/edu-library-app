import {fetchAndSaveData} from '../../utils/apolloClient'
setInterval(fetchAndSaveData,60*60*1000)