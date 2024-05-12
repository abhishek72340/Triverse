import "./RegistrationSection.css";
const RegistrationSection = () => {
  return (
    <>
      <p className="registration-heading">registration</p>
      <div className="registration-bubble"></div>
      <div className="registration-group-btn">
        <button>age group (as of 1st jan)</button>
        <button>essential criteria</button>
      </div>
      <div className="registration-time-container">
        <div>
          <div className="class">
            <span>Play school</span>
            <span>15 months to years </span>
          </div>
          <div className="dotted-line"></div>
          <div className="class">
            <span>Nursery</span>
            <span>2.5 to 4 years </span>
          </div>
          <div className="dotted-line"></div>

          <div className="class">
            <span>Junior KG</span>
            <span>3.5 to 5 years </span>
          </div>
          <div className="dotted-line"></div>

          <div className="class">
            <span>Senior KG</span>
            <span>4.5 to 6years </span>
          </div>
          <div className="dotted-line"></div>

          <div className="class">
            <span>Daycare</span>
            <span>1.5 to years </span>
          </div>
          <div className="dotted-line"></div>
        </div>
        <div className="work">
          <p>
            <b>1</b>{" "}
            <p>
              Complete application form by collecting it from <br /> the school
              admission office or from the school website
            </p>{" "}
          </p>
          <br />
          <div className="dotted-line"></div>

          <p>
            <b>2</b> <p>Photocopy of Birth Certificate of Aadhaar card</p>
          </p>
          <br />
          <div className="dotted-line"></div>

          <p>
            <b>3</b> <p>Local address proof</p>
          </p>
          <br />
          <div className="dotted-line"></div>

          <p>
            <b>4</b>
            <p> passport size photos</p>
          </p>
        </div>
      </div>
      <div className="orientation-btn-container">
        <button className="orientation-btn">parent orientation session</button>
        <p>
          <b>1</b>
          <p>
            There will be an orientation program for all the new <br />
            parents before beginning of the session.
          </p>
        </p>
        <p>
          <b>2</b>
          <p>
            This program will acquaint the parents with the <br />
            philosophy and unique teaching methodology of <br />
            Welmont.
          </p>
        </p>
      </div>
    </>
  );
};

export default RegistrationSection;
