import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { TopBar } from "./components/topbar/TopBar";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Menu } from "./components/menu/Menu";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <TopBar open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
