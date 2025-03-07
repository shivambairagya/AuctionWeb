const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ Ensure this is imported only once
const auctionRoutes = require("./routes/auctionRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
connectDB(); // ✅ Call the function only once

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auctions", auctionRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
