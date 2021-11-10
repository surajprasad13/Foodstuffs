import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

//redux
import {userValue, fetchSearch} from '../redux/action/recipeAction';
import {connect} from 'react-redux';

import {Card} from '../components';

const Search = ({loading, searchtext, search, userValue, fetchSearch}) => {
  const onSubmit = () => {
    fetchSearch(searchtext);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type here ..."
        value={searchtext}
        onChangeText={text => userValue({prop: 'searchtext', value: text})}
        onEndEditing={onSubmit}
      />
      <FlatList
        data={search}
        numColumns={2}
        renderItem={({item, index}) => <Card item={item} key={index} />}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text>Empty</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  loading: state.recipe.loading,
  searchtext: state.recipe.searchtext,
  search: state.recipe.search,
});

export default connect(mapStateToProps, {userValue, fetchSearch})(Search);
