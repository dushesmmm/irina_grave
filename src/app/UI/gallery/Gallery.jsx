"use client";

import { useState } from "react";
import classes from "./Gallery.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Gallery = ({projects}) => {
  const [showImagesOnly, setShowImagesOnly] = useState(false);

  const onlyImages = () => {
    setShowImagesOnly(true);
  };
  const notOnlyImages = () => {
    setShowImagesOnly(false);
  };

  const { t } = useTranslation();

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
                <h2>{t(`project${project.id}.title`)}</h2>
                <p>{t(`project${project.id}.description`)}</p>
                <Link href={project.name}>{t(`project${project.id}.linkText`)}</Link>
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
              <Link className={classes.link} href={`${project.name}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={classes.two}
                />
                <h2 className={classes.title}>{t(`project${project.id}.title`)}</h2>
                <p className={classes.category}>{t(`project${project.id}.category`)}</p>
                <p className={classes.description}>{t(`project${project.id}.description`)}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
