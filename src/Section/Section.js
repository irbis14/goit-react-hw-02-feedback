import styles from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.title}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
