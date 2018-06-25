import React from "react";

const Contact = () => {
  return (
    <header id="Contact" className="tc pv5 bg-dark-green ph4">
      <h1 className="f3 f2-m code f1-l fw2 black-90 mv3">Let's Cooprate!</h1>
      <h2 className="f5 f4-m f3-l code fw2 black pb5 mt0 measure center lh-copy">
        I'm currently looking to code with new people and work on new projects!
        Shoot me an email to start a conversation!
      </h2>
      <div>
        <a
          className="f3 grow no-underline br-pill code ba bw1 ph3 pv2 mb2 dib black"
          href="mailto:nitinyogi@msn.com"
        >
          Let's Go!
        </a>{" "}
        <br />
      </div>
      <div>
        <a
          className="f3 grow no-underline br-pill code ba bw1 ph3 pv2 mb2 dib black"
          href="https://drive.google.com/file/d/1H7n5OetIx1Le0OyI2IOMsU32Hcg3v148/view?usp=sharing
"
        >
          View/Download Resume
        </a>
      </div>
      <footer className="pt6 ph5-ns tc">
        <p className="f6 f2-m f6-l code fw2 black-90 mv3">
          Crafted by Yogi, inpsired by others. 2018
        </p>
        <a
          className="link near-black hover-silver dib h2 w2 mr3"
          href="https://www.linkedin.com/in/yogita-patil-80b1b722/"
          title="LinkedIn"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
              fill-rule="nonzero"
            />
          </svg>
        </a>
        <a
          className="link near-black hover-silver dib h2 w2 mr3"
          href="https://github.com/yogi5p"
          title="GitHub"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
          </svg>
        </a>
        <a
          className="link hover-silver near-black dib h2 w2 mr3"
          href="https://stackoverflow.com/users/6476553/yogita-patil"
          title="Stack Overflow"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693H2.65v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.465.3-1.38L4.55 8.54l-.302 1.38zm.906-3.365l6.47 3.02.602-1.295-6.47-3.02-.602 1.295zm1.81-3.19l5.478 4.57.906-1.078-5.477-4.57-.905 1.077zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" />
          </svg>
        </a>
      </footer>
    </header>
  );
};

export default Contact;
