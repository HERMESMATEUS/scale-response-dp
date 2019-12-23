import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import * as ResponsiveDP from './function';
const SizeFontGeneral = 12;
import LottieView from 'lottie-react-native';

export default class TestDp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: ResponsiveDP.getPixelByWidthDP(200),
            height: ResponsiveDP.getPixelByHeightDP(200),
        };
    }

    render() {
        return (
            <View style={styles.component}>

                <TouchableOpacity
                    onPress={() => { this.props.back() }}
                    style={styles.header}>
                    <Image style={{
                        width: ResponsiveDP.getPixelByWidthDP(24),
                        height: ResponsiveDP.getPixelByHeightDP(24),
                    }} source={require('./Assets/back/back.png')} />
                    <Text style={{ marginLeft: ResponsiveDP.getPixelByWidthDP(32), fontSize: ResponsiveDP.FontSizeRP(14), color: '#02a71e', fontWeight: 'bold' }}>Animation</Text>
                </TouchableOpacity>

                <View style={styles.Contain2}>

                    <View style={{ flex: 1 }}>
                        <Text>Alto</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={{ width: ResponsiveDP.getPixelByWidthDP(140), borderBottomWidth: 0.3 }}
                            onChangeText={(text) => this.setState({ height: ResponsiveDP.getPixelByHeightDP(text) })}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text>Escala de dp en este caso equivale a "{ResponsiveDP.getPixelByHeightDP(1)}"" Pixeles por Dp </Text>
                    </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'grey', margin: ResponsiveDP.getPixelByWidthDP(10) }}>

                    <LottieView
                        style={{ height: this.state.height, borderWidth: 0.3, borderColor: 'red', elevation: 2 }}
                        autoPlay={true}
                        source={require('./Assets/EMPTY-STATE/empty-state.json')}
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    header: {
        height: ResponsiveDP.getPixelByHeightDP(56),
        width: ResponsiveDP.getPixelByWidthDP(360),
        padding: ResponsiveDP.getPixelByWidthDP(16),
        backgroundColor: '#fafafa',
        flexDirection: 'row',
    },
    Contain1: {
        backgroundColor: '#ffffff',
        padding: ResponsiveDP.getPixelByWidthDP(16),
        flexDirection: 'row',
        height: ResponsiveDP.getPixelByHeightDP(48),
    },
    Contain2: {
        backgroundColor: '#ffffff',
        height: ResponsiveDP.getPixelByHeightDP(100),
        width: ResponsiveDP.getPixelByWidthDP(360),
        padding: ResponsiveDP.getPixelByWidthDP(16),
        flexDirection: 'row'
    },
    Footer: {
        flexDirection: 'row',
        height: ResponsiveDP.getPixelByHeightDP(56),
        width: ResponsiveDP.getPixelByWidthDP(360),
        backgroundColor: '#fafafa',
    },
    View1: {
        marginTop: ResponsiveDP.getPixelByHeightDP(18),
        width: ResponsiveDP.getPixelByWidthDP(328),
        height: ResponsiveDP.getPixelByHeightDP(36),
        borderWidth: 0.3,
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        borderColor: '#c4c4c4',
        backgroundColor: '#fafafa',
    },
    View2: {
        marginTop: ResponsiveDP.getPixelByHeightDP(5),
        width: ResponsiveDP.getPixelByWidthDP(328),
        height: ResponsiveDP.getPixelByHeightDP(36),
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        alignItems: 'center',
    },
    View3: {
        marginTop: ResponsiveDP.getPixelByHeightDP(5),
        width: ResponsiveDP.getPixelByWidthDP(328),
        height: ResponsiveDP.getPixelByHeightDP(36),
        borderWidth: 0.3,
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        borderColor: '#c4c4c4',
        backgroundColor: '#fafafa',
    },
    View4: {
        marginTop: ResponsiveDP.getPixelByHeightDP(5),
        width: ResponsiveDP.getPixelByWidthDP(160),
        height: ResponsiveDP.getPixelByHeightDP(36),
        borderWidth: 0.3,
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        borderColor: '#c4c4c4',
        backgroundColor: '#fafafa',
    },
    TouchableOpacity1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ResponsiveDP.getPixelByHeightDP(5),
        width: ResponsiveDP.getPixelByWidthDP(160),
        height: ResponsiveDP.getPixelByHeightDP(36),
        borderWidth: 1,
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        borderColor: '#02a71e',
        backgroundColor: '#ffffff',
    },
    TouchableOpacity2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ResponsiveDP.getPixelByHeightDP(5),
        width: ResponsiveDP.getPixelByWidthDP(160),
        height: ResponsiveDP.getPixelByHeightDP(36),
        borderRadius: ResponsiveDP.getPixelByWidthDP(4),
        backgroundColor: '#02a71e',
    },
    Text1: {
        marginTop: ResponsiveDP.getPixelByHeightDP(16),
        height: ResponsiveDP.getPixelByHeightDP(14),
        color: '#888787',
        fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral),
        textAlignVertical: 'bottom',
    }
});
