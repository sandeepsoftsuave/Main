import { UserOutlined } from "@ant-design/icons";
import React from "react";
// import useTranslations from "../../Custom Hooks/useTranslations";
// import "./Welcome.css";
import './Welcome.css';

function WelcomePage() {
  const welcomeText = "welcome";
  const welcomeMessageText = "welcome Message";

  return (
    <div className="welcome_layout">
      <div className="layout_container">
        <UserOutlined style={{ fontSize: "500%", color: "#c2c2c2" }} />
        <div className="welcome_text">{welcomeText.toUpperCase()}</div>
        <div>{welcomeMessageText}</div>
      </div>
    </div>
  );
}

export default WelcomePage;
