import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NyTimes = () => {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const fetchArticles = (event) => {
    if (event) {
      event.preventDefault();
    }

    fetch(`http://localhost:3000/api/search?keyword=${keyword}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error fetching data");
        return response.json();
      })
      .then((data) => {
        if (!data.response || !data.response.docs) {
          throw new Error("No articles found.");
        }
        setArticles(data.response.docs); // Store the articles
      })
      .catch((error) => {
        console.error(error.message);
        setArticles([]); // Clear articles on error
      });
  };

  const viewArticleDetails = (article) => {
    navigate(`/details`, { state: { article } });
  };

  return (
    <div>
      <h1>NY Times Article Search</h1>
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="Search by keyword"
          onChange={handleInputChange}
        />
        <button onClick={fetchArticles}>Search</button>
      </form>

      {articles.length === 0 && <p>No articles found.</p>}

      {articles.length > 0 && (
        <div>
          {articles.map((article, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => viewArticleDetails(article)}
              >
                {article.headline.main}
              </h2>
              <p>{article.abstract}</p>
              <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                Read Full Article
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NyTimes;
