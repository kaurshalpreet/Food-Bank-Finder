import React from 'react';
import TableRow from '../TableRow/tableRow';
import './foodBankLocations.css'

function FoodBankLocations() {
    return (
        <div className ="table-dark col-5 m-1 foodBanks">
            <h2>Here are your closest Food Banks</h2>
            <ol>
                <TableRow />
                <TableRow />
                <TableRow />
            </ol>
        </div>
    )
}

export default FoodBankLocations;