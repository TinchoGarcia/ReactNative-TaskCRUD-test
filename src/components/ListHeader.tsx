import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const screenHeight = Dimensions.get("screen").height;

export interface ListHeaderProps {
    filterDone: boolean;
    toggleFilter: () => void;
}



export function ListHeader({ filterDone, toggleFilter }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Tareas {filterDone ? "Realizadas" : "A Realizar"}
      </Text>
      <View style ={styles.FilterButtonLocator}>
        <TouchableOpacity 
        onPress={toggleFilter}
        style = {{backgroundColor: filterDone ? 'green' : 'gray',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        }}
        >

            <Text style = {styles.FilterButtonText}> {filterDone ? "O " : "X "}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 20,
        
    },
    
    

    FilterButtonText: {
        color: "white",
        fontSize: 25,
      },
    
    FilterButtonLocator: {
        
        left: 280,
        top: 0,
        
      },

})

export default ListHeader;
