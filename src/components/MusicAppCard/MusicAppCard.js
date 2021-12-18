import React from 'react';
import {View, Text, Image} from 'react-native';
// import Stock from './Stock';
import styles from './MusicAppCard.style';

const MusicAppCard = ({market}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
        //   resizeMode="center"
          style={styles.image}
          source={{uri: market.imageURL}}
        />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{market.title}</Text>
        <View style={styles.content_container}>
        <View style={styles.info_container}>
          <Text>{market.artist}</Text>
          <Text style={styles.year}>{market.year}</Text>
          {/* <Stock /> */}
        </View>
        {market.isSoldOut && (<View style={styles.soldout_container}>
            <Text style={styles.soldout_title}>Tükendi</Text>
        </View>)}

        </View>
      </View>
    </View>
  );
};

export default MusicAppCard;
