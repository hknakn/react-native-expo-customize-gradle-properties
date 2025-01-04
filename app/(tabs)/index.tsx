import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface GradleProperty {
  title: string;
  value: string;
  description: string;
}

const gradleProperties: GradleProperty[] = [
  {
    title: "JVM Arguments",
    value: "-Xmx4096m -XX:MaxMetaspaceSize=1024m",
    description: "Memory settings for the Gradle daemon process",
  },
  {
    title: "AndroidX Support",
    value: "true",
    description: "Use AndroidX package structure for better compatibility",
  },
  {
    title: "Jetifier",
    value: "true",
    description:
      "Tool to migrate support-library-dependent libraries to AndroidX",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gradle Properties</Text>
        <Text style={styles.subtitle}>Customized with Expo Config Plugin</Text>
      </View>

      {gradleProperties.map((prop, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.propertyTitle}>{prop.title}</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{prop.value}</Text>
          </View>
          <Text style={styles.description}>{prop.description}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#636e72",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 8,
  },
  valueContainer: {
    backgroundColor: "#f1f2f6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    fontFamily: "monospace",
    color: "#0984e3",
  },
  description: {
    fontSize: 14,
    color: "#636e72",
    lineHeight: 20,
  },
});
