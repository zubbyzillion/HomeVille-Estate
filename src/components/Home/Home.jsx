import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./awards/Awards";
// import Location from "./location/Location";

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Recent />
            <Awards />
        </>
    )
}

export default Home;