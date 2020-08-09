import styles from "../styles/hero.module.css";

export default function LandingBio() {
  return (
    <div className={styles.bio}>
      <p>
        Hello, I’m a UX Designer. I love things to be both beautiful and
        functional, and enjoy creating meaningful experiences for{" "}
        <span className="strikethrough">users</span>{" "}
        <span className="pink semi-bold">humans</span>!
      </p>
    </div>
  );
}
