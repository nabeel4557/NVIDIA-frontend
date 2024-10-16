"use client";
import React from "react";
import Spotlight from "../spotlight/page";
import Integrations from "../integrations/page";
import Run from "../run/page";
import GetStarted from "../getstarted/page";
import Case from "../case/page";
import Ecosystem from "../ecosystem/page";
import Resources from "../resources/page";
import Documentation from "../documentation/page";
import Models from "../../details/models/page";

function HomePage() {
    return (
        <div>
            <div id="spotlight">
                <Spotlight />
            </div>
            <div id="models">
                <Models/>
            </div>
            <div id="integrations">
                <Integrations />
            </div>
            <div id="run">
                <Run />
            </div>
            <div id="get-started">
                <GetStarted />
            </div>
            <div id="case">
                <Case />
            </div>
            <div id="ecosystem">
                <Ecosystem />
            </div>
            <div id="resources">
                <Resources />
            </div>
            <div id="documentation">
                <Documentation />
            </div>
        </div>
    );
}

export default HomePage;
