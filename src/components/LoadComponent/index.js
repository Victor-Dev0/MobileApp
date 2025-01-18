import React from "react";
import { ActivityIndicator, Easing, View } from "react-native";
import { Animated } from "react-native";
import { styles } from "./styles";

export const LoadComponent = () => {
    const animation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 360,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 0,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 }
        ).start();
    }, [animation]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [
                            {
                                rotateZ: animation.interpolate({
                                    inputRange: [0, 360],
                                    outputRange: ['0deg', '360deg'],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <ActivityIndicator size={"large"} color={"#08a2f4"} />
            </Animated.View>
        </View>
    )
}