import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class ToDoListModal extends Component {

    render() {
        return(
<Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                        <View style={{marginTop: 22}}>
                            <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={this.props.callback}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                            </View>
                        </View>
                 </Modal>
        )
    }


}