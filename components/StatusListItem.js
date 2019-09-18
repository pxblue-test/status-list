import React from 'react';
import { StyleSheet } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, ListItem } from 'react-native-elements';

const StatusListItem = ({ item }) => (
    <ListItem
        containerStyle={item.status === "alarm" ? styles.alarm : styles.normal}
        title={item.name}
        subtitle={item.details}
        leftIcon={{ name: "home" }}
    />
);

const styles = StyleSheet.create({
    normal: {
        borderLeftWidth: 4,
        borderLeftColor: "transparent",
    },
    alarm: {
        borderLeftWidth: 4,
        borderLeftColor: Colors.red[500],
    },
});

export default StatusListItem;