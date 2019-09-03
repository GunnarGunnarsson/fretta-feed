/* eslint-disable max-nested-callbacks */
import React, { useState, useEffect } from 'react';
import api from 'services/api/';

import Grid from '@material-ui/core/Grid';
import Sidebar from './container/Sidebar';
import Map from '../../components/Map';

import { useInput } from '../../hooks/input-hook';

const Discover = () => {
  const { value, bind, reset } = useInput('');
  // fetched data cluster
  const [clusterData, setClusterData] = useState([]);
  const [focusData, setFocusData] = useState('');
  const [countryData, setCountryData] = useState('');
  const [filteredCountryDataList, setFilteredCountryDataList] = useState('');

  const [inputValues, setInputValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [focusSelected, setFocusSelected] = useState('');
  const [filteredDataMenuValues, setFilteredDataMenuValues] = useState([]);

  // api function calls
  const fetchClusters = async () => {
    let cluster = api.getAllClusters().then(data => data.map(item => item.data()));
    return cluster;
  };

  const fetchFocus = async () => {
    let focusData = api.getAllFocuses().then(data => data.map(item => item.data()));
    return focusData;
  };

  const fetchCountries = async () => {
    let countriesData = api.getAllCountries().then(data => data.map(item => item.data()));
    return countriesData;
  };

  // filtering function for search input field
  const multiFilter = (arrayOfObjects, filterKeys) => {
    return arrayOfObjects.filter(object => {
      // dynamically validate all filter criteria
      return filterKeys.every(filterKey => {
        return Object.keys(object).find(key => {
          if (object[key] instanceof Array) {
            return object[key].includes(filterKey.name);
          } else {
            return object[key] === filterKey.name;
          }
        });
      });
    });
  };

  // Not the best implementation
  const capitalize = str => {
    return str
      .toLowerCase()
      .split(' ')
      .map(s => {
        if (s === 'ict') {
          return s.toUpperCase();
        } else {
          return s.charAt(0).toUpperCase() + s.substring(1);
        }
      })
      .join(' ');
  };

  const handleClearInputValues = () => {
    setFilteredData(clusterData);
    setInputValues([]);
    setFilteredDataMenuValues([]);
  };

  // Submit handler for input field
  const handleSubmit = evt => {
    evt.preventDefault();
    if (value.length) {
      let inputData = { name: capitalize(value) };
      setInputValues([...inputValues, inputData]);
      reset();
    }
  };

  const handleFocusSelected = param => {
    let clustersMain = [];
    let clustersSecondary = [];
    let mergedClusters = [];
    let countries = [];

    setFocusSelected(param.name);

    clustersMain = clusterData.filter(obj => {
      return obj.mainFocus === param.name;
    });
    clustersSecondary = clusterData.filter(obj => {
      return obj.secondaryFocus.includes(param.name);
    });

    mergedClusters = clustersMain.concat(clustersSecondary);

    setFilteredDataMenuValues(mergedClusters);

    countryData.forEach(element => {
      let found = mergedClusters.some(el => el.country === element.name);
      if (found) countries.push({ name: element.name });
    });

    setFilteredCountryDataList(countries);
  };

  const handleCountrySelected = param => {
    let clustersMain = [];
    let clustersSecondary = [];
    let mergedClusters = [];

    clustersMain = clusterData.filter(obj => {
      return obj.mainFocus === focusSelected && obj.country === param.name;
    });
    clustersSecondary = clusterData.filter(obj => {
      return obj.secondaryFocus.includes(focusSelected) && obj.country === param.name;
    });

    mergedClusters = clustersMain.concat(clustersSecondary);

    setFilteredDataMenuValues(mergedClusters);
  };

  const handleClusterSelected = param => {
    let selectedCluster = filteredDataMenuValues.filter(obj => {
      return obj.name === param.name;
    });
    setFilteredDataMenuValues(selectedCluster);
  };

  const handleInputValueDelete = item => {
    let newInputValues = inputValues.filter(function (obj) {
      return obj.name !== item.name;
    });
    if (newInputValues.length > 0) {
      setInputValues(newInputValues);
    } else {
      setFilteredData(clusterData);
      setInputValues([]);
    }
  };

  useEffect(() => {
    if (filteredData <= 0) {
      fetchClusters().then(result => {
        setClusterData(result);
        setFilteredData(result);
      });
      fetchFocus().then(result => setFocusData(result));
      fetchCountries().then(result => setCountryData(result));
    }
    if (filteredDataMenuValues.length > 0) {
      setFilteredData(filteredDataMenuValues);
    }
    if (inputValues.length > 0) {
      setFilteredData(multiFilter(clusterData, inputValues));
    }
  }, [inputValues, filteredDataMenuValues]);

  return (
    <div>
      <Sidebar
        focusData={focusData}
        countryData={filteredCountryDataList}
        clusterData={filteredData}
        handleSubmit={handleSubmit}
        inputValues={inputValues}
        inputValuesMenu={filteredDataMenuValues}
        handleFocusSelected={handleFocusSelected}
        handleCountrySelected={handleCountrySelected}
        handleClusterSelected={handleClusterSelected}
        handleClearInputValues={handleClearInputValues}
        handleInputValueDelete={handleInputValueDelete}
        {...bind}
      />
      <Grid container>
        <Grid item xs={12}>
          <Map filteredData={filteredData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Discover;
