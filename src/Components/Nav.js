import React from "react";
import { Link } from 'react-router-dom';
//mui
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import { Grid, ListItemText } from "@mui/material";

// Navigation bar that closes and opens from left side

const NavBar = () => {
    const [state, setState] = React.useState({
        left: true
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, "left": open });
    };

    const list = () => (
        <Box
            sx={{ height: 'auto', width: 'auto', backgroundColor: 'rgb(18, 18, 18)' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List >
                {['Homepage', 'Customers'].map((text) => (
                    <ListItem button component={Link} to={text.toLowerCase()} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                
            </List>
        </Box>
    );

    return (
        <Grid item xs={12} sx={{ height: '5vh', maxHeight: '5vh', backgroundColor: 'rgb(0, 60, 90)' }}>
            <Box sx={{ textAlign: "left", backgroundColor: 'rgb(0, 60, 90)' }}>
                <Button sx={{ 
                    backgroundColor: "rgb(0, 30, 60)",
                    transition: "backgroundColor 150ms cubic-bezier(0,-0.01,1,0) 0ms",
                    '&:hover': {backgroundColor: 'rgba(0,20,40,0.5)'}
                }} 
                onClick={toggleDrawer(true)}>Menu</Button>
            </Box>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'rgb(18, 18, 18)',
                        color: 'rgb(255,255,255)'
                    },
                    '& .MuiListItem-root': { transition: "backgroundColor 150ms cubic-bezier(0,-0.01,1,0) 0ms" },
                    '& .MuiListItem-root:hover': { backgroundColor: "rgb(80,80,80)" }
                }}
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </Grid>
    );
}

export default NavBar