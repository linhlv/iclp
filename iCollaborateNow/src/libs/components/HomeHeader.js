import React, {Component} from 'react';
import { 
    View,
    Image
 } from 'react-native';


 import {compose} from 'recompose';

 import {
    RkButton,
    RkText
 } from 'react-native-ui-kitten';

 import Icon from 'react-native-vector-icons/Ionicons';
 import R from '../../libs/R';
import styles from './styles';

 const HomeHeader = ({showMenu}) => (
     <View style={[styles.homeHeader, {justifyContent: 'space-between'}]}>
        <View style={[styles.alignRow, R.palette.horizontalPaddings, { alignItems: 'center', height: '60%'}]}>
            <View style={{flexDirection: 'row'}}>
                <RkButton rkType='clear' onPress={showMenu}>   
                    <Icon name={'ios-menu'} size={R.dimens.icon_size} color={'white'}/>
                </RkButton>  
                <Image source={R.images.keyboard_backspace_black} style={{marginLeft: R.dimens.padding}}/>
            </View>

            <View style={{flexDirection: 'row', padding: R.dimens.padding}}>
                <RkText rkType='medium' style={{color: R.colors.white}}>{'Trang Chủ'}</RkText>
                <RkButton rkType='clear' style={{marginLeft: R.dimens.padding}}>   
                    <Icon name={'ios-search'} size={R.dimens.icon_size} color={'white'}/>
                </RkButton>  
            </View>
        </View>

        <View style={{height: '40%', marginBottom: 0, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: R.colors.dark_grey}}>
            <RkButton rkType={'medium clear'}>{'Tin mới nhât'}</RkButton>
            <RkButton rkType={'medium clear'}>{'Tin đọc nhiều'}</RkButton>
        </View>
              
     </View>
 );

 export default compose()(HomeHeader);