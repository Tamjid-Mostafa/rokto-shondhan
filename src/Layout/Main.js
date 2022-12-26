import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import styles from "../style";

const Main = () => {
  return (
    <>
      <div className="bg-image w-full overflow-hidden">
        <div
          className={`${styles.paddingX} ${styles.flexCenter} bg-nav-gradient`}
        >
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
