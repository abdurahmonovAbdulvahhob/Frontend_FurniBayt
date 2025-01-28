import { useState, useEffect, useRef } from "react";
import { FaInfoCircle, FaStar, FaComments } from "react-icons/fa"; // Ikonalar uchun

interface ProductTabsProps {
  product: any;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [fadeIn, setFadeIn] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="min-h-full container mx-auto py-6 sm:py-10">
      <div className="border-b mb-6">
        <ul className="flex justify-between sm:justify-center gap-6 text-lg font-medium">
          <li>
            <button
              onClick={() => setActiveTab("description")}
              className={`cursor-pointer flex items-center gap-2 p-2 transition-colors duration-300 ${
                activeTab === "description"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <FaInfoCircle /> Description
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("additionalInfo")}
              className={`cursor-pointer flex items-center gap-2 p-2 transition-colors duration-300 ${
                activeTab === "additionalInfo"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <FaInfoCircle /> Additional Info
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`cursor-pointer flex items-center gap-2 p-2 transition-colors duration-300 ${
                activeTab === "reviews"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <FaComments /> Reviews
            </button>
          </li>
        </ul>
      </div>

      {/* Tab content */}
      <div className="mt-6 space-y-6">
        {activeTab === "description" && (
          <div
            ref={contentRef}
            className={`tab-content transition-opacity duration-500 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gray-700">
              {product?.description || "No description available."}
            </p>
          </div>
        )}
        {activeTab === "additionalInfo" && (
          <div
            ref={contentRef}
            className={`tab-content transition-opacity duration-500 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {Array.isArray(product?.additional_info) ? (
              <ul className="list-disc pl-5 text-gray-700">
                {product.additional_info.map((info: string, index: number) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                No additional information available.
              </p>
            )}
          </div>
        )}
        {activeTab === "reviews" && (
          <div
            ref={contentRef}
            className={`tab-content transition-opacity duration-500 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {product?.reviews?.length > 0 ? (
              product.reviews.map((review: any, index: number) => (
                <div key={index} className="border-t pt-4">
                  <div className="flex items-center gap-2">
                    {Array(review.rating)
                      .fill(null)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    <span className="text-gray-600 text-sm">
                      - {review.user}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
