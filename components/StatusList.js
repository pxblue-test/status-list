import React from 'react';
import { FlatList } from 'react-native';
import StatusListItem from './StatusListItem';

class StatusList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.prepareData(),
        }
    }

    prepareData = () => {
        const data = [];
        for (var i = 0; i < 10; i++) {
            data.push(this.createRandomItem(i));
        }
        return data
    }

    createItem = (index, randomStatus) => {
        return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status: randomStatus };
    }

    createRandomItem = () => {
        const int = parseInt((Math.random() * 100) + '', 10);
        const randomStatus = Math.random() >= 0.3 ? "normal" : "alarm";
        return this.createItem(int, randomStatus);
    }
    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => (
                    <StatusListItem item={item} />
                )}
            />
        )
    }
}

export default StatusList;