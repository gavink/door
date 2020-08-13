import React from 'react';
import {StyleSheet, View, Image, Button, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    selector: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap'
    },
    item: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'silver',
        padding: 5,
        margin: 5,
        color: 'black',
        backgroundColor: 'white'
    }
});
  
export default function Selector({onItemSelected, items, selected}) {

    const getItemStyle = (item) => {
        if(selected && item.key === selected.key) {
            return {
                ...styles.item,
                borderColor:'green',
                color: 'green'
            }
        } else {
            return styles.item
        }
    }

    return (
        <View style={styles.selector}>
            {
                items && items.map((item, index) => (
                    <TouchableHighlight key={index} onPress={() => onItemSelected && onItemSelected(item)}>
                        <Text style={getItemStyle(item)}>
                            {item.value}
                        </Text>
                    </TouchableHighlight>
                ))
            }
            
        </View>
    )
}