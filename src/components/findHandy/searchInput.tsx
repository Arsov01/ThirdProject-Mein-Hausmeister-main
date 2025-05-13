import "../../App.css";

const SearchButtons = () => {
  return (
    <div className="button-section">
      <div className="search-bar">
        <i className="fas fa-search search-icon" aria-hidden="true"></i>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="filter-button"
          type="button"
          aria-label="Filter options"
        >
          <i className="fas fa-sliders-h" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchButtons;
