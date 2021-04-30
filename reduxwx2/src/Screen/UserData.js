import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {fetchUserRequest} from '../reducers/FetchAPI/action';
import {connect} from 'react-redux';

class UserData extends Component {
  renderItemComponent = data => (
    <TouchableOpacity>
      <Text>name:{data.item.name}</Text>
      <Text key={data.item.id}>email:{data.item.email}</Text>
    </TouchableOpacity>
  );

  ItemSeparator = () => {
    <View
      style={{
        borderWidth: 1,
        marginHorizontal: 40,
        marginVertical: 10,
        borderColor: '#28527a',
      }}
    />;
  };

  render() {
    //     console.log('-----------------------------------------');
    //    console.log(this.props.data.data);
    //     console.log('-----------------------------------------');

    return (
      <SafeAreaView>
        <View style={{alignItems: 'center', marginBottom: 20, marginTop: 40}}>
          <TouchableOpacity onPress={() => this.props.fetchUserRequest()}>
            <Text style={styles.btnStyle}></Text>
          </TouchableOpacity>
          {/* <Text>HIii {this.props.data.id}</Text>  */}
          <FlatList
            data={this.props.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  console.log('STATE=', state);
  console.log('STATE data=', state.UserApi.data);

  return {
    loading: state.UserApi.loading,
    data: state.UserApi.data,
    error: state.UserApi.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserRequest: () => dispatch(fetchUserRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);

const styles = StyleSheet.create({
  btnStyle: {
    marginBottom: 4,
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    letterSpacing: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#126e82',
    borderRadius: 30,
  },
});
