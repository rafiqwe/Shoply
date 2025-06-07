import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, title, price, image } = product;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
        <NavLink to={`/products/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-contain mb-4 rounded-lg"
          />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
            {title}
          </h2>
          <p className="text-pink-600 font-bold mt-2 text-xl">${price}</p>
          <div className="mt-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white w-full py-2 rounded-lg transition">
              View Details
            </button>
          </div>
        </NavLink>
    </motion.div>
  );
}
