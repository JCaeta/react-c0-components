import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./DataTable.css";
import { RemoveIcon } from "../Icons/RemoveIcon/RemoveIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";

export const DataTable = (props: any) => 
{
    const [data, setData] = useState(props.data);

    // Handle edit button click
    const onEdit = (id: any) => {
        // Logic to handle edit button click
        props.onEdit(id);

    };

    // Handle remove button click
    const onRemove = (id: any) => {
        //   setData(data.filter((item) => item.id !== id));
        props.onRemove(id);
    };

    return (<>
        <table className="datatable_rctc0comps">
            <thead>
                <tr>
                    {props.headers.map((header: any) => (
                        <th key={header.name}>{header.headerText}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: any) => (<>
                    <tr key={item.id}>
                        {/* 
                            Load data
                            The key of each row is "id_header"
                         */}
                        {props.headers.map((header: any) => (
                            <td key={`${item.id}_${header.name}`}>{item[header.name]}</td>
                        ))}
                        <td>
                            <button 
                                className="button-actions_datatable_rctc0comps" 
                                onClick={() => onEdit(item.id)}>
                                {<EditIcon/>}
                            </button>

                            <button 
                                className="button-actions_datatable_rctc0comps" 
                                onClick={() => onRemove(item.id)}>
                                {<RemoveIcon/>}
                            </button>
                        </td>
                    </tr>
                </>))}
            </tbody>
        </table>
    </>);
}

DataTable.defaultProps = {
    headers: [
        {
            name: "username",
            headerText: "Username"
        },
        {
            name: "email",
            headerText: "Email"
        },
        {
            name: "registrationMethod",
            headerText: "Registration method"
        }
    ],
    data: [
        {
            id: 1,
            username: "JohnDoe",
            email: "johndoe@example.com",
            registrationMethod: "Email and password",
        },
        {
            id: 2,
            username: "JaneDoe",
            email: "janedoe@example.com",
            registrationMethod: "Google",
        },
        {
            id: 3,
            username: "JaneDoe",
            email: "janedoe@example.com",
            registrationMethod: "Google",
        },
    ],
};
  
DataTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object),
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
};