import { 
    Get_All_Vendor, 
    Get_All_Vendor_By_Vendor, 
    Delete_Parameter_All_Vendor, 
    Save_Keyword_All_Vendor 
} from '../../actions/AllVendorAction'

const initialState = {
    getAllVendorleLoading: false,
    getAllVendorResult: false,
    getAllVendorError: false,

    //for get all vendor by vendor
    idVendor: false,
    name: false,

    //for search
    keyword: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Get_All_Vendor:
            return {
                ...state,
                getAllVendorLoading: action.payload.loading,
                getAllVendorResult: action.payload.data,
                getAllVendorError: action.payload.errorMessage,
            }
        case Get_All_Vendor_By_Vendor: 
        //console.log("masuk reducerr " )
            return {
                ...state,
                idVendor: action.payload.idVendor,
                name: action.payload.name,
            }
        case Delete_Parameter_All_Vendor: 
        //jadi
            return {
                ...state,
                idVendor: false,
                name: false,
                //tambah hapus keyword
                keyword: false,
            }
        case Save_Keyword_All_Vendor:
            return {
                ...state,
                keyword: action.payload.data
            }

        default:
            return state
    }
}