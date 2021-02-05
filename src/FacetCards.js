import React, { useState } from "react";

export const FacetCards = (props) => {
  const { searchResults } = props;
  const [filter, setFilter] = useState([]);
  return searchResults.facets.map((facet) => {
    return (
      <div>
        <h4>{facet.displayName}</h4>
        {facet.values.map((value, ind) => (
          <div>{value.value}</div>
        ))}
      </div>
    );
  });
};
