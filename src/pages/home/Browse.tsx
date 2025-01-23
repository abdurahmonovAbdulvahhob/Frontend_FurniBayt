import diningImg from "../../assets/images/diningImage.png";
import livingImg from "../../assets/images/livingImage.png";
import bedroomImg from "../../assets/images/bedroomImage.png";

const categories = [
  {
    imgSrc: diningImg,
    altText: "Dining",
    title: "Dining",
  },
  {
    imgSrc: livingImg,
    altText: "Living",
    title: "Living",
  },
  {
    imgSrc: bedroomImg,
    altText: "Bedroom",
    title: "Bedroom",
  },
];
const Browse = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Browse The Range
          </h2>
          <p className="text-[#666666] text-lg md:text-xl max-w-2xl mx-auto mt-2">
            Discover our collection of beautifully designed furniture to suit
            any space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="py-8 px-6 rounded-lg flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full max-w-[381px] h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-md"
                src={category.imgSrc}
                alt={category.altText}
              />
              <h3 className="text-[#333333] font-bold text-xl md:text-2xl">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;
