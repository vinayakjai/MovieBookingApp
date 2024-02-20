import './navbar.css'
function Navbar(){
    return (
        <>
          <div className="navbar-wrapper">
            <div>
                Movie Base
            </div>
            <div className="search-bar">
                <input type="text" placeholder='search your movie here'/>
            </div>
            <div>theme</div>
          </div>
        </>
    )
}

export default Navbar;