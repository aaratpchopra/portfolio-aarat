import { useState, useEffect } from "react";
import sanityClient from "../client";
import { FetchImgComponentPropType } from "../Types";
import ImageComponent from "./ImageComponent";

const BackgroundImgComponent = (props: FetchImgComponentPropType) => {
  const [images, setImages] = useState<any>(null);
  let image: any;

  useEffect(() => {
    sanityClient.fetch(`*[_type == "images"]`).then((result) => {
      setImages(result);
    });
  }, []);

  if (images) {
    image = images.filter((value: any) => value.caption === props.name);
  }

  return (
    <ImageComponent
      img={image ? image[0].image : ""}
      alt={props.alt ? props.alt : "Image"}
      className={props.className ? props.className : ""}
    />
  );
};

export default BackgroundImgComponent;
