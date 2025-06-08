import { useQuery } from "react-query";
import axios from "../api/axios";
import ProductCard from "../components/ProductCrad";
const Product = () => {
  const fetchProducts = async () => {
    const res = await axios.get("/products");
    return res.data;
  };

  const { data: products, isLoading } = useQuery(
    "home-products",
    fetchProducts
  );

  if (isLoading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Products</h1>
      <div>
        <p className="text-center text-gray-600 mb-6">
          Explore our wide range of products
        </p>
        <div className="catagorys">
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              All
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Electronics
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Jewelery
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Men's Clothing
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Women's Clothing
            </button>
          </div>  
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Product;
