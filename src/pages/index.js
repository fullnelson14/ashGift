import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import PictureModule from "../components/PictureModule"

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
    <div>
      <PictureModule />
    </div>
  </Layout>
)

export default IndexPage
