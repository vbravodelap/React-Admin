import React, { Component } from 'react';
import Content from '../Layout/Content';

export class Users extends Component {
    render() {
        return (
            <div className="box box-info col-md-12">
                
                <div className="box-header">
                    <h3 className="box-title">Listado de usuarios</h3>
                </div>

                <div className="box-body">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>

                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Estado</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Victor Jesus Bravo de la Peña</td>
                                <td>vbravop@conasim.com</td>
                                <td>Nuevo Léon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Users;
