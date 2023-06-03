import { View, Text} from 'react-native'
import React from 'react'
import WelcomeContainer from '../components/WelcomeContainer';

const WelcomeSecond = () => {
    const imgSrc = require("../assets/images/welcomeB.png");
    const message = "Welcome to Inspire! Let's find your perfect mentor, jobs, friends and connections"

    return (
    <WelcomeContainer image={imgSrc} text = {message} nav={'Interests'}/>
  )
}

export default WelcomeSecond