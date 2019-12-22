import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Layout = ({ pageTitle, pageDescription, pageImage, children }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content={pageDescription} />

        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={pageDescription} />
        <meta itemProp="image" content={pageImage} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devitconf" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Open Graph data */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="devitconf.org" />
        <meta property="og:url" content="http://devitconf.org{{ page.url }}" />

        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />

        <link href="/assets/css/main.css" rel="stylesheet" media="screen" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon/apple-touch-icon.png?v=GvJLOgvboj"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/favicon/favicon-32x32.png?v=GvJLOgvboj"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/favicon/favicon-16x16.png?v=GvJLOgvboj"
          sizes="16x16"
        />
        <link rel="manifest" href="/assets/images/favicon/manifest.json?v=GvJLOgvboj" />
        <link
          rel="mask-icon"
          href="/assets/images/favicon/safari-pinned-tab.svg?v=GvJLOgvboj"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico?v=GvJLOgvboj" />

        <meta name="apple-mobile-web-app-title" content="DEVit Conf" />
        <meta name="application-name" content="DEVit Conf" />
        <meta
          name="msapplication-config"
          content="/assets/images/favicon/browserconfig.xml?v=GvJLOgvboj"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.array,
}

export default Layout
