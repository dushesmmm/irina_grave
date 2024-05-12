"use client";

import { useState } from "react";
import classes from "./Gallery.module.css";
import Link from "next/link";
import Image from "next/image";

const Gallery = ({projects}) => {
  const [showImagesOnly, setShowImagesOnly] = useState(false);

  const onlyImages = () => {
    setShowImagesOnly(true);
  };
  const notOnlyImages = () => {
    setShowImagesOnly(false);
  };

  return (
    <div>
      <div
        className={`${classes.burger} ${!showImagesOnly ? classes.active : ""}`}
        onClick={notOnlyImages}
      >
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
      <button
        className={`${classes.square} ${showImagesOnly ? classes.active : ""}`}
        onClick={onlyImages}
      />
      <div
        className={`${classes.wrapper} ${
          showImagesOnly ? classes.doubleWrapper : ""
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${classes.project} ${
              index % 2 === 0 && !showImagesOnly ? classes.even : classes.odd
            } ${showImagesOnly ? classes.doubleProjects : ""}`}
          >
            {!showImagesOnly && (
              <div className={classes.text}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link href={`/residential-design/project/${project.id}`}>посмотреть проект</Link>
              </div>
            )}
            {!showImagesOnly && (
              <Image
                src={project.image}
                alt={project.title}
                className={classes.image}
              />
            )}
            {showImagesOnly && (
              <Link className={classes.link} href='/'>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={classes.two}
                />
                <h2 className={classes.title}>{project.title}</h2>
                <p className={classes.category}>{project.category}</p>
                <p className={classes.description}>{project.description}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
