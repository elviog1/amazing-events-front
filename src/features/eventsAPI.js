import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const eventsAPI = createApi({

    reducerPath: "eventsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://proyectos-back.onrender.com"
    }),

    endpoints:(builder) =>({
        all:builder.query({
            query:() => `/events`,
            transformResponse:(response) => response.response
        }),
        getOneEvent: builder.query({
            query:(id) => `/events/${id}`,
            transformResponse:(response) => response.response
        })
    })
})
export default eventsAPI
export const {useAllQuery,useGetOneEventQuery} = eventsAPI