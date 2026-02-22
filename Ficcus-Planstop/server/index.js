import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/plants", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ficus",
      price: 25,
      image: "https://rukminim2.flixcart.com/image/480/480/kkyc9zk0/plant-sapling/f/d/f/panda-plant-2-1-eco-ocean-original-imagy6gkymguwbbj.jpeg?q=90",
      inStock: true
    },
    {
      id: 2,
      name: "Monstera",
      price: 35,
      image: "https://cdn.standardmedia.co.ke/images/monday/mrgzearkbazgdw4w621cc47da68d7.jpg",
      inStock: false
    }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});