import { View, Text} from 'react-native'
import React from 'react'
import WelcomeContainer from '../components/WelcomeContainer';

const WelcomeFirst = () => {
    const imgSrc = require("../assets/images/welcomeA.png");
    const message = "Welcome to Inspire! Let's find your perfect mentor, jobs, friends and connections"

    return (
    // <WelcomeContainer image={imgSrc} text = {message}/>
    <WelcomeContainer image={imgSrc} text={message} nav='WelcomeSecond'/>
  )
}

export default WelcomeFirst