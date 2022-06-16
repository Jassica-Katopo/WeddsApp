import { Update_Profile } from "../../actions/ProfileAction";

const initialState = {
    updateProfileLoading: false,
    updateProfileResult: false,
    updateProfileError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Update_Profile:
            return {
                ...state,
                updateProfileLoading: action.payload.loading,
                updateProfileResult: action.payload.data,
                updateProfileError: action.payload.errorMessage,
            }
        default:
            return state
    }
}