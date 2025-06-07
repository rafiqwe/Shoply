import { motion } from "motion/react";
import { useQuery } from "react-query";
import axios from "../api/axios";
import ProductCard from "../components/ProductCrad";
import { Link } from "react-router-dom";

const Home = () => {
  const fetchProducts = async () => {
    const res = await axios.get("/products?limit=4");
    return res.data;
  };

  const { data: products, isLoading } = useQuery(
    "home-products",
    fetchProducts
  );

  return (
    <>
      <motion.div
        className="text-center py-20 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-600">
          Shop Smart with Shoply
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Find the best products at unbeatable prices.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-pink-600 text-white rounded-xl text-lg hover:scale-105 transition"
          >
            Browse Products
          </Link>
          <Link
            to="/cart"
            className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl text-lg hover:bg-pink-100 transition"
          >
            View Cart
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-6 py-10 px-4">
          {["Men's", "Women's", "Electronics", "Jewelry"].map((cat) => (
            <div
              key={cat}
              className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 text-center"
            >
              <h3 className="text-xl font-semibold text-pink-600">{cat}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Explore latest {cat.toLowerCase()} fashion
              </p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products?.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
