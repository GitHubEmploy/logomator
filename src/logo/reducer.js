import * as actionTypes from './actionTypes';
// Inspiration imports
/**
 * One word no tagline
 */
import aerial from '../assets/images/logo-inspirations/Aerial@2x.png';
import aerialWithTagline from '../assets/images/logo-inspirations/Aerial_Consulting@2x.png';

import centurion from '../assets/images/logo-inspirations/Centurion@2x.png';
import centurionWithTagline from '../assets/images/logo-inspirations/Centurion_Financial_Group@2x.png';

import happyFaces from '../assets/images/logo-inspirations/Happy_Faces@2x.png';
import happyFacesWithTagline from '../assets/images/logo-inspirations/Happy_Faces_Child@2x.png';

import socialWine from '../assets/images/logo-inspirations/Social_Wine@2x.png';
import socialWineWithTagline from '../assets/images/logo-inspirations/Social_Wine_Lounge@2x.png';

import darkRoast from '../assets/images/logo-inspirations/Dark_Roast@2x.png';
import darkRoastWithTagline from '../assets/images/logo-inspirations/Dark_Roast_Cafe@2x.png';

import matchBook from '../assets/images/logo-inspirations/Match_Book@2x.png';
import matchBookWithTagline from '../assets/images/logo-inspirations/Match_Book_Studios@2x.png';


import vantagePoint from '../assets/images/logo-inspirations/Vantage_Point@2x.png';
import vantagePointWithTagline from '../assets/images/logo-inspirations/Vantage_Point_Photography@2x.png';

import summerBelleWithTagline from '../assets/images/logo-inspirations/Summer_Belle_Clothing@2x.png';

import honeyBee from '../assets/images/logo-inspirations/Honey_Bee@2x.png';
import honeyBeeWithTagline from '../assets/images/logo-inspirations/Honey_Bee_Sweeten@2x.png';

import smokeHouse from '../assets/images/logo-inspirations/Smokehouse_BBQ@2x.png';
import smokeHouseWithTagline from '../assets/images/logo-inspirations/Smokehouse_BBQ_Restaurant@2x.png';

import charlesPorter from '../assets/images/logo-inspirations/Charles_Porter@2x.png';
import charlesPorterWithTagline from '../assets/images/logo-inspirations/Charles_Porter_Real_Estate@2x.png';

import claireBiddens from '../assets/images/logo-inspirations/Claire_Biddens@2x.png';
import claireBiddensWithTagline from '../assets/images/logo-inspirations/Claire_Biddens_Event@2x.png';

