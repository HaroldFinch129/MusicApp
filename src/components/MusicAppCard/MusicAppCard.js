import React from "react";
import {View, Text,Image} from 'react-native';
import Stock from "./Stock";

const MusicAppCard = ({market}) => {
    return(
        <View>
            <Image
            style={styles.image}
            source={{uri: market.imageURL}}
            />
            <Text>{market.title}</Text>
            <Text>{market.artist}</Text>
            <Text>{market.album}</Text>
            <Stock/>

        </View>
    )
}

export default MusicAppCard;
