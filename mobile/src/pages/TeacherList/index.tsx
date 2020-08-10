import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    async function getAsyncStorage() {
      const AsyncStorageResponse = await AsyncStorage.getItem('favorites');

      if (AsyncStorageResponse) {
        const favoredTeachers = JSON.parse(AsyncStorageResponse);
          const favoredTeachersIds = favoredTeachers.map((teacher: Teacher) => (teacher.id))

        setFavorites(favoredTeachersIds);
      }
    }
    
    getAsyncStorage();
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();

    const apiResponse = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setIsFiltersVisible(false);

    setTeachers(apiResponse.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color='#fff' />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <TextInput 
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder='Qual matéria?'
              placeholderTextColor='#c1bccc'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder='Qual dia?'
                  placeholderTextColor='#c1bccc'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder='Qual horário?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
            </View>

            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <View style={styles.ScrollViewContainer}>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            borderRadius: 8,
          }}
          showsVerticalScrollIndicator={false}
        >
          {teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favored={favorites.includes(teacher.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default TeacherList;
