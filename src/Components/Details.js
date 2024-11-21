import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <div>No article details available</div>;
  }

  return (
    <div>
      <h1>{article.headline.main}</h1>
      <p>
        <strong>Published Date:</strong> {new Date(article.pub_date).toLocaleDateString()}
      </p>
      <p>
        <strong>Abstract:</strong> {article.abstract || "No abstract available"}
      </p>
      <p>
        <strong>Lead Paragraph:</strong> {article.lead_paragraph || "N/A"}
      </p>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

export default Details;
