import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import Style from '../styles/Style'
import { withNavigation } from 'react-navigation';

class ComementCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('CommentDetails',
                    {
                        postId: this.props.postId,
                        name: this.props.name,
                        body: this.props.body,
                    })
            }}>
                <View style={Style.commentCard}>
                    <Text>{this.props.email}</Text>
                    <Text style={Style.textCommentCard}>{this.props.id}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

export default withNavigation(ComementCard);