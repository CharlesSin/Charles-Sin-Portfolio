"use client";
import React, { useEffect } from "react";
import axios from "axios";

import Home from "@modules/Home";

const Page = () => {
  useEffect(() => {
    async function fetchData() {
      const URL = process.env.ENV === "dev" ? `${process.env.DEV_DOMAIN}/api/userlog` : `${process.env.PRD_DOMAIN}/api/userlog`;
      const URI = "https://charles-sin.vercel.app/api/userlog";
      
      console.log({ URL });
      console.log("process.env.ENV: " + process.env.ENV);
      console.log("process.env.DEV_DOMAIN: " + process.env.DEV_DOMAIN);
      console.log("process.env.PRD_DOMAIN: " + process.env.PRD_DOMAIN);

      const { data } = await axios.get(URI);
      console.log("Component will be unmount");
      console.log({ data });
    }
    fetchData();
  }, []);

  return (
    <div id="__home">
      <Home />
    </div>
  );
};

export default Page;
