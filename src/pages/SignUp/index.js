import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Image, 
    ScrollView, 
    Alert, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native'
import React, {useState, Component} from 'react'
import { Header, TextInput, Button, Gap } from '../../components'
import { showMessage } from 'react-native-flash-message'
import { SignUpIllustration } from '../../assets'
import { responsiveHeight, responsiveWidth} from '../../utils'
import { SignUpUser } from '../../actions/AuthAction'
import { connect } from 'react-redux'

class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         whatsapp: '',
         address: '',
         email: '',
         password: ''
      }
    }

    componentDidUpdate(prevProps) {
        const { signUpResult } = this.props

        if(signUpResult && prevProps.signUpResult !== signUpResult)
        {
            this.props.navigation.replace("MainApp")
        }
    }

//this.props.navigation.navigate('SignIn', this.state)
//this.props.navigation.navigate('SignIn')
    onSubmit = () => {
        const { name, whatsapp, address, email, password } = this.state
        if(name && whatsapp && address && email && password) {
            const data = {
                name: name,
                whatsapp: whatsapp,
                address: address,
                email: email, 
                status: 'user'
                //password tidak boleh disimpan kedalam database
            }
            //console.log("Data : ", data)
            // ke Auth Action
            // ini cuma this.props.password karna nda pake register 1/2 sma dg di cnth jdi nda pke .route.params
            //this.props.dispatch(SignUpUser(data, this.props.password))
            this.props.dispatch(SignUpUser(data, password))

        }
        if(!name && whatsapp && address && email && password){
            Alert.alert("Error", "Name empty please input your name")
        }
        if(name && !whatsapp && address && email && password){
            Alert.alert("Error", "Whatsapp empty please input your whatsapp number")
        }
        if(name && whatsapp && !address && email && password){
            Alert.alert("Error", "Address empty please input your address")
        }
        if(name && whatsapp && address && !email && password){
            Alert.alert("Error", "Email empty please input your email")
        }
        if(name && whatsapp && address && email && !password){
            Alert.alert("Error", "Password empty please input your password")
        }
        else{
            Alert.alert("Error", "Fill your profile before sign up")
        }
        
    }
    render() {
        const { name, whatsapp, address, email, password } = this.state
        //loading
        const { signUpLoading } = this.props
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.page}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.illustration}>
                            <SignUpIllustration/>
                            <Gap height={20}/>
                            <Text style={styles.textFillProfile}>Please Fill Your Profile</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput 
                                title = "Name" 
                                placeholder="Type your full name"
                                value={name}
                                onChangeText={(name) => this.setState({name})}
                                //value={name}
                                //onChangeText={value=>setName(value)}
                            />
                            <Gap height={20}/>
                            <TextInput 
                                title = "Phone Number" 
                                placeholder="Type your phone number or whatsapp"
                                keyboardType="number-pad"
                                value={whatsapp}
                                onChangeText={(whatsapp) => this.setState({whatsapp})}
                            />
                            <Gap height={20}/>
                            <TextInput 
                                title = "Address" 
                                placeholder="Type your address"
                                value={address}
                                onChangeText={(address) => this.setState({address})}
                            />
                            <Gap height={20}/>
                            <TextInput 
                                title = "Email Address" 
                                placeholder="Type your email address"
                                value={email}
                                onChangeText={(email) => this.setState({email})}
                                //value={emailAddress}
                                //onChangeText={value=>setEmailAddress(value)}
                            />
                            <Gap height={20}/>
                            <TextInput 
                                title = "Password" 
                                placeholder="Type your password"
                                value={password}
                                onChangeText={(password) => this.setState({password})}
                                //value={password}
                                //onChangeText={value=>setPassword(value)}
                                secureTextEntry
                            />
                            <Gap height={40}/>
                            <Button 
                                title = "Sign Up"
                                onPress={() => this.onSubmit()}
                                loading={signUpLoading}
                                //onPress={() => this.props.navigation.navigate('SignIn')}
                                //onPress={onSubmit}
                                //onPress={() => navigation.navigate ('SignIn')}
                            />
                            <Gap height={30}/>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const signInStateToProps = (state) => ({
    signUpLoading: state.AuthReducer.signUpLoading,
    signUpResult: state.AuthReducer.signUpResult,
    signUpError: state.AuthReducer.signUpError,
})

export default connect(signInStateToProps, null)(SignUp);

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    illustration: {
        alignItems: 'center',
        marginTop: responsiveHeight(50),
    },
    textFillProfile: {
        fontSize: 16,
        color: '#FFD0EC',
        fontWeight: 'bold',
    },
    input: {
        marginHorizontal: 30,
    }
})