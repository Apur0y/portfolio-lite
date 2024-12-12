import React from "react";

const Banner = () => {
  return (
    <div className="my-12 mx-auto flex justify-between w-11/12">
      {/* section-one */}
      <section className="my-9">
        <img src="https://i.ibb.co.com/phx8r1z/profile2.jpg" alt="" className="h-72 w-72 rounded-full" />
      </section>

      {/* section-two */}
      <section>

        <h1 className="text-2xl font-semibold lg:text-8xl">I am <br /> <span className="text-8xl">Apu Roy</span><br /> Full-Stack Developer</h1>

      </section>

      {/* section-three */}
      <section>

      </section>
    </div>
  );
};

export default Banner;
