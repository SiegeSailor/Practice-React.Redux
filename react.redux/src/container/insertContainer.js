import { connect } from "react-redux";
import Insert from '../components/insertPresentational';
import {addTodo} from '../actions/action';

let stringFakeState = "";
// 傳遞 state 至 props 的 function, 通常命名為 mapStateToProps
const mapStateToProps = (state) => {
    const handler = (string) => {
        state.todo.string = string;
        stringFakeState = string;
      }

    return {
      string: state.todo.string,
      // counter 是 reducer 的名稱，也就是說 reducer 是 state tree 的分支點。
      // key 值的 value，就是接收的 props 的名稱
      handler: handler
    }
  }

  // 與上面一樣，但這是傳遞 dispatch 的版本
const mapDispatchToProps = (dispatch) => {
    return {
      addTodoEvent: () => {
          dispatch(addTodo(stringFakeState))
        }
      // 同樣的，key 值就是接收的 props 的名稱
    }
  }
  
  // 連結的關鍵，使用 connect() 串起前兩個 function，最後帶入的參數則是要連結的元件。
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Insert);