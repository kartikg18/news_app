import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0577b24ae4184bf08b9497d0de5df092`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data?.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        {" "}
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles?.map((news, i) => {
        return <Newsitem key={i} title={news?.title} description ={news?.description} url={news?.url} src={news?.urlToImage} />;
      })}
    </div>
  );
};

export default Newsboard;
