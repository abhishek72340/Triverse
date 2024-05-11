import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <img src="/images/child.png" alt="child" className="child-img" />
        <img
          src="/images/butterfly.png"
          alt="butterfly"
          className="butterfly-img"
        />
      </div>
      <div className="thread-container">
        <img src="/images/thread3.png" alt="thread" className="thread-three" />
        <img src="/images/thread2.png" alt="thread" className="thread-two" />
      </div>
      <img src="/images/wave.png" alt="wave" className="wave" />
      <img src="/images/thread4.png" alt="thread" className="thread-four" />
    </>
  );
};

export default HeroSection;
