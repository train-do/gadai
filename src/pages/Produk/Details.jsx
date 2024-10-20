import React, { useEffect } from "react";
import ProdukForm from "../../components/ProdukForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduk } from "../../redux/actions/produkAction";
import { useParams } from "react-router-dom";

export default function Details() {
  const produkDetail = useSelector((state) => state.produk.detailProduk);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(produkDetail);
  useEffect(() => {
    dispatch(fetchDetailProduk(id));
  }, []);
  return <ProdukForm produk={produkDetail}></ProdukForm>;
}
