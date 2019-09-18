import React from 'react';
import renderer from 'react-test-renderer';


import StatusListItem from '../StatusListItem';

describe('StatusListItem Tests ', function () {
    it('StatusListItem(Alarm) Renders', () => {
        const item = {
            name: "John",
            details: "John is great",
            status: "alarm",
        }
        const tree = renderer.create(
            <StatusListItem item={item} />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
    it('StatusListItem(Normal) Renders', () => {
        const item = {
            name: "Fire",
            details: "Please go out",
            status: "normal",
        }
        const tree = renderer.create(
            <StatusListItem item={item} />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
});
