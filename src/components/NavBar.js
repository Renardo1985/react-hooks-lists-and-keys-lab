import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElements = links.map((ele,index) => {
    return <a key = {index} href = {"#"+ele}>{ele}</a>;})

  return <nav>{navElements}</nav>;
}

export default NavBar;
