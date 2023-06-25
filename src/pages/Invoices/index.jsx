import { config } from "../../config";
import React, { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInvoiceByOrderId } from "../../app/api/order";
import { formatRupiah } from "../../utils";

export default function Invoices() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const auth = useSelector((state) => state.auth);

  console.log(config);

  const builderData = useCallback(
    (data) => {
      return [
        { label: "Status", value: data.payment_status },
        { label: "Order ID", value: `#${data.order.order_number}` },
        { label: "Total Amount", value: formatRupiah(data.total) },
        {
          label: "Billed to",
          value: (
            <div>
              <br />
              <strong>{auth.user.full_name}</strong>
              <br />
              {auth.user.email}
              <br />
              <br />
              {data.delivery_address.provinsi},{" "}
              {data.delivery_address.kabupaten},{" "}
              {data.delivery_address.kecamatan},{" "}
              {data.delivery_address.kelurahan}
              <br />({data.delivery_address.detail})
              <br />
              <br />
            </div>
          ),
        },
        {
          label: "Payment to",
          value: (
            <div>
              <br />
              {config.owner}
              <br />
              {config.contact}
              <br />
              {config.billing.bank_name}
              <br />
              {config.billing.account_no}
              <br />
            </div>
          ),
        },
      ];
    },
    [auth.user.full_name, auth.user.email]
  );

  useEffect(() => {
    setIsFetching(true);
    getInvoiceByOrderId(id)
      .then(({ data }) => setInvoice(builderData(data)))
      .finally((_) => setIsFetching(false));
  }, [id, builderData]);

  return (
    <>
      <div className="my-6 m-auto w-9/12 shadow-md shadow-gray-400 rounded overflow-hidden">
        <h2 className="pl-2 py-2 uppercase font-bold bg-green-600">account</h2>
        <div className="flex p-2 gap-2">
          {!isFetching ? (
            <DataTable
              data={invoice}
              columns={[
                { selector: (row) => row.label },
                { cell: (row) => row.value },
              ]}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
