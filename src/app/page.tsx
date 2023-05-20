"use client";
import React, { useEffect } from "react";
import axios from "axios";

import Home from "@modules/Home";

const Page = () => {
  useEffect(() => {
    async function fetchUAData() {
      const URI = `https://charles-sin.vercel.app/api/userlog/?browserRef=${document.referrer}`;

      const { data } = await axios.get(URI);
      console.log(data);
    }
    fetchUAData();
  }, []);

  return (
    <div id="__home">
      <Home />
    </div>
  );
};

export default Page;
