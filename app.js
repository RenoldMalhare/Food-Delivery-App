import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-bar">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bxuy55iCLloNvNoHRdMDedxUMA0ll3_P5Q&s"
          alt="Logo"
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const resObj = [
  {
    id: 1,
    name: "The Spice Garden",
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    cost_for_two: "$25",
    rating: 4.5,
    cuisines: ["Indian", "North Indian"],
    delivery_time: "30-40 mins",
  },
  {
    id: 2,
    name: "Bella Napoli",
    image_url: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    cost_for_two: "$40",
    rating: 4.2,
    cuisines: ["Italian", "Pizza", "Pasta"],
    delivery_time: "40-50 mins",
  },
  {
    id: 3,
    name: "Tokyo Bites",
    image_url:
      "https://plus.unsplash.com/premium_photo-1723874570807-570c56b41e4e",
    cost_for_two: "$35",
    rating: 4.8,
    cuisines: ["Japanese", "Sushi"],
    delivery_time: "25-35 mins",
  },
  {
    id: 4,
    name: "Green Bowl",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    cost_for_two: "$28",
    rating: 4.6,
    cuisines: ["Vegan", "Healthy"],
    delivery_time: "20-30 mins",
  },
  {
    id: 5,
    name: "Burger Forge",
    image_url: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    cost_for_two: "$20",
    rating: 4.1,
    cuisines: ["American", "Burgers"],
    delivery_time: "30-40 mins",
  },
  {
    id: 6,
    name: "Taco Loco",
    image_url:
      "https://plus.unsplash.com/premium_photo-1679231521293-e13146411fb2",
    cost_for_two: "$22",
    rating: 4.0,
    cuisines: ["Mexican", "Tacos"],
    delivery_time: "35-45 mins",
  },
  {
    id: 7,
    name: "Falafel House",
    image_url: "https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b",
    cost_for_two: "$30",
    rating: 4.3,
    cuisines: ["Middle Eastern", "Falafel"],
    delivery_time: "25-35 mins",
  },
  {
    id: 8,
    name: "Pho Street",
    image_url: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f",
    cost_for_two: "$18",
    rating: 4.4,
    cuisines: ["Vietnamese", "Pho"],
    delivery_time: "30-40 mins",
  },
  {
    id: 9,
    name: "Café Aurora",
    image_url: "https://images.unsplash.com/photo-1579712267685-42da80f60aa4",
    cost_for_two: "$50",
    rating: 4.7,
    cuisines: ["French", "Fine Dining"],
    delivery_time: "45-55 mins",
  },
  {
    id: 10,
    name: "Dragon Wok",
    image_url:
      "https://plus.unsplash.com/premium_photo-1661600135596-dcb910b05340",
    cost_for_two: "$26",
    rating: 4.2,
    cuisines: ["Chinese", "Dim Sum"],
    delivery_time: "25-35 mins",
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cost_for_two, rating, delivery_time, image_url } =
    resData;
  return (
    <div className="res-card">
      <img
        alt="Food Image"
        src={image_url}
        // src="https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{cost_for_two}</h4>
      <h4>{rating}</h4>
      <h4>{delivery_time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        {resObj.map((restaurant, id) => (
          <RestaurantCard key={id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={resObj[0]} /> */}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
