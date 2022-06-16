import FIREBASE from '../config/Firebase'
import { dispatchLoading, dispatchResult, dispatchError } from "../utils"

export const Get_Vendor = "Get_Vendor";
//nda mo tambah get detail  vendor / dp logo itu krna nda prlu mo se tampil itu
//coba jo te iko spa tau nnti mo perlu. klo nda mo ta pake yg pnting so bkg dlu.
export const Get_Detail_Vendor = "Get_Detail_Vendor";


export const getVendor = () => {
    return(dispatch) => {
        dispatchLoading(dispatch, Get_Vendor)

        FIREBASE
        .database()
        .ref('jenis_vendor')
        .once('value', (querySnapshot) => {
            //hasil
            let data = querySnapshot.val()
            //let dataItem = {...data}
            //console.log("Data : ", data)
            //console.log("Data Item : ", dataItem)
            // tetap pake dataItem jo eh tau le ttp jadi kote
            dispatchResult(dispatch, Get_Vendor, data)
        })
        .catch((error) => {
            dispatchError(dispatch, Get_Vendor, error)
            alert(error)
        })
    }
}

//yg detail liga / detail vendor
export const getDetailVendor = (id) => {
    return(dispatch) => {
        dispatchLoading(dispatch, Get_Detail_Vendor)

        FIREBASE
        .database()
        .ref('jenis_vendor/'+id)
        .once('value', (querySnapshot) => {
            //hasil
            let data = querySnapshot.val()
            //let dataItem = {...data}
            //console.log("Data : ", data)
            //console.log("Data Item : ", dataItem)
            // tetap pake dataItem jo eh tau le ttp jadi kote
            dispatchResult(dispatch, Get_Detail_Vendor, data)
        })
        .catch((error) => {
            dispatchError(dispatch, Get_Detail_Vendor, error)
            alert(error)
        })
    }
}