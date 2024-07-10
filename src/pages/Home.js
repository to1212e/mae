import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/DSC06710.png"
import ibisImage from "./img/Messenger_creation_95cdbd9a-0fe9-4836-8d02-9984724ab697.jpeg"
import vscodeImage from "./img/341046843_1260195034913568_2895044067018550442_n.jpg"
import gcbImage from "./img/Messenger_creation_fe543d36-b741-4334-99ca-8f364a1077f9.png"
const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className="display-3 text-center text-light pt-5 mb-5">
                Greetings... <br/> I'm Mae An B. Ape
              </h2>
              <h4 className=" text-light text-center mt-5"> Im a Web Developer Good at Poster Making & An Online Gamer</h4>
              <center>
              <a href="/about" className="btn shadow mt-5">
                Explore More
              </a>
              </center>
              </div>
            </div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>

    <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                <h4 className="text-center title"><b>Mobile Legend</b></h4>
                <p>A platform for reading and sharing stories across various genres.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                <h4 className="text-center title"><b>Jonaxx</b></h4>
                <p>Known for captivating romantic novels with compelling characters.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                <h4 className="text-center title"><b>Bootstrap</b></h4>
                <p>A platform for discovering and reading romance stories.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
