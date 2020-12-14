import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/layout"

const links = [
  {
    link:
      "http://www.savethefranks.com/?fbclid=IwAR3eJS8L_Jt6g1DkgkqCHEh9vbJ4bVAMJJCcxyoj1cx6bh40_UxnqSlp-_I",
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
    link: "http://www.abbevillemuseums.org/acadian/default.html",
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
    link: "https://www.vermilionartscouncil.org/",
    title: "Vermilion Arts Council",
  },
  {
    link: "https://www.facebook.com/VC-Carmel-May-Fest-297568730954670/",
    title: "Vermilion/Carmel May Festival – Facebook page",
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
]

export default function Community() {
  return (
    <Layout community>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div class="page-heading-text">
          <p>
            Below is a list of associations, organizations and resources in
            Abbeville, Louisiana.
          </p>
        </div>
        <div class="copy">
          <h2 class="all-caps">community associations</h2>
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
