/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Table from './src/ScrollableTable';

const {width: screenWidth} = Dimensions.get('window')
console.log('screenWidth', screenWidth)

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const header = [{value: 'test1'}, {value: 'test2'}, {value: 'test3'}, {value: 'test4'}, {value: 'test5'}]

  const content = [
    [{value: 'SC1'}, {value: 'Row1value1'}, {value: 'Row1value2'}, {value: 'Row1value3'}, {value: 'Row1value4'}, {value: 'Row1value5'}],
    [{value: 'SC2'}, {value: 'Row2value1'}, {value: 'Row2value2'}, {value: 'Row2value3'}, {value: 'Row2value4'}, {value: 'Row2value5'}],
    [{value: 'SC3'}, {value: 'Row3value1'}, {value: 'Row3value2'}, {value: 'Row3value3'}, {value: 'Row3value4'}, {value: 'Row3value5'}],
    [{value: 'SC4'}, {value: 'Row4value1'}, {value: 'Row4value2'}, {value: 'Row4value3'}, {value: 'Row4value4'}, {value: 'Row4value5'}],
    [{value: 'SC5'}, {value: 'Row5value1'}, {value: 'Row5value2'}, {value: 'Row5value3'}, {value: 'Row5value4'}, {value: 'Row5value5'}],
    [{value: 'SC6'}, {value: 'Row6value1'}, {value: 'Row6value2'}, {value: 'Row6value3'}, {value: 'Row6value4'}, {value: 'Row6value5'}],
    [{value: 'SC7'}, {value: 'Row7value1'}, {value: 'Row7value2'}, {value: 'Row7value3'}, {value: 'Row7value4'}, {value: 'Row7value5'}],
    [{value: 'SC8'}, {value: 'Row8value1'}, {value: 'Row8value2'}, {value: 'Row8value3'}, {value: 'Row8value4'}, {value: 'Row8value5'}],
    [{value: 'SC9'}, {value: 'Row9value1'}, {value: 'Row9value2'}, {value: 'Row9value3'}, {value: 'Row9value4'}, {value: 'Row9value5'}],
    [{value: 'SC10'}, {value: 'Row10value1'}, {value: 'Row10value2'}, {value: 'Row10value3'}, {value: 'Row10value4'}, {value: 'Row10value5'}],
  ];


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
        <Table
          columnWidth={screenWidth / (Math.min(4, header.length + 1))}
          tableHeight={300}
          header={header}
          content={content}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
