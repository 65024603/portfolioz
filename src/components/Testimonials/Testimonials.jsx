import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          He works very quickly and very well.
          </p>
          <img
            src="src/components/Testimonials/894f156accbcbff8a5a406a1ba504bb8.jpg"
            alt=""
          />
          <h4>Aum</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          He is friendly and works quickly.
          </p>
          <img
            src="src/components/Testimonials/9395847a93b4f8b1af37905351af2cb8.jpg"
            alt=""
          />
          <h4>frist</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          He was friendly and always sent me work to review before giving it to me.
          </p>
          <img
            src="src/components/Testimonials/c186c89ed17db6677ae7d2c1f9592b25.jpg"
            alt=""
          />
          <h4>ball</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;