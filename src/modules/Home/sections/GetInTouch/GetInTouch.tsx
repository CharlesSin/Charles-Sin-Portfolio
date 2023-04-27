import React from "react";
import Button from "@components/Button";

const GetInTouch = () => {
  return (
    <section id="contact" className="text-center my-4">
      <h2 className="flex items-center gap-2 text-md justify-center font-normal text-sky-400">
        <span className=" font-mono">04. </span>
        接下来
      </h2>

      <h3 className="font-medium text-slate-300 text-4xl text-center mt-5"> 与我联系 </h3>

      <p className="text-slate-400 max-w-[500px] mx-auto my-3 mb-10">虽然我目前没有在寻找任何新的机会，但我的收件箱总是打开的。 无论您有问题还是只想打个招呼，我都会尽力回复您！</p>

      <Button href="mailto:eugeneyiew1993@gmail.com" outlined>
        {" "}
        你好{" "}
      </Button>
    </section>
  );
};

export default GetInTouch;
