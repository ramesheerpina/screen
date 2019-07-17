import React, {Component} from 'react'
import {SectionList, ScrollView, View, Text, StyleSheet} from 'react-native'
import styles from './Styles/StylesAccounts'


export default class Accounts extends Component {
  render () {
    return (
      <ScrollView style = {styles.container}>
        <View style = {{borderWidth: 1, flex: 1,}}>
        <Text style = {styles.heading}>
          Tangerine
        </Text>
        </View>

        <View style = {{borderWidth: 1, flex: 1}}>
        <Text style = {[styles.insightsContainer, {fontSize: 20, paddingTop: 20, paddingBottom: 20}]}>
          Left to Spend: 
        </Text>
        <Text style={styles.sectionHeader}>
          What I Have: 
        </Text >
        <Text style={styles.sectionHeader}>
          What I owe
        </Text>
        </View>

        <View style = {{borderWidth: 1}}>
        <SectionList
          sections = {[
            {title: 'Spending', data: ['Chequing', 'Money-Back Credit Card']},
            {title: 'Savings', data : ['Regular Savings','TFSA']},
            {title: 'Investments', data : ['Mutual Funds']},
            {title: 'Borrowing', data : ['Loan', 'Mortagage']},

          ]}
          renderSectionHeader={({section}) => 
          <Text style={styles.sectionHeader}>
            {section.title}
          </Text>}
          renderItem={({item}) => 
          <Text style={styles.item}>
            {item}
          </Text>}
          keyExtractor={(item, index) => index}
        /> 
        </View>

      </ScrollView>
    )
  }
}
