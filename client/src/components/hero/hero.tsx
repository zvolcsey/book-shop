import styles from "./hero.module.css"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["text-container"]}>
        <h1>Welcome</h1>
        <h2>Buy Awesome Books</h2>
      </div>
    </div>
  )
}
