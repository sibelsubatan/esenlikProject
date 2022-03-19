import React from "react";
import {View,Image,ScrollView,Dimensions,Text,StyleSheet} from "react-native";
import {wh} from "../helpers";

const width=(Dimensions.get("window").width);
const height=(Dimensions.get("window").height)*.36;

export default class Slider extends React.Component{
    state={
        active:0
    }
    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if(slide!==this.state.active){
            this.setState({active:slide})
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}
                >
                    {
                        this.props.images.map((image,index)=>(
                            <Image key={index}
                                   resizeMode={"contain"}
                                   source={{uri:image}}
                                   style={styles.image}/>
                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        this.props.images.map((i,k)=>(
                            <Text key={k} style={k===this.state.active ? styles.pagingActiveText : styles.pagingText}>
                                ⬤
                            </Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width,height
    },
    image:{
        width:width,height,resizeMode:"contain"
    },
    pagination:{
        flexDirection:"row",
        position:"absolute",bottom:0,alignSelf:"center",justifyContent:"center",alignItems:"center"
    },
    pagingText:{
        color:"#888",margin:3,fontSize:(width/40),textAlign:"center"
    },
    pagingActiveText:{
        color:"#fff",margin:3,fontSize:(width/30),textAlign:"center"
    }
})
