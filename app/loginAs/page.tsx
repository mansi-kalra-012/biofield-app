import React from 'react'
import styles from './loginAs/loginAs.module.css'
// import farmer from "../../../images/farmer.png";
// import mover from "/images/mover.png";
// import industry from "../../../images/industry.png";

function LoginAs() {
  return (
    <div>
      <div className={styles.mainC}>
      <div className={styles.text1}>Login As</div>
      <div className={styles.text2}>Choose any one of the following</div>
      <div className={styles.container}>
        <img src="/images/farmer.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Farmer</div>
      </div>
      <div className={styles.container}>
        <img src="/images/mover.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Mover</div>
      </div>
      <div className={styles.container}>
        <img src="/images/industry.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Factory</div>
      </div>

      </div>
    </div>
  )
}

export default LoginAs
