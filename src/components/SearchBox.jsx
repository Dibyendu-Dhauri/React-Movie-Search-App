
const SearchBox = (props)=> {

    return (
        <div className='InputSearch'>
        <input
        value={props.value}
        onChange = {(e)=> props.setSearchValue(e.target.value)}
        placeholder = "type to search..."
        />
        </div>
    )
}

export default SearchBox