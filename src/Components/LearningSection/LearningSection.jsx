import "./LearningSection.css";
const LearningSection = () => {
  return (
    <>
      <p className="learning-heading">
        learning centres:
        <br />
        indoors and out in the open
      </p>
      <div className="learning-bubble"></div>

      {/* *********images************* */}
      <div>
        <div className="learning-img-separation">
          <div className="learning-img-first-container">
            <div className="learning-first-img-container">
              <img
                src="/images/learning1.png"
                alt="img"
                className="learning-first-img"
              />
              <p className="activity-room">ACTIVITY ROOM</p>

              <img
                src="/images/learning2.png"
                alt="img"
                className="learning-second-img"
              />
              <p className="outdoor-play-area">OUTDOOR PLAY AREA</p>
            </div>
            <div className="learning-second-img-container">
              <img
                src="/images/learning3.png"
                alt="img"
                className="learning-third-img"
              />
              <p className="pretend-play-system">
                PRETEND &<br /> PLAY SYSTEM
              </p>

              <img
                src="/images/learning4.png"
                alt="img"
                className="learning-fourth-img"
              />
              <p className="library-room">LIBRARY ROOM</p>
            </div>
            <div className="learning-third-img-container">
              <img
                src="/images/learning5.png"
                alt="img"
                className="learning-fifth-img"
              />
              <p className="dance-room">AV & DANCE ROOM</p>

              <img
                src="/images/learning6.png"
                alt="img"
                className="learning-sixth-img"
              />
              <p className="art-craft">ART & CRAFT</p>
            </div>
          </div>
          <div className="learning-img-second-container">
            <div className="learning-fourth-img-container">
              <img
                src="/images/learning7.png"
                alt="img"
                className="learning-seventh-img"
              />
              <img
                src="/images/learning8.png"
                alt="img"
                className="learning-eighth-img"
              />
            </div>
            <div className="learning-fifth-img-container">
              <img
                src="/images/learning9.png"
                alt="img"
                className="learning-ninth-img"
              />
              <img
                src="/images/learning10.png"
                alt="img"
                className="learning-tenth-img"
              />
              <div className="image-circle">
                climbing walls <br />
                ..................
                <br />
                telephones pipes
                <br />
                ..................
                <br />
                texture tiles
                <br />
                ..................
                <br />
                specially designed <br />
                play structure
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningSection;
