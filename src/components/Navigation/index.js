import React, { useState } from 'react';
import AppBar from '../AppBar';
import {
  StyledToolbar,
  StyledLeftDiv,
  StyledLeftDivMobile,
  StyledRightDiv,
  StyledLink,
  StyledIconButton,
  StyledSwipeableDrawer
} from './style.js';
import Brand from '../Brand';
import Drawer from '../Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';

const Navigation = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="fixed">
        <StyledToolbar>
          <StyledLeftDiv>
            <Brand width={'127px'} height={'43px'} />
          </StyledLeftDiv>
          <StyledLeftDivMobile>
            <Brand width={'80px'} height={'27px'} />
          </StyledLeftDivMobile>
          <StyledLink
            underline="none"
            href={"/search"}
          >
            {'SEARCH'}
          </StyledLink>
          <StyledLink
            underline="none"
            href={"/#about"}
          >
            {'ABOUT'}
          </StyledLink>
          <StyledLink
            underline="none"
            href={"/#contact"}
          >
            {'CONTACT'}
          </StyledLink>
          <StyledLink
            underline="none"
            href={"https://www.nordicban.net/"}
          >
            {'NordicBAN'}
          </StyledLink>
          <StyledRightDiv />
          <StyledIconButton aria-label="Menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </StyledIconButton>
          <StyledSwipeableDrawer
            anchor="right"
            open={isOpen}
            transitionDuration={500}
            onOpen={() => console.log("open")}
            onClose={() => console.log("close")}
          >
            <Drawer setClose={() => setOpen(false)} />
          </StyledSwipeableDrawer>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(theme)(Navigation);
