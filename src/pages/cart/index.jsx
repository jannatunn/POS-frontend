import { useDispatch, useSelector } from "react-redux";
import { config } from "../../config";
import { addItem, reduceItem } from "../../app/features/cart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 mt-5">
      {cartItems.length === 0 ? (
        <div className="text-center">no item added to the cart</div>
      ) : (
        <div className="">
          <div>
            <h1 className="px-6 py-3 uppercase font-semibold bg-green-600">
              keranjang belanja
            </h1>
            <span className="px-6 my-5 text-xl font-semibold block">
              Rp.{totalAmount}
            </span>
          </div>
          <table className="w-full text-base text-left text-gray-500 ">
            <thead className="text-xs  capitalize ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  title
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <img
                      src={`${config.base_url}/images/products/${item.imgUrl}`}
                      alt={item.productName}
                      className="w-20"
                    />
                  </th>
                  <td className="px-6 py-4">{item.productName}</td>
                  <td className="px-6 py-4">{item.totalPrice}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        dispatch(
                          reduceItem({
                            id: item.id,
                            productName: item.productName,
                            price: item.price,
                            imgUrl: item.image_url,
                          })
                        )
                      }
                      className="px-3 rounded  bg-green-300">
                      -
                    </button>
                    <span className="p-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          addItem({
                            id: item.id,
                            productName: item.productName,
                            price: item.price,
                            imgUrl: item.image_url,
                          })
                        )
                      }
                      className="px-3 rounded  bg-green-300">
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full  py-1 my-2 text-white text-center bg-green-500">
            Chekout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
