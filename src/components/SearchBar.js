import TextField from "@material-ui/core/TextField";

const SearchBar = ({
  mainData,
  searchState,
  setData,
  data,
  setSearchValue,
  searchValue,
  activeCategory,
}) => {
  console.log(!!activeCategory);
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  const searchHandler = (e) => {
    let val = titleCase(e.target.value);

    setSearchValue(val);

    if (val && (activeCategory === undefined || activeCategory === "All")) {
      let filterData = mainData.filter((f) => {
        if (f.name.indexOf(val) !== -1) {
          return f;
        }
      });

      setData(filterData);
    } else if (val && activeCategory) {
      let filterData1 = mainData.filter((f) => {
        return f.mainCategory === activeCategory;
      });

      let filterData2 = filterData1.filter((f) => {
        if (f.name.indexOf(val) !== -1) {
          return f;
        }
      });
      setData(filterData2);
    }
  };

  return (
    <div className="searchBar">
      <form noValidate autoComplete="off">
        <TextField
          onChange={searchHandler}
          id="standard-basic"
          label="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
