import React from 'react';
import { Text } from 'react-native';

import { BackgroundImage } from '../../common/Image';
import ActivityIndicator from '../../common/Indicators/ActivityIndicator';
import { colors } from '../../common/theme';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 45,
  },
  error: {
    color: colors.red,
    textAlign: 'center',
  },
};

export default ({ error }) => (
  <BackgroundImage name="landing" style={styles.container}>
    {!error ? (
      <ActivityIndicator color={colors.gray} style={styles.indicator} />
    ) : (
      <Text style={styles.error}>{error}</Text>
    )}
  </BackgroundImage>
);
