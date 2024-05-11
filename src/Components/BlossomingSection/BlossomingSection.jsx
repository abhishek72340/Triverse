import "./BlossomingSection.css";
const BlossomingSection = () => {
  return (
    <>
      <p className="blossoming-heading">
        the welmont way of blossoming a child
      </p>
      <p className="blossoming-statement-text">
        During this period of building foundational skills, your child is laying{" "}
        <br />
        the groundwork for the adult they will become. WelmontPreschool, through
        its
        <br />
        Evolutionary pedagogy and curriculum, achieves the process
        <br />
        with its beliefs in:
      </p>

      <div className="blossoming-btn-container">
        <div className="blossoming-btn-one">
          <button>Increasing Happiness Quotient of a child</button>

          <button>Adopting the Virtuous Circle way of teaching</button>
        </div>
        <div className="blossoming-btn-two">
          <button>
            Including `Sanskars`, the core Indian values in a child
          </button>
          <button>Use of welcoming and open body language by teachers</button>
        </div>
      </div>
      <div className="banner-text-container">
        <p className="banner-inner-text-first">
          children learn as they play
          <br /> most important, in play,
          <br /> children learn how to learn.
        </p>
        <p className="banner-inner-text-second">
          -O. FRED DONALDSON
          <br />
          Internationally recognized
          <br /> play specialist
        </p>
      </div>
      <div className="banner-container">
        <img src="/images/banner.png" alt="banner" className="banner" />
      </div>
    </>
  );
};

export default BlossomingSection;
