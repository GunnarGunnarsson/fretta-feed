import React, { useState } from 'react';
import StyledList from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';

const MenuDropDown = props => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOnItem = (item, currentType) => {
    setOpen(!open);
    props.handleSelectedMenuValue(item, currentType);
    if (currentType === 'Focus') {
      let data = { name: item, type: currentType };
      props.handleFocusSelected(data);
    } else if (currentType === 'Country') {
      let data = { name: item, type: currentType };
      props.handleCountrySelected(data);
    } else {
      let data = { name: item, type: currentType };
      props.handleClusterSelected(data);
    }
  };

  return (
    <StyledList component="nav">
      <ListItem button onClick={handleClick} disabled={!!(props.value.length || props.inputValues.length)}>
        <ListItemText primary={props.selectedMenuValue ? props.selectedMenuValue : props.type} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.selectedData &&
            props.selectedData.map((item, i) => (
              <ListItem key={i} button>
                <ListItemText
                  classes={{ primary: 'primary' }}
                  primary={item.name}
                  onClick={() => handleClickOnItem(item.name, props.type)}
                />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </StyledList>
  );
};

MenuDropDown.propTypes = {
  value: PropTypes.string,
  inputValues: PropTypes.array
};

export default MenuDropDown;
