import React from "react";

const WOBlock01 = function () {
    return (
        <>
            <div className="container block" id="Block01">
                <div className="row">
                    <div className="col-md-9">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://i.redd.it/8yonn7m4bfk31.jpg" class="d-block w-100" alt="Endgame" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://goldendiscs.ie/cdn/shop/collections/Header_Oppenheimer_2for25_460x@2x.png?v=1697618018" class="d-block w-100" alt="Oppenheimer" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://uproxx.com/wp-content/uploads/2023/06/barbie-2.jpg?w=1600&h=660&crop=1" class="d-block w-100" alt="Barbie" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                            nobis, reiciendis libero aliquam eveniet repellat laudantium aut ab
                            earum! Voluptate.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WOBlock01;