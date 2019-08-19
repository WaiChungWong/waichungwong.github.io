import React, { useState, useEffect } from "react";
import Classnames from "classnames";
import debounce from "debounce";

import { getCachedValue, setCachedValue } from "./utils";

import ScrollIcon from "./views/components/scrollicon";
import Switch from "./views/components/switch";
import Background from "./views/components/background";
import Intro from "./views/sections/intro";
import PassionProjects from "./views/sections/passionprojects";
import NPMModules from "./views/sections/npmmodules";
import Skills from "./views/sections/skills";
import Contact from "./views/sections/contact";

import "./app.css";

let initialNightMode = getCachedValue("night-mode") || false;

export default () => {
  const [nightMode, setNightMode] = useState(initialNightMode);
  const [hideScroll, setHideScroll] = useState(false);
  const toggleNightMode = () => {
    setNightMode(!nightMode);
    setCachedValue("night-mode", !nightMode);
  };

  useEffect(() => {
    const scrollHandler = debounce(() => setHideScroll(window.scrollY > 0));

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className={Classnames("app", { "night-mode": nightMode })}>
      <Background className={Classnames({ "night-mode": nightMode })} />
      <ScrollIcon
        className={Classnames({ "night-mode": nightMode, hide: hideScroll })}
      />
      <Switch
        className="night-mode-switch"
        onChange={toggleNightMode}
        checked={nightMode}
      />
      <main>
        <Intro />
        <PassionProjects />
        <NPMModules />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};
