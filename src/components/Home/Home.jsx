import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
// import Location from "./location/Location";

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Recent />
        </>
    )
}

export default Home;