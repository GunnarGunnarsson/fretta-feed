import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import StyledDialog from './style.js';

const Card = props => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleClickOpen = () => {
    setCardOpen(true);
  };

  const handleClose = () => {
    setCardOpen(false);
  };

  return (
    <div>
      <Fab size="small" color="secondary" onClick={handleClickOpen}>
        <span>1</span>
      </Fab>
      <StyledDialog classes={{ paper: 'paper' }} onClose={handleClose} open={cardOpen} maxWidth={'xs'}>
        <DialogTitle variant="overline" classes={{ root: 'root-title' }}>
          {props.item.name}
        </DialogTitle>
        <DialogContent classes={{ root: 'root-content' }}>
          <Typography variant="caption">{props.item.address}</Typography>
          <Typography variant="caption">{props.item.postalCode + ', ' + props.item.city}</Typography>
          <Typography variant="caption">{props.item.country}</Typography>
          <Typography>Focus</Typography>
          <Typography variant="caption">{'- ' + props.item.mainFocus}</Typography>
          <Typography>University/Research Center</Typography>
          {props.item.researchCenters &&
            props.item.researchCenters.map((item, index) => (
              <Typography key={index} variant="caption">
                {'- ' + item}
              </Typography>
            ))}
          <Typography>Incubator</Typography>
          {props.item.incubators.map((item, index) => (
            <Typography key={index} variant="caption">
              {'- ' + item}
            </Typography>
          ))}
          <Typography>Website</Typography>
          <Typography variant="caption">
            <Link href={props.item.websiteLink} color="error">
              {props.item.websiteLink + ' '}
            </Link>
          </Typography>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default Card;
