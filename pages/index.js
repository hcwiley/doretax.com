import Head from "next/head"
import Link from "next/link"

import utilStyles from "../styles/utils.module.sass"
import Layout, { siteTitle } from "../components/layout"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div class="page-heading-text">
          <p>
            Thank you for visiting our website. Our dedication to quality client
            service has brought us to the Internet as we endeavor to provide the
            highest quality professional service and guidance.
          </p>
        </div>
        <div class="copy">
          <br />
          <h2 class="all-caps">lloyd f. dor&eacute; iii</h2>
          <p>
            <span class="all-caps">With over </span>
            26 years of experience in tax and accounting, I have long maintained
            a commitment to providing unequaled service to clients and service
            to the community. I am committed to providing close, personal
            attention to clients. I take pride in giving you the assurance that
            the personal assistance you receive comes from years of advanced
            training, technical experience, and financial acumen. I believe in
            staying current in tax planning laws (Individual, Estate, Corporate,
            Partnership, Fiduciary) and attend seminars regularly. My continual
            investment of time and resources in professional continuing
            education, state-of-the-art computer technology, and extensive
            business relationships represents my commitment to excellence.
          </p>
          <br />
        </div>
        <div id="pro">
          <h2 class="all-caps">professional associations</h2>
          <ul>
            <li>Accredited Tax Advisor</li>

            <li>Accredited Tax Preparer</li>

            <li>Louisiana Society of Independent Accountants</li>

            <li>National Society of Enrolled Agents</li>

            <li>National Society of Accountants</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
