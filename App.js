import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Box from './src/templateSample/Box'
import Header from './src/templateSample/Header'
import HeaderTitle from './src/templateSample/HeaderTitle'



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ padding: 20, flex: 1 }}>

        <Header></Header>
        <HeaderTitle></HeaderTitle>


        <Box bColor='#EA7462' title='Head - Face' description='11 diseases'></Box>
        <Box bColor='#8CBFB7' title='Back - Neck' description='9 diseases' ></Box>
        <Box bColor='#EC952C' title='Elbow - Shoulders' description='12 diseases'></Box>
        <Box bColor='#2C677B' title='Hand - Arm' description='2 diseases'></Box>


        <View style={{ flex: 2 }}>
          <Text>Menu</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default App