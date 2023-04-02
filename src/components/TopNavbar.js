import React from 'react'

function TopNavbar() {
  return (
    <div className="topNavbar">
      <div className="brand">
        <span className='brandIcon'>
          <i class="fas fa-film"></i>
        </span>
        <h2 className="brandTitle">MovieSplash</h2>
      </div>
      <div className="searchContainer">
        <form>
          <button type='text' className='btnAdd'>
            <span className="searchIcon">
            <i class="fa-solid fa-circle-plus"></i> Movie
            </span>
          </button>
          <div className="search">
            <input type="search" placeholder="Movie search..." name="search"/>
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TopNavbar