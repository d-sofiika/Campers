import css from "./PhotoGallery.module.css";

export default function PhotoGallery({ gallery }) {
  return (

      <ul className={css.galleryList}>
        {gallery.map((photo, index) => (
          <li key={index} className={css.galleryItem}>
            <img
              className={css.swiperImg}
              src={photo.thumb}
              alt={`photo-${index}`}
            />
          </li>
        ))}
      </ul>
 
  );
}
