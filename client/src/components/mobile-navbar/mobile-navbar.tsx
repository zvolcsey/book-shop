import { Avatar, Button } from "@chakra-ui/react"
import styles from "./mobile-navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function MobileNavbar() {
  const [user] = useState<string>("")

  return (
    <div className={styles.container} data-testid="mobile-navbar">
      <Button variant="ghost" className={styles["search-btn"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
      {user ? (
        <Avatar name="John Doe" src="" size="md" className={styles.avatar} />
      ) : (
        <Button
          colorScheme="orange"
          size="md"
          as={Link}
          to="/sign-in"
          className={styles["sign-in-btn"]}
        >
          Sign in
        </Button>
      )}
      <Button variant="ghost" className={styles["menu-btn"]}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </div>
  )
}
