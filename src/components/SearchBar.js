import TextField from "@material-ui/core/TextField";

const SearchBar = ({ mainData, searchState, setData, data }) => {
  const searchHandler = (e) => {
    function titleCase(str) {
      str = str.toLowerCase().split(" ");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(" ");
    }
    let val = titleCase(e.target.value);

    let searchArray = [];

    searchState.forEach((s) => {
      if (s.name.indexOf(val) !== -1) {
        searchArray.push(s);
      }
    });

    setData(searchArray);
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
