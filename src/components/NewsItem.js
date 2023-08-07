// Import necessary dependencies and icons
import React, { useEffect, useState } from 'react';
import { BsFillBookmarkHeartFill, BsSend } from 'react-icons/bs';

export default function NewsItem(props) {
    // State variable to manage the bookmark (saved) status of the article
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // Check if the article is already saved in local storage
        const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
        if (savedArticles.some((article) => article.newsUrl === props.newsUrl)) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
    }, [props.newsUrl]);

    // Function to handle the save/unsave of the article
    const handleSaveClick = () => {
        // Toggle the isSaved state
        setIsSaved((prevIsSaved) => !prevIsSaved);

        // Save or remove the article from local storage based on the isSaved state
        const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
        if (isSaved) {
            const updatedSavedArticles = savedArticles.filter((article) => article.newsUrl !== props.newsUrl);
            localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
        } else {
            const newArticle = {
                title: props.title,
                description: props.description,
                imageUrl: props.imageUrl,
                newsUrl: props.newsUrl,
                author: props.author,
                date: props.date,
                source: props.source
            };
            localStorage.setItem('savedArticles', JSON.stringify([...savedArticles, newArticle]));
        }
    };

    // Function to handle sharing of the article
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: props.title,
                    text: props.description,
                    url: props.newsUrl,
                });
            } else {
                console.log('Web Share API not supported on this browser.');
                // You can provide a fallback here for browsers that don't support Web Share API.
                // For example, show a tooltip or a modal with instructions on how to share the content.
            }
        } catch (error) {
            console.error('Error sharing:', error);
            // Handle any errors that occur during the sharing process, if needed.
        }
    };

    return (
        <div>
            {/* Display the news article card */}
            <div className="card my-3 mx-5" style={{ width: "20rem", justifyContent: 'center' }}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {props.source}
                    </span></h5>
                    <p className="card-text">{props.description}</p>
                    <p className='card-text'><small className='text-muted'>By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    {/* Link to the full article */}
                    <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    {/* Button to share the article */}
                    <button className="btn btn-link" onClick={handleShare}>
                        <BsSend style={{ fontSize: "34px", marginLeft: "60px", color: 'black' }} />
                    </button>
                    {/* Button to save/unsave the article */}
                    <button className="btn btn-link" onClick={handleSaveClick}>
                        <BsFillBookmarkHeartFill style={{ fontSize: "34px", marginLeft: "0px", color: isSaved ? 'black' : 'grey' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}
