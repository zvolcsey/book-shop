import { Link } from "react-router-dom"
import type { IBookPreviewProps } from "../../app/types/books.types"
import styles from "./book-preview.module.css"
import { Button } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BookPreview({ book }: IBookPreviewProps) {
  const { id, slug, cover, title, description, author, price } = book
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
      <div className={styles.meta}>
        <div className={styles["meta-details"]}>
          <div className={styles.heading}>
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
          </div>
          <p>{`${description.substring(0, 150)}${
            description.length > 80 ? "..." : ""
          }`}</p>
        </div>
        <div className={styles["actions-container"]}>
          <p className={styles.price}>{price} USD</p>
          <Button
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            className={styles.btn}
            onClick={handleAddToCart}
            colorScheme="orange"
            variant="outline"
            border="none"
            size="md"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  )
}
