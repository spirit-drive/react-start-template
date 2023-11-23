import React from "react";
import { Modal } from "../../Modal";
import "./FullOperationDisplay.sass";

export const FullOperationDisplay = ({operation}) => {
    const {id, name, desc, createAt, amount, category, type} = operation;
    return (
        <div className="operation-description">
            <Modal visible={true}>
                <div className="container-fluid mb-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h1 className="section-title h3"><span>Операция</span></h1>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form action="" className="needs-validation" novalidate>
                                            <div className="mb-3">
                                                <label for="id" className="form-label required">ID</label>
                                                <input type="text" className="form-control" id="id" placeholder="ID" value={id} required />
                                                <div className="invalid-feedback">
                                                    ID is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="amount" className="form-label required">Сумма</label>
                                                <input type="text" className="form-control" id="Amount" placeholder="Amount" value={amount} required />
                                                <div className="invalid-feedback">
                                                    Amount is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="category" className="form-label required">Категория</label>
                                                <input type="category" className="form-control" id="category" placeholder="Category" value={category.name} required />
                                                <div className="invalid-feedback">
                                                    Category is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="name" className="form-label required">Название</label>
                                                <input type="name" className="form-control" id="name" placeholder="Name" value={name} required />
                                                <div className="invalid-feedback">
                                                    Please, privide a valide name
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="desc" className="form-label required">Описание</label>
                                                <input type="text" className="form-control" id="desc" placeholder="Description" value={desc} required />
                                                <div className="invalid-feedback">
                                                    Description is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="createAt" className="form-label required">Дата</label>
                                                <input type="text" className="form-control" id="password" placeholder="createAt" value={createAt} required />
                                                <div className="invalid-feedback">
                                                    createAt is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="type" className="form-label required">Тип</label>
                                                <input type="text" className="form-control" id="type" placeholder="Type" value={type} required />
                                                <div className="invalid-feedback">
                                                    Type is required
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button type="submit" className="btn btn-warning">Редактировать</button>
                                                <button type="submit" className="btn btn-warning">Сохранить</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};