import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
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
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
      </View>
    </View>
  );
}

export default Favorites;
