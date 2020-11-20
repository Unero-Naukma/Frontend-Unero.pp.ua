import React, {Component} from 'react';

import './style.scss';

export default class HeaderSearchForm extends Component {
  render() {
    return (<form className="main-header__search">
      <input type="search" className="main-header__search-input" name="search" placeholder="Search"/>
      <input type="submit" className="main-header__search-submit-btn" value=""/>
    </form>);
  }
}
