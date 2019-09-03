import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme';
import { StyledContainer, StyledList, StyledCloseButton } from './style.js';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import DrawerItem from '../DrawerItem';
//import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const Drawer = ({ setClose }) => (
  <StyledContainer container>
    <StyledCloseButton elevation={16} onClick={setClose}>
      <CloseIcon />
    </StyledCloseButton>
    <StyledList>
      <ListItem button component="a" href={'/search'} onClick={setClose}>
        <DrawerItem title={'Search'} description={'The Nordic Mapping Tool'} />
      </ListItem>
      <ListItem button component="a" href={'/#about'} onClick={setClose}>
        <DrawerItem title={'About'} description={'Read about the Organization'} />
      </ListItem>
      <ListItem button component="a" href={'/#contact'} onClick={setClose}>
        <DrawerItem title={'Contact'} description={'Inquire for more info'} />
      </ListItem>
      <ListItem button component="a" href={'https://www.nordicban.net/'} onClick={setClose}>
        <DrawerItem title={'NordicBAN'} description={'Our Parent Organization'} />
      </ListItem>
    </StyledList>
  </StyledContainer>
);

Drawer.propTypes = {
  setClose: PropTypes.func
};

export default withStyles(theme)(Drawer);
