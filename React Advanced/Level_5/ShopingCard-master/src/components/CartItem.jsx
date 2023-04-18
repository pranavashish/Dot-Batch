import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log(props.item.id);

  const removeFromCart = () => {
    dispatch(remove(props.item.id));
    toast.success("item removed");
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-8   border-b-4 border-gray-300 ">
        <div>
          <img
            className="w-[270px] mb-5"
            src={props.item.image}
            alt="cart-img"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-y-3 mb-5">
          <h1 className="font-semibold">{props.item.title}</h1>
          <h1 className="text-[13px] text-gray-700">
            {props.item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center w-full">
            <p className="text-blue-700 font-semibold">${props.item.price}</p>
            <div
              className="bg-red-200 p-2 rounded-full hover:cursor-pointer text-red"
              onClick={removeFromCart}
            >
              <MdDelete color="red" size="13" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;