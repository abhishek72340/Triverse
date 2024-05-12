import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      <div>
        <div className="logo-two-container">
          <img src="/images/logo2.png" alt="logo2" className="logo-two" />
        </div>
        <div className="footer-text-container">
          <div className="footer-text">
            <p>
              <b>DISCOVERY WELMONT</b>
              <br />
              <br />
              Introduction
              <br />
              The Philosophy
              <br />
              The Welmont Way
              <br />
              Evolutionary Curriculum
            </p>
            <p>
              <b>PROGRAMS</b>
              <br />
              <br />
              Play group
              <br />
              Nursery
              <br />
              Junior KG
              <br />
              Senior KG
              <br />
              Day care
            </p>
            <p>
              <b>FACILITIES</b>
              <br />
              <br />
              Learning Center
              <br />
              Safety & Hygiene
              <br />
              Outdoor Play
            </p>
            <p>
              <b>ABOUT US</b>
              <br />
              <br />
              Vision
              <br />
              Founders
              <br />
              Team
            </p>
            <p>
              <b>Blog</b>
              <br />
              <br />
              New blog
              <br />
            </p>
          </div>
        </div>

        <div className="footer-input-container">
          <input
            type="text"
            placeholder="Enter your email to subscribe to our newsletter "
            className="footer-input"
          />
        </div>
        <div className="footer-btn">
          <button>Subscribe</button>
        </div>
        <div className="footer-circle-container">
          <div className="footer-circle">T</div>
          <div className="footer-circle">E</div>
          <div className="footer-circle">A</div>
        </div>
        <div className="contact">
          <p>info@welmont pre-school.com</p>
          <p>info@welmont pre-school.com</p>
          <p>
            WELMONT EDUVENTURES PVT.LTD.
            <br />
            C-57 Janpath, Lalkothi, Jaipur-302015
          </p>
        </div>
        <img
          src="/images/thread6.png"
          alt="thread6"
          className="footer-thread-six"
        />
        <img
          src="/images/thread7.png"
          alt="thread6"
          className="footer-thread-seventh"
        />
        <img src="/images/cloud.png" alt="cloud" className="cloud" />
      </div>
    </>
  );
};

export default FooterSection;
