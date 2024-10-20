import { addProduk } from "../actions/produkAction";

const initialState = {
    allProduk: [],
    searchProduk: [],
    detailProduk: {},
};

export default function produkReducer(state = initialState, action) {
    switch (action.type) {
        case "produk/allProduk":
            return { ...state, allProduk: action.payload };
        case "produk/searchProduk":
            return { ...state, searchProduk: action.payload };
        case "produk/detailProduk":
            return { ...state, detailProduk: action.payload };
        case "produk/addProduk":
            return { ...state, addProduk: action.payload };
        default:
            return state
    }
}