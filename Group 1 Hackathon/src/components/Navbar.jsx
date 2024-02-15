const Navbar = function () {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  <img
                    class="star"
                    src="https://banner2.cleanpng.com/20180404/qbq/kisspng-five-pointed-star-silhouette-shape-5-stars-5ac4b1155bd917.1121736715228398293762.jpg"
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        What's On
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
