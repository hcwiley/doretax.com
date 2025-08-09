import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/layout"

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="page-heading-text">
          <p>
            Feel free to contact me through any of these:
            <br />
            <br />
          </p>
          <h4 className="contact">
            <span className="all-caps">email: </span>
            <a className="no-link" href="mailto:L3dore@doretax.com">
              <span className="all-caps">
                l<span className="number">3</span>dore
              </span>
              @doretax.com
            </a>
            <br />
            <span className="all-caps">phone or fax: </span>
            <a className="no-link" href="tel:3378935400">
              <span className="number">(337) 893 5400</span>
            </a>

            <br />
            <span className="all-caps">cell phone: </span>
            <a className="no-link" href="tel:3376525470">
              <span className="number">(337) 652 5470</span>
            </a>
            <br />
          </h4>
        </div>
      </section>
    </Layout>
  )
}
