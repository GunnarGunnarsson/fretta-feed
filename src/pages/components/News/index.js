import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const ExpansionPanel = withStyles({
  root: {
    "border": '1px solid rgba(0, 0, 0, .125)',
    "boxShadow": 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    "backgroundColor": 'rgba(0, 0, 0, .03)',
    "borderBottom": '1px solid rgba(0, 0, 0, .125)',
    "marginBottom": -1,
    "minHeight": 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
  }
}))(MuiExpansionPanelDetails);

const News = ({ articles }) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  if (Object.keys(articles).length !== 0 && articles.constructor === Object) {
    return (
      <div>
        {articles.items.map(function (article, index) {
          return (
            <ExpansionPanel key={index} square expanded={expanded === index} onChange={handleChange(index)}>
              <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>{article.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {article.content}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps
)(News);
