import FIREBASE from '../config/Firebase'
import { storeData } from '../utils'
import { dispatchLoading, dispatchResult, dispatchError } from "../utils"

export const SignUp_User = "SignUp_User"

export const SignIn_User = "SignIn_User"

export const SignUpUser = ( data, password ) => {

    return(dispatch) => {
        //loading
        dispatchLoading(dispatch, SignUp_User)

        FIREBASE
            .auth()
            .createUserWithEmailAndPassword(data.email, password)
            .then((success) => {
                // Ambil UID, buat newData (data+uid)
                const newData = {
                    ...data,
                    uid: success.user.uid
                }

                // Simpan ke Realtime Database Firebase
                FIREBASE
                    .database()
                    .ref('users/' + success.user.uid)
                    .set(newData);

                // Success
                dispatchResult(dispatch, SignUp_User, newData)

                // Simpan ke Local Storage (Async Storage)
                storeData('user', newData)

            })
            .catch((error) => {
                // Error
                dispatchError(dispatch, SignUp_User, error.message)
                
                alert(error.message)
            });
    }
}

export const SignInUser = (email, password) => {

    //cek sign in
    //console.log("sign in action")

    return (dispatch) => {
        //Loading
        dispatchLoading(dispatch, SignIn_User)

        //signin auth
        FIREBASE
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((success) => {
                //cek
                //console.log("sign in success : ", success)
                // signed in
                FIREBASE
                .database()
                .ref('/users/' + success.user.uid)
                .once('value')
                .then((resDB) => {
                    //cek
                    //console.log("sign in checked success : ", resDB)
                    if(resDB.val()) {
                        // Success
                        dispatchResult(dispatch, SignIn_User, resDB.val())

                        // Simpan ke Local Storage (Async Storage)
                        storeData('user', resDB.val())

                    }else {
                        //error
                        dispatch({
                            type: SignIn_User,
                            payload: {
                                loading: false,
                                data: false,
                                errorMessage: "No User Data",
                            }
                        })
                        alert("No User Data");
                    }
                })
            })
            .catch((error) => {
                //cek error
                //console.log("Error : ", error)
                //error
                dispatchError(dispatch, SignIn_User, error.message)
                
                alert(error.message);
            })
    }
}