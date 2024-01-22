import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion soy Angel</Text>
        <Text>Este es el reto numero dos</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='PhoneNumberNav'
                    color="#841584"
                    onPress={() => {
                        navigation.navigate('CallNumber');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                color="#841584"
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    boton1: {

        marginRight: 60,

    },
});