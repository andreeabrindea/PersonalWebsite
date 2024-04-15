import "../App.css";
import Topbar from "./Topbar";
import workingIcon from "../assets/working.png";
import Timeline from './Timeline'

const pages = ["about", "experience", "projects", "education"];

function Experience() {
  return (
    <>
      <nav className="page-links">
        <Topbar items={pages}></Topbar>
      </nav>
      <header>
        <div>
          <h1>Experience</h1>
          <section>
            <p>
              In my journey so far, I've dabbled in various roles because I
              simply love to experiment. From <b>Quality Assurance</b> to{" "}
              <b>Backend</b> and <b>Frontend Development</b>, I've dipped my
              toes into a bit of everything.
            </p>
          </section>
        </div>
        <img src={workingIcon} alt="experience icon"></img>
      </header>
      <main>
        <Timeline></Timeline>
      </main>
    </>
  );
}

export default Experience;
