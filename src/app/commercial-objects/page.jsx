import React from "react";
import Gallery from "../UI/gallery/Gallery";
import { co } from "@/pages/api/data/co";

const residential = () => {
  return (
    <div>
      <Gallery projects={co} />
    </div>
  );
};

export default residential;