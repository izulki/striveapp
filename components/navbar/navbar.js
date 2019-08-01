import React from 'react';
//import SvgUri from 'react-native-svg-uri';
import {
    View,
    Text, 
    StyleSheet,
    Image,
  } from 'react-native';

  import Svg,{
    Path,
} from 'react-native-svg';

const Navbar = () => {
    return (
        <View style={styles.navbarContainer}> 
            <View style={styles.menuContainer}> 
                <Svg height="65%" width="65%" viewBox="-20 -30 100 100" alignSelf="center">
                    <Path d="M4.242 14.425h64.684c2.344 0 4.242-1.933 4.242-4.324 0-2.385-1.898-4.325-4.242-4.325H4.242C1.898 5.776 0 7.716 0 10.101c0 2.392 1.898 4.324 4.242 4.324zm64.684 17.834H4.242C1.898 32.259 0 34.2 0 36.584c0 2.393 1.898 4.325 4.242 4.325h64.684c2.344 0 4.242-1.933 4.242-4.325 0-2.384-1.898-4.325-4.242-4.325zm0 26.483H4.242C1.898 58.742 0 60.683 0 63.067c0 2.393 1.898 4.325 4.242 4.325h64.684c2.344 0 4.242-1.935 4.242-4.325 0-2.384-1.898-4.325-4.242-4.325z"/>
                </Svg>
            </View>
            <View style={styles.titleContainer}> 
            </View>
            <Text style={styles.titleStyle}>Dashboard</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: 'center',
        position: "absolute",
        fontSize: 20,
        fontFamily: "Proxima Nova Bold",
    },

    navbarContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: "#ddd",
        borderRadius: 1,
    },

    menuContainer: {
        flex: 1,
    },

    titleContainer: {
        flex:9,
    }

  });
  
  export default Navbar;