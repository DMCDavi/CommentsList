import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import Style from '../styles/Style'

export default class CommentDetails extends Component {
    render() {
        return (
            <SafeAreaView style={Style.container}>
                    <Text style={Style.postId}>{this.props.navigation.getParam('postId', 'Error: postId not found')}</Text>
                    <Text style={Style.postText}>{this.props.navigation.getParam('name', 'Error: name not found')}</Text>
                    <Text style={Style.postText}>{this.props.navigation.getParam('body', 'Error: body not found')}</Text>
            </SafeAreaView>
        );
    }
}