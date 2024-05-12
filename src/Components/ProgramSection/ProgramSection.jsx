import "./ProgramSection.css";
const ProgramSection = () => {
  return (
    <>
      <p className="program-heading">welmont programs</p>
      <div className="program-bubble"></div>

      <div className="program-img-container">
        <img src="/images/program.png" alt="program" className="program-img" />
        <img src="/images/thread5.png" alt="thread" className="thread-five" />
      </div>

      {/* *****************play************************** */}
      <div className="play-container">
        <div className="play">
          <p className="play-heading">
            learning delivered:
            <br />
            the way they love it!
          </p>
          <div className="play-bubble"></div>
          <div className="play-activity">
            <img
              src="/images/thread3.png"
              alt="thread"
              className="play-thread-three"
            />
            <div className="play-img-benefits">
              <img src="/images/play1.png" alt="play1" />
              <p>
                <span className="play-name"> DANCE</span>
                <br />
                <b className="play-bold-text">WIGGLYWAY</b>
                <br />
                <b className="play-status">
                  When kids wiggle, the heart tickles.
                </b>
                <br />
                <br />
                <span className="play-benefits">
                  A fun activity that develops <br />
                  coordination, balance,
                  <br /> physical strength & flexibility.
                </span>
              </p>
            </div>
            <div className="play-img-benefits">
              <img src="/images/play2.png" alt="play2" />
              <p>
                <span className="play-name">MUSIC</span>
                <br />
                <b className="play-bold-text">WELTUNES</b>
                <br />
                <b className="play-status">Whats life without music?.</b>
                <br />
                <br />
                <span className="play-benefits">
                  {" "}
                  Enhances cognitive abilities,
                  <br /> creativity, hand-eye coordination
                  <br />
                  and makes kids better
                  <br />
                  listeners.
                </span>
              </p>
            </div>
            <div className="play-img-benefits">
              <img src="/images/play3.png" alt="play3" />
              <p>
                <span className="play-name"> LINGUISTICS</span>
                <br />
                <b className="play-bold-text">WORDWAY</b>
                <br />
                <b className="play-status">Its the wordly way.</b>
                <br />
                <br />
                <span className="play-benefits">
                  {" "}
                  A phonic-based language <br /> program that emphasizes <br />{" "}
                  pronounciation, diction, <br /> proficiency & phonics.
                </span>
              </p>
            </div>
            <div className="play-img-benefits">
              <img src="/images/play4.png" alt="play4" />
              <p>
                <span className="play-name"> WELLNESS</span>
                <br />
                <b className="play-bold-text">WELLWAY</b>
                <br />
                <b className="play-status">A happy child is a healthy child.</b>
                <br />
                <br />
                <span className="play-benefits">
                  Builds gross & fine motor <br />
                  skills, coordination, balance, <br /> flexibility & strength.
                </span>
              </p>
            </div>
            <div className="play-img-benefits">
              <img src="/images/play5.png" alt="play5" />
              <p>
                <span className="play-name"> STORYTELLING</span>
                <br />
                <b className="play-bold-text">ONCE UPON A TIME</b>
                <br />
                <b className="play-status">Its story time!</b>
                <br />
                <br />
                <span className="play-benefits">
                  A valuable tool to enrich kids <br />
                  imagination and convey <br />
                  tradition & culture in a <br />
                  fun way.
                </span>
              </p>
            </div>
          </div>
          <div className="play-thread">
            <img src="/images/thread2.png" alt="thread" />
            <img src="/images/thread4.png" alt="thread" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
