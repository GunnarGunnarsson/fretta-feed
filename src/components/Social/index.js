import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledText } from './style.js';
import Brand from '../Brand';
import Icon from '../Icon';
import FBIcon from '../../../icons/fb.svg';
import TwitterIcon from '../../../icons/tw.svg';
import InstaIcon from '../../../icons/ig.svg';
import LinkedInIcon from '../../../icons/li.svg';
import { StyledLink } from './style.js';

const Social = () => (
  <div>
    <Brand width={'160px'} height={'55px'} />
    <Icon iconLink={'http://www.facebook.com/nordicban'} iconSrc={FBIcon}/>
    <Icon iconLink={'https://www.twitter.com/nordicban'} iconSrc={TwitterIcon}/>
    <Icon iconLink={'https://www.instagram.com/nordicban'} iconSrc={InstaIcon}/>
    <Icon iconLink={'https://www.linkedin.com/groups/8446385'} iconSrc={LinkedInIcon}/>
    <StyledText variant={'body2'}>
      See our <StyledLink href="https://goo.gl/Mg9LNo">Privacy Policy here.</StyledLink>
    </StyledText>
  </div>
);

export default withStyles(theme)(Social);
