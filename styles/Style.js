import {
    StyleSheet,
    Dimensions
} from 'react-native'

const screenWidth = Dimensions.get('window').width

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    commentCard: {
        padding: 10,
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textCommentCard: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 40,
    },
    postId: {
        fontSize: 40,
        textAlign: 'center',
        margin: 40,
    },
    postText: {
        margin: 20,
        textAlign: 'center',
    },

});

export default Style