import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import PictureModule from "../components/PictureModule"
import Nine from "../images/09.jpg"
import Seven from "../images/07.jpg"
import uk1 from "../images/uk1.jpg"
import uk2 from "../images/uk2.jpg"
import uk3 from "../images/uk3.jpg"
import uk4 from "../images/uk4.jpg"
import uk5 from "../images/uk5.jpg"
import uk6 from "../images/uk6.jpg"
import uk7 from "../images/uk7.jpg"
import uk8 from "../images/uk8.jpg"
import uk9 from "../images/uk9.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="main-text-box">
      <h1>It all started in 1995....</h1>
      <p>Or whenever we started doing gag gifts... ('99? '05?)</p>
      <p>
        In any case, our dashing hero was just a young buck. Little did little
        Boo know, he would pick the name "ASH"
      </p>
      <h2>FOR THE NEXT 30 YEARS OF HIS LIFE</h2>
      <p>
        So, one day, our now much more mature and much more dashing hero Boo
        decided to make things alot easier for years to come by making an online
        form so that Ash could record funny things that happen in her life over
        the course of the year so that picking a gag gift would be easy for Boo.
      </p>
      <p>Love you Ash. Gag Gift 2019</p>
    </div>
    <div id="form-container">
      <form name="memoryList" netlify>
        <label>
          Date:
          <input type="text" name="date" placeholder="Every day of my life" />
        </label>
        <br />
        <label>
          Funny Moment:
          <br />
          <textarea
            rows="4"
            cols="100"
            placeholder="One time, I tried to do a gingerbread house without boo...."
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    <div id="picture-box">
      <PictureModule
        imgSrc={uk1}
        text="One of the years I was on my mission..."
      />
      <PictureModule imgSrc={uk2} text="Looks like '16" />
      <PictureModule imgSrc={uk3} text="Probably '10" />
      <PictureModule imgSrc={uk4} text="Not sure what year..." />
      <PictureModule imgSrc={uk5} text="Yub" />
      <PictureModule imgSrc={uk6} text="Nice shirt G" />
      <PictureModule imgSrc={uk7} text="Is that Steevo wearing MY HOODIE?" />
      <PictureModule imgSrc={uk8} text="Not sure what year..." />
      <PictureModule imgSrc={uk9} text="Last year! '18" />
      <PictureModule imgSrc={Seven} text="'07" />
      <PictureModule imgSrc={Nine} text="'09" />
    </div>
  </Layout>
)

export default IndexPage
