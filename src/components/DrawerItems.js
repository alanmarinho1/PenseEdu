import React from 'react';
import { Drawer } from "react-native-paper";


const DrawerItem = ({icon, label, func, navigation, route}) => {
    return(
        <Drawer.Item
        style={{width: 270}}
        icon={icon}
        label={label}
        onPress={func}
        focusable={true}
        />
    )  
};
 
 export default DrawerItem;