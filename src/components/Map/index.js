import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';

import GoogleMapReact from 'google-map-react';
import Card from '../Card';

import { StyledDiv } from './style.js';

const createMapOptions = maps => ({
  panControl: false,
  disableDefaultUI: true,
  mapTypeControl: false,
  scrollwheel: false,
  zoomControl: true,
  fullscreenControl: false,
  minZoom: 5,
  maxZoom: 20,
  zoom: 11,
  styles: [
    {
      stylers: [{ saturation: -100 }, { gamma: 0.9 }, { lightness: 4 }, { visibility: 'on' }]
    }
  ]
});

const Map = props => (
  <StyledDiv>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDV3J1fH2gnkewyJf_Reo0k-qAmXcMYB_s' }}
      defaultCenter={{
        lat: 62.27,
        lng: 1.34
      }}
      defaultZoom={5}
      options={createMapOptions}
    >
      {props.filteredData.map((item, index) => (
        <Card key={index} lat={item.latitude} lng={item.longitude} item={item} />
      ))}
    </GoogleMapReact>
  </StyledDiv>
);

export default withStyles(theme)(Map);
