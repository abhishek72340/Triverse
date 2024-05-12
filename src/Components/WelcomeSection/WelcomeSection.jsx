import "./WelcomeSection.css";
const WelcomeSection = () => {
  return (
    <>
      <p className="welcome-heading">welcome to welmont school</p>
      <div className="welcome-bubble"></div>

      <div className="text-aside-container">
        <p className="text">
          <b>
            Welcome to Welmont Preschool, where each new day
            <br />
            heralds a journey of exploration with fun & play
          </b>
          <br />
          <br />
          We, at Welmont, understand the crucial importance of the
          <br /> correct stimulation required during the early years to
          <br /> enhance a child development intellectually, physically,
          <br /> emotionally, and socially, to lay down a solid foundation for
          <br /> your child to maximize all future learning abilities.
          <br />
          <br />
          As per UNICEF, a child brain develops fastest in the earliest
          <br /> years of life. These initial experiences are crucial as they{" "}
          <br />
          are the building blocks for the development of the brain
          <br /> architecture for all the learning to come in the years ahead.
          <br />
        </p>

        <div className="aside-container">
          <div className="top-line"></div>

          <i>
            {" "}
            In the first few years of life
            <br />
            more than one million neural
            <br />
            connections are formed each <br />
            second in the earliest phase of
            <br />
            life - a pace that never
            <br />
            repeats ever again.
          </i>
          <br />
          <p className="unicef-text">
            {" "}
            UNICEF Global Repeat on
            <br /> Early Childhood Development,2017
          </p>
          <div className="bottom-line"></div>
        </div>
      </div>
      <div className="read-more-btn-container">
        <button className="read-more-btn">Read More</button>
      </div>
    </>
  );
};

export default WelcomeSection;
