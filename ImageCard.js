import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class ImageCard extends React.Component{
  
  render(){

    return( 
      <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}} />
              <Body>
                <Text>Anuj Bidkar</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#c1c1c1",
    alignItems:"center",
    justifyContent:"center",
    fontSize:60
  },
  textAnuj:{
    color:"red",
    fontSize:30
  }
})