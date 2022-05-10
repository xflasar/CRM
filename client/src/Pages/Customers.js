import React from "react";
import CustomersContent from "../Components/Customers-content";

const Customers = ({customers}) => {
    return(
        <CustomersContent customers={customers}/>
    )
}

export default Customers;