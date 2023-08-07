// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  // State variables to manage the news articles and loading status
  const [appState, setAppState] = useState({
    loading: false,
    articles: [],
    totalResults: 0
  });

  // State variable to keep track of the current page
  const [page, setPage] = useState(1);

  // Function to fetch data from the News API and update the state with new articles
  const updateData = async () => {
    setAppState({ loading: true });
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(60);
    setAppState(() => ({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    }));
    props.setProgress(100);

    // Set the document title with the category name for SEO purposes
  };

  // Function to fetch more data for infinite scrolling
  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage + 1); // Increment the page state
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    // Check if parsedData.articles is valid before concatenating
    if (parsedData.articles && Array.isArray(parsedData.articles)) {
      setAppState((prevState) => ({
        loading: false,
        articles: [...prevState.articles, ...parsedData.articles], // Concatenate the new articles
        totalResults: parsedData.totalResults,
      }));
    } else {
      setAppState((prevState) => ({
        ...prevState,
        loading: false, // Set loading to false in case of an error
      }));
    }
  };

  // Fetch data when the country prop changes using useEffect
  useEffect(() => {
    updateData();
    document.title = `DailyNews-${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    window.dispatchEvent(new Event('titlechange'));
    // eslint-disable-next-line
  }, [props.country]);

  

  return (
    <div className="container my-3">
      {/* Display the category name and page title */}
      <h1 className='text-center' style={{ marginTop: "100px" }}>Daily News Digest - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
      {/* InfiniteScroll component to enable infinite scrolling */}
      <InfiniteScroll
        dataLength={!appState.loading && appState.articles != null ? appState.articles.length : 0}
        next={fetchMoreData}
        hasMore={page < Math.ceil(appState.totalResults / props.pageSize)} // Compare page with total number of pages
        loader={<Spinner />}
      >
        <div className="row my-3">
          {/* Render news items */}
          {!appState.loading && appState.articles != null ? appState.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage || "https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          )) :
            <Spinner />} {/* Show spinner if loading */}
        </div>
      </InfiniteScroll>
    </div>
  );
}
