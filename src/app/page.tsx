"use client";
import React, { useEffect } from "react";
import axios from "axios";

import Home from "@modules/Home";

const Page = () => {
  // useEffect(() => {
  //   async function fetchUAData() {
  //     const URI = `https://charles-sin.vercel.app/api/userlog/?browserRef=${document.referrer}`;

  //     try {
  //       await axios.get(URI);
  //     } catch (e) {
  //       console.log({ e });
  //     }
  //   }
  //   fetchUAData();
  // }, []);

  return (
    <div id="__home">
      <Home />
    </div>
  );
};

export default Page;
