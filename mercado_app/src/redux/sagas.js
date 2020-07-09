import {put, call, takeEvery, select, takeLatest} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {FETCH_PRODUCTS_REQUEST, FILTER_CHANGED} from './actions/types';
import {getProducts} from './reducers';
import {fetchProductsApi} from './actions';
import {
  productsReceived,
  productsFailed,
  filterProducts,
} from './actions/actionCreators';

export function* fetchProductSaga() {
  try {
    const products = yield call(fetchProductsApi);
    yield put(productsReceived(products));
  } catch (error) {
    yield put(productsFailed(error));
  }
}

export function* filterUsersSaga({name}) {
//  yield call(delay, 500);
  const searchName = name.toLowerCase().trim();
  const products = yield select(getProducts);
  const filteredProduct = products.filter((product) =>
  product.name.toLowerCase().includes(searchName),
  );
  yield put(filterProducts(filteredProduct));
}

export default function* rootSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductSaga);
  yield takeLatest(FILTER_CHANGED, filterUsersSaga);
}