import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Urls, User, Item, Tag, Props } from "./ImageGallery.types";


export default function ImageGallery({ items, onImageClick }: Props) {
  if (items.length === 0) {
    return null;
  }
console.log(items);
  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {items.map(({ id, alt_description, urls, likes, user, tags }) => (
          <li key={id} onClick={() => onImageClick(urls.regular, alt_description, tags, user.name, likes)}>
            <ImageCard
              alt_description={alt_description}
              urls={urls}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
