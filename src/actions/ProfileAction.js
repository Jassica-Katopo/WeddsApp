import FIREBASE from "../config/Firebase"
import { storeData } from "../utils"
import { dispatchLoading, dispatchResult, dispatchError } from "../utils"

export const Update_Profile = "Update_Profile"

export const updateProfile = (data) => {
    return (dispatch) => {
        //Loading
        dispatchLoading(dispatch, Update_Profile)

        const newDataProfile = {
            uid: data.uid,
            name: data.name,
            whatsapp: data.whatsapp,
            address: data.address,
            status: 'user',
            avatar: data.updateAvatar ? data.avatarForDB : data.oldAvatar,
        }

        //masuk ke update firebase
        FIREBASE
            .database()
            .ref('users/'+newDataProfile.uid)
            .update(newDataProfile)
            .then((response) => {
                //success
                dispatchResult(dispatch, Update_Profile, response ? response : [])

                //local storage (async storage)
                storeData('user', newDataProfile)
            })
            .catch((error) => {
                //error
                dispatchError(dispatch, Update_Profile, error.message)

                alert(error.message)
            })
    }
}