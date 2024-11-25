// "use client";
// import React from "react";
// import Spotlight from "../spotlight/page";
// import Integrations from "../integrations/page";
// import Run from "../run/page";
// import GetStarted from "../getstarted/page";
// import Case from "../case/page";
// import Ecosystem from "../ecosystem/page";
// import Resources from "../resources/page";
// import Documentation from "../documentation/page";
// import Models from "../models/page";
// function HomePage() {
//     return (
//         <div>
//             <div id="spotlight">
//                 <Spotlight />
//             </div>
//             <div id="models">
//                 <Models />
//             </div>
//             <div id="integrations">
//                 <Integrations />
//             </div>
//             <div id="run">
//                 <Run />
//             </div>
//             <div id="get-started">
//                 <GetStarted />
//             </div>
//             <div id="case">
//                 <Case />
//             </div>
//             <div id="ecosystem">
//                 <Ecosystem />
//             </div>
//             <div id="resources">
//                 <Resources />
//             </div>
//             <div id="documentation">
//                 <Documentation />
//             </div>
//         </div>
//     );
// }

// export default HomePage;



"use client";
import React, { useRef, useState, useEffect } from "react";
import Spotlight from "../spotlight/page";
import Integrations from "../integrations/page";
import Run from "../run/page";
import GetStarted from "../getstarted/page";
import Case from "../case/page";
import Ecosystem from "../ecosystem/page";
import Resources from "../resources/page";
import Documentation from "../documentation/page";
import Models from "../models/page";
import Navbar3 from "../includes/navbar/Navbar3";

function HomePage() {
    const sectionRefs = {
        spotlight: useRef(null),
        models: useRef(null),
        integrations: useRef(null),
        run: useRef(null),
        get: useRef(null),
        case: useRef(null),
        ecosystem: useRef(null),
        resources: useRef(null),
        documentation: useRef(null),
    };

    const [currentSection, setCurrentSection] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            { threshold: 0 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    //   console.log("Current Section:", currentSection);

    return (
        <div>
            <div id="spotlight" ref={sectionRefs.spotlight}>
                <Spotlight />
                <Navbar3 currentSection={currentSection} />
            </div>
            <div id="models" ref={sectionRefs.models}>
                <Models />
            </div>
            <div id="integrations" ref={sectionRefs.integrations}>
                <Integrations />
            </div>
            <div id="run" ref={sectionRefs.run}>
                <Run />
            </div>
            <div id="get" ref={sectionRefs.get}>
                <GetStarted />
            </div>
            <div id="case" ref={sectionRefs.case}>
                <Case />
            </div>
            <div id="ecosystem" ref={sectionRefs.ecosystem}>
                <Ecosystem />
            </div>
            <div id="resources" ref={sectionRefs.resources}>
                <Resources />
            </div>
            <div id="documentation" ref={sectionRefs.documentation}>
                <Documentation />
            </div>
        </div>
    );
}

export default HomePage;

