
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostPayload {
  title: string;
  body: string;
  userId: number;
}

export type RequestStatus =
  | "idle"
  | "loading"
  | "succeeded"
  | "failed";

export interface PostsState {
  posts: Post[];
  createdPost: Post | null;
  fetchStatus: RequestStatus;
  createStatus: RequestStatus;
  fetchError: string | null;
  createError: string | null;
}

const API_URL = "https://jsonplaceholder.typicode.com";

// GET API
export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/posts?_limit=5`);

    if (!response.ok) {
      return rejectWithValue(
        `Failed to fetch posts. Status: ${response.status}`
      );
    }

    return (await response.json()) as Post[];
  } catch (error: unknown) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch posts"
    );
  }
});

// POST API
export const createPost = createAsyncThunk<
  Post,
  CreatePostPayload,
  { rejectValue: string }
>("posts/createPost", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return rejectWithValue(
        `Failed to create post. Status: ${response.status}`
      );
    }

    return (await response.json()) as Post;
  } catch (error: unknown) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to create post"
    );
  }
});

const initialState: PostsState = {
  posts: [],
  createdPost: null,
  fetchStatus: "idle",
  createStatus: "idle",
  fetchError: null,
  createError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET: pending
      .addCase(fetchPosts.pending, (state) => {
        state.fetchStatus = "loading";
        state.fetchError = null;
      })

      // GET: success
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.posts = action.payload;
      })

      // GET: failure
      .addCase(fetchPosts.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.fetchError =
          action.payload ??
          action.error.message ??
          "Something went wrong";
      })

      // POST: pending
      .addCase(createPost.pending, (state) => {
        state.createStatus = "loading";
        state.createError = null;
        state.createdPost = null;
      })

      // POST: success
      .addCase(createPost.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        state.createdPost = action.payload;
        state.posts.unshift(action.payload);
      })

      // POST: failure
      .addCase(createPost.rejected, (state, action) => {
        state.createStatus = "failed";
        state.createError =
          action.payload ??
          action.error.message ??
          "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
