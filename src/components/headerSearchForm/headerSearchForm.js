import React from 'react';

export default class HeaderSearchForm {
  render() {
    return (<form classList="main-header__search">
      <input type="search" classList="main-header__search-input" name="search" placeholder="Search"/>
      <input type="submit" classList="main-header__search-submit-btn" value=""/>
    </form>);
  }
}
