import React from "react";
import pdf from "../pdf/sairesume1.pdf";
import mypropic from "./pp/profilepic.jpg";
import mypropic2 from "./pp/file2.png";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I am a full stack developer",
        "Passionate about coding",
        "Lifelong learner and innovator",
        "Let's build something amazing together",
      ],
      typeSpeed: 50,
      showCursor: false,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div>
          <div className="mb-5 fs-1 fw-bold text-warning text-center">Hi, I am Sai Ram</div>
          <div
            className="left"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <h1 ref={typedRef}> .</h1>
            <a
              href={pdf}
              download="resume.pdf"
              className="btn btn-outline-warning mt-5 mb-3"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src={mypropic2} alt="my pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
