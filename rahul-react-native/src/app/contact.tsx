
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import styles from "../styles/contact.styles";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert("Missing information", "Please fill in all fields.");
      return;
    }

    Alert.alert(
      "Message ready",
      "The form is working locally. Connect an API to send your message."
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Contact Us</Text>

        <Text style={styles.description}>
          Have a question or suggestion? We would love to hear from you.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor="#8A8F87"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#8A8F87"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your message"
          placeholderTextColor="#8A8F87"
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
