// import React from "react";
// import Layout from "@/components/layout/Layout";
// import HomeBannerOne from "@/components/layout/banner/HomeBannerOne";
// import SponsorOne from "@/components/containers/sponsor/SponsorOne";
// import ChooseOne from "@/components/containers/choose/ChooseOne";
// import AboutOne from "@/components/containers/about/AboutOne";
// import FeaturesOne from "@/components/containers/features/FeaturesOne";
// import SoftwareOne from "@/components/containers/software/SoftwareOne";
// import ProjectOne from "@/components/containers/projects/ProjectOne";
// import WorkOne from "@/components/containers/work/WorkOne";
// import FeedbackOne from "@/components/containers/feedback/FeedbackOne";
// import BlogOne from "@/components/containers/blog/BlogOne";

// const Home = () => {
//   return (
//     <Layout header={1} footer={1}>
//       <HomeBannerOne />
//       <SponsorOne />
//       <ChooseOne />
//       <AboutOne />
//       <FeaturesOne />
//       <SoftwareOne />
//       <ProjectOne />
//       <WorkOne />
//       <FeedbackOne />
//       <BlogOne />
//     </Layout>
//   );
// };

// export default Home;



import React from "react";

import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import SponsorTwo from "@/components/containers/sponsor/SponsorTwo";
import AboutTwo from "@/components/containers/about/AboutTwo";
import HomeTwoService from "@/components/containers/service/HomeTwoService";
import HomeTwoBoost from "@/components/containers/boost/HomeTwoBoost";
// import HomeProjectTwo from "@/components/containers/projects/HomeProjectTwo";
// import HomeTwoFeatures from "@/components/containers/features/HomeTwoFeatures";
import HomeTwoTeam from "@/components/containers/team/HomeTwoTeam";
import HomeTwoFeedback from "@/components/containers/feedback/HomeTwoFeedback";
// import HomeTwoBlog from "@/components/containers/blog/HomeTwoBlog";

const HomeTwo = () => {
  return (
    <Layout header={2} footer={2}>
      <BannerTwo />
      <SponsorTwo />
      <AboutTwo />
      <HomeTwoService />
      <HomeTwoBoost />
      {/* <HomeProjectTwo /> */}
      {/* <HomeTwoFeatures /> */}
      <HomeTwoTeam />
      <HomeTwoFeedback />
      {/* <HomeTwoBlog /> */}
    </Layout>
  );
};

export default HomeTwo;
