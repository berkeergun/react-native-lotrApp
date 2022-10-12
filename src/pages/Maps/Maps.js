// import {Image, Dimensions, ScrollView} from 'react-native';
// import ImageZoom from 'react-native-image-pan-zoom';
// import React from 'react';

// const imagePath = require('../../../assets/images/lotrmap.jpg');
// const {width, height} = Image.resolveAssetSource(imagePath);

// const Maps = () => {
//   return (
//     <ImageZoom
//       ref={ref => console.log(ref)}
//       enableSwipeDown={true}
//       swipeDownThreshold={0}
//       cropWidth={Dimensions.get('window').width}
//       cropHeight={Dimensions.get('window').height}
//       imageWidth={width}
//       imageHeight={height}>
//       <Image style={{width, height}} source={imagePath} />
//     </ImageZoom>
//   );
// };

// export default Maps;

// import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
// import React from 'react';
// import styles from './Maps.style';
// import LinearGradient from 'react-native-linear-gradient';

// const Maps = () => {
//   return (
//     <LinearGradient colors={['#e6b856', '#99b051']} style={styles.container}>
//       <ScrollView>
//         <ScrollView horizontal style={{flex: 1}}>
//           <View style={{flex: 1}}>
//             <Image
//               source={require('../../../assets/images/lotrmap.jpg')}
//               style={{
//                 height:
//                   Dimensions.get('window').height +
//                   Dimensions.get('window').height / 3.4,
//               }}
//               resizeMode={'contain'}
//             />
//           </View>
//         </ScrollView>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default Maps;

import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import styles from './Maps.style';
import LinearGradient from 'react-native-linear-gradient';
import ImageZoom from 'react-native-image-pan-zoom';
const imagePath = require('../../../assets/images/lotrmap.jpg');
const {width, height} = Image.resolveAssetSource(imagePath);

const Maps = () => {
  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}
        style={{
          flex: 1,
          // borderWidth:5,
        // transform: [{ rotate: '90deg'}]
        }}>
        <Image
          style={styles.image}
          source={imagePath}
        />
      </ImageZoom>
    </View>
  );
};

export default Maps;
