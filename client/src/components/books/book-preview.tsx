import { Link } from "react-router-dom"
import type { IBookPreviewProps } from "../../app/types/books.types"
import styles from "./book-preview.module.css"

export default function BookPreview({ book }: IBookPreviewProps) {
  const { id, slug, cover, title, author, onlinePrice, originalPrice } = book
  const handleAddToCart = () => {
    // TODO
    return null
  }

  return (
    <article className={styles.card}>
      <Link to={`/book/${slug}-${id}`} className={styles["image-container"]}>
        {cover ? (
          <img src={cover} alt={`Cover of the ${title}`} />
        ) : (
          <figure
            aria-label="No image available"
            className={styles["no-image"]}
          >
            No image available
          </figure>
        )}
      </Link>
      <Link to={`/book/${slug}-${id}`} className={styles["title-url"]}>
        <h2 className={styles.title}>{`${title.substring(0, 25)}${
          title.length > 25 ? "..." : ""
        }`}</h2>
      </Link>
      <Link to={`/author/${author.slug}-${author.id}`}>
        <h3 className={styles.author}>{`${author.name.substring(0, 25)}${
          author.name.length > 25 ? "..." : ""
        }`}</h3>
      </Link>
      <div className={styles["price-container"]}>
        <p className={`${styles.price} ${styles["online-price"]}`}>
          Online Price: <span>{onlinePrice} USD</span>
        </p>
        <p className={`${styles.price} ${styles["original-price"]}`}>
          Original Price: <span>{originalPrice} USD</span>
        </p>
      </div>
      <button className={styles.btn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </article>
  )
}
