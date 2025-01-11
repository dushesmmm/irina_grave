import React from "react";
import Gallery from "../UI/gallery/Gallery";
import { progress } from "@/pages/api/data/progress";

const Design = () => {
  return (
    <div>
      <Gallery projects={progress} />
    </div>
  );
};

export default Design;
