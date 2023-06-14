import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../app/api/address";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { formatRupiah, sumPrice } from "../../utils";
import { config } from "../../config";

const AddressData = ({ setAddressData }) => {
  const [address, setAddress] = useState([]);
  const [notSelect, setNotSelect] = useState(true);
  const navigate = useNavigate();

  const handleChange = (row) => {
    if (row.selectedCount > 0) {
      setAddress(row.selectedRows[0]);
      setNotSelect(false);
    } else {
      setNotSelect(true);
    }
  };

  useEffect(() => {
    getAddress().then(({ data: { data } }) => setAddress(data));
  }, []);
  return (
    <>
      <DataTable
        columns={[
          {
            name: "Nama",
            selector: (row) => row.nama,
          },
          {
            name: "Detail",
            cell: (row) =>
              `${row.provinsi}, ${row.kabupaten}, ${row.kecamatan}, ${row.kelurahan}, ${row.detail}`,
          },
        ]}
        data={address}
        onSelectedRowsChange={handleChange}
        selectableRows
        selectableRowsSingle={true}
        selectableRowsHighlight={true}
        title="Pilih Alamat Pengiriman"
      />
      <div>
        <button onclick={() => navigate("checkout/confirm")}>
          selanjutnya
        </button>
      </div>
    </>
  );
};

const Confirmation = ({ data, onClick }) => {
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
      <button onClick={() => navigate("/checkout")}>sebelumnya</button>
      <button onClick={onclick}>bayar</button>
    </>
  );
};

function Checkout() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 mt-5">
      <div className="">
        <div>
          <h1 className="px-6 py-3 uppercase font-semibold bg-green-600">
            Checkout
          </h1>
        </div>
        <AddressData />
        <h1>ini adalah halaman checkout</h1>
      </div>
    </div>
  );
}

export default Checkout;
