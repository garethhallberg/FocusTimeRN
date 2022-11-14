import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log('Focus' + subject);
  return (
    <View style={focusStyles.container}>
      <View style={focusStyles.inputContainer}>
        <TextInput
        style = {focusStyles.textInput}
          label="What do you want for lunch?"
          onChangeText={setSubject}></TextInput>
          <View  style={focusStyles.button}>
        <RoundedButton title="+" size={spacing.xxl} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const focusStyles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
