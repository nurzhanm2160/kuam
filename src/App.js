import './App.css';
import {
    alpha,
    AppBar,
    Autocomplete, Box,
    Button,
    Container,
    Grid,
    InputBase,
    styled,
    TextField,
    Toolbar
} from "@mui/material";
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {FilterSelect} from "./components/FilterSelect/FilterSelect";
import {CourseList} from "./components/CrouseList/CourseList";
import {useSelector} from "react-redux";

function App() {

    const courses = useSelector(state => state.course.courses)
    return (
        <div>
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                flexGrow: 1
                            }}
                        >
                            КУАМ
                        </Typography>
                        <Button color="inherit">Авторизация</Button>
                        <Button color="inherit">Регистрация</Button>
                    </Toolbar>
                </Container>
            </AppBar>


            <Container maxWidth={"xl"}>
                <Container maxWidth={"md"}>
                    <Box xs={{mt: 10}}>
                        <FilterSelect />
                    </Box>
                    <CourseList courses={courses}/>
                </Container>
            </Container>
        </div>
    );
}






export default App;
