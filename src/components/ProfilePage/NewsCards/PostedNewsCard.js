import React from 'react';
import "./PostedNewsCard.css";

const PostedNewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.thumbnail} alt={article.title} className="thumbnail" />
      <div className="card-content">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <button className="button">Read More</button>
        <button className="button secondary-button">Bookmark</button>
      </div>
    </div>
  );
}

export default PostedNewsCard;
