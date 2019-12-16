import { Dimensions, PixelRatio, StatusBar } from 'react-native';

const DPWidth = 360;

const DPHeight = 706;

export function FontSizeRP(size) { return size * PixelRatio.getFontScale() }

export function getPixelByHeightDP(dp) { return (dp * ((Dimensions.get('screen').height - StatusBar.currentHeight) / DPHeight)) }

export function getPixelByWidthDP(dp) { return (dp * (Dimensions.get('screen').width / DPWidth)) }