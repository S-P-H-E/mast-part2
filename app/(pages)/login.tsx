import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from "react-native"
import { Image } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// Zustand store for username state
export const useUserStore = create(
  combine({ username: '' }, (set) => ({
    setUsername: (username: string) => set({ username }),
  })),
)

export default function Login() {
  const router = useRouter()
  const [localUsername, setLocalUsername] = useState('')
  const { setUsername } = useUserStore()

  // Separate function for handling navigation
  const handleContinue = () => {
    if (!localUsername.trim()) {
      if (Platform.OS === 'android') {
        // For Android, use ToastAndroid
        // @ts-ignore
        import('react-native').then(({ ToastAndroid }) => {
          ToastAndroid.show('Please enter a username.', ToastAndroid.SHORT);
        });
      } else {
        // For iOS and others, use alert
        alert('Please enter a username.');
      }
      return;
    }
    setUsername(localUsername) // Update Zustand store with username
    router.push('/home')
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <StatusBar style="light"/>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>Enter your username</Text>
        </View>

        <TextInput 
          onChangeText={setLocalUsername} 
          value={localUsername} 
          placeholderTextColor="#969696" 
          placeholder="Enter your username" 
          style={styles.textInput}
        />

        <Pressable onPress={handleContinue} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <Text style={styles.termsText}>By continuing you agree to the{' '}<Text style={styles.termsLink}>terms and conditions</Text></Text>
      </View>

      {/* Top Gradient */}
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradientTop} />
      {/* Bottom Gradient */}
      <LinearGradient colors={["black", "transparent"]} start={{ x: 0.5, y: 0.6 }} end={{ x: 0.5, y: 0 }} style={styles.gradient} />

      <Image source={require('@/assets/images/02.jpg')} style={styles.backgroundImage} />
    </KeyboardAvoidingView>
  )
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
    fontSize: 36,
    fontWeight: "600",
  },
  subtitle: {
    color: "#818181",
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "#262626",
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 18,
    width: "100%",
    marginBottom: 12,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 18,
    width: "100%",
    marginBottom: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
  termsText: {
    fontSize: 10,
    color: "#818181",
    textAlign: "center",
  },
  termsLink: {
    color: "white",
    fontWeight: "600",
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
    transform: [{ translateY: -200 }],
  },
})