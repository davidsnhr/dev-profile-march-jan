import './Hero.css';

const Hero = () => {
  return (
    <div>
      <div className="center-items">
        <p className="main-text">
          Architecting <span className="secondary-text">Digital Artifacts</span>
        </p>
      </div>
      <div className="center-items">
        <p style={{ width: '70%' }}>
          Full-stack developer specializing in building high-performance,
          visually stunning web experiences that live at the intersection of
          design and data.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn">View Projects</button>
        <button
          className="btn"
          style={{ backgroundColor: '#412D49', color: 'white' }}
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
