import React from 'react';
import {Text,FlatList} from 'react-native';

export default class EventList extends React.Component {

  state  = { events : []}

  componentDidMount(){
    this.setState({events : require('../db.json').events});
  }



  render(){
    return(
      <FlatList
        data={this.state.events}
        renderItem= {({item}) => <Text>{item.title}</Text>}
        keyExtractor = {item => item.id}
      />
    );
  }
}
