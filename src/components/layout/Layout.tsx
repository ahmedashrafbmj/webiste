import React, { Fragment } from "react";
import Head from "next/head";

import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import ScrollProgress from "./ScrollProgress";

type layoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ children, header, footer }: layoutProps) => {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>AzSolutions | IT Services Agency</title>
        <meta name="keywords" content="digitek, seo, service" />
        <meta name="description" content="SEO Service React Template" />
      </Head>
      <div className={header === 4 ? " fourth-page" : " my-app"}>
        {header === 2 && <HeaderTwo />}
        <main>{children}</main>
        {footer === 2 && <FooterTwo />}
        <ScrollProgress />
      </div>
    </Fragment>
  );
};

export default Layout;
