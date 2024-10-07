import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categorys,setCategorys]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
    console.log(categorys);
  return (
    <div>
      <div className="text-center bg-slate-100 shadow-xl py-4">
        <h1 className="font-mono font-extrabold text-5xl text-black">
          Job Category List
        </h1>
        <p className="font-mono font-medium text-[#757575] text-xl mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-14 mb-10 px-6 ">
        {
            categorys.map(category=> <Category key={category.id} category={category}> </Category>)
        }

      </div>
    </div>
  );
};

export default CategoryList;
