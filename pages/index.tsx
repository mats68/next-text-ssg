import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";

export default function Home() {
  const [showSide, setShowSide] = useState(true);
  const onClick = () => {
    setShowSide((cur) => !cur);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          type='button'
          className='btn btn-flat btn-large transparent waves-effect'
          style={{fontSize: '30px'}}
          onClick={onClick}>
          <FcMenu />
        </button>
      </div>
      <div className={styles.sidebar} hidden={!showSide}>
        Sidebar
      </div>
      <div className={showSide ? styles.main : styles.mainfull}>Main</div>
    </div>
  );
}
