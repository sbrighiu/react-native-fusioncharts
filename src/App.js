import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import FusionCharts from './FusionCharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: require('../assets/data.json'),
      containerBackgroundColor: 'transparent',
      displayValue: '',
    };

    this.libraryPath = Platform.select({
      ios: require('../assets/fusioncharts.html'),
      android: { uri: 'file:///android_asset/fusioncharts.html' },
    });

    this.onPress = this.onPress.bind(this);
    this.events = {
      dataPlotClick: (eventObj, dataObj) => {
        this.setState({
          displayValue: dataObj.displayValue,
        });
      },
    };
  }

  onPress() {
    this.setState({
      dataFormat: 'xml',
      dataSource: `<chart caption="Top 10 Most Popular Sports in the World"
        subcaption="Based on number of viewers" yaxisname="Number of Viewers" plotgradientcolor=""
        bgcolor="FFFFFF" showplotborder="0" divlinecolor="CCCCCC" showvalues="1" showcanvasborder="0"
        canvasbordercolor="CCCCCC" canvasborderthickness="1" showyaxisvalues="0" showlegend="1"
        showshadow="0" labelsepchar=": " basefontcolor="000000" labeldisplay="AUTO"
        numberscalevalue="1000,1000,1000" numberscaleunit="K,M,B"
        palettecolors="#008ee4,#9b59b6,#6baa01,#e44a00,#f8bd19,#d35400,#bdc3c7,#95a5a6,#34495e,#1abc9c"
        showborder="0"  rotateValues="0" placevaluesInside="0" valueFontColor="#909090" theme="fint">
        <set label="Football" value="3500000000" tooltext="Popular in: {br}Europe{br}Africa{br}Asia{br}Americas" />
        <set label="Cricket" value="4400000000" tooltext="Popular in: {br}India{br}UK{br}Pakistan{br}Australia" />
        <set label="Field Hockey" value="2200000000" tooltext="Popular in: {br}Asia{br}Europe{br}Africa{br}Australia" />
        <set label="Tennis" value="1000000000" color="e44a00" tooltext="Popular in: {br}Europe{br}Americas{br}Asia" />
        <set label="Volleyball" value="900000000" tooltext="Popular in: {br}Asia{br}Europe{br}Americas{br}Australia" />
        <set label="Table Tennis" value="900000000" tooltext="Popular in: {br}Asia{br}Europe{br}Africa{br}Americas" />
        <set label="Baseball" value="500000000" tooltext="Popular in: {br}US{br}Japan{br}Cuba{br}Dominican Republic" />
        <set label="Golf" value="400000000" tooltext="Popular in: {br}US{br}Canada{br}Europe" />
        <set label="Basketball" value="400000000" tooltext="Popular in: {br}US{br}Canada" />
        <set label="American football" value="390000000" tooltext="Popular in:{br}US" />
    </chart>`,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            containerBackgroundColor={this.state.containerBackgroundColor}
            events={this.events}
            libraryPath={this.libraryPath}
          />
        </View>
        <Text style={styles.text}>
          DisplayValue: {this.state.displayValue}
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={this.onPress}
            title="Update Chart Data"
            color="#841584"
            accessibilityLabel="Update the chart data"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    margin: 13,
  },
  chartContainer: {
    height: 200,
  },
});
