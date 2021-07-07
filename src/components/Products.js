// import singleProduct
import SingleProduct from "./SingleProduct";

import SearchBar from "./SearchBar";

// dropdown
import Dropdown from "./Dropdown";

const Products = ({ mainData, searchState, setSearchState, data, setData }) => {
  return (
    <div className="products">
      <div className="search-container">
        <Dropdown
          mainData={mainData}
          setSearchState={setSearchState}
          setData={setData}
          data={data}
        />
        <SearchBar
          searchState={searchState}
          mainData={mainData}
          setData={setData}
          data={data}
        />
      </div>

      <div className="products-nest">
        {data.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
