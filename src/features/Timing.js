import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View>
        <RoundedButton
          style={styles.timingButton}
          size={75}
          title="5"
          onPress={() => onChangeTime(5)}
        />
      </View>
      <View>
        <RoundedButton
          style={styles.timingButton}
          size={75}
          title="10"
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View>
        <RoundedButton
          style={styles.timingButton}
          size={75}
          title="15"
          onPress={() => onChangeTime(15)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
