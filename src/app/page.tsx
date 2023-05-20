"use client";
import React, { useEffect } from "react";
import axios from "axios";

import Home from "@modules/Home";

const URL = process.env.ENV === "dev" ? `${process.env.DEV_DOMAIN}/api/userlog` : `${process.env.PRD_DOMAIN}/api/userlog`;

const Page = () => {
  useEffect(() => {
    async function fetchData() {
      console.log({ URL });
      const { data } = await axios.get(URL);
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
