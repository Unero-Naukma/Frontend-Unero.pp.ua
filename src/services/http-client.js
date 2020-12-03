import axios from 'axios';
import store from '../redux/store';
import api from './api';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://localhost:8080/api/',
  responseType: 'json'
});

instance.interceptors.request.use(
  config => {
    const AUTH_TOKEN = store.getState().user.token;
    if (AUTH_TOKEN) {
      config.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
    }
    return config;
  }, error => Promise.reject(error)
);

function get(path) {
  return instance.get(path);
}

function patch(url, data) {
  return instance.patch(url, data);
}

function post(url, data) {
  return instance.post(url, data);
}

function remove(url, data) {
  return instance.delete(url, data);
}

function put(url, data) {
  return instance.put(url, data);
}

export function login(user) {
  const url = api.login;
  return post(url, {
    ...user
  });
}

export function register(user) {
  const url = api.register;
  return post(url, {
      ...user
  });
}

export function getProducts() {
  const url = api.products;
  return get(url);
}

export function getOptionalProducts(options) {
  const url = api.optionalProduct(options);
  return get(url);
}

export function getProduct(productId) {
  const url = api.product(productId);
  return get(url);
}

export function getCollections() {
  const url = api.collections;
  return get(url);
}

export function getCollection(collectionId) {
  const url = api.collection(collectionId);
  return get(url);
}

export function getCategories() {
  const url = api.categories;
  return get(url);
}

export function search(query) {
  const url = api.search(query);
  return get(url);
}

export function getUser() {
  const url = api.user;
  return get(url);
}

export function refrech() {
  return post(api.refresh, {});
}

export function logout() {
  return remove(api.logout)
}

export function updateUser(user) {
  return patch(api.user, {});
}

/* .... */