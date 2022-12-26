import React from "react";
import styles from "../../style";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className={`min-h-[80vh] items-center ${styles.flexStart}`}>
        
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
