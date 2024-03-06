import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const user ={
  img1:'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/430246590_314171154612028_1788108683852445551_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFmxkgSAxTrlSjARnFp-ehZRMv1JIst2zNEy_Ukiy3bM2PUwsBDECGHIYlSdd_Y9NXFAn2Hg1O2eJ-eXbanvKjK&_nc_ohc=ThNXw9MqR8kAX-rWlvD&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdRK4MzP2ihHZo_oAeIVejDPo-xBFBsB2bb_N8ySslnC9w&oe=6610079C',
}
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}> My Name is </p>
            <h3 className={styles.text_2}>Aphisit Wanjan</h3>
            <p className={styles.text_3}>
            <div className={styles.port_items}>
        </div>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Web developer.",
                  1000,
                  // Same substring at the start will only be typed out once, initially
                  "programmer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "design application",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
            Success is the sum of small efforts
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.hero_image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;