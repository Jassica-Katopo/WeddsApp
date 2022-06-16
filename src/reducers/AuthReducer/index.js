import { SignUp_User, SignIn_User } from "../../actions/AuthAction";

const initialState = {
    signUpLoading: false,
    signUpResult: false,
    signUpError: false,

    signInLoading: false,
    signInResult: false,
    signInError: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SignUp_User:
            return {
                ...state,
                signUpLoading: action.payload.loading,
                signUpResult: action.payload.data,
                signUpError: action.payload.errorMessage,
            };

        case SignIn_User:
            return {
                ...state,
                signInLoading: action.payload.loading,
                signInResult: action.payload.data,
                signInError: action.payload.errorMessage,
            };

        default:
            return state;
    }
}