
const Category = ({category}) => {
    return (
        <div>
            <div className="">
                <img src={category.logo} alt="" />
                <h3 className="font-extrabold font-mono text-black text-xl mt-2">{category.category_name}</h3>
                <p className="font-medium font-mono text-[#A3A3A3] text-[16px] mt-2">{category.availability}</p>
            </div>
        </div>
    );
};

export default Category;