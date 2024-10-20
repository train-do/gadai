import React, { useEffect, useState } from "react";
import TableRow from "../../components/TableRow";
import { fetchAllProduk } from "../../redux/actions/produkAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ComboBox from "../../components/ComboBox";

export default function HomeProduk() {
  const allProduk = useSelector((state) => state.produk.allProduk);
  const dispatch = useDispatch();

  const handleReset = () => {
    console.log("RESET");
    // setForm(initialFormState);
  };
  useEffect(() => {
    dispatch(fetchAllProduk());
  }, []);
  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-wrap">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold">Produk Home</h2>
          <div className="card m-0 shadow-md w-full border rounded-md">
            <div className="card-header h-14 bg-gray-200 p-2 border rounded-md">
              <div className="float-left p-2">
                <b>Cari Data Produk</b>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="flex flex-wrap">
                <div className="w-1/6 mb-2">
                  <label className="py-2">Tipe Produk</label>
                </div>
                <div className="w-5/12 mb-2">
                  <select
                    name="searchTipeProduk"
                    className="border rounded-md form-control"
                  >
                    <option value=""></option>
                    <option value="Konsinyasi Cicilan Tetap">
                      Konsinyasi Cicilan Tetap
                    </option>
                    <option value="Konsinyasi Cicilan Fleksibel">
                      Konsinyasi Cicilan Fleksibel
                    </option>
                  </select>
                </div>
                <div className="w-1/12 mb-2 pl-4">
                  <label className="py-2">Status</label>
                </div>
                <div className="w-1/3 mb-2">
                  <ComboBox
                    id={"searchRecStatus"}
                    name={"searchRecStatus"}
                    // value={["", "A", "N"]}
                    option={["", "A", "N"]}
                  />
                </div>

                <div className="w-1/6 mb-2">
                  <label className="py-2">Kode Produk</label>
                </div>
                <div className="w-5/12 mb-2">
                  <input
                    type="text"
                    name="searchId"
                    className="form-control border rounded-md"
                  />
                </div>
                <div className="w-1/12 mb-2 pl-4">
                  <label className="py-1">LTV</label>
                </div>
                <div className="flex w-1/3 mb-2">
                  <div className="w-1/4">
                    <input
                      type="text"
                      name="searchLtv"
                      className="form-control border rounded-md"
                    />
                  </div>
                  <div className="w-1/4 text-center px-0">
                    <label className="py-1">sampai</label>
                  </div>
                  <div className="w-1/4">
                    <input
                      type="text"
                      name="searchLtvSampai"
                      className="form-control border rounded-md"
                    />
                  </div>
                  <div className="w-1/4 pl-0">
                    <label className="py-1">%</label>
                  </div>
                </div>

                <div className="w-1/6 mb-2">
                  <label className="py-2">Nama Produk</label>
                </div>
                <div className="w-5/12 mb-2">
                  <input
                    type="text"
                    name="searchNamaProduk"
                    className="form-control border rounded-md"
                  />
                </div>
                <div className="w-1/6 mb-2 pl-4">
                  <label className="py-1">Biaya Jasa Penyimpanan</label>
                </div>
                <div className="flex w-1/4 mb-2">
                  <div className="w-1/3">
                    <input
                      type="text"
                      name="searchJasaPenyimpanan"
                      className="form-control border rounded-md"
                    />
                  </div>
                  <div className="w-1/3 text-center px-0">
                    <label className="py-1">sampai</label>
                  </div>
                  <div className="w-1/3">
                    <input
                      type="text"
                      name="searchJasaPenyimpananSampai"
                      className="form-control border rounded-md"
                    />
                  </div>
                  <div className="w-1/3 pl-0">
                    <label className="py-1">%</label>
                  </div>
                </div>

                <div className="w-5/12"></div>
                <div className="w-full pt-2 flex justify-end">
                  <button
                    // onClick={toggleDisabled}
                    className="btn btn-primary mr-3"
                  >
                    Cari
                  </button>
                  {/* <button className="btn btn-primary mx-3">Kosongkan</button> */}
                  <button
                    onClick={handleReset}
                    className="btn btn-primary mx-3"
                  >
                    Kosongkan
                  </button>
                  <Link to="/add" className="btn btn-primary mx-3">
                    Produk Baru
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-striped w-full" id="data-produk">
              <thead>
                <tr className="bg-violet-700 text-white text-center">
                  <th>Tipe Produk</th>
                  <th>Nama Produk</th>
                  <th>LTV</th>
                  <th>Biaya Jasa Penyimpanan</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allProduk?.map((produk, idx) => {
                  // console.log("MAPPPINGGGGG", produk);
                  return (
                    <TableRow key={idx} produk={produk} idx={idx}></TableRow>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
