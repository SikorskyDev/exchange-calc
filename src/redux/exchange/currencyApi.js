import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nbuApi = createApi({
    reducerPath: "nbuApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bank.gov.ua/NBUStatService/v1/statdirectory/",
    }),
    endpoints: (builder) => ({
        getCurrencyRate: builder.query({
            query: () => `exchangenew?json`,
            keepUnusedDataFor: 60 * 60 * 1000,
        }),
    }),
});

export const { useGetCurrencyRateQuery } = nbuApi;
