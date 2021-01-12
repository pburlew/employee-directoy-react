import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";


function TableBody(props){


return(
    <div className="table-body">
        {props.children}
         <Table striped bordered responsive hover size="sm">
         <thead>
            {/* make these into links? */}
            <tr>
                <th><button className="sort" onClick={props.handleSortClick}>Full Name</button></th>
                <th>Location</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Mobile</th>
                <th>Photo</th>
            </tr>
        </thead>
        <tbody>
            {/* for each thing render a row with modified info */}
            {/* <td>{props.employees[0].name}</td> */}
            {props.employees.map((person) => (
                <tr>
                    <td>{person.name}</td>
                    <td>{person.location}</td>
                    <td>{person.email}</td>
                    <td>{person.dob}</td>
                    <td>{person.mobile}</td>
                    <td>
                        <img src={person.photo} class="photo" alt="profile" />
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    </div>
);
}

export default TableBody;