import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HooksApp } from './HooksApp';

import './index.css';
// UseState imports
import { CounterApp } from './01-useState/CounterApp';
import { ToggleButton } from './01-useState/ToggleButton';
import { CharacterCounter } from './01-useState/CharacterCounter';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';

// useEffect imports
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

// useRef imports
import { FocusScreen } from './04-useRef/FocusScreen';
import { PreviousValue } from './04-useRef/PreviousValue';

// useLayoutEffect imports
import { Layout } from './05-useLayoutEffect/Layout';

// useMemo imports
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';

// useTareas imports
import { Padre } from './07-tarea-memo/Padre';

// useReducer imports
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

// useContext imports
import { MainApp } from './09-useContext/MainApp';



import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
   {/* <React.StrictMode> */}
    <MainApp />
   {/* </React.StrictMode> */}
  </BrowserRouter>
)
