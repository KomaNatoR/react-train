import React from "react";

const FilterTodo = ({value, onChange}) => (
    <label>Filter
        <input type="text" value={value} onChange={onChange}  />
    </label>
);
export default FilterTodo;
