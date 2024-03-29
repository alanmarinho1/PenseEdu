
import React from 'react';
import { Drawer } from "react-native-paper";


const DrawerItem = ({icon, label, func}) => {
      
    return(
        <Drawer.Item
        icon={icon}
        label={label}
        onPress={func}
        />
    )  
};
 
 export default DrawerItem;