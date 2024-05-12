import React from "react";
import Gallery from "../UI/gallery/Gallery";

import image1 from "../../../public/images/extra/extra 1/project image 1.jpg";

const projects = [
  {
    id: 1,
    title: "MOSBUILD стенд maximal luxe",
    description:
      "Заказчики, семья с двумя детьми, искали в Москве большую квартиру — не менее 300 метров. И уже на этапе поисков советовались с дизайнером. «Таких больших квартир на рынке немного. Мы вместе смотрели планировки и оценивали, можно ли получить из них то, что необходимо, в частности, спальни для всех членов членов семьи, каждую со своим санузлом и гардеробными», — рассказывает Ирина.",
    link: "/",
    image: image1,
    category: "ВЫСТАВКА | МОСКВА",
  },
];

const Design = () => {
  return (
    <div>
      <Gallery projects={projects} />
    </div>
  );
};

export default Design;
