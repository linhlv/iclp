import { StyleSheet } from 'react-native';
import R from '../../libs/R';

const styles = StyleSheet.create({
    container: R.palette.container,
    homeHeader: { ...
        R.palette.home_header,              
    },
    alignRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },    

});

export default styles;