
import { StyleSheet } from "react-native";
import colors from "../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    marginBottom: 12,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 28,
  },
  card: {
    backgroundColor: colors.surface,
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
  },
  cardTitle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
});

export default styles;
