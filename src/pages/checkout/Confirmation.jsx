import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";
import { formatRupiah, sumPrice } from "../../utils/index";
import DataTable from "react-data-table-component";

export const Confirmation = ({ data, onClick }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const confirm = [
    {
      label: "Alamat",
      value: (
        <div>
          {data.nama}
          <br />
          {data.provinsi}, {data.kabupaten}, {data.kecamatan}, {data.kelurahan}
          <br />({data.detail})
        </div>
      ),
    },
    { label: "Sub Total", value: formatRupiah(sumPrice(cart)) },
    { label: "Ongkir", value: formatRupiah(config.global_ongkir) },
    {
      label: <strong>Total</strong>,
      value: (
        <strong>
          {formatRupiah(
            parseInt(sumPrice(cart)) + parseInt(config.global_ongkir)
          )}
        </strong>
      ),
    },
  ];
  return (
    <>
      <DataTable
        columns={[
          { selector: (row) => row.label },
          { cell: (row) => row.value },
        ]}
        title="Konfirmasi"
        data={confirm}
      />
      <div className="flex justify-between mt-3">
        <button
          className="px-2 py-1 bg-green-500"
          onClick={() => navigate("/checkout")}>
          Sebelumnya
        </button>
        <button className="px-2 py-1 bg-green-500" onClick={onClick}>
          bayar
        </button>
      </div>
    </>
  );
};
