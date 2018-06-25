import React from 'react'
import basecamp from '../../media/basecamp.png'
import circlescapes from '../../media/circlescapes.png'
import vendy from '../../media/vendy.png'
import frontend from '../../media/frontend.png'
import robofriends from '../../media/robofriends.png'
import happenin from '../../media/happenin.png'
import bork from '../../media/borkbork.png'

const Experience = () => {
  return (
    <div>
      <section className="mw7 center code">
        <h2 className="code ph3 ph0-l">Portfolio</h2>

        <article className="bt pv4 bb b--black-10 ph3">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <a
                className="db pv4 ph3 ph0-l no-underline dark-green dim"
                href="https://github.com/yogi5p/React_MovieTown"
              >
                <img src={happenin} className="db" alt="" />
              </a>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Happenin' | Local Event Aggregator
              </h1>
              <p className="f6 f5-l lh-copy">
                I spent 12 weeks at an instensive bootcamp called{' '}
                <a href="https://woz-u.com">Woz U</a>, where I learned how to
                build applications using JavaScript, HTML, CSS, and React. We
                stored our data in a MongoDB database, utilizing one-to-many
                relationships and custom views. I worked as a dedicated front
                end engineer on this project and oversaw the development of the
                UI as well as served as the Git master for our team. 
                Git source control mangagement including learning the CLI were
                also covered in depth, and you can view our code{' '}
                <a href="https://github.com/yogi5p/Final_CCGraduation_Project">here</a>
              </p>
            </div>
          </div>
        </article>
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 fw1 code mt0 lh-title">Vendy</h1>
              <p className="f6 f5-l lh-copy">
                Webpages like the one we created are very fast and display information to the
                viewer in a quick concise way! Haute Dawg is a fictional bussiness
                that hopefully will be real someday that allows dog lovers and owners to connect people 
                to the local businesses and services for their favorite paws.
                Helping dog lovers to find the needs for their paws whether they are travelling or local is the primary focus 
                for this endeavor.
                As a web developer I really try to focus my approach on working the UI as
                exactly needed. I have a lot of room to improve and grow and I look forward to working on challenging and interesting projects.
              </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <a
                className="db pv4 ph3 ph0-l no-underline black dim"
                href="https://woz-u.com"
              >
                <img src={vendy} className="db" alt="" /> Woz U
              </a>
            </div>
          </div>
        </article>

        <article className="bt pv4 bb b--black-10 ph3">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <a
                className="db pv4 ph3 ph0-l no-underline black dim"
                href="http://musical-keys.surge.sh/"
              >
                <img src={circlescapes} className="db" alt="" />
              </a>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Patatap.com Clone
              </h1>
              <p className="f6 f5-l lh-copy">
                This is one of the first fun things I did with Javascript. I
                imported a few libraries such as Howl.js and Canvas.js and
                together they helped me create a simplified version of{' '}
                <a href="http://patatap.com">Patatap</a> Write your name to get
                started!
              </p>
            </div>
          </div>
        </article>

        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Robofriends Progressive Web App
              </h1>
              <p className="f6 f5-l lh-copy">
                This is a really cool application that allows you to search
                through robots pulled from an api. The application uses redux to
                mangage state and it's also a PWA that allows you to load and
                use the application offline. The application is simple and
                sweet, showcasing my ability to work with redux, react and build
                apps for the next 100 million users.
              </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <a
                className="db pv4 ph3 ph0-l no-underline black dim"
                href="http://robofriends-pwa.surge.sh/"
              >
                <img src={robofriends} className="db" alt="" />
              </a>
            </div>
          </div>
        </article>
        <article className="bt pv4 bb b--black-10 ph3">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <a
                className="db pv4 ph3 ph0-l no-underline dark-green dim"
                href="https://github.com/yogi5p/React_MovieTown"
              >
                <img src={bork} className="db" alt="" />
              </a>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Doggo are Pupper
              </h1>
              <p className="f6 f5-l lh-copy">
                Really simple react PWA that allows you to sift through the
                Dog.CEO API and view images of dogs. Each time you choose a
                breed you get a random selection of images. You can install this
                web app on your phone too!
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Experience
