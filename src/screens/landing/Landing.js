import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, TextInput, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import Styles from './Landing.styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

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
          
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} showVerticalScrollIndicators="false" style={{flex:1}}>
            <ImageBackground source={require('../../images/backgroundAuth.png')} style={{ width: '100%', height: '100%' }}>
                <View style={Styles.container}>

                    <View style={Styles.containerTitle}>
                        <Text style={Styles.titleSmall}>Welcome to</Text>
                        <Text style={Styles.titleBig}>FUNIA</Text>
                    </View>

                   

                    <View style={Styles.containerButtons}>
                        <TouchableOpacity style={[Styles.registerButton]} onPress={() => this.props.navigation.navigate('WebsiteScreen')} >
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Go to School Website</Text>
                        </TouchableOpacity>
                        <Separator></Separator>
                        <TouchableOpacity style={[Styles.registerButton]} onPress={() => this.props.navigation.navigate('PortalScreen')} >
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Go to School portal</Text>
                        </TouchableOpacity>
                        
                    </View>
                  
                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>
            
        );
    }
}

export default LandingScreen