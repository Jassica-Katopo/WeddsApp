import { Get_Vendor, Get_Detail_Vendor } from "../../actions/VendorAction";
// nda mo tambah get detail vendor / mo se tampil tu gambar krna nda perlu
// tambah jo spa tau nnti prlu klo pun nda mo ta pke nd ppa yg pnting s bkg

const initialState = {
    getVendorLoading: false,
    getVendorResult: false,
    getVendorError: false,

    getDetailVendorLoading: false,
    getDetailVendorResult: false,
    getDetailVendorError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Get_Vendor:
            return {
                ...state,
                getVendorLoading: action.payload.loading,
                getVendorResult: action.payload.data,
                getVendorError: action.payload.errorMessage,
            }

        case Get_Detail_Vendor:
            return {
                ...state,
                getDetailVendorLoading: action.payload.loading,
                getDetailVendorResult: action.payload.data,
                getDetailVendorError: action.payload.errorMessage,
            }

        default:
            return state
    }
}