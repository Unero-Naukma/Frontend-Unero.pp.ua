import React from 'react';
// import {
//   HomePage, ShopPage, ProductPage,
//   CollectionsPage, CollectionPage,
//   AboutUsPage, ContactsPage, WishlistPage,
//   CartPage, LoginPage, MyProfilePage, NotFoundPage
// } from '../pages';
import AppHeader from '../appHeader';
// import AppFooter from '../appFooter';
// import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      {/* <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/shop" exact component={ShopPage}/>
        <Route path="/shop/:id" component={ProductPage}/>
        <Route path="/collections" exact component={CollectionsPage}/>
        <Route path="/collections/:id" component={CollectionPage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/contacts" component={ContactsPage}/>
        <Route path="/wishlist" component={WishlistPage}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/my-profile" component={MyProfilePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <AppFooter/> */}
    </div>
  );
};

export default App;
