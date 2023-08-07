// Import necessary dependencies and icons
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarkFill, BsHouseDoor, BsCoin, BsHeartPulse, BsScooter, BsBook, BsHouseDoorFill, BsTv, BsTvFill, BsHeartPulseFill, BsCpu, BsCpuFill, BsBookFill, BsBookmark, BsBicycle, BsCurrencyExchange } from 'react-icons/bs';

export default function Navbar(props) {
  // State variable to keep track of the selected country
  const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem('selectedCountry')==='us'?'United States':'India');
  const [currentTitle, setCurrentTitle] = useState(document.title);


  // Function to handle country selection from the dropdown
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // Call the function from the parent component (App) to update the selected country there.
    country === "India" ? props.handleCountryChange('in') : props.handleCountryChange("us");
  };

  useEffect(() => {
    // Update the state when the title changes
    const handleTitleChange = () => {
      setCurrentTitle(document.title);
    };

    // Listen to the custom 'titlechange' event
    window.addEventListener('titlechange', handleTitleChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('titlechange', handleTitleChange);
    };
}, []);


  return (
    <div>
      {/* Navbar with links to different sections */}
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Link to the home page */}
          <Link className="navbar-brand" to="/" style={{marginRight:'50px', fontStyle:'italic', fontSize:'25px'}}>Daily News Digest</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Links to different news categories */}
              <li className="nav-item "><Link className="nav-link" to="/">{document.title==="DailyNews-General"?<BsHouseDoorFill style={{ fontSize: '20px', marginLeft:'18px'}} />:<BsHouseDoor style={{ fontSize: '20px' , marginLeft:'18px'}} />}<br/> General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">{document.title==="DailyNews-Business"?<BsCurrencyExchange style={{ fontSize: '20px' , marginLeft:'18px'}} />:<BsCoin style={{ fontSize: '20px' , marginLeft:'18px'}}/>}<br/> Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">{document.title==="DailyNews-Entertainment"?<BsTvFill style={{ fontSize: '20px', marginLeft:'35px' }} />:<BsTv style={{ fontSize: '20px', marginLeft:'35px' }} />}<br/> Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">{document.title==="DailyNews-Health"?<BsHeartPulseFill style={{ fontSize: '20px', marginLeft:'35px' }} />:<BsHeartPulse style={{ fontSize: '20px', marginLeft:'35px' }} />}<br/> Health Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">{document.title==="DailyNews-Sports"?<BsScooter style={{ fontSize: '20px', marginLeft:'10px' }} />:<BsBicycle style={{ fontSize: '22px', marginLeft:'10px' }}/>}<br/> Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">{document.title==="DailyNews-Technology"?<BsCpuFill style={{ fontSize: '20px' , marginLeft:'25px'}} />:<BsCpu style={{ fontSize: '20px' , marginLeft:'25px'}} />}<br/> Technology</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/saved">{currentTitle==="DailyNews-Saved"?<BsBookmarkFill style={{ fontSize: '20px' , marginLeft:'30px'}}/>:<BsBookmark style={{ fontSize: '20px' , marginLeft:'30px'}}/>}<br/> Saved Articles </Link></li>
              <li className="nav-item"><Link className="nav-link" to="/documentation">{currentTitle==="DailyNews-Documentation"?<BsBookFill style={{ fontSize: '20px' , marginLeft:'35px'}} />:<BsBook style={{ fontSize: '20px' , marginLeft:'35px'}}/>}<br/> Documentation</Link></li>
            </ul>
            {/* Dropdown to select the country */}
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginRight: '50px' }}>
                {selectedCountry}
              </button>
              <ul className="dropdown-menu">
                {/* Country selection options */}
                <li><button className="dropdown-item" onClick={() => handleCountrySelect('India')}>India</button></li>
                <li><button className="dropdown-item" onClick={() => handleCountrySelect('United States')}>United States</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
