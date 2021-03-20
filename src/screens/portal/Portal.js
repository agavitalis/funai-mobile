import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import Styles from './Portal.styles'

function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
}
class PortalScreen extends React.Component {

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
                source={{ uri: 'https://portal.funai.edu.ng/login.aspx' }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />

        );
    }
}

export default PortalScreen