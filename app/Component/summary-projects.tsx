"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { robotoMono } from "../Font";
// import { IoIosArrowDropleft } from "react-icons/io";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

const projects = [
  { id: 1, image: "/img/project91.jpg", title: "Project 1" },
  { id: 2, image: "/img/project2.jpg", title: "Project 2" },
  { id: 3, image: "/img/project23.jpg", title: "Project 3" },
  { id: 4, image: "/img/project52.jpg", title: "Project 4" },
  { id: 5, image: "/img/project28.jpg", title: "Project 5" },
  { id: 6, image: "/img/project65.jpg", title: "Project 6" },
  { id: 7, image: "/img/project7.jpg", title: "Project 7" },
  { id: 8, image: "/img/project8.jpg", title: "Project 8" },
  { id: 9, image: "/img/project9.jpg", title: "Project 9" },
  { id: 10, image: "/img/project10.jpg", title: "Project 10" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SummaryProjects: React.FC = () => {
  return (
    <div className="bg-[#F5F5F5] py-8 px-4 text-center overflow-hidden">
      <div className="bg-[#D3C4A7] inline-block py-2 px-6 mb-4">
        <h2 className={`${robotoMono.className} text-gray-600 text-2xl`}>
          Projects Show
        </h2>
      </div>
      <p
        className={`${robotoMono.className} m-6 italic text-gray-600 text-base`}
      >
        <i>
          “We don’t just give clients what they want—we show them what they
          never imagined they could have.”
        </i>
      </p>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SummaryProjects;
