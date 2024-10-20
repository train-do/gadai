import React from "react";
import ProdukForm from "../../components/ProdukForm";
import { useDispatch } from "react-redux";
import { postAddProduk } from "../../redux/actions/produkAction";

export default function NewProduk() {
  const dispatch = useDispatch();
  const submitNewProduk = (form) => {
    dispatch(postAddProduk(form));
  };
  return <ProdukForm handleSubmit={submitNewProduk}></ProdukForm>;
}
