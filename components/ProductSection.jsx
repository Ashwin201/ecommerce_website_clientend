import { apiUrl, devUrl } from "../utils/URLs";
import ProductList from "./ProductList";
// import GlobalApis from "@/utils/GlobalApis";
// import fetchDataFromApi from "@/utils/GlobalApi";
import GlobalApis from "../utils/GlobalApis";

const ProductSection = async () => {
  const data = await GlobalApis.getLatestProducts();
  // console.log(data?.data?.data);
  return (
    <div>
      <ProductList data={data?.data?.data} />
    </div>
  );
};

export default ProductSection;
