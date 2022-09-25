import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLink = links.map((link)=>{
    return(
    <a key ={link} href={`#${link}`}>{link}</a>
   ) })
  // console.log(navLink)

  return <nav>
    {/* display an <a> tag for each link here */}
  
    {navLink}
    </nav>;
}

export default NavBar;
