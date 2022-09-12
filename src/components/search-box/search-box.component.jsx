import './search-box.styles.css';
const SearchBox = ({className , placeholder , onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}

      // anonymous function 
      onChange={onChangeHandler}
    />);
}


export default SearchBox; 