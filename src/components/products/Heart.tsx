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
        className="hover:bg-slate-200 shadow-md dark:text-black absolute top-1 md:top-2 right-2 md:right-[-40px] duration-300 group-hover:right-2 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[20px]"
      >
        {token ? (
          product?.is_liked ? (
            <IoMdHeart className="text-red-500" />
          ) : (
            <IoMdHeartEmpty />
          )
        ) : wishlist?.some((item) => item.id === product.id) ? (
          <IoMdHeart className="text-red-500" />
        ) : (
          <IoMdHeartEmpty />
        )}
      </button>
    </div>
  );
};

export default React.memo(Heart);
