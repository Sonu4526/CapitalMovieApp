import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Box, Paper } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "6%",
    },
    heading: {
        color: 'rgb(97, 97, 97)',
        fontSize: '12px',
        lineHeight: '20px',
        margin: '5px 0px 0px',
        padding: '0px 32px',
        textAlign: 'center',
    },
    btn: {
        textTransform: 'capitalize',
        color: "#ffffff",
        backgroundImage: "linear-gradient(90deg, rgb(31, 112, 193), rgb(0, 0, 0))",
        '&:hover': {
            color: "#ffffff",
            backgroundImage: "linear-gradient(90deg, rgb(31, 112, 193), rgb(0, 0, 0))",
        }
    },

}));

export default function RedirectToOtherPage() {
    const classes = useStyles();
    return (
        <>
            <Menu />
            <div className={classes.root}>
                <Container maxWidth="sm" >
                    <Paper square elevation={2}>
                        <Box p={4} textAlign="center">
                            <CheckCircleOutlineIcon style={{ fontSize: 60, color: green[500] }} />
                            <Typography variant="h6">Thanks ! </Typography>&nbsp;
                            <Typography variant="body2" className={classes.heading}>Your movie added to favourites, please do check. </Typography>
                            <br />
                            <Button variant='contained' className={classes.btn} href="/discover/favourite">Continue</Button>
                        </Box>
                    </Paper>
                </Container>
            </div>
        </>
    );
}
