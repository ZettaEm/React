function AppSearch(props) {
    
    const {Value,onValuechange} = props;

    return (
        <div className='app-search'>
            <input class="form-control me-2 w-50 shadow-none mt-4 mb-0" type="search" placeholder="Search"
                   value={Value} onChange={(event) => {onValuechange(event.target.value) }} />
        </div>
    );
}
export default AppSearch;