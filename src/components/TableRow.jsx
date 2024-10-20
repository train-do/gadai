import React from "react";
import { Link } from "react-router-dom";

export default function TableRow({ produk, idx }) {
  // console.log("TABLE ROWWWWWWWWW", produk);
  return (
    <tr>
      <td>{produk?.tipeProduk}</td>
      <td>{produk?.namaProduk}</td>
      <td>{produk?.ltv * 100} %</td>
      <td>{produk?.jasaPenyimpanan * 100} %</td>
      <td>{produk?.recStatus}</td>
      <td>
        <Link to={`/details/${produk.id}`} className="btn-primary">
          Details
        </Link>
      </td>
    </tr>
  );
}
