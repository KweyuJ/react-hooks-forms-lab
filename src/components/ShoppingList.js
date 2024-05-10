
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    const isInSelectedCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase());
    return isInSelectedCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        search={searchText} 
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchText} 
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
