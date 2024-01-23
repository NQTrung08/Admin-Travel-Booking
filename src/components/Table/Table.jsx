import React from "react";
import { Component, Col, Row, Table } from "reactstrap";

const MyTable = () => {
	return (
        <div>
            <div className="table">
                <h3>Recent Order</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Tour</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td> Thanh Hóa</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td> Thanh Hóa</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td> Thanh Hóa</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td> Thanh Hóa</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td> Thanh Hóa</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Long</td>
                            <td>Hạ long Bay</td>
                            <td>03953975</td>
                            <td>Thanh Hóa</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
	  
    
    </div>
    )
	
};

export default MyTable;
