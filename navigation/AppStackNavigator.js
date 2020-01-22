import { createStackNavigator } from 'react-navigation-stack'
import CommentCard from '../components/CommentCard'
import CommentDetails from '../screens/CommentDetails'
import List from '../screens/List'

const RouteConfigs = {
    List: {
        screen: List,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerShown: false
        }
    },
    CommentCard: {
        screen: CommentCard,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerShown: false
        }
    },
    CommentDetails: {
        screen: CommentDetails,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                borderBottomWidth: 0,
            },
        }
    },

}

const TabNavigatorConfig = {}

const AppStackNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig)


export default AppStackNavigator