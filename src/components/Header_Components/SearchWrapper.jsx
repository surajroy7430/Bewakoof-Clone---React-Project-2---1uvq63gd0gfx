import React from 'react';
import '../../styles/Header_Components_Styles/SearchWrapper.css'

const SearchWrapper = () => {
  return (
    <>
      <div class="pull-right mainHeaderCols searchWrapper">
          <div class="icon-addon addon-sm">
            <form class="searchContainer" style={{position: 'relative', borderBottom: 'none'}}>
                <input class="searchInput form-controls" placeholder="Search..." type="text" autocomplete="off" />
            </form>
            <div class="seperator"></div>
          </div>
      </div>
    </>
  )
}

export default SearchWrapper
