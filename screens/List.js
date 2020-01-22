import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';

import Style from '../styles/Style'
import CommentCard from '../components/CommentCard'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          isLoading: false,
          dataSource: json,
        })

      })

      .catch((error) => {
        console.log(error)
      })
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          margin: 5
        }}
      />
    );
  };

  render() {

    if (this.state.isLoading) {
      return (
        <SafeAreaView style={Style.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={Style.container}>
          <FlatList
            ItemSeparatorComponent={this.renderSeparator}
            data={this.state.dataSource}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
              <CommentCard postId={item.postId} id={item.id} name={item.name} email={item.email} body={item.body} />
            }
          />
        </SafeAreaView>
      );
    }
  }
};