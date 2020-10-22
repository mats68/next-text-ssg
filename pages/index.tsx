import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.main}>Main</div>
    </div>
  );
}
