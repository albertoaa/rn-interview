import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Item = (props) => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderRadius: 20,
  },
});
export default Item;
