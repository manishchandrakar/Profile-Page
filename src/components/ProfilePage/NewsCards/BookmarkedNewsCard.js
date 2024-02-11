import React from "react";
import "./NewsCards.css";

const NewsCards = ({ articles }) => {
  return (
    <div className="news-cards">
      {articles.map((article, index) => (
        <div className="card" key={index}>
          <img src={article.thumbnail} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsCards;
