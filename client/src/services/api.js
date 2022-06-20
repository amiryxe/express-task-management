import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => 'tasks',
            providesTags: [{ type: "Tasks", id: "LIST" }],
        }),
        addTask: builder.mutation({
            query(body) {
                return {
                    url: `tasks`,
                    method: "POST",
                    body
                };
            },
            invalidatesTags: [{ type: "Tasks", id: "LIST" }],
        }),
    }),
})

export const { useGetTasksQuery, useAddTaskMutation } = mainApi
