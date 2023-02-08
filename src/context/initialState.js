import { fetchCart, fetchUser } from "./../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialstate = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
