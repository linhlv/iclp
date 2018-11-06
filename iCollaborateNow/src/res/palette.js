import colors from './colors';
import dimens from './dimens';

const palette = {
    heading: {
        color: colors.title,
        fontSize: 20,
        textAlign: 'center'
    },
    body: {
        color: colors.text,
        fontSize: 16
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    home_header: {
        height: 112,
        backgroundColor: colors.main,
        width: '100%',           
    },
    horizontalPaddings: {
        paddingHorizontal: dimens.margin
    }

}

export default palette;