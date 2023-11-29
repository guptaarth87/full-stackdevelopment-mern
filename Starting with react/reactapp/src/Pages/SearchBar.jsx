import { useState } from "react";
import "./App.css";

function SearchBar() {
	const [count, setCount] = useState(0);
 	const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

	const productNames = ["alpha","alphaa","beta","gama"]
	
	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setSearchTerm(inputValue);
	
		// Filter product names based on the input
		const filteredSuggestions = productNames.filter(
		  (productName) =>
			productName.toLowerCase().includes(inputValue.toLowerCase())
		).slice(0, 3);
	
		setSuggestions(filteredSuggestions);
	  };
	
	  const handleSuggestionClick = (selectedProduct) => {
		console.log(`Selected product: ${selectedProduct}`);
		// You can perform additional actions with the selected product here
	  };
	
	  const handleSearchButtonClick = () => {
		console.log(`Search term: ${searchTerm}`);
		// You can perform additional actions with the entered search term here
	  };

	return (
		<>
            <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      <ul className="suggestion-list">
        {suggestions.map((product, index) => (
          <button key={index} onClick={() => handleSuggestionClick(product)}>
            {product}
          </button>
        ))}
      </ul>
      <button onClick={handleSearchButtonClick}>Search</button>
    </div>
		</>
	);
}

export default SearchBar;
