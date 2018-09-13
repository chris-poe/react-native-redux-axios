import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

import Icon from './Icon';
import { colors } from './theme';

const styles = {
  row: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  align: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
};

export default class CameraExample extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  rotateCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
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
        <Camera
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
              <Icon
                name="ios-reverse-camera-outline"
                size={40}
                style={{ color: colors.white, marginLeft: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.align, { flex: 0.75 }]}
              onPress={async () => {
                if (this.camera) {
                  const photo = await this.camera.takePictureAsync();
                }
              }}
            >
              <Icon
                name="ios-radio-button-on-outline"
                size={100}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
