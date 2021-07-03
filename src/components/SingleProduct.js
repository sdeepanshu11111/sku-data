const SingleProduct = ({ product }) => {
  return (
    <div className="singleProduct">
      <div className="left">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="right">
        <div className="name">
          <h2>{product.name}</h2>
        </div>
        <div className="other">
          <h3>{product.category}</h3>
          <h3>{product.mainCategory} </h3>
          <h4>00{product.id}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
