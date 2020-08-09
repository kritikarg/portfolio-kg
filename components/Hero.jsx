import styles from "../styles/hero.module.css";
import LandingBio from "./LandingBio";
import LandingHeading from "./LandingHeading";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="container">
      <div className={styles.hero}>
        <LandingHeading />
        <LandingBio />
        <Navbar />
      </div>
    </section>
  );
}
