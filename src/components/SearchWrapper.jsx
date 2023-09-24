import React from 'react'

const SearchWrapper = () => {
  return (
    <div>
      <div class=" mainHeaderCols searchWrapper">
        <div class="icon-addon addon-sm">
            <form class="searchContainer">
                <input class="searchInput form-controls" placeholder="Search by product, category or collection" type="text" autocomplete="off" />
                <i class="icon_search"></i>
            </form>
        <div class="seperator"></div>
        
        </div></div>
    </div>
  )
}

export default SearchWrapper
