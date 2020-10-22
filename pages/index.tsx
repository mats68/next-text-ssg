import styles from '../styles/Home.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import {useState} from 'react'

export default function Home() {

  const [side, setSide]  = useState(false)
  const onClick = () => {
     setSide(cur => !cur)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onClick}>go up</button>
      </div>
      <div className={side ? styles.sidebarfull : styles.sidebar}>Sidebar</div>
      <div className={styles.main}>Main</div>
    </div>
  );
}
