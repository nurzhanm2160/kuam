import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    courses: [
        {title: 'МООК КУАМ ОСНОВЫ ДИЗАЙНА', type: 'дизайн', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ: "СОВРЕМЕННЫЕ МЕТОДЫ ЭФФЕКТИВНОГО ОБУЧЕНИЯ"', type: 'обучение', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Региональная экономика и управление: современное состояние и перспективы развития"', type: 'экономика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Теория и методика избранного вида спорта"', type: 'спорт', description: '', rating: 4, price: 0},
        {title: 'МООК КУАМ "Теория и методика физической культуры и спорта"', type: 'спорт', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Банковский маркетинг"', type: 'маркетинг', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Кафедра "ОПДЭТ и ПО"Көлік индустриясы дамуының заманауи шешімдері', type: 'экономика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Применение MS Office в профессиональной деятельности"', type: 'информатика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Геологическая экология', type: 'геология', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Современные модели национальной политики Республики Казахстан и США"', type: 'право', description: '', rating: 0, price: 10},
        {title: 'МООК КУАМ "Временные формы глагола в английском языке"', type: 'английский язык', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ «Актуальные вопросы юридических наук в условиях глобального мира»', type: 'право', description: '', rating: 0, price: 0},
    ],
    filteredCourses: [
        {title: 'МООК КУАМ ОСНОВЫ ДИЗАЙНА', type: 'дизайн', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ: "СОВРЕМЕННЫЕ МЕТОДЫ ЭФФЕКТИВНОГО ОБУЧЕНИЯ"', type: 'обучение', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Региональная экономика и управление: современное состояние и перспективы развития"', type: 'экономика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Теория и методика избранного вида спорта"', type: 'спорт', description: '', rating: 4, price: 0},
        {title: 'МООК КУАМ "Теория и методика физической культуры и спорта"', type: 'спорт', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Банковский маркетинг"', type: 'маркетинг', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Кафедра "ОПДЭТ и ПО"Көлік индустриясы дамуының заманауи шешімдері', type: 'экономика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Применение MS Office в профессиональной деятельности"', type: 'информатика', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ Геологическая экология', type: 'геология', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ "Современные модели национальной политики Республики Казахстан и США"', type: 'право', description: '', rating: 0, price: 10},
        {title: 'МООК КУАМ "Временные формы глагола в английском языке"', type: 'английский язык', description: '', rating: 0, price: 0},
        {title: 'МООК КУАМ «Актуальные вопросы юридических наук в условиях глобального мира»', type: 'право', description: '', rating: 0, price: 0},
    ]
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        filterCourse: (state, action) => {
            if(action.payload.selectedValue === '' && action.payload.type === '') {
                state.filteredCourses = state.courses.filter(course =>
                    course.price <= action.payload.price &&
                    course.rating >= action.payload.rating)
            } else if (action.payload.selectedValue === '' && action.payload.type !== '') {
                state.filteredCourses
                    = state.courses.filter(course =>
                    course.rating >= action.payload.rating &&
                    course.price <= action.payload.price &&
                    course.type == action.payload.type
                )
            } else if (action.payload.selectedValue !== '' && action.payload.type === '') {
                state.filteredCourses
                    = state.courses.filter(course =>
                    course.rating >= action.payload.rating &&
                    course.price <= action.payload.price &&
                    course.title == action.payload.selectedValue)
            } else {
                state.filteredCourses = state.courses.filter(course =>
                    course.price <= action.payload.price &&
                    course.rating >= action.payload.rating &&
                    course.title == action.payload.selectedValue &&
                    course.type == action.payload.type
                )
            }
        }
        ,
        clearFilteredCourses: (state) => {
            state.filteredCourses = state.courses
        }
    }
})

export const {reducer: courseReducer, actions: courseActions} = courseSlice