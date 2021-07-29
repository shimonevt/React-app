import React from "react";
import PreloaderStyles from "./Preloader.module.css";
import preloader from './assets/loading.gif';
let Preloader = () => {
  return (
    <div className={PreloaderStyles.preloader}>
      <img
        className={PreloaderStyles.preloaderImg}
        src={preloader}
      />
    </div>
  );
};

export default Preloader;
