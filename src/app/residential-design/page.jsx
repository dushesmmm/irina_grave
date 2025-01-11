import React from "react";
import Gallery from "../UI/gallery/Gallery";
import { residentialDesignPages } from "@/pages/api/data/rdp";

const residential = () => {
  return (
    <div>
      <Gallery projects={residentialDesignPages} />
    </div>
  );
};

export default residential;