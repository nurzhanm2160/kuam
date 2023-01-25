import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    courses: [
        {title: 'МООК КУАМ ОСНОВЫ ДИЗАЙНА', type: 'design', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ: "СОВРЕМЕННЫЕ МЕТОДЫ ЭФФЕКТИВНОГО ОБУЧЕНИЯ"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Региональная экономика и управление: современное состояние и перспективы развития"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Теория и методика избранного вида спорта"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Теория и методика физической культуры и спорта"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Банковский маркетинг"', type: 'marketing', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Кафедра "ОПДЭТ и ПО"Көлік индустриясы дамуының заманауи шешімдері', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Применение MS Office в профессиональной деятельности"', type: 'computer science', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Геологическая экология', type: 'geology', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Современные модели национальной политики Республики Казахстан и США"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Временные формы глагола в английском языке"', type: '', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ «Актуальные вопросы юридических наук в условиях глобального мира»', type: '', description: '', rating: 0, price: 0},
    ]

}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        titleFilter: (state, action) => {
            state.courses = state.courses.filter(course => course.title === action.payload.selectedValue)
        },
        priceFilter: (state, action) => {
            state.courses = state.courses.filter(course => course.price <= action.payload.price)
        },
        ratingFilter: (state, action) => {
            state.courses = state.courses.filter(course => course.rating >= action.payload.rating)
        },
        typeFilter: (state, action) => {
            state.courses = state.courses.filter(course => course.type === action.payload.type)
        }
    }
})

export const {reducer: courseReducer, actions: courseActions} = courseSlice