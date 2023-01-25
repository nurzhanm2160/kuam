import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {Autocomplete, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {courseActions} from "../../redux/courseSlice";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export function FilterSelect({ onPriceFilter, onRatingFilter, onTypeFilter }) {
    const classes = useStyles();
    const [price, setPrice] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [type, setType] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('')

    const dispatch = useDispatch()

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        onPriceFilter(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
        onRatingFilter(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        onTypeFilter(event.target.value);
    };

    const onFind = () => {
        dispatch(courseActions.titleFilter({selectedValue}))
    }

    return (
        <div>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={KUAMCourses.map((option) => option.title)}
                onChange={(event, value) => setSelectedValue(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Поиск по курсам"
                        margin={"normal"}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="price-label">Цены</InputLabel>
                        <Select
                            labelId="price-label"
                            id="price-select"
                            value={price}
                            onChange={handlePriceChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="free">Бесплатные</MenuItem>
                            <MenuItem value={10}>$10 и меньше</MenuItem>
                            <MenuItem value={20}>$20 и меньше</MenuItem>
                            <MenuItem value={30}>$30 и меньше</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating-label">Рейтинг</InputLabel>
                        <Select
                            labelId="rating-label"
                            id="rating-select"
                            value={rating}
                            onChange={handleRatingChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={4}>4 и выше</MenuItem>
                            <MenuItem value={3}>3 и выше</MenuItem>
                            <MenuItem value={2}>2 и выше</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type-label">Тип</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type-select"
                            value={type}
                            onChange={handleTypeChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="online">Онлайн</MenuItem>
                            <MenuItem value="onsite">Локальные</MenuItem>
                            <MenuItem value="hybrid">Гибридные</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button
                    variant="contained"
                    onClick={() => onFind()}
                >
                    Поиск
                </Button>
            </div>
        </div>
    );
}

const KUAMCourses = [
    {title: 'МООК КУАМ ОСНОВЫ ДИЗАЙНА'},
    {title: 'МООК КУАМ: "СОВРЕМЕННЫЕ МЕТОДЫ ЭФФЕКТИВНОГО ОБУЧЕНИЯ"'},
    {title: 'МООК КУАМ "Региональная экономика и управление: современное состояние и перспективы развития"'},
    {title: 'МООК КУАМ "Теория и методика избранного вида спорта"'},
    {title: 'МООК КУАМ "Теория и методика физической культуры и спорта"'},
    {title: 'МООК КУАМ "Банковский маркетинг"'},
    {title: 'МООК КУАМ Кафедра "ОПДЭТ и ПО"Көлік индустриясы дамуының заманауи шешімдері'},
    {title: 'МООК КУАМ "Применение MS Office в профессиональной деятельности"'},
    {title: 'МООК КУАМ Геологическая экология'},
    {title: 'МООК КУАМ "Современные модели национальной политики Республики Казахстан и США"'},
    {title: 'МООК КУАМ "Временные формы глагола в английском языке"'},
    {title: 'МООК КУАМ «Актуальные вопросы юридических наук в условиях глобального мира»'},
]