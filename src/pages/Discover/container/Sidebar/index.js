import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import SearchInput from '../../components/SearchInput';
import MenuDropDown from '../../components/MenuDropDown';
import Brand from '../../../../components/Brand';
import StyledList from './style';

const Sidebar = props => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenuValueFocus, setSelectedMenuValueFocus] = useState('');
  const [selectedMenuValueCountry, setSelectedMenuValueCountry] = useState('');
  const [selectedMenuValueCluster, setSelectedMenuValueCluster] = useState('');

  const handleDrawerToggle = event => {
    event.preventDefault();
    setMobileOpen(!mobileOpen);
  };

  const handleClearInputValues = () => {
    props.handleClearInputValues();
    setSelectedMenuValueFocus('');
    setSelectedMenuValueCountry('');
    setSelectedMenuValueCluster('');
  };

  const handleSelectedMenuValue = (item, type) => {
    if (type === 'Focus') {
      setSelectedMenuValueFocus(item);
      setSelectedMenuValueCountry('');
      setSelectedMenuValueCluster('');
    } else if (type === 'Country') {
      setSelectedMenuValueCountry(item);
      setSelectedMenuValueCluster('');
    } else if (type === 'Cluster') {
      setSelectedMenuValueCluster(item);
    }
  };

  const handleInputValueDelete = item => {
    props.handleInputValueDelete(item);
  };

  return (
    <nav>
      <Hidden smUp implementation="css">
        <Drawer variant="temporary" anchor={'left'} open={mobileOpen} onClose={handleDrawerToggle}>
          <SearchInput />
          <MenuDropDown />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          <List>
            <ListItem>
              <Brand width={'7.813em'} height={'2.644em'} />
            </ListItem>
          </List>
          <StyledList>
            <ListItem>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                  <SearchInput
                    value={props.value}
                    onSubmit={props.handleSubmit}
                    inputValuesMenu={props.inputValuesMenu}
                    handleInputChange={props.handleInputChange}
                  />
                </Grid>
                <Grid item xs={2} classes={{ item: 'root-grid-item' }}>
                  <Tooltip
                    title="To find a desired cluster; You can search for one or multiple keywords.
                    Alternatively you can use the filter categories below."
                    placement="right"
                  >
                    <Info classes={{ root: 'root-info' }} />
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItem>
            <Grid container align={'center'} spacing={16}>
              {props.inputValues.map((item, i) => (
                <Grid key={i} xs={6} item>
                  <Chip
                    key={i}
                    label={item.name}
                    classes={{ root: 'root-chip' }}
                    onDelete={() => handleInputValueDelete(item)}
                    variant={'outlined'}
                  />
                </Grid>
              ))}
            </Grid>
            <ListItem>
              {props.inputValues.length ? (
                <Button onClick={handleClearInputValues} classes={{ root: 'root' }} size="small">
                  Clear
                </Button>
              ) : (
                ''
              )}
            </ListItem>
            <ListItem>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                  <Typography classes={{ root: 'root' }}>or search by</Typography>
                </Grid>
                <Grid item xs={2} classes={{ item: 'root-grid-item' }} />
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                  <MenuDropDown
                    type={'Focus'}
                    value={props.value}
                    inputValues={props.inputValues}
                    selectedMenuValue={selectedMenuValueFocus}
                    selectedData={props.focusData}
                    handleFocusSelected={props.handleFocusSelected}
                    handleSelectedMenuValue={handleSelectedMenuValue}
                  />
                </Grid>
                <Grid item xs={2} classes={{ item: 'root-grid-item' }}>
                  <Tooltip
                    title="You can narrow down your search by choosing one or multiple
                    tags for each category. Simply select one or more tags and the map will update."
                    placement="right"
                  >
                    <Info classes={{ root: 'root-info' }} />
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItem>
            {selectedMenuValueFocus && (
              <ListItem>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Grid item xs={10}>
                    <MenuDropDown
                      type={'Country'}
                      value={props.value}
                      inputValues={props.inputValues}
                      selectedMenuValue={selectedMenuValueCountry}
                      selectedData={props.countryData}
                      handleCountrySelected={props.handleCountrySelected}
                      handleSelectedMenuValue={handleSelectedMenuValue}
                    />
                  </Grid>
                  <Grid item xs={2} classes={{ item: 'root-grid-item' }} />
                </Grid>
              </ListItem>
            )}
            {selectedMenuValueCountry && (
              <ListItem>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Grid item xs={10}>
                    <MenuDropDown
                      type={'Cluster'}
                      value={props.value}
                      inputValues={props.inputValues}
                      selectedMenuValue={selectedMenuValueCluster}
                      selectedData={props.clusterData}
                      handleClusterSelected={props.handleClusterSelected}
                      handleSelectedMenuValue={handleSelectedMenuValue}
                    />
                  </Grid>
                  <Grid item xs={2} classes={{ item: 'root-grid-item' }} />
                </Grid>
              </ListItem>
            )}
            <ListItem>
              {selectedMenuValueFocus && (
                <Button onClick={handleClearInputValues} classes={{ root: 'root' }} size="small">
                  Clear
                </Button>
              )}
            </ListItem>
          </StyledList>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
