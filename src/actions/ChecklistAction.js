import { Profile } from '../assets';
import FIREBASE from '../config/Firebase';
import {dispatchLoading, dispatchResult, dispatchError} from '../utils';

export const Add_To_Checklist = 'Add_To_Checklist';
export const Get_List_Checklist = 'Get_List_Checklist';
export const Delete_Checklist = 'Delete_Checklist';

export const AddToChecklist = data => {
    
  return dispatch => {
    dispatchLoading(dispatch, Add_To_Checklist);

    //cek kalo data checklist user so ada ato blum
    //const uid =
    console.log('dataaa', data);

    FIREBASE.database()
      .ref('checklists/' + data.uid)
      .once('value', querySnapshot => {
        console.log(
          'cek checklist user tersebut apakah sudah ada',
          querySnapshot.val(),
        );

        if (querySnapshot.val()) {
          //update checklist main
          // //const checklistMain = querySnapshot.val()
          //const berat baru nd pke
          //const newPrice = data.vendor.packagePrice
          // + newPrice

          //bekeng firebase
          {
            /*
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
                */
          }
        } else {
          //simpan checklist main
          const checklistMain = {
            
            user: data.uid,
            date: new Date().toDateString(),
            price: data.vendor.packagePrice,
            isReserve: true,
            productChecklist: data.vendor,
            description: data.description,
            vendorId: data.vendor.vendorId,
            name: data.name,
            image: data.image,
            phone: data.phone,
            

            //nd jdi dp total sdh jo nd ush pakee. comment di page checklist

            //parseInt(data.vendor.packagePrice)
            //nda pke total harga krna dia cma 1x pesan nd pke form jumlah
            //pke total harga sto mngkin yg jumlah 1x itu dg nnti se banding ulg dg di page chechklist dp dummy
          };
          const userID = {
            userID: data.uid
          }
          const vendorId = checklistMain.vendorId
          FIREBASE.database()
            .ref(`/vendors/${vendorId}/checklists/userID`)
            .set(userID)
          FIREBASE.database()
            .ref(`/vendors/${vendorId}/checklists`)
            .child(data.uid)
            .set(checklistMain)
          FIREBASE.database()
            .ref('checklists')
            .child(data.uid)
            .set(checklistMain)
            .then(response => {
              console.log('simpan checklist main', checklistMain.vendorId);

              //response biar nda ta pake nd ppa
              // simpan ke checklist detail
              dispatch(checklistDetail(data));
            })
            .catch(error => {
              dispatchError(dispatch, Add_To_Checklist, error);
              alert(error);
            });
        }
      })
      .catch(error => {
        dispatchError(dispatch, Add_To_Checklist, error);
        alert(error);
      });
  };
};

export const checklistDetail = (data, vendorId) => {
  return dispatch => {
    const orders = {
      //data.vendors -> nntau itu jersey yg mna
      productChecklist: data.vendor,
      price: data.vendor.packagePrice,
      description: data.description,
      //tmbh akg uid user le jo ddlm orders
      user: data.uid,
      //test tmbh le di 'order/'+data.vendor.id
      //vendorId: data.id
    };

    FIREBASE.database()
      .ref('checklists/' + data.uid)
      .child('orders')
      .push(orders)
      .then(response => {
        // FIREBASE.database()
        //   .ref('vendors')
        //   .orderByChild('vendor')
        //   .equalTo(vendorId)
        //   .once('value', (querySnapshot) => {
        //     let data = querySnapshot.val()
        //     console.log('vendor', vendorId);
        //     console.log('RES', data)});

        console.log('simpan checklist detail', response.key);

        dispatchResult(dispatch, Add_To_Checklist, response ? response : []);
      })
      .catch(error => {
        dispatchError(dispatch, Add_To_Checklist, error);
        alert(error);
      });
  };
};

//get list checklist mo se tampilkan ddlm page checklist jdi so nda pke hardcode / dummy

export const getListChecklist = id => {
  return dispatch => {
    dispatchLoading(dispatch, Get_List_Checklist);

    FIREBASE.database()
      .ref('checklists/' + id)
      .once('value', querySnapshot => {
        //hasil
        console.log('data', querySnapshot);
        let data = querySnapshot.val();

        dispatchResult(dispatch, Get_List_Checklist, data);
      })
      .catch(error => {
        dispatchError(dispatch, Get_List_Checklist, error);
        alert(error);
      });
  };
};

//delete checklist
export const deleteChecklist = (id, checklistMain, chechklist) => {
  return dispatch => {
    dispatchLoading(dispatch, Delete_Checklist);
    //klo mo hpus 1x smua
    FIREBASE.database()
      .ref('checklists')
      .child(checklistMain.user)
      .remove()
      .then(response => {
        dispatchResult(
          dispatch,
          Delete_Checklist,
          'Checklist deleted successfully',
        );
      })
      FIREBASE.database()
      .ref(`/vendors/${checklistMain.vendorId}/checklists`)
      .remove()
      .then(response => {
        dispatchResult(
          dispatch,
          Delete_Checklist,
          'Checklist deleted successfully',
        );
      })
      .catch(error => {
        dispatchError(dispatch, Delete_Checklist, error);
        alert(error);
      });

    {
      /*
        FIREBASE
        .database()
        .ref('checklists')
        .child(checklistMain.user)
        .child('orders')
        .child(id)
        .remove()
        .then((response) => {
            //hapus checklist detail cuma / cuma mo ta hpus yg dp ddlm nodes 'orders'
            //dispatch(deleteChecklistDetail(id, checklistMain))
            dispatchResult(dispatch, Delete_Checklist, "Checklist deleted successfully")
        })
        .catch((error) => {
            dispatchError(dispatch, Delete_Checklist, error)
            alert(error)
        })
        */
    }
  };
};

//delete checklist detail
{
  /*
export const deleteChecklistDetail = (id, checklistMain) => {
    return(dispatch) => {
        FIREBASE
        .database()
        .ref('checklists/' +checklistMain.user)
        .child('orders')
        .child(id)
        .remove()
        .then((response) => {
            dispatchResult(dispatch, Delete_Checklist, "Checklist deleted successfully")
        })
        .catch((error) => {
            dispatchError(dispatch, Delete_Checklist, error)
            alert(error)
        })
    }
}
*/
}