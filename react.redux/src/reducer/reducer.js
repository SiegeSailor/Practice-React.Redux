import { combineReducers } from 'redux';
import { PLUS, MINUS } from '../actions/action';


// 先建立預設值
const initVal = {
    val: 0
}

// 建立 reducer。注意 reducer 必須為 pure function，傳入 A 必回 B，無論多少次都不會改變
const counter = (state = initVal, action) => {
    switch(action.type) {
        default:
            return state;
        case PLUS:
            // 回傳第一個值，而第一個值會被後面的覆蓋，越後面優先權越高
            return Object.assign({}, state, {val: state.val + action.val})
        case MINUS:
            // ES6 的 seperate operator 用在 object 有 Object.assign() 一樣的效果
            return {...state, val:state.val - action.val}
    }
}

// 用 combineReducers 打包。這裏用 ES6 的方式，變數名稱直接作為 object 的 key
const counterApp = combineReducers({
    counter
});

export default counterApp;