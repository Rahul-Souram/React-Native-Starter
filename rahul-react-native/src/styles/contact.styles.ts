
import { StyleSheet } from "react-native";
import colors from "../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  title: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
  },
  messageInput: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default styles;
