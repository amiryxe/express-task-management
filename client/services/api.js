import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks'
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTasksQuery } = mainApi
