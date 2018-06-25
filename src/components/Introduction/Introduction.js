import React from "react";
import TypedJS from "typed-react-component";
import Scroll from "react-scroll-to-element";
import teamwork from "../../media/teamworkcoffee-shop.png";

let props = {
  style: { fontSize: "48px", fontFamily: "sans-serif" },
  typings: [
    "experiences...",
    "web applications...",
    "portfolios...",
    "landing pages...",
    "UI...",
    "Front End..."
  ],
  loop: false,
  typeSpeed: 50,
  backTypeSpeed: 50,
  delay: 2200,
  startDelay: 1200
};

const Introduction = () => {
  return (
    <header id="Introduction" className="sans-serif">
      <div
        className="min-vh-100 cover"
        style={{ backgroundImage: "url(" + teamwork + ")" }}
      >
        <div className="tc min-vh-100 bg-black-80 pb5 pb6-m pb6-l">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid">
              <a href="/" className="dib w5 h3 pa1 center grow-large">
                <a
                  className="f3 fw4 hover-white code no-underline white-70 dn dib-ns pv2 ph3"
                  href="#Introduction"
                >
                  <i className="fas code fa-terminal" /> Yogita Patil
                </a>
              </a>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt7-ns ">
            <h1 className="tc f3 f2-m f1-l fw2 white-90">
              My name is Yogita. I design and develop
            </h1>
            <h2 className="tc f4-m fw2 white-80 mt0 lh-copy">
              {" "}
              <TypedJS {...Object.assign({}, props, { loop: true })} />
            </h2>
          </div>
          <Scroll type="id" element="Contact">
            <a className="f3 grow no-underline br-pill ba mt5-ns bw1 code ph3 pv2 mb2 dib white">
              {" "}
              Let's Work Together
            </a>
          </Scroll>
          <br />
          <Scroll type="id" element="Knowhow">
            <a>
              <i className="fas pt5 v-btm white f4 fa-chevron-down" />
            </a>
          </Scroll>
        </div>
      </div>
    </header>
  );
};

export default Introduction;
