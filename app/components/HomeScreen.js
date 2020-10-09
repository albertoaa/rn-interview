import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import axios from 'axios';
import Member from './Member';
import Item from './Item';

const HomeScreen = () => {
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState([]);
  const [selectMember, setSelectMember] = useState(true);
  const [memberPhotos, setMemberPhotos] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    const response = await axios.get('http://localhost:3000/member');
    if (response.data) {
      setMembers(response.data);
    }
  };

  const getPhotos = async (memberId) => {
    await setSelectedMemberId(memberId);
    const response = await axios.get(
      `http://localhost:3000/member/${memberId}/photos`,
    );
    if (response.data) {
      setMemberPhotos(response.data);
    }
  };

  const showPhotos = async (memberId) => {
    await setSelectMember(false);
    getPhotos(memberId);
  };

  const addPhoto = async () => {
    const photo = {
      id: memberPhotos[memberPhotos.length - 1].id + 1,
      memberId: selectedMemberId,
      url: 'https://picsum.photos/600',
      position: memberPhotos[memberPhotos.length - 1].position + 1,
      width: 600,
      height: 600,
      centerX: 300,
      centerY: 400,
    };

    await axios.post(
      `http://localhost:3000/member/${selectedMemberId}/photos`,
      photo,
      {},
    );

    getPhotos(selectedMemberId);
  };

  const deletePhoto = async (photoId) => {
    await axios.delete(`http://localhost:3000/photos/${photoId}`);

    getPhotos(selectedMemberId);
  };

  return (
    <View>
      <StatusBarPaddingIOS />
      {selectMember ? (
        <View>
          <Text>Please Select a user to display photos</Text>
          <View>
            {members.map((member) => {
              return (
                <Member
                  key={member.id}
                  member={member}
                  showPhotos={(memberId) => showPhotos(memberId)}
                />
              );
            })}
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={memberPhotos}
            renderItem={({item}) => {
              return (
                <Item
                  item={item}
                  deletePhoto={(photoId) => deletePhoto(photoId)}
                />
              );
            }}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={addPhoto} style={styles.button}>
            <Text>Add Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default HomeScreen;
