import "./IntroSection.css";

const IntroSection = () => {
  return (
    <div className="section-column">
      <div className="imgBox">
        <img
          src="assets/Aamir.jpeg"
          alt="abc"
          height="auto"
          width="30%"
          id="image-section"
        />
      </div>
      <p className="title">Aamir Khan</p>
      <span className="designation">Software Engineer</span>
      <div className="section-row"></div>
    </div>
  );
};

export default IntroSection;
