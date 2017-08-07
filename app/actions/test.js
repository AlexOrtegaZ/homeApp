import { TEST_REQUEST } from '../constants'
import { doFireTest  } from '../config/firebase'

export const testFirebaseRequest = () => {
    
    var test = {
        comment: "Hello world",
        createDate: new Date().getTime()
    }
    doFireTest(test)

    return {
        type: TEST_REQUEST
    }
}