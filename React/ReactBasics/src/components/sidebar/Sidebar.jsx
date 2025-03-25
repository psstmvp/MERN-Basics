import React from "react";
import Styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.section}>
        <div className={Styles.logo}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" width={100}/>
        </div>
      </div>
      <div className={Styles.section}>
        <div className={Styles.links}>Home</div>
        <div className={Styles.links}>Contact</div>
        <div className={Styles.links}>About</div>
      </div>
    </div>
  );
};

export default Sidebar;
