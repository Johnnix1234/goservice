import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../../images/img-2.jpg"
              text="Travel through pedastrian Island in a private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../../images/img-3.jpg"
              text="Take a tour around the world to discover more fun about life"
              label="Touristism"
              path="/services"
            />
            <CardItem
              src="../../images/img-4.jpg"
              text="Choose a game of your choice and play on any location you wish"
              label="Sporting"
              path="/services"
            />
            <CardItem
              src="../../images/img-5.jpg"
              text="Enjoy Coffee and all other refreshments of your choice"
              label="Relaxation"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
