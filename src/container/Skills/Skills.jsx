import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "#edf2f8" }}>
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  style={{ borderRadius: 50 }}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-item" key={"2024"}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{"04.08.2024 - Current"}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={"Frontend Developer"}
                key={"Frontend Developer"}
              >
                <h4 className="bold-text">{"React Native Developer"}</h4>
                <p className="p-text">{"OTO Global Inc."}</p>
              </motion.div>
              <ReactTooltip
                id={"Frontend Developer"}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                Developing applications for OTO using React & React Native
                Integrating existing and newly developed applications.
                Converting Figma designed products into mobile applications
              </ReactTooltip>
            </motion.div>
          </motion.div>
          <motion.div className="app__skills-exp-item" key={"2022"}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{"01.06.2022 - 01.08.2024"}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={"Frontend Developer"}
                key={"Frontend Developer"}
              >
                <h4 className="bold-text">{"Frontend Developer"}</h4>
                <p className="p-text">{"Smartiks Teknoloji"}</p>
              </motion.div>
              <ReactTooltip
                id={"Frontend Developer"}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                Developing applications for customers using React & React Native
                & NodeJS Integrating existing and newly developed applications.
                Converting Figma designed products into web and mobile
                applications
              </ReactTooltip>
            </motion.div>
          </motion.div>

          <motion.div className="app__skills-exp-item" key={"2021"}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{"01.08.2021 - 01.06.2022"}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={"HEY"}
                key={"HEY"}
              >
                <h4 className="bold-text">{"React Native Developer"}</h4>
                <p className="p-text">{"HEY TEKNOLOJİ"}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
