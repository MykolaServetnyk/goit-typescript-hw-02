import css from "./ImageCard.module.css";
import { Urls, Props } from "./ImageCard.types";

export default function ImageCard({
  alt_description,
  urls,
}:Props) {
  return (
    <div className={css.container}>
      <img className={css.img} src={urls.small} alt={alt_description} />
    </div>
  );
}
