import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, StatusBar } from 'react-native';
import * as ResponsiveDP from './function';

const SizeFontGeneral = 12;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.component}>
        <View style={styles.header}>
          <Image style={{
            width: ResponsiveDP.getPixelByWidthDP(24),
            height: ResponsiveDP.getPixelByHeightDP(24),
          }} source={require('./Assets/back/back.png')} />
          <Text style={{ marginLeft: ResponsiveDP.getPixelByWidthDP(32), fontSize: ResponsiveDP.FontSizeRP(14), color: '#02a71e', fontWeight: 'bold' }}>Dashboard</Text>
        </View>

        <View style={styles.Contain1}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: ResponsiveDP.FontSizeRP(14), fontWeight: 'bold', color: '#02a71e' }}>Register</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: ResponsiveDP.FontSizeRP(14), color: "#c4c4c4" }}>History ( Today)</Text>
          </View>
        </View>


        <View style={styles.Contain2}>
          <Text style={{ ...styles.Text1, marginTop: 0 }}>Search and register sold units.</Text>

          <View style={styles.View1} >
            <TextInput
              style={{}}
              placeholderTextColor='#c4c4c4'
              placeholder={'Search'}
            />
          </View>
          <Text style={styles.Text1}>Period</Text>
          <View style={styles.View2} >
            <TouchableOpacity style={{ borderTopLeftRadius: ResponsiveDP.getPixelByWidthDP(4), borderBottomLeftRadius: ResponsiveDP.getPixelByWidthDP(4), width: ResponsiveDP.getPixelByWidthDP(164), height: ResponsiveDP.getPixelByHeightDP(36), justifyContent: 'center', alignItems: 'center', backgroundColor: '#006ed3' }}>
              <Text style={{ color: '#ffffff' }}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderTopRightRadius: ResponsiveDP.getPixelByWidthDP(4), borderBottomRightRadius: ResponsiveDP.getPixelByWidthDP(4), width: ResponsiveDP.getPixelByWidthDP(164), height: ResponsiveDP.getPixelByHeightDP(36), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#c4c4c4' }}>Daily</Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.Text1}>Date</Text>

          <View style={styles.View3} >
            <TextInput
              style={{}}
              placeholderTextColor='#c4c4c4'
              placeholder={'Select'}
            />
          </View>

          <View style={{ borderColor: '#c4c4c4', marginTop: ResponsiveDP.getPixelByHeightDP(15.7), width: ResponsiveDP.getPixelByWidthDP(360), borderWidth: 0.2 }} />

          <Text style={styles.Text1}>Tap the filters to search sold units.</Text>


          <Text style={styles.Text1}>Category</Text>

          <View style={styles.View2} >
            <TouchableOpacity style={{ borderTopLeftRadius: ResponsiveDP.getPixelByWidthDP(4), borderBottomLeftRadius: ResponsiveDP.getPixelByWidthDP(4), width: ResponsiveDP.getPixelByWidthDP(110), height: ResponsiveDP.getPixelByHeightDP(36), justifyContent: 'center', alignItems: 'center', backgroundColor: '#006ed3' }}>
              <Text style={{ fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral), color: '#ffffff' }}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderBottomRightRadius: ResponsiveDP.getPixelByWidthDP(4), width: ResponsiveDP.getPixelByWidthDP(110), height: ResponsiveDP.getPixelByHeightDP(36), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral), color: '#c4c4c4' }}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderTopRightRadius: ResponsiveDP.getPixelByWidthDP(4), borderBottomRightRadius: ResponsiveDP.getPixelByWidthDP(4), width: ResponsiveDP.getPixelByWidthDP(110), height: ResponsiveDP.getPixelByHeightDP(36), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral), color: '#c4c4c4' }}>Daily</Text>
            </TouchableOpacity>
          </View>




          <Text style={styles.Text1}>Brand</Text>

          <View style={styles.View3} >
            <TextInput
              style={{}}
              placeholderTextColor='#c4c4c4'
              placeholder={'Select'}
            />
          </View>


          <View style={{ flexDirection: 'row', marginTop: ResponsiveDP.getPixelByHeightDP(16), }}>

            <View style={{ marginRight: ResponsiveDP.getPixelByWidthDP(4) }} >
              <Text style={{ ...styles.Text1, marginTop: 0 }}>Product</Text>
              <View style={styles.View4} >
                <TextInput
                  style={{}}
                  placeholderTextColor='#c4c4c4'
                  placeholder={'Select'}
                />
              </View>
            </View>

            <View style={{ marginLeft: ResponsiveDP.getPixelByWidthDP(4) }} >
              <Text style={{ ...styles.Text1, marginTop: 0 }}>Series</Text>
              <View style={styles.View4} >
                <TextInput
                  style={{}}
                  placeholderTextColor='#c4c4c4'
                  placeholder={'Select'}
                />
              </View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: ResponsiveDP.getPixelByHeightDP(16), }}>

            <View style={{ marginRight: ResponsiveDP.getPixelByWidthDP(4) }} >
              <TouchableOpacity style={styles.TouchableOpacity1} >
                <Text style={{ fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral), color: "#02a71e" }}>Recent Search</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: ResponsiveDP.getPixelByWidthDP(4) }} >
              <TouchableOpacity style={styles.TouchableOpacity2} >
                <Text style={{ fontSize: ResponsiveDP.FontSizeRP(SizeFontGeneral), color: "#ffffff" }}>Recent Search</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={styles.Footer}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Image style={{
              width: ResponsiveDP.getPixelByWidthDP(24),
              height: ResponsiveDP.getPixelByHeightDP(24),
            }} source={require('./Assets/tap-home/tapbar_home_inactive.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Image style={{
              width: ResponsiveDP.getPixelByWidthDP(24),
              height: ResponsiveDP.getPixelByHeightDP(24),
            }} source={require('./Assets/tap-apps/tapbar_apps_active.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Image style={{
              width: ResponsiveDP.getPixelByWidthDP(24),
              height: ResponsiveDP.getPixelByHeightDP(24),
            }} source={require('./Assets/tap-notifications/tapbar_notification_inactive.png')} />
          </TouchableOpacity>
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