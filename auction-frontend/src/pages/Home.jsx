import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h2 className="tagline">BID SMARTER, WIN BIGGER</h2>
        <h1 className="title">AUCTIONWAVE</h1>
        <p className="subtitle">Online Auction Platform</p>
        <div className="auth-links">
          <Link to="/register" className="btn-register">Register</Link>
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
