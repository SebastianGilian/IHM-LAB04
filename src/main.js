const Main = () => {
    return <main>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="imagen1.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="imagen2.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="imagen3.jpg" className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <p className="text-center"> Los mejores NFTS del mercado, incluyendo a tesla y eintein :V</p>

        </div>
    </main>;
}

export default Main;