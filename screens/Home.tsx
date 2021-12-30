import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Divider} from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { ItemType } from "../redux/reducers/cartReducer";

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

const YELP_API_KEY = "cT-0EdxBUnS3EuMWLyJOIfIwCpgvJiyKwJcHZ30U3Ku47C8Cg5axPK5qKFQLTkHiZO8GJWeWtZbgvV0Oht_PfmeHCkdtWeSfnrzIafrFuv798Bl8pVlhr6KWG1e_YXYx";

const Home = ({navigation}: any) => {
    const [restaurantData, setRestaurauntData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    console.log(restaurantData, "restaurantData")

    const getRestaurantFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(json => {
                setRestaurauntData(
                    json.businesses
                    // json.businesses.filter((business: any) => {
                    //     business.transactions.includes(activeTab.toLowerCase())
                    // })
                )
                console.log(json, "data")
            });
    };

    useEffect(() => {
        getRestaurantFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.header}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#eee",
        flex: 1,
    },
    header: {
        backgroundColor: "white",
        padding: 15,
    },

});

export default Home;
