import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Member = (props) => {
  const {member, showPhotos} = props;
  return (
    <>
      <TouchableOpacity onPress={() => showPhotos(member.id)}>
        <Text>
          {member.firstName} {member.lastName}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Member;
