import { useState, useEffect } from "react";
import axios from "axios";
import "./Auction.css";

const Auction = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    startTime: "",
    endTime: "",
  });

  // Fetch auctions from backend
  useEffect(() => {
    axios.get("/api/auctions")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching auctions:", error));
  }, []);

  // Add new auction item to backend
  const addItem = (e) => {
    e.preventDefault();
    
    axios.post("/api/auctions", {
      name: newItem.name,
      price: newItem.price,
      startTime: newItem.startTime,
      endTime: newItem.endTime,
    })
    .then((response) => {
      setItems([...items, response.data]); // Update UI with new item
      setNewItem({ name: "", price: "", startTime: "", endTime: "" }); // Reset form
    })
    .catch((error) => {
      console.error("Error adding item:", error);
    });
  };

  const categories = [
    { name: "Cars", img: "https://tse4.mm.bing.net/th?id=OIP.MNUG4WVRcMDa8st6RZVd4QHaE8&pid=Api&P=0&h=180" },
    { name: "Furniture", img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "Jewellry", img: "https://tse2.mm.bing.net/th?id=OIP.bFZADjbnx-mkVm142G4SKwHaHP&pid=Api&P=0&h=180" },
    { name: "Handcraft", img: "https://tse2.mm.bing.net/th?id=OIP.hkvha8UCZbaFSsx2YkPBmAHaFS&pid=Api&P=0&h=180" },
    { name: "Paintings", img: "https://tse2.mm.bing.net/th?id=OIP._0mZlOUBfq2w0awhFZpmDwHaFj&pid=Api&P=0&h=180" },
    { name: "Bikes", img: "https://tse3.mm.bing.net/th?id=OIP.yzGMDiOvtOhA6IL34NvzQwHaEK&pid=Api&P=0&h=180" },
  ];

  return (
    <div className="auction-container">
      <div className="sidebar">
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <img src={category.img} alt={category.name} className="category-img" onError={(e) => (e.target.src = "https://via.placeholder.com/100")} />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="auction-main">
        <h2 className="auction-title">Live Auctions</h2>
        <div className="auction-content">
          <form className="auction-form" onSubmit={addItem}>
            <input type="text" placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
            <input type="number" placeholder="Starting Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
            <input type="datetime-local" value={newItem.startTime} onChange={(e) => setNewItem({ ...newItem, startTime: e.target.value })} />
            <input type="datetime-local" value={newItem.endTime} onChange={(e) => setNewItem({ ...newItem, endTime: e.target.value })} />
            <button type="submit">Add Item</button>
          </form>

          <ul className="auction-list">
            {items.map((item, index) => (
              <li key={item._id || index} className="auction-item">
                <strong>{item.name}</strong> - ₹{item.price} <br />
                🕒 {item.startTime} - {item.endTime}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Auction;
