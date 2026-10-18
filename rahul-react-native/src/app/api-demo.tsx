
import { fetchPosts, CreatePostPayload, createPost } from "@/redux/reducers/testReducer";
import styles from "@/styles/api-demo.styles";
import { useState, useEffect } from "react";
import { Alert, ScrollView, View, Text, Pressable, ActivityIndicator, TextInput } from "react-native";
import colors from "../theme/colors";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function ApiDemoScreen() {
  const dispatch = useAppDispatch();

  const {
    posts,
    fetchStatus,
    createStatus,
    fetchError,
    createError,
    createdPost,
  } = useAppSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  const handleCreatePost = async () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert(
        "Validation",
        "Please enter both a title and a message."
      );
      return;
    }

    const payload: CreatePostPayload = {
      title: title.trim(),
      body: body.trim(),
      userId: 1,
    };

    try {
      await dispatch(createPost(payload)).unwrap();
      setTitle("");
      setBody("");
    } catch {
      // The rejected error is displayed from Redux state.
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator
    >
      <Text style={styles.heading}>API Demo</Text>

      <Text style={styles.description}>
        Learn how Redux Toolkit handles GET and POST requests
        with createAsyncThunk and extraReducers.
      </Text>

      {/* GET REQUEST */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>GET Posts</Text>

        <Pressable
          style={[
            styles.button,
            fetchStatus === "loading" && styles.buttonDisabled,
          ]}
          onPress={handleFetchPosts}
          disabled={fetchStatus === "loading"}
        >
          <Text style={styles.buttonText}>
            {fetchStatus === "loading" ? "Fetching..." : "Fetch Posts"}
          </Text>
        </Pressable>

        {fetchStatus === "loading" && (
          <ActivityIndicator
            color={colors.primary}
            style={styles.loader}
          />
        )}

        {fetchError && (
          <Text style={styles.error}>{fetchError}</Text>
        )}

        {fetchStatus === "succeeded" && (
          <Text style={styles.status}>
            Retrieved {posts.length} posts successfully.
          </Text>
        )}

        {posts.map((post:any) => (
          <View key={post.id} style={styles.postCard}>
            <Text style={styles.postTitle}>
              {post.id}. {post.title}
            </Text>
            <Text style={styles.postBody}>{post.body}</Text>
          </View>
        ))}
      </View>

      {/* POST REQUEST */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Create Post</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter post title"
          placeholderTextColor={colors.muted}
          value={title}
          onChangeText={setTitle}
          editable={createStatus !== "loading"}
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Enter post message"
          placeholderTextColor={colors.muted}
          value={body}
          onChangeText={setBody}
          multiline
          editable={createStatus !== "loading"}
        />

        <Pressable
          style={[
            styles.button,
            createStatus === "loading" && styles.buttonDisabled,
          ]}
          onPress={handleCreatePost}
          disabled={createStatus === "loading"}
        >
          <Text style={styles.buttonText}>
            {createStatus === "loading"
              ? "Creating..."
              : "Create Post"}
          </Text>
        </Pressable>

        {createStatus === "loading" && (
          <ActivityIndicator
            color={colors.primary}
            style={styles.loader}
          />
        )}

        {createError && (
          <Text style={styles.error}>{createError}</Text>
        )}

        {createdPost && createStatus === "succeeded" && (
          <Text style={styles.success}>
            Post created successfully! ID: {createdPost.id}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
