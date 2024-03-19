import React from "react";
import ReactDOM from "react-dom/client";

//Header
  //Logo
  //Nav Items
//Body
  //search
  //Restaurant Container
    //Restaurant Card
      //Restaurant name
      //cuisine
      //rating
      //delivery time
//Footer
  //copyright
  //Links
  //Address
  //Contact

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo"
                   src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" alt="app logo"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-logo" src="https://www.okonomikitchen.com/wp-content/uploads/2021/04/Vegan-Bibimbap-Recipe-1-of-1-1024x683.jpg" alt="res-logo"/>
            <h3>Kimchi House</h3>
            <h4>Vietnamese Cuisine</h4>
            <h4>4.4 stars</h4>
            <h4>Delivery Time: 6mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
