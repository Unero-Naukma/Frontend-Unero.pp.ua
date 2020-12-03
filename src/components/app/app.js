import React from 'react';

import {Route, Switch} from 'react-router-dom';

import {
  HomePage,
  ShopPage,
  LoginPage,
  CartPage,
  MyProfilePage,
  WishlistPage,
  MyProfileOrdersPage,
  MyProfileShippingPage,
  MyProfileAccountDetailsPage,
  CollectionsPage,
  CollectionTemplate
} from '../pages';

import AppHeader from '../appHeader';
import AppFooter from '../appFooter';

import Checkout from '../checkout';
import Product from '../product';

const App = () => {

  return (
    <div className="app">
      <AppHeader/>
      <Switch>
        <Route path="/home" exact component={HomePage}/>
        <Route path="/my-profile" component={MyProfilePage}/>
        <Route path="/my-profile-orders-history" component={MyProfileOrdersPage}/>
        <Route path="/my-profile-shipping-address" component={MyProfileShippingPage}/>
        <Route path="/my-profile-account-details" component={MyProfileAccountDetailsPage}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/wishlist" component={WishlistPage}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/shop" exact component={ShopPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/product-test" component={Product}/>
        <Route path="/collections" exact component={CollectionsPage}/>
        <Route path="/collections/:id" component={CollectionTemplate}/>
         {/*
        <Route path="/shop/:id" component={ProductPage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/contacts" component={ContactsPage}/>
        <Route component={NotFoundPage}/> */}
      </Switch>
      <AppFooter/>
    </div>
  );
};

export default App;
