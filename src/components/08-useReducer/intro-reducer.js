const initialState = [
  {
    id: 1,
    todo: "comprar arroz",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "llevar traba",
  done: false,
};

const action = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
