import axios from "axios";
const BASE_URL = "http://localhost:8081/produk"
export async function getAllProduk() {
    try {
        const response = await axios.get(BASE_URL + "/allProduk");
        // console.log("APIS", response);
        return response
    } catch (error) {
        return error.response
    }
}
export async function getSearchProduk() {
    try {
        const response = await axios.get(BASE_URL + "/searchProduk");
        return response
    } catch (error) {
        return error.response
    }
}
export async function getDetailProduk(idProduk) {
    try {
        // console.log("DARI APISSS \n" + BASE_URL + "/detailProduk/" + idProduk);
        const response = await axios.get(BASE_URL + "/detailProduk/" + idProduk);
        return response
    } catch (error) {
        return error.response
    }
}
export async function postNewProduk(form) {
    try {
        // console.log("DARI APISSS \n" + BASE_URL + "/detailProduk/" + idProduk);
        const response = await axios.post(BASE_URL + "/addProduk", form);
        return response
    } catch (error) {
        return error.response
    }
}