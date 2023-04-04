import React from "react";
import img from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
  return (
    <>
        <section className="services mb">
            <Back name="Services" title="Services - All Services"/>
            <div className="featured container">
                <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Services;