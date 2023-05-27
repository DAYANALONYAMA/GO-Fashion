import React from "react";
import {
  InfiniteHits,
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import CloseIcon from "@mui/icons-material/Close";
import "./SearcBar.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchClient = instantMeiliSearch(
  "https://ms-678a78f5e34e-3511.sfo.meilisearch.io",
  "2abc87e8860f98067bf726c6c8f828e12e328d42"
);

const SearchBar = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function Hit(props) {
    return (
      <div key={props.hit.id} className="">
        <img src={props.hit.img} alt={props.hit.title}></img>
        <div className="highlight">
          <Highlight attribute="title" hit={props.hit} />
          <Highlight attribute="desc" hit={props.hit} />
        </div>
      </div>
    );
  }

  return (
    <div className="search-modal">
      <InstantSearch indexName="product" searchClient={searchClient}>
        <div className="form-field">
          {/* <InstantSearch indexName="product" searchClient={searchClient}> */}
          <SearchBox className="inpuSerch" />

          {/* </InstantSearch> */}

          <CloseIcon
            onClick={() => setShowSearch(false)}
            className=".close-btn"
          />
        </div>
        <div className="content-result">
          <div className="search-results">
            <div className="search-result-item">
              <Hits hitComponent={Hit} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchBar;
