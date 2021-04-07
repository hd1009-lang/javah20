import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../layouts/Layout";
import HeroSlider from "../wrappers/hero-slider/HeroSlider";
import FeatureIcon from "../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../wrappers/product/TabProduct";
import BlogFeatured from "../wrappers/blog-featured/BlogFeatured";
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  return (
    <Fragment>
      
      <MetaTags>
        <title>Cửa Hàng H20</title>
        <meta
          name="description"
          content="Cửa hàng đồ ăn ngon nhất thế giới."
        />
      </MetaTags>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSlider />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </Layout>
    </Fragment>
  );
};

export default Home;
