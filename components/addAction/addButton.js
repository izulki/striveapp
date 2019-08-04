import React, {Component} from 'react'
import {Dimensions, View, TouchableOpacity} from 'react-native';
import Svg, { G, Defs, Rect, Path } from 'react-native-svg'
const { width, height } = Dimensions.get('window');


export default class AddButton extends Component {
    render() {
        return(

  <TouchableOpacity
  onPress ={this.props.callback}
      style={{
          alignItems:'center',
          justifyContent:'center',
          position: 'absolute',                                          
          bottom: width*0.050,                                                    
          right: width*0.050,
          elevation: 2,
        }}
    >
            <Svg
    id="Capa_1"
    x="0px"
    y="0px"
    width={height*0.07}
    height={height*0.07}
    viewBox="0 0 64 64"
    style={{
      enableBackground: 'new 0 0 64 64',
    }}
    xmlSpace="preserve"
  >
    <G>
      <G>
        <G id="circle_copy_4_9_">
          <G>
            <Path d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M44,33H33v11h-2V33H20v-2h11V20h2v11h11 V33z" />
          </G>
        </G>
      </G>
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
    </TouchableOpacity>
        );
    }

}

