import React from "react";

import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import AboutTwo from "@/components/containers/about/AboutTwo";
import HomeTwoService from "@/components/containers/service/HomeTwoService";
import HomeTwoBoost from "@/components/containers/boost/HomeTwoBoost";
import HomeTwoTeam from "@/components/containers/team/HomeTwoTeam";
import HomeTwoFeedback from "@/components/containers/feedback/HomeTwoFeedback";

const HomeTwo = () => {
  return (
    <Layout header={2} footer={2}>
      <BannerTwo />
      <AboutTwo />
      <HomeTwoService />
      <HomeTwoBoost />
      <HomeTwoTeam />
      <HomeTwoFeedback />
    </Layout>
  );
};

export default HomeTwo;
