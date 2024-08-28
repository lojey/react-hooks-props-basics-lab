import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links";

const user={
  name: "Liza",
city: "New York",
bio: "I made this!",
color: "firebrick",
links: {
  github: "https://github.com/liza",
  linkedin: "https://www.linkedin.com/in/liza/",
},
};

function App() {
  return (
    <div className="App">
      <Home name={props.name} city={props.city}/>
      <NavBar />
      <Home />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
      <Links/>
    </div>
  );


}

export default App;
