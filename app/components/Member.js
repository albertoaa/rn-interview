import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Member = (props) => {
  const {member, showPhotos} = props;
  return (
    <>
      <TouchableOpacity
        onPress={() => showPhotos(member.id)}
        style={styles.button}>
        <Text>
          {member.firstName} {member.lastName}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray',
  },
});

export default Member;
