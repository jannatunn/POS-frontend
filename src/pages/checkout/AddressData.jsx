import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { getAddress } from "../../app/api/address";

const AddressData = ({ setAddressData }) => {
  const [address, setAddress] = useState([]);
  const [notSelect, setNotSelect] = useState(true);
  const navigate = useNavigate();

  const handleChange = (row) => {
    if (row.selectedCount > 0) {
      setAddressData(row.selectedRows[0]);
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
      <div className="d-flex justify-content-end mt-3">
        {/* <button
onClick={() => navigate("/checkout")}
className="w-full  py-1 my-2 text-white text-center bg-green-500">
Chekout
</button> */}

        <button
          disabled={notSelect}
          className="w-full  py-1 my-2 text-white text-c     enter bg-green-500"
          onClick={() => navigate("/checkout/confirm")}>
          Selanjutnya
        </button>
      </div>
    </>
  );
};

export default AddressData;
