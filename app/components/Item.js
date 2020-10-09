import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Item = (props) => {
  const {item, deletePhoto} = props;
  return (
    <View style={styles.itemContainer}>
      <View style={{paddingVertical: 10, border: 'none'}}>
        <Image
          style={styles.photo}
          source={{
            uri: item.url,
          }}
        />
      </View>

      <TouchableOpacity onPress={() => deletePhoto(item.id)}>
        <Image
          style={styles.deleteImage}
          source={require('../assets/deleteIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderRadius: 20,
  },
  deleteImage: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
export default Item;
