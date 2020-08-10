import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
  ScrollViewContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 8,
    overflow: 'scroll',
  },
  teacherList: {
    marginTop: 0,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export const pickerSelect = StyleSheet.create({
  inputIOS: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  InputAndroid: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  iconContainer: {
    top: 18,
    right: 18,
  },
  placeholder: {
    color: '#c1bccc',
  }
});

export default styles;