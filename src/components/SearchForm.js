import React, {useRef,useEffect} from 'react'

const SearchForm = ({setSearchTerm}) => {

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus();
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    }
    return (
        <div className="search-container">
            <h1>Search Cocktails</h1>
            <form onSubmit={handleSubmit} className="form-control">
                <div className="from-group">
                    <label htmlFor="name">Search Your Favorite Drink</label>
                    <input type="text" id="name" name="name"  onChange={searchCocktail} ref={searchValue} />
                </div>
            </form>
            
        </div>
    )
}

export default SearchForm
