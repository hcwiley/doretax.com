import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/layout"

const links = [
  {
    link: "http://www.savethefranks.com/",
    title: "Allume Society (Friends of Historic Downtown Abbeville)",
  },
  {
    link: "https://www.facebook.com/Allume.Society/",
    title: "Allume Society – Facebook page",
  },
  {
    link: "https://abbevillemuseums.com/",
    title: "Abbeville Cultural & Historical Alliance",
  },
  {
    link: "http://www.rcabbeville.org/",
    title: "Abbeville Rotary Club",
  },
  {
    link: "https://www.facebook.com/rotaryclubofabbeville/",
    title: "Abbeville Rotary Club – Facebook page",
  },
  {
    link: "https://www.abbeyplayers.com/",
    title: "Abbey Players Theatre",
  },
  {
    link: "https://www.usainteanne.ca/en/academics/learn-french/spring-and-summer-french-immersion-sessions",
    title:
      "Acadian Centre Acadien: French Immersion Scholarship to study at the University Sainte-Anne, Nova Scotia, Canada",
  },
  {
    link: "http://parlouisiana.org/",
    title: "Public Affairs Research Council (Louisiana)",
  },
  {
    link: "https://rotary6200.org/",
    title: "Rotary International/District 6200",
  },
  {
    link: "https://www.facebook.com/VermilionArtsCouncil/",
    title: "Vermilion Arts Council – Facebook page",
  },
  {
    link: "http://www.vermilionchamber.org/",
    title: "Vermilion Chamber of Commerce (Abbeville, LA)",
  },
  {
    link: "http://vermilionhistorical.com/",
    title: "Vermilion Historical Society",
  },
  {
    link: "https://www.facebook.com/vermilionparishhistorical/",
    title: "Vermilion Historical Society – Facebook page",
  },
  {
    link: "https://www.vermilioncatholic.com/",
    title: "Vermilion Catholic, A Legacy of Mt. Carmel",
  },
  {
    link: "https://www.lamilitarymuseum.org/",
    title: "Louisiana Military Museum",
  },
  {
    link: "https://www.frverbislafleur.com/",
    title: "Fr. J. Verbis Lafleur (Abbeville’s Hero Priest) website",
  },
]

export default function Community() {
  return (
    <Layout community>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="page-heading-text">
          <p>
            Below is a list of associations, organizations and resources in
            Abbeville, Louisiana.
          </p>
        </div>
        <div className="copy">
          <h2 className="all-caps">community associations</h2>
          <ul>
            {links.map(({ title, link }) => (
              <li>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>

          <br />
        </div>
      </section>
    </Layout>
  )
}
