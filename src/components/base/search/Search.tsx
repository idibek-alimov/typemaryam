import React from "react";
import "./Search.css";
import { useState, ChangeEvent } from "react";
import { Search as searchtype } from "../../../extra/types/Search";
import { add } from "../../../store/features/search/searchSlice";
import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState<searchtype>({ text: "" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onInputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText({ text: String(event.target.value) });
  };
  const onSubmitForm = () => {
    dispatch(add(searchText));
    navigate("search");
    window.location.reload();
  };
  return (
    <form
      className="search-box"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm();
      }}
    >
      <input
        className="search-input"
        value={searchText.text}
        onChange={onInputHandle}
      />
      <button type="submit" className="search-button" placeholder="Search">
        search
      </button>
    </form>
  );
};
export default Search;
