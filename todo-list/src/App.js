import React, { Component } from 'react';
import UserList from './UserList';
import {Map, List} from 'immutable';

class App extends Component {
  id = 3;

  state = {
    data: Map({
      input:'',
      users:List([
        Map({
          id:1,
          username: 'junwon'
        }),
        Map({
          id:2,
          username : 'givenone'
        })
      ])
    })
/*


    input: '',
    users: [
      {
        id: 1,
        username: 'velopert'
      },
      {
        id: 2,
        username: 'mjkim'
      }
    ]*/

  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;
    this.setState({
      data : data.set('input', value)
    });
  }

  onButtonClick = (e) => {
    const {data} = this.state;

    this.setState ({

      data: data.set('input', '') /*함수 중첩하여 사용*/
      .update('users', users => users.push(Map({
        id:this.id++,
        username: data.get('input')
      })))
/*      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    }))*/
    })
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { data } = this.state;
    const input = data.get('input');
    const users = data.get('users');

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}





/*import TodoListTemplate from './TodoListTemplate';
import TodoItemList from './TodoItemList';
import Form from './Form'
class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


   handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}
*/

export default App;