import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera as ExpoCamera } from 'expo-camera';

import { IonIcon } from './Icon';
import { colors } from './theme';

const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  row: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
  },
});

export default class Camera extends Component {
  state = {
    hasCameraPermission: null,
    type: ExpoCamera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  rotateCamera = () => {
    this.setState({
      type:
        this.state.type === ExpoCamera.Constants.Type.back
          ? ExpoCamera.Constants.Type.front
          : ExpoCamera.Constants.Type.back,
    });
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <ExpoCamera
          style={{ flex: 1 }}
          type={this.state.type}
          ref={ref => {
            this.camera = ref;
          }}
        >
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.align, { flex: 0.125 }]}
              onPress={() => this.rotateCamera()}
            >
              <IonIcon
                name="ios-reverse-camera-outline"
                size={40}
                style={{ color: colors.white, marginLeft: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.align, { flex: 0.75 }]}
              onPress={async () => {
                if (this.camera) {
                  await this.camera.takePictureAsync();
                }
              }}
            >
              <IonIcon
                name="ios-radio-button-on-outline"
                size={100}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
          </View>
        </ExpoCamera>
      </View>
    );
  }
}
