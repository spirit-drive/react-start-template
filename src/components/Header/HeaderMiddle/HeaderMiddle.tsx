import React from "react";
import "./HeaderMiddle.sass";
import { Logo } from "../../Logo";

export const HeaderMiddle = () => {
    return (
        <div className="header-middle bg-white py-4">
            <div className="container-fluid">
                <div className="row align-items-center">
                    
                    <div className="col-sm-6">
                        <Logo title="E-Shop" />
                    </div>

                    <div className="col-sm-6 mt-2 mt-md-0">
                        <form action="">
                            <div className="input-group">
                                <input className="form-control" type="text"  name="search" placeholder="Searching..." aria-label="Searching..." aria-describedby="button-search" />
                                <button className="btn btn-outline-warning" type="submit" id="button-search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>                                  
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};