import Breadcrumb from "../../../components/Breadcrumb";
import ProductList from "../../../components/ProductList";
import GlobalApis from "../../../utils/GlobalApis";
import React from "react";
const getDataById = async (id) => {
  const res = await GlobalApis.getCategoriesById(id);
  return res.data.data;
};
const CategoryProducts = async ({ params }) => {
  const { id } = params;
  const data = await getDataById(id);
  // console.log(data);
  return (
    <div className="mb-14">
      <Breadcrumb
        first={"category"}
        second={data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
      />

      <h1 className=" relative font-bold  text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mt-10 mb-12">
        {data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
        <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-28 bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 "></span>
      </h1>
      <ProductList innerPage={true} data={data} />
    </div>
  );
};

export default CategoryProducts;
