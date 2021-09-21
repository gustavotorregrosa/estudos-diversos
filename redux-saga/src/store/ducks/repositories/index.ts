import { Reducer } from "redux"
import { RepositoriesState, RepositoriesTypes, Repository } from "./types"

const INITIAL_STATE: RepositoriesState = {
    data: [
        {
            id: 1,
            name: 'gustavo'
        }
    ],
    error: false,
    loading: false,
} 

const reducer: Reducer<RepositoriesState> = (state: RepositoriesState = INITIAL_STATE   , action) => {
    switch(action.type){
        case RepositoriesTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RepositoriesTypes.LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                error: false,
                loading: false
            }

        case RepositoriesTypes.LOAD_FAILURE:
            return {
                ...state,
                data: [],
                error: true,
                loading: false
            }
        default:
            return state
    }
}

export default reducer