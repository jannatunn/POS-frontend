import axios from "axios";
import { config } from "../../config";

export const saveCart = async (token, cart) => {
  return await axios.put(
    `${config.base_url}/api/carts`,
    { items: cart },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

// export const saveCart = createAsyncThunk(
//   "cart/saveCart",
//   async (token, cart) => {
//     const res = await axios.put(
//       `${config.base_url}/api/carts`,
//       { items: cart },
//       {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.log("response dari hit api cart", res.data);
//     return res.data;
//   }
// );
