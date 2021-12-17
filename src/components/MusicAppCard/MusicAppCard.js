import React from "react";
import {View, Text,Image} from 'react-native';
import Stock from "./Stock";
import SearchBar from "./SearchBar";
import styles from './MusicAppCard.style';

const MusicAppCard = ({market}) => {
    return(
        <View>
           
            <View>

            <Image
            style={styles.image}
            source={{uri: market.imageURL}}
            />
            </View>
            <Text>{market.title}</Text>
            <Text>{market.artist}</Text>
            <Text>{market.album}</Text>
            <Stock/>

        </View>
    )
}

export default MusicAppCard;
