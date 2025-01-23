import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import ins1 from "@/assets/images/ins1.png";
import ins2 from "@/assets/images/inst2.png";
import ins3 from "@/assets/images/inst3.png";
import "./Insparation.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Insparation = () => {
  const images = [
    {
      src: ins1,
      title: "Modern Living Room",
    },
    {
      src: ins2,
      title: "Minimalist Bedroom",
    },
    {
      src: ins3,
      title: "Elegant Dining Area",
    },
  ];

  return (
    <div id="inspiration" className="bg-[#FCF8F3] py-16">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 px-6 lg:px-0">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            50+ Beautiful Rooms Inspiration
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our designers have crafted a variety of beautiful room prototypes to
            inspire your next space transformation.
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#9C792A] text-white py-3 px-6 rounded-md shadow-md font-medium transition-all">
            Explore More
          </button>
        </div>

        <div className="lg:w-1/2">
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="rounded-lg shadow-lg w-full transition-transform duration-300"
                  />

                  <div className="absolute bottom-10 left-5 w-[217px] bg-white bg-opacity-30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center px-6">
                    <div className="text-black py-5">
                      <p className="text-sm mb-1">01 - Bed Room</p>
                      <h3 className="text-[28px] font-bold">Inner Peace</h3>
                    </div>
                    <button className="absolute bottom-0 left-[calc(5%+196px)] bg-[#B88E2F] hover:bg-[#9C792A] text-white py-2 px-4  shadow-md transition-all">
                      →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Insparation;
