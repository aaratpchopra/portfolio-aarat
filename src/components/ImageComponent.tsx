import imageBuilder from "@sanity/image-url";
import sanityClient from "../client";
import { ImageComponentPropType } from "../Types";

const builder = imageBuilder(sanityClient);

function URLFor(source: any): any {
  return builder.image(source);
}

const ImageComponent = (props: ImageComponentPropType) => {
  return (
    <img
      src={props.img ? URLFor(props.img) : ""}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default ImageComponent;
