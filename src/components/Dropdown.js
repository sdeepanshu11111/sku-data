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
}) => {
  // Categoryhandler
  const categoryHandler = (e) => {
    if (e.target.value === "All") {
      return setData(mainData);
    } else {
      let filterData = mainData.filter((f) => {
        return f.mainCategory === e.target.value;
      });

      setSearchState(filterData);
      return setData(filterData);
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
