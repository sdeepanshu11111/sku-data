// import singleProduct
import SingleProduct from "./SingleProduct";

// dropdown
import Dropdown from "./Dropdown";

const Products = ({ mainData, data, setData }) => {
  return (
    <div className="products">
      <Dropdown mainData={mainData} setData={setData} data={data} />

      <div className="products-nest">
        {data.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
