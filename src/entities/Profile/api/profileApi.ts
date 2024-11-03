import { rtkApi } from '../../../shared/api/rtk/rtkApi';
import { transformErrorResponse } from 'src/utils/transformErrorResponse';
import { Profile, UpdateProfileBody } from '../../../types/ProfileTypes';

export const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProfile: build.query<Profile, void>({
      query: () => {
        return {
          url: '/profile',
        };
      },
      transformErrorResponse,
    }),
    editProfile: build.mutation<Profile, UpdateProfileBody>({
      query: (values) => ({
        url: '/profile',
        method: 'PATCH',
        body: values,
      }),
      async onCacheEntryAdded(arg, { dispatch, cacheDataLoaded }) {
        const result = await cacheDataLoaded;
        dispatch(profileApi.util.upsertQueryData('fetchProfile', undefined, result.data));
      },
      transformErrorResponse,
    }),
  }),
});

export const { useFetchProfileQuery, useEditProfileMutation } = profileApi;
export const { fetchProfile } = profileApi.endpoints;
