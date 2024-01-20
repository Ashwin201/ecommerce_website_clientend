import ProductList from "../../../../components/ProductList";
import GlobalApis from "../../../../utils/GlobalApis";
import React from "react";

const RelatedProduct = async ({ productsId, categoryId }) => {
  const data = await GlobalApis.getRelatedProducts(productsId, categoryId);

  return (
    <div className=" mt-16 ">
      <h1 className=" relative font-bold text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text  mb-12">
        Related Products
        <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-24 bg-gradient-to-r from-slate-700 via-purple-700 to-slate-900"></span>
      </h1>
      <ProductList innerPage={true} data={data.data.data} />
    </div>
  );
};

export default RelatedProduct;
