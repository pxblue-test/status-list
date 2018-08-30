import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from '@material-ui/core/ListItem';


Enzyme.configure({adapter: new Adapter()});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('puts correct status class on items', () => {
  const app = shallow(<App />);
  let list = app.state().list;

  let i;
  let alarms = [];
  let normal = [];

  for(i = 0; i < list.length; i++){
    if(list[i].status === 'alarm'){
      alarms.push(i);
    }
    else{
      normal.push(i);
    }
  }

  let listItems = app.find('.list');

  for(i = 0; i < alarms.length; i++){
    expect(listItems.at(alarms[i]).hasClass('alarm')).toEqual(true);
  }
  for(i = 0; i < normal.length; i++){
    expect(listItems.at(normal[i]).hasClass('alarm')).toEqual(false);
  }
});