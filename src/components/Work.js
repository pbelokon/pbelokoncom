import CatCounter from "./CatCounter";

const Work = () => {
  return (
    <div className="work-container">
      <CatCounter counter={1} />
      <div className="texts">
        <h3>
          Fragments Micro Service (AWS, Node, JavaScript) -
          github.com/pbelokon/fragments
        </h3>
        <p>
          Built a Factory Management Microservice providing reporting and data
          logging solutions, with built-in support for multiple file formats.
        </p>
        <br />
        <p>
          Leveraged Docker containers to isolate application environment for
          reproducible builds.
        </p>

        <div className="btn-holder">
          <button href="#" className="btn">
            <p>View</p>
            <img src="arrow-export.svg" alt=" export arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
