import React, { useState } from "react";
import "./Search.css";
import { Search as searchtype } from "../../../extra/types/Search";
import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { add } from "../../../store/features/search/searchSlice";
interface SearchWindowProp {
  func: () => void;
}
const SearchWindow = ({ func }: SearchWindowProp) => {
  const [searchText, setSearchText] = useState<searchtype>({ text: "" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onInputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText({ text: String(event.target.value) });
  };
  const onSubmitForm = () => {
    dispatch(add(searchText));
    navigate("search");
    func();
    //window.location.reload();
  };
  return (
    <div className="search-window-div ">
      <div className="search-window-box">
        <div className="search-window-top">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitForm();
            }}
          >
            <input value={searchText.text} onChange={onInputHandle} />
          </form>
          <span onClick={() => func()}>Cancle</span>
        </div>
      </div>
    </div>
  );
};

export default SearchWindow;
