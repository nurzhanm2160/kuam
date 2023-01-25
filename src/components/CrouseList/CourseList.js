import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        width: '100%',
        margin: theme.spacing(1),
    },
}));

export function CourseList({courses}) {
    const classes = useStyles();
    const filteredCourses = useSelector(state => state.course.filteredCourses)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    filteredCourses.length && filteredCourses.map((course) => (
                        <Grid item xs={12} md={4} xl={3} key={course.id}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {course.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Цена: {course.price}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Рейтинг: {course.rating}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Тип: {course.type}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}