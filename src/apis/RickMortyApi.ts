import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RickMorty } from "./types/typeRickMorty";

export const RickMortyApi = createApi({
    reducerPath: 'rickMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character'}),
    endpoints: (builder) => ({
        getRickMortyByPage: builder.query<RickMorty, number>({
        query: (page) => `?page=${page}`,
        })
    })
})

export const { useGetRickMortyByPageQuery } = RickMortyApi;