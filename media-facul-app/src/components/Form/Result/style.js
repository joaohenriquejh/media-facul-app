import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    resultadoMedia: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    media: {
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    corReprovado: {
        backgroundColor: '#d00',
    },

    corProvaFinal: {
        backgroundColor: '#fb0',
    },

    corAprovado: {
        backgroundColor: '#32cd32',
    },
});

export default styles;