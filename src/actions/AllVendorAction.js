import FIREBASE from '../config/Firebase'
import { dispatchLoading, dispatchResult, dispatchError } from "../utils"

export const Get_All_Vendor = "Get_All_Vendor";
export const Get_All_Vendor_By_Vendor = "Get_All_Vendor_By_Vendor";
export const Delete_Parameter_All_Vendor = "Delete_Parameter_All_Vendor";
export const Save_Keyword_All_Vendor = "Save_Keyword_All_Vendor";

export const getAllVendor = (idVendor, keyword) => {
    return(dispatch) => {
        dispatchLoading(dispatch, Get_All_Vendor)
        //console.log("masuk kesini ? : ", idVendor) sudah
        if(idVendor) {
            //console.log("ID vendor di action : ", idVendor)

            FIREBASE
            .database()
            .ref('vendors')
            .orderByChild('vendor')
            .equalTo(idVendor)
            .once('value', (querySnapshot) => {
                //hasil
                let data = querySnapshot.val()
                // ? querySnapshot.val() : []
                let dataItem = {...data}
                //console.log("Data : ", data)
                //console.log("Data Item getAllVendor : ", dataItem)
                // tetap pake dataItem jo eh tau le ttp jadi kote
                dispatchResult(dispatch, Get_All_Vendor, dataItem)
            })
            .catch((error) => {
                dispatchError(dispatch, Get_All_Vendor, error)
                alert(error)
            })
        } else if (keyword) {
            FIREBASE
            .database()
            .ref('vendors')
            .orderByChild('name')
            .equalTo(keyword)
            .once('value', (querySnapshot) => {
                //hasil
                let data = querySnapshot.val()
                // ? querySnapshot.val() : []
                let dataItem = {...data}
                //console.log("Data : ", data)
                //console.log("Data Item getAllVendor : ", dataItem)
                // tetap pake dataItem jo eh tau le ttp jadi kote
                dispatchResult(dispatch, Get_All_Vendor, dataItem)
            })
            .catch((error) => {
                dispatchError(dispatch, Get_All_Vendor, error)
                alert(error)
            })
        }
        else {
            FIREBASE
            .database()
            .ref('vendors')
            .once('value', (querySnapshot) => {
                //hasil
                let data = querySnapshot.val()
                let dataItem = {...data}
                //console.log("Dataaaa : ", data)
                //console.log("Data Item : ", dataItem)
                // tetap pake dataItem jo eh tau le ttp jadi kote
                dispatchResult(dispatch, Get_All_Vendor, dataItem)
            })
            .catch((error) => {
                dispatchError(dispatch, Get_All_Vendor, error)
                alert(error)
            })
        }

        
    }
}

export const getAllVendorByVendor = (id, name) => ({
    type: Get_All_Vendor_By_Vendor,
    payload: {
        idVendor: id,
        name: name,
    }
})

export const deleteParameterAllVendor = () => ({
    type: Delete_Parameter_All_Vendor,
})

export const saveKeywordAllVendor = (search) => ({
    type: Save_Keyword_All_Vendor,
    payload: {
        data: search
    }
})
