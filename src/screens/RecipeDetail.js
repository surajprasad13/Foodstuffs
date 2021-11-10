import React, {useState} from 'react';
import {Text, Dimensions, ScrollView, View} from 'react-native';
import {AirbnbRating, Icon, ListItem, Avatar} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import getColorTheme from '../helpers/theme';
import {font} from '../constants/fonts';

//redux
import {connect} from 'react-redux';
import {fetchRecipeDetail} from '../redux/action/recipeAction';

import data from '../assets/data/recipeInformation.json';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import HTML from 'react-native-render-html';

const {width} = Dimensions.get('screen');

const RecipeDetail = () => {
  const [expanded, setExpanded] = useState(false);

  const id = '716422';

  const {
    title,
    image,
    readyInMinutes,
    servings,
    dishTypes,
    healthScore,
    extendedIngredients,
    summary,
    instructions,
    analyzedInstructions,
  } = data;

  const theme = getColorTheme();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.section}>
        {dishTypes.map((item, index) => (
          <Text
            key={index}
            allowFontScaling={true}
            style={{
              color: theme.colors.secondary,
              fontFamily: font.regular,
              margin: 10,
            }}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={{fontSize: 25, fontFamily: font.bold}}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={{color: theme.colors.primary}}>120-Calories</Text>
      </View>
      <View style={styles.section}>
        <AirbnbRating
          count={5}
          defaultRating={healthScore}
          showRating={false}
          size={20}
        />
        <View />
      </View>

      <View style={styles.section}>
        <Icon name="timer-outline" type="ionicon" />
        <Text>{readyInMinutes} minute</Text>
      </View>
      <View style={styles.section}>
        <Icon name="pot-mix-outline" type="material-community" />
        <Text>{servings} serving</Text>
      </View>
      <FastImage
        source={{uri: image}}
        resizeMode="cover"
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          position: 'absolute',
          right: 0,
          marginTop: 100,
        }}
      />
      <View style={styles.section}>
        <Text style={{fontFamily: font.medium, fontSize: 20}}>Ingredients</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={extendedIngredients}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                margin: 5,
                padding: 5,
                width: width * 0.4,
                borderColor: '#ccc',
                borderWidth: 0.7,
                backgroundColor: 'white',
                borderRadius: 10,
                height: 200,
                alignContent: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <FastImage
                  resizeMode="contain"
                  source={{
                    uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </View>
              <Text style={{fontFamily: font.regular}}>Amount-{item.name}</Text>
              <Text style={{fontFamily: font.regular}}>
                Amount-{item.amount}
              </Text>
              <Text style={{fontFamily: font.regular}}>
                State-{item.consistency}
              </Text>
            </View>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      <View style={styles.section}>
        <Text style={{fontFamily: font.medium, fontSize: 20}}>
          Instructions
        </Text>
      </View>
      <HTML source={{html: instructions}} containerStyle={styles.section} />

      <View style={styles.section}>
        <Text style={{fontFamily: font.medium, fontSize: 20}}>
          Analyzed Instructions
        </Text>
      </View>
      <View style={{}}>
        {analyzedInstructions[0].steps.map((item, index) => {
          return (
            <ListItem.Accordion
              content={
                <>
                  <ListItem.Content>
                    <ListItem.Title>{item.step}</ListItem.Title>
                  </ListItem.Content>
                </>
              }
              isExpanded={expanded}
              onPress={() => setExpanded(!expanded)}></ListItem.Accordion>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={{fontFamily: font.medium, fontSize: 20}}>Summary</Text>
      </View>
      <HTML source={{html: summary}} containerStyle={styles.section} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  detail: state.recipe.detail,
});

export default connect(mapStateToProps, {fetchRecipeDetail})(RecipeDetail);
