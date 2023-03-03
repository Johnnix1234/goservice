import Button from "./Button";
import "./Homesection.css";
import "../App.css";

const Homesec = () => {
  return (
    <div className="hero-container">
      <video src="../../images/video-2.mp4" autoPlay loop muted></video>
      {/* <img src="../../images/img-1.jpg" alt="" /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i class="fa-regular fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
};

export default Homesec;
