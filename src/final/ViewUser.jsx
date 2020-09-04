import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



export default function ViewUser({ user }) {


    const useStyles = makeStyles((theme) => ({
        table: {
            minWidth: 650,
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));


    const rows = [{ "field": "Name", values: `(${user.id}) ` }];

    for (let e in user) {
        if (e == "id") { continue; }
        else if (e === "given-name") {
            user["given-name"].forEach(f => rows[0].values = rows[0].values.replace(/^/, `${f} `));
        }
        else if (e === "family-name") {
            user["family-name"].forEach(f => rows[0].values = rows[0].values.replace(/^/, `${f} `));
        } else {
            rows.push({ field: e, values: user[e] })
        }
    }


    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    The User whom You've Submitted
    </Typography>
                <br />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="caption table">
                        {/* <caption>The User You Submitted </caption> */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Field</TableCell>
                                <TableCell>Values</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.field}>
                                    <TableCell >{row.field}</TableCell>
                                    <TableCell >{typeof row.values === "string" ? row.values : [row.values.join(" , ")]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
}

