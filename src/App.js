import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import './style.css';


const ITEM_HEIGHT = 48;

class StatusList extends React.Component {
  constructor(props) {
    super(props);
    let list = [];
    /*
    Here we manually create the elements in the list using createItem(). Using onAddItem() would lead to an error ("cannot call setState on an unmounted component"). In the constructor, the component has not yet finished mounting, so we are unable to modify the state via setState (it hasn't been initialized yet). The details of the setState call also include a re-render of the component, which cannot happen if the component has not finished initializing. So we have to directly instantiate the value of the list in the constructor. 
    */
    for (var i = 0; i < 10; i++) {
      list.push(this.createRandomItem(i));
    }
    this.state = {
      list: list,
    }

  }

  createItem(index, randomStatus) {
    return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status : randomStatus };
  }
  createRandomItem() {
    const int = parseInt((Math.random() * 100) + '', 10);
    const randomStatus  = Math.random() >= 0.3 ? "normal" : "alarm";
    return this.createItem(int, randomStatus);
  }  

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Status List
            </Typography>
            <div style={{ flex: '1 1 0px' }} />
          </Toolbar>
        </AppBar>
        <List >
          {
            this.state.list.map((item, i) => {
              return (
                <ListItem key={'item_' + i} className={item.status==="alarm" ? 'alarm list' : 'list'} onClick={() => this.onSelected(i)}>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary={item.name} secondary={item.details}></ListItemText>
                </ListItem>
              )
            })
          }
        </List>
      </div>
    );
  }
}

export default StatusList;
