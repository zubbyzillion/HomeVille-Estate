import React from 'react';
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
        <section className="team background">
            <div className="container">
                <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />

                <div className="content mtop grid3">
                    {team.map((val, index) => {
                        return (
                            <div className="box" key={index}>
                                <button className="btn3">{val.list} Listings</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Team;