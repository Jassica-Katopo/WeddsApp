import FIREBASE from '../config/Firebase'
import { dispatchLoading, dispatchResult, dispatchError } from "../utils"

export const Add_To_Checklist = "Add_To_Checklist";

export const AddToChecklist = (data) => {
    return (dispatch) => {

        dispatchLoading(dispatch, Add_To_Checklist);

        //cek kalo data checklist user so ada ato blum
        FIREBASE
        .database()
        .ref('checklists/'+data.uid)
        .once('value', (querySnapshot) => {

            console.log("cek checklist user tersebut apakah sudah ada", querySnapshot.val())

            if(querySnapshot.val()){
                //update checklist main
                const checklistMain = querySnapshot.val()
                //const berat baru nd pke
                //const newPrice = data.vendor.packagePrice
                // + newPrice

                //bekeng firebase
                FIREBASE
                .database()
                .ref('checklists')
                .child(data.uid)

                .update(checklistMain)

                //.set(checklistMain)

                .then((response) => {
                    //response biar nda ta pake nd ppa
                    // simpan ke checklist detail
                    dispatch(checklistDetail(data))
                })
                .catch((error) => {
                    dispatchError(dispatch, Add_To_Checklist, error)
                    alert(error)
                })

            }else{
                //simpan checklist main
                const checklistMain = {
                    user: data.uid,
                    date: new Date().toDateString(),
                    price: data.vendor.packagePrice
                    //parseInt(data.vendor.packagePrice)
                    //nda pke total harga krna dia cma 1x pesan nd pke form jumlah
                    //pke total harga sto mngkin yg jumlah 1x itu dg nnti se banding ulg dg di page chechklist dp dummy
                }
                FIREBASE
                .database()
                .ref('checklists')
                .child(data.uid)
                .set(checklistMain)
                .then((response) => {

                    console.log("simpan checklist main", response)

                    //response biar nda ta pake nd ppa
                    // simpan ke checklist detail
                    dispatch(checklistDetail(data))
                })
                .catch((error) => {
                    dispatchError(dispatch, Add_To_Checklist, error)
                    alert(error)
                })
            }
        })
        .catch((error) => {
            dispatchError(dispatch, Add_To_Checklist, error)
            alert(error)
        })
    }
}

export const checklistDetail = (data) => {
    return(dispatch) => {
        const orders = {
            //data.vendors -> nntau itu jersey yg mna
            productChecklist: data.vendor,
            price: data.vendor.packagePrice,
            description: data.description,

        }

        FIREBASE
        .database()
        .ref('checklists/'+data.uid)
        .child('orders')
        .push(orders)
        .then((response) => {

            console.log("simpan checklist detail", response)

            dispatchResult(dispatch, Add_To_Checklist, response ? response : [])
        })
        .catch((error) => {
            dispatchError(dispatch, Add_To_Checklist, error)
            alert(error)
        })
    }
}