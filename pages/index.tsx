import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.main}>Main</div>
      <div className={styles.box}>
        <div className={styles.box}>Box-1</div>
        <div className={styles.box}>Box-2</div>
        <div className={styles.box}>Box-3</div>
        <div className={styles.box}>Box-4</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
