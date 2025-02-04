import React from "react";
import team from "../../assets/images/team4.jpg";
import foun from "../../assets/images/foun.jpg";
import mdev from "../../assets/images/mdev.jpg";
import kofkon from "../../assets/images/kofkon.jpg";
import aziz from "../../assets/images/aziz.png";
import dd from "../../assets/images/dd.png";
import grill from "../../assets/images/girl.jpg";

const About = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${team})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-extrabold md:text-6xl">Meet Our Team</h1>
          <p className="text-lg mt-4 max-w-3xl">
            We are passionate professionals dedicated to success.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="container mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Expert Team
        </h2>
        <p className="text-center text-lg mb-14 max-w-2xl mx-auto">
          Our team consists of skilled professionals with years of experience in
          their respective fields.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              img: foun,
              name: "Abdulvahhob Abdurahmonov",
              role: "CEO & Founder",
            },
            { img: mdev, name: "Mirziyoxon Qodirov", role: "Marketing Head" },
            { img: kofkon, name: "Laziz Murodullayev", role: "Lead Developer" },
            { img: aziz, name: "Aziz To'raxonov", role: "Operation Developer" },
            {
              img: dd,
              name: "Doniyorbek Abdug'opporov",
              role: "Finance Manager",
            },
            {
              img: grill,
              name: "Mushtariy Abdurashidova",
              role: "Finance Manager",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 text-center 
              hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-64 h-64 md:w-72 md:h-72 rounded-full mx-auto mb-6 object-cover border-4 border-gray-300"
              />
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default React.memo(About);
