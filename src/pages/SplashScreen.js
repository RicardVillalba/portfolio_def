import React from "react";
import './../css/SplashScreen.css'

const SplashScreen = (props) => {
  setTimeout(() => {
    props.history.push("/home");
  }, 8000);

  return (
    <div className="animated-title">
<div className="text-top">
  <div>
    <span>Hi!</span>
    <span>I'm Ricard</span>
  </div>
</div>
<div className="text-bottom">
  <div>Welcome to my website</div>
</div>
</div>
  );
};

export default SplashScreen;






