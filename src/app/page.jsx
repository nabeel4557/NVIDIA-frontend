"use client";
import React, { useRef, useState, useEffect } from "react";
import Spotlight from "../components/spotlight/page";
import Integrations from "../components/integrations/page";
import Run from "../components/run/page";
import GetStarted from "../components/getstarted/page";
import Case from "../components/case/page";
import Ecosystem from "../components/ecosystem/page";
import Resources from "../components/resources/page";
import Documentation from "../components/documentation/page";
import Models from "../components/models/page";
import Navbar3 from "../components/includes/navbar/Navbar3";

function Home() {
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

export default Home;
