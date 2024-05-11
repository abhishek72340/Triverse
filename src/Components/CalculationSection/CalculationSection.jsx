import "./CalculateSection.css";
const CalculationSection = () => {
  return (
    <>
      <p className="calculate-heading">
        metamorphosis of child:
        <br /> the philosophy of welmont
      </p>
      <div className="calculate-bubble"></div>

      <div className="calculate-img-container">
        <img src="/images/calculate1.png" alt="calculate1" />
        <img src="/images/calculate2.png" alt="calculate2" />
      </div>
      <div className="calculate-name-container">
        <div className="name-container">
          <p>THE BRAIN</p>
          <p>The essence of child</p>
        </div>
        <div className="name-container">
          <p>THE WINGS</p>
          <p>Environment of learning </p>
        </div>
        <div className="name-container">
          <p>METAMORPHOSIS</p>
          <p>The transformation of child</p>
        </div>
      </div>
    </>
  );
};

export default CalculationSection;
