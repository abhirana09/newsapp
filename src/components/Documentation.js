import React, { useEffect } from 'react'

export default function Documentation() {
  useEffect(() => {
    document.title = "DailyNews-Documentation";
    window.dispatchEvent(new Event('titlechange'));
}, []);

  return (
    <div className="container">
      <h1 className='text-center' style={{ marginTop: "100px" }}>Daily News Digest - Documentation</h1>

      <p>Welcome to the documentation page for my   News App! Here, we'll provide instructions on how to use my   site, list the features implemented in the app, and highlight some points for consideration.

        <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Special Instructions</li>
          <li>Criteria for the Assignment</li>
          <li>Features</li>
          <li>Usage Instructions</li>
          <li>Usability Considerations</li>
          <li>Conclusion</li>
        </ul>

        <h2>1. Introduction</h2>
        My  News App is designed to provide users with the latest news headlines and articles from various sources around the world. Users can browse news articles by category, save articles for later reading, and even share specific articles to others. The app aims to deliver an intuitive and pleasant user experience with a clean and responsive design.

        <h2>2. Special Instructions</h2>
        There are no special instructions to build and run my News App. It is a client-side web application built using React. Simply access the app through a modern web browser, and you can start exploring the latest news in no time.

        <h2>3. Criteria for the Assignment</h2>
        My  News App meets the criteria for the assignment as follows:<br />

        <strong> App Componentization, Organization/Architecture:</strong> The app contains 5 main components Which are used for different purposes and make the app more organized.
        <br /><strong>Adding, Removing, Editing, and Filtering features:</strong> The app has save button on every news item which helps us add the news in the saved articles component and clicking it again makes it  to get rempved from saved articles there are no editing feature as per now as there is no logical way to add it in a news app.

        <br /><strong> Client-side routing:</strong>The app contains Routing in fetching the news based on their categories the Browser router helps us to change the routes to fetch different category data on different route.
        <br /><strong>Consumed public API:</strong> This app uses News Api as the source of data so it consumes a public api call News api.

        <br /><strong>Used localStorage to persist some data</strong> Local storage is used in two different features first is to persist the country and second is to persist the saved articles so that the user dont loose them even after closing the tab or refresing the window.
        <br /><strong>Deployed front-end app to Netlify (or other service):</strong>https://64cb062425bdb023ae8f4c32--dulcet-bunny-7ee08f.netlify.app/  the app can't fetch data from news api as they have just enabled the CORS for local host for that i might need to purchase the expensive subscription but I am not gonna do that instead I will be working on creating my own backend If you see this link working then I have created the backend or I am working on it Thankyou :)
        <br /><strong>Well designed, tested and free from errors</strong>The web app has been tested several times on different browsers and devices. And also given to the real users to use and give me the feedback.
        <br /><strong>Application is original and demonstrates creative use of the tools learned throughout the course:</strong> While making a project I was thinking of creating an app that has some actual usage and it uses interactive icons from react-icons and top loading bar from npm


        <h2>4. Features</h2>
        My  News App includes the following features:

        Top Headlines: Display top headlines from various news sources.

        Infinite Scrolling: Load more articles as the user scrolls down the page.

        Category Selection: Allow users to filter news articles by category (e.g., technology, sports, health).

        Country Selection: Users can switch between news from India and the United States.

        Save for Later: Users can bookmark articles to read later.

        Share to friends: The share button feature allows users to share the news with anyone.

        Responsive Design: The app is responsive and optimized for different screen sizes.

        <h2>5. Usage Instructions</h2>
        Using my   News App is simple and user-friendly:

        Select a country from the dropdown (India or the United States).

        Choose a category from the navigation menu to view top headlines for that category.

        Scroll down to load more articles.

        Click on the "Read More" button to open the full article in a new tab.

        To save an article for later, click the bookmark icon ("Save for Later"). The icon color will change to black, indicating that the article is saved.

        To unsave an article, click the bookmark icon again, and it will change back to grey.

        Click on the share icon to share it with your friends or copy the url of the news.
        <h2>6. Usability Considerations</h2>
        I have taken usability into account while building the News App:

        Visual Feedback: Users receive visual feedback when performing actions, such as saving an article, through color changes on icons.

        User Satisfaction: The top loading bar and the spinner while loading a page gives a feel of satifaction like any modern web app.

        Intuitive Navigation: The navigation menu allows users to quickly switch between categories, the navbar is made sticky at top so that the user can navigate to other tabs even from the end of the page.

        Responsive Design: The app adapts to various devices, providing a seamless experience on desktops, tablets, and mobiles.

        Error Handling: I handle errors gracefully and display user-friendly messages when something goes wrong.

        <h2>7. Conclusion</h2>
        Thank you for using my   News App! I hope you find it useful and enjoy staying updated with the latest news. If you have any feedback or suggestions, please feel free to reach out to us. Happy reading!</p>
    </div>
  )
}
