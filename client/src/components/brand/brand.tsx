import { Link } from "react-router-dom"
import styles from "./brand.module.css"

export default function Brand() {
  return (
    <Link to="/" className={styles.link}>
      BookShop
    </Link>
  )
}
