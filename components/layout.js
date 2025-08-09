import Head from "next/head"
import styles from "./layout.module.sass"
import Nav from "./nav"
import HistoryColumn from "./right"
import utilStyles from "../styles/utils.module.sass"
import Link from "next/link"

const name = "Doré & Company"
export const siteTitle = "Doré & Company"

export default function Layout({ children, home }) {
  return (
    <div id="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div id="header">
        <div id="stripe"></div>
        <div id="logo">
          <img src="/logo.png" alt="logo image" />
          <div className="text">
            <h3 className="all-caps">lloyd f. dor&eacute; iii</h3>
            <h1>Dor&eacute; &amp; Company</h1>
            <h4>Tax, Accounting and Business Services</h4>
          </div>
        </div>
      </div>
      <div id="contact-bar" className="gradient-gray">
        <div>
          <h5>
            <span className="all-caps">email: </span>
            <a className="no-link" href="mailto:L3dore@doretax.com">
              <span className="all-caps">
                l<span className="number">3</span>dore
              </span>
              @doretax.com
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
            <span className="all-caps">tel &amp; fax: </span>
            <a className="no-link" href="tel:3378935400">
              <span className="number">(337) 893 5400</span>
            </a>{" "}
          </h5>
        </div>
      </div>

      <div id="image-banner">
        <img src="/lloyd.jpg" alt="Lloyd working at his desk." />
        <img
          className="middle"
          src="/outside-sign.jpg"
          alt="Front of office and sign"
        />
        <img src="/sign.jpg" alt="office corner street signs" />
      </div>
      <div id="main">
        <Nav />
        <div className="center">{children}</div>
        <HistoryColumn />
      </div>
      <div id="footer" className="gradient-gray">
        <div className="all-caps">
          <h3>
            <Link className="bottom-link" href="/">
              <div>
                dor&eacute; &amp; company <span className="number">2020</span>
                <br />
              </div>
            </Link>
            <Link className="bottom-link" href="privacy">
              privacy
            </Link>
            <br />
          </h3>
        </div>
        <div className="small all-caps">
          <Link className="bottom-link" href="/">
            <h3>home</h3>
          </Link>
          <Link className="bottom-link" href="/about">
            <h3>about</h3>
          </Link>
          <Link className="bottom-link" href="/client-resources">
            <h3>client resources</h3>
          </Link>
          <Link className="bottom-link" href="/community">
            <h3>community</h3>
          </Link>
          <Link className="bottom-link" href="/contact">
            <h3>contact</h3>
          </Link>
        </div>
        <div>
          <h3>
            <span className="all-caps">
              email:{" "}
              <a className="no-link" href="mailto:L3dore@doretax.com">
                <span className="all-caps">
                  l<span className="number">3</span>dore
                </span>
                @doretax.com
              </a>
            </span>
          </h3>
          <h3 className="all-caps">
            tel &amp; fax:{" "}
            <a className="no-link" href="tel:3378935400">
              <span className="number">(337) 893 5400</span>
            </a>
          </h3>
        </div>
        <div className="all-caps">
          <h3>
            <span className="number">404</span> pere megret street
            <br />
            p.o. box <span className="number">935</span>
            <br />
            abbeville, la <span className="number">70511</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
