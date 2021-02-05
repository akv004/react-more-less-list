import "./styles.css";
import { FacetCards } from "./FacetCards";

export default function App() {
  const searchResults = {
    facets: [
      {
        displayName: "Brand",
        facetField: "brand_facet",
        values: [
          {
            value: "Brand 1",
            count: 24
          },
          {
            value: "Brand 2",
            count: 400
          },
          {
            value: "Brand 3",
            count: 500
          }
        ]
      },
      {
        displayName: "Category",
        facetField: "category_facet",
        values: [
          {
            value: "Cat 1",
            catPath: "cat00000"
          },
          {
            value: "Cat 2",
            catPath: "pcmcat1234"
          },
          {
            value: "Cat 3",
            catPath: "cat00001"
          }
        ]
      }
    ]
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FacetCards searchResults={searchResults} />
    </div>
  );
}
