import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable cross-origin requests so your frontend can communicate with this API
app.use(cors());
app.use(express.json());

// Database array structures hosted directly in server memory cache memory
const PRODUCTS = [
  { id: 1, name: 'Phone', price: 20000, category: 'Electronics', img: '/assets/images/phone.jpg' },
  { id: 2, name: 'Laptop', price: 60000, category: 'Electronics', img: '/assets/images/laptop.jpg' },
  { id: 3, name: 'Shoes', price: 3000, category: 'Fashion', img: '/assets/images/shoes.jpg' },
  { id: 4, name: 'Watch', price: 5000, category: 'Accessories', img: '/assets/images/watch.jpg' }
];

// Endpoint route tracker array to fetch all store materials
app.get('/api/products', (req, res) => {
  res.json(PRODUCTS);
});

// Endpoint handler route checklist to calculate orders out seamlessly
app.post('/api/checkout', (req, res) => {
  const { cartItems, totalAmount } = req.body;
  console.log(`📦 Order received! Total: ₹${totalAmount}`, cartItems);
  res.json({ success: true, message: "Order placed successfully in data servers!" });
});

app.listen(PORT, () => {
  console.log(`🚀 ShopEase Backend Engine running smoothly at http://localhost:${PORT}`);
});
