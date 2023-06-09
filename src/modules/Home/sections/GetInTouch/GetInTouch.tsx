import React from "react";
import Button from "@components/Button";

const GetInTouch = () => {
  return (
    <section id="contact" className="text-center my-4">
      <h2 className="flex items-center gap-2 text-md justify-center font-normal text-sky-400">
        <span className=" font-mono">04. </span>
        What next?
      </h2>

      <h3 className="font-medium text-slate-300 text-4xl text-center mt-5"> Get In Touch </h3>

      <p className="text-slate-400 max-w-[500px] mx-auto my-3 mb-10">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to
        you!
      </p>

      <Button href="mailto:eugeneyiew1993@gmail.com" outlined>
        {" "}
        Say Hello{" "}
      </Button>
    </section>
  );
};

export default GetInTouch;
