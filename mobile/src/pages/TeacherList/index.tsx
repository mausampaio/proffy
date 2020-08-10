import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles, { pickerSelect } from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

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

  function handleToggleDatePicker() {
    setDatePickerVisible(!isDatePickerVisible);
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
            <RNPickerSelect
              value={subject}
              onValueChange={(text) => setSubject(text)}
              items={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biología', label: 'Biología' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
              style={pickerSelect}
              placeholder={{ label: 'Qual matéria?', value: null, color: '#c1bccc' }}
              Icon={() => {
                return <Feather name="chevron-down" size={24} color="#c1bccc" />;
              }}
              doneText='Pronto'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <RNPickerSelect
                  value={weekDay}
                  onValueChange={(text) => setWeekDay(text)}
                  items={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                  style={pickerSelect}
                  placeholder={{ label: 'Qual dia?', value: null, color: '#c1bccc' }}
                  Icon={() => {
                    return <Feather name="chevron-down" size={24} color="#c1bccc" />;
                  }}
                  doneText='Pronto'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  onTouchStart={handleToggleDatePicker}
                  editable={false}
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder='Qual horário?'
                  placeholderTextColor='#c1bccc'
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="time"
                  onConfirm={(date) => {
                    if (date.getMinutes() == 0) {
                      setTime(`${date.getHours()}:00`)
                    } else {
                      setTime(`${date.getHours()}:${date.getMinutes()}`)
                    }
                    handleToggleDatePicker();
                  }}
                  onCancel={handleToggleDatePicker}
                  cancelTextIOS="Cancelar"
                  confirmTextIOS="Confirmar"
                  headerTextIOS="Selecione a horário"
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
