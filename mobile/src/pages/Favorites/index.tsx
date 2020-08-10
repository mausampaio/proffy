import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  function loadFavorites() {
    async function getAsyncStorage() {
      const AsyncStorageResponse = await AsyncStorage.getItem('favorites');

      if (AsyncStorageResponse) {
        const favoredTeachers = JSON.parse(AsyncStorageResponse);

        setFavorites(favoredTeachers);
      }
    }
    
    getAsyncStorage();
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.ScrollViewContainer}>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            borderRadius: 8,
          }}
          showsVerticalScrollIndicator={false}
        >
          {favorites.map((teacher: Teacher) => (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favored
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Favorites;
