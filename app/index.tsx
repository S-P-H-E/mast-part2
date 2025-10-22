import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"

export default function Index() {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Christoffel's</Text>
          <Text style={styles.subtitle}>Fresh food delivered.</Text>
        </View>

        <Pressable onPress={() => router.push('/login')} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>

      {/* Top Gradient */}
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradientTop} />
      {/* Bottom Gradient */}
      <LinearGradient colors={["black", "transparent"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradient} />

      <Image source={require('@/assets/images/01.jpg')} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 20,
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingBottom: 64,
    width: "100%",
    maxWidth: 500,
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "600",
  },
  subtitle: {
    color: "#818181",
    fontSize: 22,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 18,
    width: "100%",
  },
  buttonText: {
    margin: 'auto',
    textAlign: 'center',
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  gradientTop: {
    position: "absolute",
    width: "100%",
    height: "20%",
    zIndex: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});