import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import * as ResponsiveDP from './function';
import Animation from "./Animation";
import TestDp from "./TestDp";


const SizeFontGeneral = 12;
const Routs = [
  {
    "name": "Test dp response",
    "route": "TestDp",
  },
  {
    "name": "Test Animation",
    "route": "Animation",
  }
]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: false
    };
  }

  selectRout = (route) => this.setState({ route });

  render() {
    const { route } = this.state;

    if (route) {
      if (route == 'Animation') return <Animation back={() => this.setState({ route: false })} />;
      if (route == 'TestDp') return <TestDp back={() => this.setState({ route: false })} />;
    }

    return (
      <View style={styles.component}>

        <View style={{ justifyContent: 'center', alignItems: 'center', height: ResponsiveDP.getPixelByHeightDP(56), width: ResponsiveDP.getPixelByWidthDP(360) }}>
          <Text>Seleccione uno para probar</Text>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView>
            {
              Routs.map((item, key) => {
                return (
                  <TouchableOpacity key={key} style={styles.Contain1} onPress={() => this.selectRout(item.route)} >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
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
    height: ResponsiveDP.getPixelByHeightDP(48),
    width: ResponsiveDP.getPixelByWidthDP(360),
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  Contain2: {
    backgroundColor: '#ffffff',
    padding: ResponsiveDP.getPixelByWidthDP(16),
    height: ResponsiveDP.getPixelByHeightDP(554),
    padding: ResponsiveDP.getPixelByWidthDP(16),
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