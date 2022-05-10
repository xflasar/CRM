import React from "react";

import { Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from "@mui/system";


const createCustomer = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Box>
            <Dialog fullScreen={fullScreen}/>
        </Box>
    )
}

export default createCustomer;