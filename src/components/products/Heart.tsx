import { RootState } from "@/redux";
// import { useToggleWishlitMutation } from "@/redux/api/wishlist-api";
// import { toggleLike } from "@/redux/features/wishlist-slice";
import { IProduct } from "@/types";
import React from "react";
import { IoMdHeartEmpty, IoMdHeart  } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useToggleWishlitMutation } from "../../redux/api/wishlist-api";
import { toggleLike } from "../../redux/features/wishlist-slice";

const Heart = ({product}:{product: IProduct}) => {
    const [toggleWishlist] = useToggleWishlitMutation()
    const {id: clientId} = useSelector((state: RootState)=> state.customer.value)
    const token = useSelector((state: RootState)=> state.token.access_token)
    const wishlist = useSelector((state: RootState)=> state.wishlist.value)
    const dispatch = useDispatch()

    

    const handleLike = ()=>{
      if(token){
        toggleWishlist({productId: product.id, clientId: Number(clientId)})
      }else{
        dispatch(toggleLike(product))
      }
    }
  return (
    <div>
      <button
        onClick={handleLike}
        className="absolute top-1 right-1 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-[20px] transition-all duration-300 hover:bg-gray-200"
      >
        {wishlist?.some((item) => item.id === product.id) ? (
          <IoMdHeart className="text-xl text-primary" />
        ) : (
          <IoMdHeartEmpty className="text-xl text-primary" />
        )}
      </button>
    </div>
  );
};

export default React.memo(Heart);
