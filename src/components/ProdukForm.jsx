import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ComboBox from "./ComboBox";

export default function ProdukForm({ produk, handleSubmit }) {
  const initialFormState = {
    id: "" || produk?.id,
    tipeProduk: "" || produk?.tipeProduk,
    namaProduk: "" || produk?.namaProduk,
    keterangan: "" || produk?.keterangan,
    ltv: 0 || produk?.ltv * 100,
    jangkaWaktu: 0 || produk?.jangkaWaktu,
    adminBuka: 0 || produk?.adminBuka,
    adminBukaType: "" || produk?.adminBukaType,
    adminTutup: 0 || produk?.adminTutup,
    adminTutupType: "" || produk?.adminTutupType,
    jasaPenyimpanan: 0 || produk?.jasaPenyimpanan,
    jasaPenyimpananPeriode: 0 || produk?.jasaPenyimpananPeriode,
    dendaKeterlambatan: 0 || produk?.dendaKeterlambatan,
    dendaKeterlambatanPeriode: 0 || produk?.dendaKeterlambatanPeriode,
  };
  // console.log(produk.id, "PASSING KEINPUT");
  const [warning, setWarning] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [form, setForm] = useState({ ...initialFormState });
  const location = useLocation();
  const navigate = useNavigate();

  const handleKembali = () => {
    navigate(-1);
  };
  const onChange = (event, isPercent) => {
    const { name, value, type } = event?.target || {};
    console.log(event.target.name);
    console.log(event.target.value, typeof event.target.value);
    setForm({
      ...form,
      [name]: value,
    });
    if (Number(value) > 100 && isPercent) {
      setWarning("Angka yang dimasukkan melebihi 100.");
    } else if (Number(value) < 0 && type == "number") {
      setWarning("Angka yang dimasukkan kurang dari 0.");
    } else {
      setWarning("");
    }
  };
  const handleUbah = () => {
    setIsDisabled(false);
  };
  useEffect(() => {
    if (location.pathname.includes("details")) {
      setIsDisabled(true);
    }
  }, []);
  return (
    <div className="w-[100%] md:w-[70%] lg:w-[60%] mx-auto my-auto border-2 p-6 rounded-lg">
      <div className="mx-auto my-auto">
        <div>
          <h1 className="text-start">
            {location.pathname.includes("add")
              ? "ADD NEW PRODUK"
              : "DETAIL PRODUK " + '"' + produk.id + '"'}
          </h1>
        </div>
        {warning && <p className="text-red-500">{warning}</p>}
        <form
          action=""
          onSubmit={() => handleSubmit(form)}
          className="flex flex-col gap-[1rem]"
        >
          <div>
            <label htmlFor="">Tipe Produk</label>
            <select
              name="tipeProduk"
              id="tipeProduk"
              value={form?.tipeProduk}
              onChange={onChange}
              className={`form-control
                ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
                    : "bg-violet-50"
                };`}
            >
              {/* {console.log(form?.tipeProduk)} */}
              <option value="" selected></option>
              <option value="Konsinyasi Cicilan Tetap">
                Konsinyasi Cicilan Tetap
              </option>
              <option value="Konsinyasi Cicilan Fleksibel">
                Konsinyasi Cicilan Fleksibel
              </option>
            </select>
            {/* <ComboBox
              id={"tipeProduk"}
              name={"tipeProduk"}
              value={form?.tipeProduk}
              option={[
                "",
                "Konsinyasi Cicilan Tetap",
                "Konsinyasi Cicilan Fleksibel",
              ]}
              onChange={onChange}
              isDisabled={isDisabled}
            /> */}
          </div>
          <div>
            <label htmlFor="">Produk Id</label>
            <InputForm
              id={"id"}
              name={"id"}
              value={form?.id}
              onChange={onChange}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="">Nama Produk</label>
            <InputForm
              id={"namaProduk"}
              name={"namaProduk"}
              value={form?.namaProduk}
              onChange={onChange}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="">Keterangan</label>
            <InputForm
              id={"keterangan"}
              name={"keterangan"}
              value={form?.keterangan}
              onChange={onChange}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="">LTV ( % )</label>
            <InputForm
              id={"ltv"}
              name={"ltv"}
              type={"number"}
              value={form?.ltv}
              onChange={onChange}
              isPercent={true}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="">Jangka Waktu</label>
            <InputForm
              id={"jangkaWaktu"}
              name={"jangkaWaktu"}
              type={"number"}
              value={form?.jangkaWaktu}
              onChange={onChange}
              isDisabled={isDisabled}
            />
            <p className="inline-block">
              <span
                className={
                  form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                    ? "line-through"
                    : ""
                }
              >
                hari
              </span>
              /
              <span
                className={
                  form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                    ? "line-through"
                    : ""
                }
              >
                bulan
              </span>
            </p>
          </div>
          <div>
            <label htmlFor="">Biaya Admin Buka</label>
            <select
              name="adminBukaType"
              id="adminBukaType"
              value={form?.adminBukaType}
              onChange={onChange}
              className={`form-control
                ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
                    : "bg-violet-50"
                };`}
            >
              <option value="" selected></option>
              <option value="NOMINAL">NOMINAL</option>
              <option value="PERSEN">PERSEN</option>
            </select>
            {/* <ComboBox
              id={"adminBukaType"}
              name={"adminBukaType"}
              value={form.adminBukaType}
              option={["", "NOMINAL", "PERSEN"]}
              onChange={onChange}
              isDisabled={isDisabled}
            /> */}
            <InputForm
              id={"adminBuka"}
              name={"adminBuka"}
              type={"number"}
              value={form?.adminBuka}
              onChange={onChange}
              isDisabled={isDisabled}
              // isDisabled={!form?.adminBuka}
              isPercent={form?.adminBukaType == "PERSEN" ? true : false}
            />
          </div>
          <div>
            <label htmlFor="">Biaya Admin Tutup</label>
            <select
              name="adminTutupType"
              id="adminTutupType"
              value={form?.adminTutupType}
              onChange={onChange}
              className={`form-control
                ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
                    : "bg-violet-50"
                };`}
            >
              <option value="" selected></option>
              <option value="NOMINAL">NOMINAL</option>
              <option value="PERSEN">PERSEN</option>
            </select>
            {/* <ComboBox
              id={"adminTutupType"}
              name={"adminTutupType"}
              value={form.adminTutupType}
              option={["", "NOMINAL", "PERSEN"]}
              onChange={onChange}
              isDisabled={isDisabled}
            /> */}
            <InputForm
              id={"adminTutup"}
              name={"adminTutup"}
              type={"number"}
              value={form?.adminTutup}
              onChange={onChange}
              isDisabled={isDisabled}
              // isDisabled={!form?.adminTutup}
              isPercent={form?.adminTutupType == "PERSEN" ? true : false}
            />
          </div>
          <div>
            <label htmlFor="">Biaya Jasa Penyimpanan</label>
            <div>
              <InputForm
                id={"jasaPenyimpanan"}
                name={"jasaPenyimpanan"}
                type={"number"}
                value={form?.jasaPenyimpanan}
                onChange={onChange}
                isPercent={true}
                isDisabled={isDisabled}
              />
              <p className="inline-block">%</p>
              <p className="inline-block">Per</p>
              <InputForm
                id={"jasaPenyimpananPeriode"}
                name={"jasaPenyimpananPeriode"}
                type={"number"}
                value={form?.jasaPenyimpananPeriode}
                onChange={onChange}
                isDisabled={isDisabled}
              />
              <p className="inline-block">
                <span
                  className={
                    form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                      ? "line-through"
                      : ""
                  }
                >
                  hari
                </span>
                /
                <span
                  className={
                    form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                      ? "line-through"
                      : ""
                  }
                >
                  bulan
                </span>
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="">Biaya Denda Keterlambatan</label>
            <div>
              <InputForm
                id={"dendaKeterlambatan"}
                name={"dendaKeterlambatan"}
                type={"number"}
                value={form?.dendaKeterlambatan}
                onChange={onChange}
                isPercent={true}
                isDisabled={isDisabled}
              />
              <p className="inline-block">%</p>
              <p className="inline-block">Per</p>
              <InputForm
                id={"dendaKeterlambatanPeriode"}
                name={"dendaKeterlambatanPeriode"}
                type={"number"}
                value={form?.dendaKeterlambatanPeriode}
                onChange={onChange}
                isDisabled={isDisabled}
              />
              <p className="inline-block">
                <span
                  className={
                    form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                      ? "line-through"
                      : ""
                  }
                >
                  hari
                </span>
                /
                <span
                  className={
                    form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                      ? "line-through"
                      : ""
                  }
                >
                  bulan
                </span>
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleKembali}
              className="btn-primary"
            >
              Kembali
            </button>
            {location.pathname.includes("details") && isDisabled && (
              <button
                type="button"
                // onClick={handleReset}
                className="btn-primary"
              >
                Hapus
              </button>
            )}
            {location.pathname.includes("details") && isDisabled && (
              <button
                type="button"
                onClick={handleUbah}
                className="btn-primary"
              >
                Ubah
              </button>
            )}
            {(location.pathname.includes("add") || !isDisabled) && (
              <button type="submit" className="btn-primary">
                Simpan
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
