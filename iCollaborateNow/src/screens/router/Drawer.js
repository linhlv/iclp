import React from "react";
import { DrawerNavigator } from "react-navigation";

import screens from '../index'

const MainDrawerRouter = DrawerNavigator(
  {
    Home: {screen: screens.Home},
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <screens.SideMenu {...props} />
  }
);

export default MainDrawerRouter;
