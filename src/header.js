const Header = () => {
    return <header>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a class="navbar-brand" href="https://www.youtube.com/watch?v=2ePVnqa5GYA">
                        LOS MEJORES NFTS DE LA GALAXIA
                </a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

        </nav>
        <br></br>
        <br></br>
        <br></br>
    </header>;
}

export default Header;