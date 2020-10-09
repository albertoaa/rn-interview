import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import axios from 'axios';
import Member from './Member';
import Item from './Item';

const HomeScreen = () => {
  const [members, setMembers] = useState([]);
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

  return (
    <View>
      <StatusBarPaddingIOS />
      {selectMember ? (
        <>
          <Text>Please Select a user to display photos</Text>
          <View style={{width: '100%', height: 100}}>
            {members.map((member) => {
              return (
                <Member
                  member={member}
                  showPhotos={(memberId) => showPhotos(memberId)}
                />
              );
            })}
          </View>
        </>
      ) : (
        <View>
          <FlatList
            data={memberPhotos}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {},
});

export default HomeScreen;
