import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../features/products";

export default function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!products.items) {
    dispatch(getProductsList());
  }

  console.log(products);

  return <div>ProductsList</div>;
}
