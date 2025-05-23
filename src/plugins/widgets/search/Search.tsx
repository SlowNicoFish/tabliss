import React, { FC, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

import { getSuggestions } from "./getSuggestions";
import Suggestions from "./Suggestions";
import { Props, defaultData } from "./types";
import { buildUrl, getSearchUrl, getSuggestUrl } from "./utils";
import "./Search.sass";

const Search: FC<Props> = ({ data = defaultData }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const previousValue = useRef("");

  const [active, setActive] = useState<number>();
  const [suggestions, setSuggestions] = useState<string[]>();

  const { t } = useTranslation(); // Initialize the translation function
  const placeholder = useMemo(
    () => t("plugins.search.placeholder", { defaultValue: "Type to search" }), // Use t for translation
    [t],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    previousValue.current = event.target.value;

    if (BUILD_TARGET === "web") {
      const suggestUrl = getSuggestUrl(data.suggestionsEngine);
      if (suggestUrl) {
        getSuggestions(event.target.value, suggestUrl).then((suggestions) => {
          setSuggestions(suggestions.slice(0, data.suggestionsQuantity));
          setActive(undefined);
        });
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions) {
      return;
    }

    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        const upTo = !active ? suggestions.length - 1 : active - 1;
        searchInput.current!.value = suggestions[upTo];
        setActive(upTo);
        break;

      case "ArrowDown":
        const downTo =
          active === undefined || active === suggestions.length - 1
            ? 0
            : active + 1;
        searchInput.current!.value = suggestions[downTo];
        setActive(downTo);
        break;

      case "Escape":
        if (active) {
          setActive(undefined);
          searchInput.current!.value = previousValue.current;
        } else if (suggestions) {
          setSuggestions(undefined);
        }
        break;
    }
  };

  const handleSelect = (suggestion: string) => {
    searchInput.current!.value = suggestion;
    search();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  const search = () => {
    document.location.assign(
      buildUrl(searchInput.current!.value, getSearchUrl(data.searchEngine)),
    );
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        autoFocus
        defaultValue=""
        placeholder={placeholder} // Use the translated placeholder
        ref={searchInput}
        tabIndex={1}
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />

      {suggestions && (
        <Suggestions
          active={active}
          setActive={setActive}
          suggestions={suggestions}
          onSelect={handleSelect}
        />
      )}
    </form>
  );
};

export default Search;
