var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
let navBarPages = ['Home','Battle','Popular']
  return (
      <ul className='nav'>
        {navBarPages.map(function(page) {
          return(
            <li>
              <NavLink exact activeClassName='active' to={page === 'Home' ? '/' : '/'+page.toLowerCase()}>
                {page}
              </NavLink>
            </li>
          )
        })}
      </ul>
  )
}

module.exports = Nav;
