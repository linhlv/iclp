import React, { Component }  from 'react';

import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';

import {    
    View,
    Text
} from 'react-native';

import {
    SafeAreaView
} from 'react-navigation';
import R from '../../libs/R';
// import AuthRequestMiddleware from '../../libs/networking/requests';
import HomeHeader from '../../libs/components/HomeHeader';

export let API = null;

const Home = ({
    palette,
    strings,
    images,
    colors,    
    navigation
}) => (
    <View style={palette.container}>
        <HomeHeader showMenu={() => navigation.openDrawer()}/>
    </View>
);

export default compose(
    withHandlers({
        

    }),
    lifecycle({
        componentWillMount() {
            // API = new AuthRequestMiddleware();

          },
    }),
    withProps({'palette': R.palette, 'strings': R.strings, 'images': R.images, 'colors': R.colors})
    )(Home);