import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, {useState, Component} from 'react'
import { Button, Header, TextInput, Gap } from '../../components'
import { Logo2 } from '../../assets';
import { LogoWedds } from '../../assets';
import { IllustrationWedding } from '../../assets';
import { showMessage } from 'react-native-flash-message'
import { responsiveHeight } from '../../utils';
import { connect } from 'react-redux';
import { SignInUser } from '../../actions/AuthAction';

class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: '',
    }
  }

  signIn = () => {
    const { email, password} = this.state

    if(email && password) {
      //action
      this.props.dispatch(SignInUser(email, password))
    }else {
      Alert.alert("Error", "Fill Email And Password")
    }
  }

  //fungsi didUpdate jika ada perubahan
  componentDidUpdate(prevProps) {
    const { signInResult } = this.props

    if(signInResult && prevProps.signInResult !== signInResult)
    {
        this.props.navigation.replace("MainApp")
    }
  }

  render() {
    const { email, password} = this.state

    const { signInLoading } = this.props

    return (
      <View style={styles.page}>

      <View style={styles.logoWrapper}>
        <LogoWedds/>
      </View>
      
      <View style={styles.SignInWrapper}>
        <Gap height={10}/>
        <TextInput 
          title ="Email Address" 
          placeholder="Type your email address"
          value={email}
          onChangeText={(email) => this.setState({email})}
        />
        <Gap height={10}/>
        <TextInput 
          title ="Password" 
          placeholder="Type your password"
          value={password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
        />
        <Gap height={25}/>
        <Button 
          title ="Sign In"
          //dp button loading rupa nda jadi pas ba loading
          loading = {signInLoading}
          onPress = {() => this.signIn()}
          //onPress={() => navigation.navigate ('MainApp')}
          //onPress={onSubmit}
        />
      </View>
      <Gap height={25}/>
      <View style={styles.textSignUp}>
        <Text>Don't have account ? Sign up </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textHere} onPress={() => this.props.navigation.navigate ('SignUp')}>here</Text>
          </TouchableOpacity>
      </View>
      {/* masih ta ka atas ini ilustrasi pas mo ba input text */}
      <View style={styles.illustration}>
        <IllustrationWedding/>
      </View>

    </View>
    )
  }
}

const mapStateToProps = ( state ) => ({
  signInLoading: state.AuthReducer.signInLoading,
  signInResult: state.AuthReducer.signInResult,
  signInError: state.AuthReducer.signInError,
})

export default connect(mapStateToProps, null)(SignIn)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: responsiveHeight(90),
  },
  SignInWrapper: {
    marginHorizontal: 30,
  },
  textSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHere: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
})