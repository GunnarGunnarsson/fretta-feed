import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@material-ui/icons';
import StyledTextField from './style';
import PropTypes from 'prop-types';

const SearchInput = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <StyledTextField
        placeholder="Enter keyword(s)..."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          )
        }}
        onChange={props.handleInputChange}
        value={props.value}
        disabled={props.inputValuesMenu.length > 0}
      />
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  value: PropTypes.string
};

export default SearchInput;
