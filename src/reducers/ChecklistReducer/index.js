import { Add_To_Checklist, Get_List_Checklist, Delete_Checklist } from "../../actions/ChecklistAction";
// nda mo tambah get detail vendor / mo se tampil tu gambar krna nda perlu
// tambah jo spa tau nnti prlu klo pun nda mo ta pke nd ppa yg pnting s bkg

const initialState = {
    saveChecklistLoading: false,
    saveChecklistResult: false,
    saveChecklistError: false,

    getListChecklistLoading: false,
    getListChecklistResult: false,
    getListChecklistError: false,

    deleteChecklistLoading: false,
    deleteChecklistResult: false,
    deleteChecklistError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Add_To_Checklist:
            return {
                ...state,
                saveChecklistLoading: action.payload.loading,
                saveChecklistResult: action.payload.data,
                saveChecklistError: action.payload.errorMessage,
            }

        case Get_List_Checklist:
            return {
                ...state,
                getListChecklistLoading: action.payload.loading,
                getListChecklistResult: action.payload.data,
                getListChecklistError: action.payload.errorMessage,
            }

        case Delete_Checklist:
            return {
                ...state,
                deleteChecklistLoading: action.payload.loading,
                deleteChecklistResult: action.payload.data,
                deleteChecklistError: action.payload.errorMessage,
            }

        default:
            return state
    }
}