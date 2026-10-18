
import { StyleSheet } from "react-native";
import colors from "../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.muted,
    marginBottom: 24,
  },
  section: {
    backgroundColor: colors.surface,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
    marginBottom: 14,
  },
  messageInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.55,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  loader: {
    marginTop: 14,
  },
  status: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 14,
  },
  error: {
    fontSize: 14,
    color: "#B42318",
    marginTop: 12,
  },
  success: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
    marginTop: 14,
  },
  postCard: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 14,
    marginTop: 14,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.muted,
  },
});

export default styles;
