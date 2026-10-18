
import { ScrollView, Text, View, Pressable, Button } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/home.styles";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32, flexGrow: 1 }}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.eyebrow}>Welcome</Text>

      <Text style={styles.title}>
        Grow in knowledge.{"\n"}Grow in faith.
      </Text>

      <Text style={styles.description}>
        Explore Scripture, discover Christian theology,
        and deepen your understanding of the Christian faith.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bible Study</Text>
        <Text style={styles.cardText}>
          Study the Bible chapter by chapter and explore
          its historical context, meaning, and application.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Christian Theology</Text>
        <Text style={styles.cardText}>
          Learn about essential Christian doctrines,
          church history, and theological debates.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Featured Lesson</Text>
        <Text style={styles.cardText}>
          Introduction to the authority and inspiration
          of Scripture.
        </Text>
      </View>

     <Link href="/about" asChild>
        <Pressable style={styles.card}>
          <Text style={styles.cardTitle}>About Us →</Text>
          <Text style={styles.cardText}>
            Learn about our mission and what we offer.
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
