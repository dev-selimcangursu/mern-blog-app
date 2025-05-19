const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const categoriesRoutes = require("./routers/CategoriesRouter");
const blogsRoutes = require("./routers/BlogRouter");
const aboutRoutes = require("./routers/AboutRouter")
const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/blog-images", express.static("public/blog-images"));

// Routers
app.use("/categories", categoriesRoutes);
app.use("/blog", blogsRoutes);
app.use("/about",aboutRoutes);

// Mongosee Bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Bağlantısı Başarılı");
  })
  .catch((error) => {
    console.error("MongoDB Bağlantısı Başarısız :", error);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`${PORT} Aktif Çalışıyor...`));
