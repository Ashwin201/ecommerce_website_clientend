import React from "react";
import CategoryList from "./CategoryList";
import GlobalApis from "../utils/GlobalApis";

const getData = async () => {
  const res = await GlobalApis.getCategories();
  return res.data.data;
};
const CategortSection = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div>
      <CategoryList categoryData={data} />
    </div>
  );
};

export default CategortSection;
