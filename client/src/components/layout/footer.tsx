import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer">
      <p>Portfolio book shop project</p>
      <p>
        Licence:{" "}
        <a href="https://github.com/zvolcsey/book-shop/blob/main/LICENSE">
          MIT
        </a>
      </p>
    </footer>
  )
}
