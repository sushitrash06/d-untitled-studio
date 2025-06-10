"use client";

import Image from "next/image";
import Footer from "../Component/footer";
import { nokora } from "../Font";

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20 bg-[#FFFAF1]">
      {/* About Us */}
      <section className="max-w-6xl mx-auto my-10 px-4 space-y-4 text-base md:text-lg lg:text-xl text-justify text-[#545454]">
        <h1 className={`${nokora.className} text-3xl text-[#585656] pt-20 mb-4`}>About Us</h1>
        <Image
          src="/img/logo.png"
          alt="Untitled Studio-1"
          width={500}
          height={500}
          className="mb-6 mx-auto"
        />
        <p>
          <b>untitleDStudio-1</b> was founded by two passionate architects,{" "}
          <b>Rizky Chandra</b> and <b>Yuditia</b>, who share a common vision in redefining modern architectural practice. Established in 2015, the studio emerged from their shared commitment to create thoughtful, functional, and forward-thinking design solutions.
        </p>
        <p>
          With over a decade of combined experience across residential, commercial, and institutional projects, untitleDStudio-1 thrives at the intersection of conceptual creativity and technical precision.
        </p>
      </section>

      {/* Design Philosophy */}
      <section className="max-w-6xl mx-auto my-10 px-4 space-y-4 text-base md:text-lg lg:text-xl text-justify text-[#545454]">
        <div className="bg-[#D3C4A7] inline-block py-1 px-4 mb-4">
          <h2 className="text-xl">Design Philosophy</h2>
        </div>
        <p>
          <b>untitleDStudio-1</b> is passionate about creating design solutions for the major challenges we face today—how to build sustainably, how to create environments that are both diverse and delightful, and how to incorporate ergonomic principles.
        </p>
        <p>
          We believe design should respond to real problems, client needs, and local contexts. Locality is a core element in all of our work, inspiring us to combine contemporary architecture with environmental and cultural relevance.
        </p>
        <p>
          <b>We believe that great design is not the result of a single idea, but a synergy of ideas from many sources.</b> That’s why in every project, we collaborate closely with clients and partners to create meaningful, thoughtful design solutions.
        </p>
      </section>

      {/* Our People */}
      <section className="max-w-6xl mx-auto my-10 px-4 space-y-12">
        <div className="bg-[#D3C4A7] inline-block py-1 px-4 mb-4">
          <h2 className="text-xl">Our People</h2>
        </div>

        {/* Yuditia */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-base md:text-lg lg:text-xl text-justify text-[#545454]">
          <div className="flex-1">
            <p>
              <b>Yuditia</b> brings over a decade of experience spanning residential, commercial, and institutional projects. His strength lies in comprehensive design thinking—ranging from strong conceptualization to precise planning and project oversight. Passionate about sustainability and user well-being, he is committed to creating spaces that are not only aesthetically refined but functionally responsive.
            </p>
          </div>
          <div className="w-full md:w-64 h-72 relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/img/yuditia.jpg"
              alt="Yuditia"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Rizky Chandra */}
        <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 text-base md:text-lg lg:text-xl text-justify text-[#545454]">
          <div className="flex-1">
            <p>
              <b>Rizky Chandra</b> has contributed to the industry through his work in architecture and interior consulting, specializing in project design coordination and team collaboration. His career reflects an agile ability to move between creative design roles and design management, contributing to practical yet imaginative outcomes.
            </p>
          </div>
          <div className="w-full md:w-64 h-72 relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/img/rizky-cp.png"
              alt="Rizky Chandra"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
