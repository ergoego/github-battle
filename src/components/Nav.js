var React = require('react');
var PropTypes = require('prop-types');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
let navBarPages = ['Home','Battle','Popular']
  return (
      <ul className='nav'>
        {navBarPages.map(function(page) {
          return(
            <li>
              <NavLink activeClassName='active' to={page === 'Home' ? '/' : '/'+page.toLowerCase()}>
                {page}
              </NavLink>
            </li>
          )
        })}
      </ul>
  )
}

export default Nav;
