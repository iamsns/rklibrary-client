import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = () => {
    return <div className="search-bar">
        <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
        />
        <input type='search' className="search-input" placeholder="Search Book or author or category.." />
    </div >
}

export default SearchBar