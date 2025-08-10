import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d6efd", // Same as Bootstrap primary
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        marginTop: "auto",
        fontWeight: "500",
        letterSpacing: "0.5px"
      }}
    >
      © {new Date().getFullYear()} Sreesailam Veera Babu | React Practice
    </footer>
  );
}

export default Footer;
