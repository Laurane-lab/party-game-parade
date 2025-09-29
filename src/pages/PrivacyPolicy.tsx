import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/cgu-cgv.css";

const PrivacyPolicy: React.FC = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch("/privacy-policy.md")
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <div className="cgu-cgv-container">
      <h1 style={{textAlign: "center", color: "#e53e3e", marginBottom: "2rem"}}>Politique de Confidentialité</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        <a href="/" className="text-party-blue underline hover:text-party-pink">Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;