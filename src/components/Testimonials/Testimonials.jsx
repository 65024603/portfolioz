import React from "react";
import styles from "./Testimonials.module.css";

const user ={
  img1:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/380397217_1055094202165532_7417614165549358552_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGF10JXHQDlzerGSJmO7gIMC2mNnr68VYALaY2evrxVgJl78W3tWiik-vYDDobSlGicFj2ljxE7nGsbE4ksAbdN&_nc_ohc=WCrAnfIP43gAX89RvGy&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdR3AvWYhLQtKdrWLdGO6uj-IV9vL6RCLHN4j4sQchkcew&oe=66101EE4',
  img2:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/346111085_570156761894370_7159655241146137491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFN6O0S-NshW3TEYow4gfywVSkAeZaEVItVKQB5loRUi1dvvm5d6Q9B59X_8aNp1OMueny3VBP8pueSl7Bkcyio&_nc_ohc=htrSl13cPVcAX9vaoEc&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdSu4VBPNzlqD9C_2aBUPikc6i-83erdWUzNoADngRsiFw&oe=660FF222',
  img3:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/325598658_566363708683479_6098538769196112196_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFdVXtDtqlZmBVGnGk0mC057WHkuWM0vrztYeS5YzS-vFrFq4Cpb6gR2heLC8Kx0z9JnoiZwLOQI1vsBIugRNL_&_nc_ohc=M4NbjNomZiUAX8H3tlP&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdTwj8Bgp-u80s9gYJpx6S3_duKAfVfWL_Z3viDuGrK2fg&oe=660FF0E7',
}
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
            src={user.img1}
          />
          <h4>Aum</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          He is friendly and works quickly.
          </p>
          <img
            src={user.img2}
          />
          <h4>frist</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          He was friendly and always sent me work to review before giving it to me.
          </p>
          <img
            src={user.img3}
          />
          <h4>ball</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;