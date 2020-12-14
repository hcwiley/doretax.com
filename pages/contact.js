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
        <div class="page-heading-text">
          <p>
            Feel free to contact me through any of these:
            <br />
            <br />
          </p>
          <h4 class="contact">
            <span class="all-caps">email: </span>
            <a class="no-link" href="mailto:L3dore@doretax.com">
              <span class="all-caps">
                l<span class="number">3</span>dore
              </span>
              @doretax.com
            </a>
            <br />
            <span class="all-caps">phone or fax: </span>
            <a class="no-link" href="tel:3378935400">
              <span class="number">(337) 893 5400</span>
            </a>

            <br />
            <span class="all-caps">cell phone: </span>
            <a class="no-link" href="tel:3376525470">
              <span class="number">(337) 652 5470</span>
            </a>
            <br />
          </h4>
        </div>
      </section>
    </Layout>
  )
}
