import React from "react";

export const CartProductDisplay = ({product}) => {
    const {id, name, photos, desc, chreateAt, oldPrice, price, category, properties} = product;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 mb-3">
                    <div className="cart-content p-3 h-100 bg-white">
                        <div className="table-responsive">
                            <table className="table align-middle table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Photo</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th><i className="fa-regular fa-trash-can"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pruduct-img-td">
                                            <a href="#">
                                                <img src={require(`../photos/${photos[0]}`)} alt="Товар 1" />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" className="cart-content-title">
                                                Product 1 Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </a>
                                        </td>
                                        <td>$65</td>
                                        <td>
                                            <input type="number" defaultValue="1" className="form-control cart-qty" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
                                                <i className="fa-regular fa-circle-xmark"></i>
                                            </button>
                                        </td>
                                    </tr>                                              
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5" className="text-end">
                                            <button className="btn btn-outline-warning">Update Cart</button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};