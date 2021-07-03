// import singleProduct
import SingleProduct from "./SingleProduct";

const Products = ({ data }) => {
  return (
    <div className="products">
      {data.map((product) => (
        <SingleProduct product={product} />
      ))}
    </div>
  );
};

export default Products;
