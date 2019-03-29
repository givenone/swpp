import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Map, List} from 'immutable';

/*
객체는 Map
배열은 List
설정할땐 set
읽을땐 get
읽은다음에 설정 할 땐 update
내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
일반 자바스크립트 객체로 변환 할 땐 toJS
List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
특정 key 를 지울때 (혹은 List 에서 원소를 지울 때) delete 사용
*/


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
