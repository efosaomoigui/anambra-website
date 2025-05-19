import styles from "./LightSection.module.css";

export default function LightSection() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: "url('/images/light-bg.png')" }}
    >
      <div className={styles.sectionInner}>
        <div className={styles.glassCard}>
          {/* Title */}
          <h2 className={styles.title}>Light of the Nation</h2>

          {/* Stats */}
          <div className={styles.statWrapper}>
            <div className={styles.statBox}>
              <h2 className={styles.statValue}>6M</h2>
              <p className={styles.statLabel}>Beautiful People</p>
            </div>
            <div className={styles.statBox}>
              <h2 className={styles.statValue}>No 1</h2>
              <p className={styles.statLabel}>Economy in South East</p>
            </div>
            <div className={styles.statBox}>
              <h2 className={styles.statValue}>₦200B+</h2>
              <p className={styles.statLabel}>Annual Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
