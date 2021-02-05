import React, { useState } from "react";

export const FacetCards = (props) => {
  const { searchResults } = props;
  const [show, setShow] = useState("facet__hidden");
  const [moreOrLess, setMoreOrLess] = useState("More");

  function toggleFilter() {
    setShow(show === "facet__hidden" ? "facet__section" : "facet__hidden");
    setMoreOrLess(moreOrLess === "More" ? "Less" : "Less");
  }

  const showfewItem = (index, minItemToShow, show) => {
    if (index < minItemToShow) {
      return "facet__section";
    } else {
      return show;
    }
  };

  return searchResults.facets.map((facet) => {
    return (
      <div>
        <h4>{facet.displayName}</h4>
        {facet.values.map((value, ind) => (
          <div className={showfewItem(ind, 2, show)}>{value.value}</div>
        ))}
        <button onClick={toggleFilter}>{moreOrLess}</button>
      </div>
    );
  });
};
