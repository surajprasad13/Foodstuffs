import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SearchBar, Icon, Button} from 'react-native-elements';

//components
import {Trending} from '../constants/data';
import {TitleHeader, Hcard, RecipeCard} from '../components';

//redux
import {connect} from 'react-redux';
import {fetchJoke, fetchRandomRecipe} from '../redux/action/recipeAction';

import getColorTheme from '../helpers/theme';
import {font} from '../constants/fonts';
import CardComponent from '../components/Card';

import data from '../assets/data/random.json';
import {localNotification} from '../services/Notification';

const {width} = Dimensions.get('screen');

const Home = ({navigation, joke, random}) => {
  const theme = getColorTheme();

  return (
    <ScrollView>
      <Text style={[styles.heading, {fontFamily: font.medium}]}>
        What would you like to cook
      </Text>
      <Text style={[styles.heading, {fontFamily: font.medium}]}>today ?</Text>
      <Button title="Notification" onPress={() => localNotification()} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <SearchBar
          round={true}
          placeholder="Type here ..."
          onFocus={() => navigation.navigate('Search')}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
            borderTopWidth: 0,
            width: width * 0.75,
          }}
          inputContainerStyle={{borderRadius: 20, backgroundColor: 'white'}}
          searchIcon={() => <Icon name="search" size={30} />}
        />
        <Icon
          name="sliders"
          type="font-awesome"
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
        />
      </View>

      {/** Reecipe section */}
      <TitleHeader
        title="Today's fresh recipe"
        onPress={() => navigation.navigate('Category')}
      />
      <FlatList
        nestedScrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={data.recipes}
        renderItem={({item, index}) => {
          return <RecipeCard item={item} key={index} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      {/** Menu items */}
      <TitleHeader title="Menu Items" />
      <FlatList
        nestedScrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={Trending}
        renderItem={({item, index}) => {
          return <CardComponent item={item} key={index} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      <TitleHeader title="Random Recipe" />
      <FlatList
        nestedScrollEnabled={true}
        data={Trending}
        renderItem={({item, index}) => {
          return <Hcard item={item} key={index} />;
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginHorizontal: 20,
    fontWeight: '500',
  },
});

const mapStateToProps = state => ({
  joke: state.recipe.joke,
  random: state.recipe.random,
});

export default connect(mapStateToProps, {fetchJoke, fetchRandomRecipe})(Home);
