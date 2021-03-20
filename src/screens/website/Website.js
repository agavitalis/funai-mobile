import React from 'react';
import { ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import Styles from './Website.styles'

function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
}
class WebsiteScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    //set the header options
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
         
            <WebView
                source={{ uri: 'https://funai.edu.ng' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />
           
        );
    }
}

export default WebsiteScreen