import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  item: any;
  route: any;
}

export default class ProductDetailScreen extends Component<IProps> {
  render() {
    const details = this.props.route.params;
    const image = details.images[0];

    return (
      <View style={styles.totalMainContainer}>
        <View>
          <View style={styles.navBarContainer}>
            <Text style={styles.navHeading}>Flipkart</Text>
          </View>
          <View style={styles.productsMainContainer}>
            <Text style={styles.productHeading}>Products Details</Text>
          </View>

          <ScrollView>
            <View style={styles.productDetailsContainer}>
              <Image style={styles.thumbnail} source={{uri: image}} />
              <View style={styles.view360Degree}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
                  View in 360
                </Text>
                <Text style={styles.viewBottomText}>
                  Check how this looks from all
                </Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.productDetailTitle}>{details.title}</Text>
                <View style={styles.detailsPriceContainer}>
                  <Text style={styles.itemPrice}>
                    <Text style={styles.productDetailPrice}>Price:</Text> $
                    {details.price}.00
                  </Text>
                  <Text style={styles.itemRating}>
                    Rating: *{details.rating}
                  </Text>
                </View>
                <View
                  style={[
                    styles.productDescriptionContainer,
                    styles.elevation,
                  ]}>
                  <Text style={styles.productDescriptionHeading}>
                    Product Description:
                  </Text>
                  <Text style={styles.productDescriptionText}>
                    {details.description}
                  </Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.viewCardButton}>
                    <Text style={styles.buttonText}>View Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buyNowButton}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  totalMainContainer: {
    height: 820,
    backgroundColor: 'white',
  },
  navBarContainer: {
    padding: 10,
    backgroundColor: '#2973f0',
    height: 60,
  },
  navHeading: {
    paddingTop: 5,
    color: 'white',
    fontSize: 23,
    fontWeight: '500',
  },
  productHeading: {
    padding: 10,
    color: 'white',
    fontSize: 23,
    fontWeight: '500',
  },
  productsMainContainer: {
    backgroundColor: '#f79934',
    marginBottom: 5,
  },
  thumbnail: {
    marginTop: -5,
    borderRadius: 10,
    height: '40%',
    width: '100%',
  },
  productDetailsContainer: {
    height: 1000,
    padding: 5,
  },
  view360Degree: {
    padding: 4,
    marginTop: 10,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2973f0',
  },
  viewBottomText: {
    fontSize: 16,
    color: '#969494',
    fontWeight: '400',
    paddingTop: 5,
  },
  descriptionContainer: {
    height: 400,
  },
  productDetailTitle: {
    color: '#201d1d',
    fontSize: 25,
    padding: 5,
    fontWeight: '500',
  },
  itemPrice: {
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemRating: {
    color: '#f79934',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
  },
  detailsPriceContainer: {
    padding: 5,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productDetailPrice: {
    color: '#201d1d',
    fontSize: 20,
    padding: 5,
    fontWeight: '500',
  },
  productDescriptionContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    height: 150,
    width: '98%',
    marginVertical: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 5,
  },
  productDescriptionHeading: {
    color: '#2973f0',
    fontWeight: '500',
    fontSize: 15,
  },
  productDescriptionText: {
    color: '#5b5353',
    fontWeight: '400',
    fontSize: 15,
  },
  scrollView: {
    flexGrow: 1,
    height: '100%',
  },
  viewCardButton: {
    backgroundColor: '#f79934',
    padding: 10,
    width: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  buyNowButton: {
    backgroundColor: 'green',
    padding: 10,
    width: 100,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
});
