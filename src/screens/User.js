import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Button} from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';

import {SafeAreaView} from 'react-native-safe-area-context';

const User = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView>
      <Text>User</Text>
      <Text>
        Date-{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
      </Text>
      <Text>
        Time-{date.getHours()}:{date.getMinutes()}
      </Text>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default User;
