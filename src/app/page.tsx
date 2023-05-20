"use client";
import React, { useEffect } from "react";
import axios from "axios";

import Home from "@modules/Home";

const url = process.env.ENV === "dev" ? `${process.env.DEV_DOMAIN}/api/userlog` : `${process.env.PRD_DOMAIN}/api/userlog`;

const Page = () => {
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(url);
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
