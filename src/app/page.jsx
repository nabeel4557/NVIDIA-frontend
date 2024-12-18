"use client";
import React, { useRef, useState, useEffect } from "react";
import Spotlight from "../components/Spotlight";
import Integrations from "../components/Integration";
import Run from "../components/Run";
import GetStarted from "../components/GetStarted";
import Case from "../components/Case";
import Ecosystem from "../components/Ecosystem";
import Resources from "../components/Resources";
import Documentation from "../components/Documentation";
import Models from "../components/Models";
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
