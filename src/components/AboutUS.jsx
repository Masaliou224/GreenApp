import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>À propos de nous</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Les déchets killers</h2>
            <p className={styles.paragraph}>
            Découvrez ici une procédure détaillée à
              propos de comment nous gérons les déchets
              à travers des différentes zones avec le processus
              de tri et nos différentes bonnes tournées.
              Notre équipe est composé de plusieurs jeunes
              motivés, dynamiques et engagés envers
              notre communauté avec des valeurs très
              strictes pour la bonne conduite de tous nos
              projets au sein de notre espace.
            </p>
            <img 
              src="/path-to-your-team-image.jpg"
              alt="Team"
              className={styles.teamImage}
            />
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Une vision d'aigle</h2>
          <p className={styles.paragraph}>
          Avoir un regard de près par rapport à la mentalité de nos entrepreneurs qui adoptent pour leurs face aux
            changements climatiques avec une approche authentique pour un avenir meilleur pour notre planète.
            Une vision d'aigle nous permet d'avoir une meilleure observation de notre zone d'intervention
            avec une approche très efficace qui conduira à avoir des résultats très satisfaisants pour notre clientèle
            garantie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;