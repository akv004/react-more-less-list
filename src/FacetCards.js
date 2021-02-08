import React, { useState } from "react";

export const FacetCards = (props) => {
  const { searchResults } = props;
  return searchResults.facets.map((facet) => {
    return <Facet facet={facet} />;
  });
};

export const Facet = (props) => {
  const { facet } = props;
  const [show, setShow] = useState("facet__hidden");
  const [moreOrLess, setMoreOrLess] = useState("More");
  function toggleFilter() {
    setShow(show === "facet__hidden" ? "facet__section" : "facet__hidden");
    setMoreOrLess(moreOrLess === "More" ? "Less" : "More");
  }
  const showFew = (index, minItemToShow, show) => {
    if (index < minItemToShow) {
      return "facet__section";
    } else {
      return show;
    }
  };
  return (
    <div>
      <h4>{facet.displayName}</h4>
      {facet.values.map((value, ind) => (
        <div className={showFew(ind, 2, show)}>
          <div>
            <input type="checkbox" />
            <label>{value.value}</label>
          </div>
        </div>
      ))}
      <button onClick={toggleFilter}>{moreOrLess}</button>
    </div>
  );
};
