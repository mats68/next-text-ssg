import styles from '../styles/Home.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import {useState} from 'react'

export default function Home() {

  const [showSide, setShowSide]  = useState(true)
  const onClick = () => {
    setShowSide(cur => !cur)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.menubutton} onClick={onClick}>go up</button>
      </div>
      <div className={styles.sidebar} hidden={!showSide}>Sidebar</div>
      <div className={showSide ? styles.main : styles.mainfull}>Main</div>
    </div>
  );
}
