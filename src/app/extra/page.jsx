import React from "react";
import Gallery from "../UI/gallery/Gallery";
import { extra } from "@/pages/api/data/extra";


const Design = () => {
  return (
    <div>
      <Gallery projects={extra} />
    </div>
  );
};

export default Design;
