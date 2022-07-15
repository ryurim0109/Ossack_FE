import { all, fork } from 'redux-saga/effects';
import { shareSaga } from '../modules/map';

export default function* rootSaga() {
	//console.log("rootSaga");
	yield all([fork(shareSaga)]);
}
