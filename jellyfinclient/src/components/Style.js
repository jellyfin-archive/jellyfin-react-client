import {
    StyleSheet,
    Dimensions
} from 'react-native';

const win = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        width: win.width,
        height: win.height,
        backgroundColor: '#101010',
        justifyContent: 'center'
    },
    loginInput: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 250,
        height: 25,
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#292929',
        borderColor: '#00a4dc',
        borderStyle: 'solid',
        borderRadius: .15,
        borderWidth: .07
    },
    text: {
        width: 100,
        color: '#ffffff',
        fontFamily: 'Helvetica'
    },
    biggerText: {
        color: '#ffffff',
        fontSize: 17,
    },
    image: {
        aspectRatio: (4800 / 1600),
        width: '45%',
        height: '15%',
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});
