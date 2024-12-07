import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import logoLogin from '../../../assets/logo.png';
import { styles } from './styles';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    }, [navigation])

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={logoLogin}
                    style={styles.logoImg}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.load}>
                <ActivityIndicator color={'#FB6F92'} size={'large'} />
            </View>
        </View>
    )
}