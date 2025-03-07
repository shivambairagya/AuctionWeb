const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
    });
};

module.exports = errorHandler;
