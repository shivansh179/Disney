import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/userSlice";
import movieReducer from "../Features/movie/movieSlice"


export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

