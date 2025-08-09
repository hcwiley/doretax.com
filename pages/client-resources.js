import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/layout"

const resources = [
  {
    title: "Where's My Refund (Federal)?",
    link: "https://www.irs.gov/refunds",
    phone: "1-800-829-1040",
    copy: `<p>Through this IRS webpage you can get information about the current status of your tax filing refund. Information you will need:
      <br/>1. Social Security Number.
      <br/>2. Filing Status
      <br/>3. Exact Refund Amount
      </p>`,
  },
  {
    title: "Where's My Refund (Louisiana)?",
    link: "https://latap.revenue.louisiana.gov/_/",
    phone: "1-225-219-0102",
    copy: `<p>Through this LA. Dept. of Revenue webpage you can get information about the current status of your tax filing refund. Information you will need:
    <br/>1. Social Security Number.
    <br/>2. Filing Status
    <br/>3. Exact Refund Amount
    </p>`,
  },
  {
    title: "Louisiana Unclaimed Property",
    link: "https://louisiana.findyourunclaimedproperty.com/",
    phone: "",
    copy: `<p>Through the LA. State Treasurer webpage you can determine if you have any unclaimed property sent to the State of Louisiana in your name.
    </p>`,
  },
]

/**

 */

export default function ClientResources() {
  return (
    <Layout client-resources>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="page-heading-text">
          <p>Client Resources</p>
        </div>
        <div className="copy">
          {resources.map(({ title, link, phone, copy }) => (
            <div>
              <h4>
                <a href={`${link}`}>{title}</a>
              </h4>
              <br/>
              <div dangerouslySetInnerHTML={{ __html: copy }} />
              <br />
              <p>phone: {phone}</p>
              <p>
                link: <a href={`${link}`}>{link}</a>
              </p>
              <br />
              <hr />
              <br />
              <br />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
