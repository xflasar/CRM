import React from "react";
import { Box } from "@mui/system";
import { List, ListItem } from "@mui/material";
const CustomersContent = ({customers}) =>{
    return(
        <Box>
            <List>
                {customers.map((customer) =>{
                    <ListItem>
                    </ListItem>
                })}
                
            </List>
        </Box>
    )
}

export default CustomersContent;