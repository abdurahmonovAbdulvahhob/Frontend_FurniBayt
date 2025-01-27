import kubc from "../../assets/images/trophy 1.png"
import galc from "../../assets/images/guarantee.png"
import qol from "../../assets/images/shipping.png"
import sup from "../../assets/images/customer-support.png"
const ShopAdvantage = () => {

  return (
    <div className="flex items-center justify-between  mt-14 bg-[#F9F1E7] p-12 border border-[#EAEAEA] font-poppins">
      <div className="flex items-center container justify-between ">
        <div className="flex items-center  gap-2">
          <img src={kubc} alt="High Quality" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold  text-gray-600">High Quality</h2>
            <p className="font-poppins">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={galc} alt="Warranty Protection" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-600">
              Warranty Protection
            </h2>
            <p className="font-poppins">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={qol} alt="Free shipping" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-600">Free shipping</h2>
            <p className="font-poppins">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={sup} alt="24 / 7 Support" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-600">24 / 7 Support</h2>
            <p className="font-poppins">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ShopAdvantage