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
          <img src="logo.png" alt="logo image" />
          <div class="text">
            <h3 class="all-caps">lloyd f. dor&eacute; iii</h3>
            <h1>Dor&eacute; &amp; Company</h1>
            <h4>Tax, Accounting and Business Services</h4>
          </div>
        </div>
      </div>
      <div id="contact-bar" class="gradient-gray">
        <div>
          <h5>
            <span class="all-caps">email: </span>
            <a class="no-link" href="mailto:L3dore@doretax.com">
              <span class="all-caps">
                l<span class="number">3</span>dore
              </span>
              @doretax.com
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
            <span class="all-caps">tel &amp; fax: </span>
            <a class="no-link" href="tel:3378935400">
              <span class="number">(337) 893 5400</span>
            </a>{" "}
          </h5>
        </div>
      </div>

      <div id="image-banner">
        <img src="lloyd.jpg" alt="Lloyd working at his desk." />
        <img
          class="middle"
          src="outside-sign.jpg"
          alt="Front of office and sign"
        />
        <img src="sign.jpg" alt="office corner street signs" />
      </div>
      <div id="main">
        <Nav />
        <div class="center">{children}</div>
        <HistoryColumn />
      </div>
      <div id="footer" class="gradient-gray">
        <div class="all-caps">
          <h3>
            <a class="bottom-link" href="index.html">
              dor&eacute; &amp; company <span class="number">2020</span>
              <br />
            </a>
            <a class="bottom-link" href="privacy.html">
              privacy
            </a>
            <br />
          </h3>
        </div>
        <div class="small all-caps">
          <a class="bottom-link" href="index.html">
            <h3>home</h3>
          </a>
          <a class="bottom-link" href="about.html">
            <h3>about</h3>
          </a>
          <a class="bottom-link" href="client-resources.html">
            <h3>client resources</h3>
          </a>
          <a class="bottom-link" href="community.html">
            <h3>community</h3>
          </a>
          <a class="bottom-link" href="contact.html">
            <h3>contact</h3>
          </a>
        </div>
        <div>
          <h3>
            <span class="all-caps">
              email:{" "}
              <a class="no-link" href="mailto:L3dore@doretax.com">
                <span class="all-caps">
                  l<span class="number">3</span>dore
                </span>
                @doretax.com
              </a>
            </span>
          </h3>
          <h3 class="all-caps">
            tel &amp; fax:{" "}
            <a class="no-link" href="tel:3378935400">
              <span class="number">(337) 893 5400</span>
            </a>
          </h3>
        </div>
        <div class="all-caps">
          <h3>
            <span class="number">404</span> pere megret street
            <br />
            p.o. box <span class="number">935</span>
            <br />
            abbeville, la <span class="number">70511</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
