import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import Styles from './Landing.styles'

function Separator() {
    return <View style={Styles.separator} />;
}

class LandingScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    //set the header options
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
          
            <ImageBackground source={require('../../images/backgroundPages.jpeg')} style={{ width: '100%', height: '100%' }}>
                <View style={Styles.container}>

                    <View style={Styles.containerTitle}>
                        <Text style={Styles.titleSmall}>Welcome to</Text>
                        <Text style={Styles.titleBig}>FUNAI</Text>
                    </View>

                    <View style={Styles.containerButtons}>
                        <TouchableOpacity style={[Styles.websiteBtn]} onPress={() => this.props.navigation.navigate('WebsiteScreen')} >
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Go to School Website</Text>
                        </TouchableOpacity>
                        <Separator></Separator>
                        <TouchableOpacity style={[Styles.portalBtn]} onPress={() => this.props.navigation.navigate('PortalScreen')} >
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Go to School Portal</Text>
                        </TouchableOpacity>
                        
                    </View>
                  
                </View>
            </ImageBackground>
           
        );
    }
}

export default LandingScreen