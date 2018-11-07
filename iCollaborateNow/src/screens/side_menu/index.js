import React, { Component } from "react";
import { View, Text } from "react-native";
import {compose} from 'recompose';

import styles from "./styles";

const SideMenu = ({}) => (
    <View style={styles.container}>
        <Text style={styles.header}>{'Side Menu'}</Text>
    </View>
);

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "home",
		bg: "#C5F442",
	},
  {
    name: "ModalBox",
    route: "Page2",
    icon: "",
    bg: "#00BFFF",
    types: 5
  },
	{
		name: "TabPage",
		route: "TabPage",
		icon: "",
		bg: "#C5F412",
	},
];


export default compose()(SideMenu);