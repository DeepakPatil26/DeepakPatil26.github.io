import React from "react";
import styles from "./Home.module.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import DeepakPatil_Resume from "./DeepakPatil_Resume.pdf";

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <div className={styles.home_img}>
          <div className={styles.cover}></div>
          <img
            className={styles.image}
            src={process.env.PUBLIC_URL + "/profile/profilePic.png"}
            height={"300px"}
          />
        </div>
      </div>

      <div className={styles.home_right}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>
          Deepak <span>Patil.</span>
        </h1>
        {/* <h1 className={styles.heading_2}>I build things for the web.</h1> */}
        <p className={styles.desc}>
          Aspiring Full-Stack Web Devloper with building websites using
          JavaScript and React.
        </p>
        <div className={styles.social_icons}>
          <a href="https://github.com/deepakpatil26" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/deepakpatil26/" target="_blank">
            <FiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/deepak_patil.2698/"
            target="_blank"
          >
            <FiInstagram />
          </a>
        </div>

        <div className={styles.lcr_buttonContainer}>
          <a href={DeepakPatil_Resume} target="_blank" download>
            <button
              onClick={() =>
                window.open(
                  `https://drive.google.com/file/d/11b81nB8y1rGlRvF4O7U1d09EsiKAN-8q/view?usp=share_link`
                )
              }
              className={styles.resumeBtn}
            >
              Download CV
            </button>
          </a>

          <a href="#contact">
            <button className={styles.contactBtn}>Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
