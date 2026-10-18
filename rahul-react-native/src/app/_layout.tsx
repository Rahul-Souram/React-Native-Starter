
import { Provider } from "react-redux";
import { Tabs } from "expo-router";
import { store } from "../redux/store";
import "../../global.css";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="about" options={{ title: "About" }} />
        <Tabs.Screen name="contact" options={{ title: "Contact" }} />
        <Tabs.Screen name="api-demo" options={{ title: "API Demo" }} />
      </Tabs>
    </Provider>
  );
}
