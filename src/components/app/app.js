import React from 'react';

import {Route, Switch} from 'react-router-dom';

import {
  HomePage
} from '../pages';

import AppHeader from '../appHeader';
import AppFooter from '../appFooter';

import MyProfile from '../myProfile';
import OrdersHistory from '../myProfileOrdersHistory';
import EditShippingAddress from '../myProfileEditShippingAddress';
import AccountDetails from '../myProfileAccountDetails';
import CartPage from '../cart';
import WishlistPage from '../wishlist';

const App = () => {

  return (
    <div className="app">
      <AppHeader/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/my-profile" component={MyProfile}/>
        <Route path="/my-profile-orders-history" component={OrdersHistory}/>
        <Route path="/my-profile-shipping-address" component={EditShippingAddress}/>
        <Route path="/my-profile-account-details" component={AccountDetails}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/wishlist" component={WishlistPage}/>
        {/* <Route path="/shop" exact component={ShopPage}/>
         <Route path="/shop/:id" component={ProductPage}/>
        <Route path="/collections" exact component={CollectionsPage}/>
        <Route path="/collections/:id" component={CollectionPage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/contacts" component={ContactsPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route component={NotFoundPage}/> */}
      </Switch>
      <AppFooter/>
    </div>
  );
};

export default App;
