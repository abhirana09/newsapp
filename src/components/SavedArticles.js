// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { BsRocket } from 'react-icons/bs';

export default function SavedArticles(props) {
  // State variable to store the saved articles
  const [savedArticles, setSavedArticles] = useState([]);

  // Fetch the saved articles from localStorage on component mount
  useEffect(() => {
    const savedArticlesData = JSON.parse(localStorage.getItem('savedArticles')) || [];
    setSavedArticles(savedArticlesData);
  }, []);

  useEffect(()=>{
    document.title="DailyNews-Saved";
    window.dispatchEvent(new Event('titlechange'));

  },[])

  return (
    <div className="container my-3">
      {/* Display the category name and page title */}
      <h1 className='text-center' style={{ marginTop: "100px" }}>Daily News Digest - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>

      <div className="row my-3">
        {savedArticles.length > 0 ? ( // Check if there are saved articles
          savedArticles.map((article) => (
            <div className="col-md-4" key={article.newsUrl}> {/* Use newsUrl as the key since it should be unique */}
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                newsUrl={article.newsUrl}
                author={article.author}
                date={article.date}
                source={article.source}
              />
            </div>
          ))
        ) : (
          <div style={{ width: '100%', alignItems: 'center', margin: '0 40%' }}>
            {/* Display a rocket icon and message for no saved articles */}
            <h1 style={{ fontSize: '100px' }}><BsRocket /></h1>
            <p>No saved articles</p>
          </div>
        )}
      </div>
    </div>
  );
}
