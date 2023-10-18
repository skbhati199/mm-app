import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { idText } from 'typescript';

interface AvatarIconProps {
  className:string
}

const AvatarIcon = ({className}:AvatarIconProps) => {
  return (
    <View >
      <Image
        source={require('./../../../../assets/img/avatar.png')}
        width={100}
        height={100}
        className={className}
      />
    </View>
  );
};


export default AvatarIcon;
