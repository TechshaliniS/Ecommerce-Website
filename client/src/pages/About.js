
import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to [SMCollections], where quality meets convenience! Founded with the goal of creating an exceptional shopping experience, we’re dedicated to bringing you high-quality products that fit seamlessly into your life, at prices you’ll love.

From carefully sourced items to trending essentials, each product is selected with a focus on style, durability, and value. We believe shopping should be simple and enjoyable, so we’ve streamlined our site to help you find what you need quickly and confidently.

Our team is here to make your experience as smooth as possible with fast shipping, easy returns, and friendly support every step of the way. Whether you’re searching for the latest styles, practical household items, or unique finds, [Your Store Name] has something for everyone.

Thank you for choosing us and being part of our community – we’re excited to be a part of your journey!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
