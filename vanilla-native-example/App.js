import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {useState} from "react";
import Push from "./components/Push"
import Pull from "./components/Pull"
import EightHourArms from "./components/EightHourArms"
import Home from "./components/Home"


export default function App() {
  const [page, setPage] = useState("home")
  const goHome = () => setPage("home")

  return (
    <SafeAreaView style={styles.container}>
      {page === "push" ? <Push styles={styles} goHome={goHome}/>
      : page === "pull" ? <Pull styles={styles} goHome={goHome}/>
      : page === "arms" ? <EightHourArms styles={styles} goHome={goHome}/>
      : <Home styles={styles} setPage={setPage}/>}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flexStart',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    marginBottom: 16
  },
  navButtonHolder: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: "auto"
  },
  navButton: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 20,
  },
});
