import { getAllProduk, getDetailProduk, getSearchProduk, postNewProduk } from "../../apis/produkApi";

export function allProduk(payload) {
    return { type: "produk/allProduk", payload: payload }
}

export function fetchAllProduk() {
    return async function (dispatch) {
        try {
            const { data } = await getAllProduk()
            // console.log(data);
            dispatch(allProduk(data.data));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
export function searchProduk(payload) {
    return { type: "produk/searchProduk", payload: payload }
}

export function fetchSearchProduk() {
    return async function (dispatch) {
        try {
            const data = await getSearchProduk()
            dispatch(searchProduk(data));
        } catch (error) {
            throw error;
        }
    }
}
export function detailProduk(payload) {
    return { type: "produk/detailProduk", payload: payload }
}

export function fetchDetailProduk(idProduk) {
    return async function (dispatch) {
        try {
            const { data } = await getDetailProduk(idProduk)
            // console.log(data);
            dispatch(detailProduk(data.data));
        } catch (error) {
            throw error;
        }
    }
}
export function addProduk(payload) {
    return { type: "produk/addProduk", payload: payload }
}

export function postAddProduk(form) {
    return async function (dispatch) {
        try {
            console.log(form);
            // const { data } = await postNewProduk(form)
            // dispatch(detailProduk(data.data));
        } catch (error) {
            throw error;
        }
    }
}
