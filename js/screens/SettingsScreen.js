import React, { Component } from 'react';
import { SectionList, View, StyleSheet, Text } from 'react-native';

function SettingsItem(props) {
  return <Text style={styles.item}>{props.text}</Text>;
}

function SettingsHeader(props) {
  return <Text style={styles.section}>{props.text}</Text>;
}

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Version',
              data: [
                { key: '1', info: '1.0' },
              ],
            },
            {
              title: 'Impressum',
              data: [
                { key: '1', info: 'Beispiel GmbH' },
                { key: '2', info: 'copyright 2023' },
              ],
            },
          ]}
          renderItem={({ item }) => <SettingsItem text={item.info} />}
          renderSectionHeader={({section}) => <SettingsHeader text={section.title}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightGrey',
    fontSize : 18,
    padding: 5,
  },
  item: {
    color: 'dimgrey',
    fontSize: 18,
    padding: 5,
  },
});
