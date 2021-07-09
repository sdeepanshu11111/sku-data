// components
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const DropdownMenu = ({
  mainData,
  data,
  setSearchState,
  setMainData,
  setData,
  setActiveCategory,
  searchValue,
  activeCategory,
}) => {
  // Categoryhandler
  const categoryHandler = (e) => {
    setActiveCategory(e.target.value);
    console.log(e.target.value);

    if (searchValue == undefined) {
      if (e.target.value === "All") {
        setData(mainData);
      } else {
        let filterData = mainData.filter((f) => {
          return f.mainCategory === e.target.value;
        });

        setData(filterData);
      }
    } else {
      if (e.target.value === "All") {
        let filterData = mainData.filter((f) => {
          if (f.name.indexOf(searchValue) !== -1) {
            return f;
          }
        });

        setData(filterData);
      } else {
        let filterData = mainData.filter((f) => {
          return f.mainCategory === e.target.value;
        });

        let filterData2 = filterData.filter((f) => {
          if (f.name.indexOf(searchValue) !== -1) {
            return f;
          }
        });

        setData(filterData2);
      }
    }
  };

  return (
    <div className="dropdown">
      <FormControl>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Categories
        </InputLabel>
        <NativeSelect onChange={categoryHandler}>
          <option onClick={alert} value={"All"}>
            All
          </option>
          <option value={"Restaurant"}>Restaurant</option>
          <option value={"Dairy"}>Dairy</option>
          <option value={"Bakery"}>Bakery</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default DropdownMenu;
