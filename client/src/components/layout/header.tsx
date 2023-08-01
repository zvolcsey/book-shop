import { Link, NavLink } from "react-router-dom"
import styles from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@chakra-ui/react"
import Brand from "../brand/brand"

export default function Header() {
  return (
    <header className={styles.container} data-testid="header">
      <div className={styles["upper-container"]}>
        <Brand />
        <div className={styles["right-side"]}>
          <div>
            <Button
              colorScheme="orange"
              variant="ghost"
              className={styles["search-btn"]}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
            <Button
              colorScheme="orange"
              as={Link}
              to="/sign-in"
              className={styles["sign-in-btn"]}
            >
              Sign in
            </Button>
          </div>
          <Button variant="ghost" className={styles["cart-btn"]}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>0</span>
          </Button>
        </div>
      </div>
      <ul className={styles["bottom-container"]}>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </header>
  )
}
