import { Link } from "react-router-dom"
import type { IBookPreviewProps } from "../../app/types/props.types"
import styles from "./book-preview.module.css"
import { Button } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IAuthor } from "@shared/books.types"

export default function BookPreview({ book }: IBookPreviewProps) {
  const { id, slug, coverImg, title, description, authors, price } = book
  const handleAddToCart = () => {
    // TODO
    return null
  }

  return (
    <article className={styles.card}>
      <Link to={`/book/${slug}-${id}`} className={styles["image-container"]}>
        {coverImg ? (
          <img src={coverImg} alt={`Cover of the ${title}`} />
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
            <div className={styles["author-group"]}>
              {authors.slice(0, 2).map((people: IAuthor) => {
                const fullName =
                  people.author.firstName + " " + people.author.lastName
                return (
                  <Link
                    key={people.author.id}
                    to={`/author/${people.author.slug}-${people.author.id}`}
                  >
                    <h3>{fullName}</h3>
                  </Link>
                )
              })}
            </div>
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
