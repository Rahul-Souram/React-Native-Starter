
import { Button, ScrollView, Text, View } from "react-native";
import styles from "../styles/about.styles";
import { Link, router } from "expo-router";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.paragraph}>
        Our mission is to help people understand the Bible
        and explore Christian theology through accessible,
        thoughtful, and Scripture-centered learning.
      </Text>

      <Text style={styles.sectionTitle}>Our Mission</Text>

      <Text style={styles.paragraph}>
        We aim to make theological education accessible
        to everyone, from beginners to advanced students
        of Scripture.
      </Text>

      <Text style={styles.sectionTitle}>What We Offer</Text>

      <Text style={styles.paragraph}>
        Bible studies, doctrinal lessons, church history,
        learning resources, and opportunities to grow
        in your understanding of the Christian faith.
      </Text>
<Button
  title="API TEST"
  onPress={() => router.push("/api-demo")}
/>
<View className="flex-1 bg-slate-50 p-6">
  <Text className="text-3xl text-center font-bold text-indigo-600">
    NativeWind is working!
  </Text>
</View>
    </ScrollView>
  );
}
