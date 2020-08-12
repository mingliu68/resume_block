import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePDF from './helper/PDFHelpers';
import Animate from './resume_designs/Animate';
import data from './data.json';

export default function App() {
  const { personal, summary, contact, skills, education, projects, experience } = data
  const category = ["Personal", "Summary", "Contact", "Skills", "Education", "Recent Projects", "Experience"]
  const getPDF = useCallback(async () => {
    const getHTML = await Animate.resume(data, category);
    const getPDF = await CreatePDF(getHTML);
    console.log(getPDF)


  })

  useEffect(() => {
    console.log(personal.firstname)
    getPDF();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
