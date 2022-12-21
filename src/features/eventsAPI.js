import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const eventsAPI = createApi({

    reducerPath: "eventsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),

    endpoints:(builder) =>({
        all:builder.query({
            query:() => `/events`
        })
    })
})
export default eventsAPI
export const {useAllQuery} = eventsAPI