import { useNavigate, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getProductsDetails } from "../api/axios";
import { useEffect, useState } from "react";
import instance, { getProductsDetails } from "../api/axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
 
 
  console.log(product);
  

  // const { data: product, isLoading } = useQuery({
  //   queryKey: ["product", id],
  //   queryFn: () => getProductsDetails(id),
  // });

  useEffect(() => {
    getProductsDetails(id).then((data) => {
      setProduct(data);
    });
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.some((item) => item.id === Number(id));
    setIsInCart(exists);
  }, [id]);

  //   const handleAddToCart = () => {
  //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //     if (!cart.some((item) => item.id === product.id)) {
  //       cart.push(product);
  //       localStorage.setItem("cart", JSON.stringify(cart));
  //       setIsInCart(true);
  //     }
  //   };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  // if (isLoading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mx-auto"
      />

      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.category}
        </p>
        <p className="text-lg font-semibold">${product.price}</p>
        <p>{product.description}</p>

        <button
          // onClick={handleAddToCart}
          disabled={isInCart}
          className={`mt-4 px-6 py-2 rounded text-white transition 
            ${
              isInCart
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }
          `}
        >
          {isInCart ? "Already in Cart" : "Add to Cart"}
        </button>
        <button
          onClick={handleGoBack}
          className="mt-4 px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800 transition mx-5"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
