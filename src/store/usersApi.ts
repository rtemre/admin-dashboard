import { api } from "./api";

// Define User type
export interface User {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  ip: string;
  macAddress: string;
  website: string;
  image: string;
}

// Define request types
export interface CreateUserRequest {
  name: string;
  email: string;
  role: string;
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  status?: "active" | "inactive";
}

export interface ResponeFormat {
  status: string;
  code: number;
  locale: string;
  seed: null;
  total: number;
  data: User[];
}

// Create users API slice
export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<ResponeFormat, void>({
      query: () => "users?_quantity=50",
      providesTags: ["User"],
    }),

    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),

    createUser: builder.mutation<User, CreateUserRequest>({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation<User, UpdateUserRequest>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "User", id }],
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
