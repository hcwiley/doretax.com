import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/layout"

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="page-heading-text">
          <p>
            I believe in the value of relationships. I view every client
            relationship as a partnership and truly believe that our success
            results from your success.
            <br />
          </p>
        </div>
        <div className="copy">
          <br />
          <h2 className="all-caps">professionalism and service to clients</h2>
          <p>
            Dor&eacute; &amp; Company offers a wide range of services to
            individual and business clients. Because this firm is relatively
            small, our clients benefit by receiving personalized, quality
            service. We will always charge reasonable fees for services
            rendered.
          </p>
          <br />
          <br />
          <h2 className="all-caps">
            dor&eacute; <span className="number">&amp;</span> company offers theses
            services to its clients:
          </h2>
          <ul>
            <li>Bookkeeping and Write-Up</li>

            <li>Business Consulting</li>

            <li>Corporate &amp; Partnership Tax Services</li>

            <li>Estate &amp; Fiduciary Tax Services</li>

            <li>Financial Statements</li>

            <li>Individual Tax Services &amp; E-filing</li>

            <li>IRS Representation</li>

            <li>Non-Profit Organization Consulting</li>

            <li>Payroll Services</li>

            <li>QuickBooks Consulting</li>

            <li>Sales Tax Services</li>

            <li>Tax Planning and Preparation</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
