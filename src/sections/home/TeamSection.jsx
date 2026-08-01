import React from "react";

const TEAM_MEMBERS = [
  {
    name: "Amir Iqbal",
    role: "Founder & CEO",
    img: "/images/Amir.png",
  },
  {
    name: "Irtaza Arshad",
    role: "Business Development Head",
    img: "/images/Irtaza.png",
  },
  {
    name: "Sheraz Chaudhary",
    role: "Marketing Head",
    img: "/images/sherry.jpeg",
  },
  {
    name: "Samar Iqbal",
    role: "Development Head",
    img: "/images/samar.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
            Our Team
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Meet the experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group w-full max-w-[320px] cursor-pointer"
              >
                {/* Image Container */}
                <div className="mb-6 aspect-[4/5] overflow-hidden rounded-2xl bg-gray-800">
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-lg text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}