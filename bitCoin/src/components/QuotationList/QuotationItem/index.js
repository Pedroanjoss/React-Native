import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles"

export default function QuotationItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBitcoin}
                    source={require("../../../img/bitcoin2.png")}
                    />
                    <Text style={styles.dayCotation}>15/07/23</Text>
                </View>
            </View>

                <View style={styles.contextRight}>
                    <Text style={styles.price}>6283637</Text>
                </View>
            
        </View>
    )
}