import React from "react";
import Article from "./Article";

const Articlelist = ({ posts }) => {
  return (
    <main>
      {posts.map((article, index) => (
        <Article
        key={index}
        title={article.name}
        date={article.date}
        preview={article.preview}
        />
      ))}
    </main>
  );
};

export default Articlelist;