const defaultState = {
  companyName: '',
  tagline: '',
  industry: '',
  companyDescription: '',
  isFetching: false,
  icons: [],
  inspirations: [
      {
        id: 1,
        img: claireBiddens,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 2,
        img: happyFaces,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 3,
        img: aerial,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 4,
        img: socialWine,
        isSelected: false,
        categories: ['oneWordNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 5,
        img: darkRoast,
        isSelected: false,
        categories: ['oneWordNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 6,
        img: matchBook,
        isSelected: false,
        categories: ['oneWordNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 7,
        img: centurion,
        isSelected: false,
        categories: ['oneWordNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 8,
        img: vantagePoint,
        isSelected: false,
        categories: ['oneWordNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 9,
        img: honeyBee,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 10,
        img: charlesPorter,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 11,
        img: smokeHouse,
        isSelected: false,
        categories: ['oneWordNoTagline', 'twoWordsNoTagline', 'threeWordsNoTagline', 'FourPlusWordsNoTagline']
      },
      {
        id: 12,
        img: aerialWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsWithTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 13,
        img: socialWineWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 14,
        img: darkRoastWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 15,
        img: summerBelleWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 16,
        img: centurionWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 17,
        img: matchBookWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 18,
        img: honeyBeeWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'threeWordsWithTagline', 'twoWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 19,
        img: smokeHouseWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsWithTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 20,
        img: vantagePointWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsNoTagline', 'twoWordsWithTagline', 'threeWordsNoTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 21,
        img: charlesPorterWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsWithTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 22,
        img: claireBiddensWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsWithTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      },
      {
        id: 23,
        img: happyFacesWithTagline,
        isSelected: false,
        categories: ['oneWordWithTagline', 'twoWordsWithTagline', 'threeWordsWithTagline', 'FourPlusWordsWithTagline']
      }
  ],
  palettes: [
    {
      "name": "Blues",
      "hexcodes": ["#84C4F5", "#1C87E1", "#0D5DA0", "#073E75"],
      "isSelected": false
    },
    {
      "name": "Aquas",
      "hexcodes": ["#9AD9E1", "#4BB8C3", "#337683", "#1D5463"],
      "isSelected": false
    },

    {
      "name": "Greens",
      "hexcodes": ["#8AB28B", "#5A935C", "#2B742C", "#005502"],
      "isSelected": false
    },
    {
      "name": "Purples",
      "hexcodes": ["#C7A2D9", "#9D5CBE", "#812EAB", "#660099"],
      "isSelected": false
    },
    {
      "name": "Pinks",
      "hexcodes": ["#E79BCB", "#DF73B6", "#D54AA1", "#CC1F8D"],
      "isSelected": false
    },
    {
      "name": "Reds",
      "hexcodes": ["#E98A89", "#E05B59", "#D72C26", "#CE0000"],
      "isSelected": false
    },
    {
      "name": "Oranges",
      "hexcodes": ["#FFB987", "#FF9D54", "#FF811A", "#FF6600"],
      "isSelected": false
    },
    {
      "name": "Yellows",
      "hexcodes": ["#FFE885", "#FFDF4F", "#FFD600", "#FFCD00"],
      "isSelected": false
    },
    {
      "name": "Browns",
      "hexcodes": ["#938A80", "#6F6356", "#4B3C2C", "#352615"],
      "isSelected": false
    },
    {
      "name": "Neutrals",
      "hexcodes": ["#C4C6CC", "#818691", "#484C53", "#1A191C"],
      "isSelected": false
    }
  ],
  concepts: [],
};

const selectInspiration = (state, action) => {
  if (state.id !== action.inspiration.id) {
    return state;
  }

  return Object.assign({}, state, {
    isSelected: !state.isSelected
  });
};

const selectPalette = (state, action) => {
  if (state.name !== action.name) {
    return state;
  }

  return Object.assign({}, state, {
    isSelected: !state.isSelected
  });
};

export function logoReducer (state, action) {
  switch (action.type) {

    case actionTypes.SET_COMPANY_NAME:
      return Object.assign({}, state, {
        companyName: action.name
      });

    case actionTypes.SET_TAGLINE_TEXT:
      return Object.assign({}, state, {
        tagline: action.tagline
      });

    case actionTypes.SET_INDUSTRY_NAME:
      return Object.assign({}, state, {
        industry: action.industry
      });

    case actionTypes.SET_COMPANY_DESCRIPTION:
      return Object.assign({}, state, {
        companyDescription: action.description
      });

    case actionTypes.SELECT_LOGO_INSPIRATION:
      return {
        ...state,
        inspirations: state.inspirations.map(i =>
          selectInspiration(i, action)
        )
      };

    case actionTypes.SELECT_COLOR_PALETTE:
      return {
        ...state,
        palettes: state.palettes.map(p =>
          selectPalette(p, action)
        )
      };

    case actionTypes.REQUEST_ICONS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actionTypes.RECEIVE_ICONS:
      return Object.assign({}, state, {
        isFetching: false,
        icons: action.icons
      });

    case actionTypes.REQUEST_LOGOS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actionTypes.RECEIVE_LOGOS:
      return Object.assign({}, state, {
        isFetching: false,
        concepts: action.concepts
      });

    case actionTypes.REQUEST_MORE_LOGOS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actionTypes.RECEIVED_MORE_LOGOS:
      return Object.assign({}, state, {
        isFetching: false,
        concepts: state.concepts.concat(action.concepts)
      });

    default:
      return defaultState;
  }
}

export default logoReducer;