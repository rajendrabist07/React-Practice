
import React, { useReducer, useState, useEffect, useContext, useRef, useMemo, useCallback, createContext } from 'react'

// ==================== 1️⃣ useState HOOK ====================
export const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (name.trim()) {
            setTodos([...todos, { id: Date.now(), text: name }]);
            setName('');
        }
    };

    return (
        <div className='hooks-card hooks-state'>
            <div className='hooks-header'>
                <h2>🎣 useState - State Management</h2>
                <p>Manage local component state with ease</p>
            </div>
            <div className='hooks-content'>
                <div className='state-counter'>
                    <h3>Counter: {count}</h3>
                    <div className='button-group'>
                        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>➕ Increment</button>
                        <button className='btn btn-secondary' onClick={() => setCount(count - 1)}>➖ Decrement</button>
                        <button className='btn btn-danger' onClick={() => setCount(0)}>🔄 Reset</button>
                    </div>
                </div>
                <div className='input-section'>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Add your first task..."
                        className='modern-input'
                        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    />
                    <button className='btn btn-success' onClick={addTodo}>Add Task</button>
                </div>
                <div className='todos-preview'>
                    <h4>Tasks ({todos.length})</h4>
                    {todos.length > 0 ? (
                        <ul>
                            {todos.map(todo => (
                                <li key={todo.id} className='todo-item'>✓ {todo.text}</li>
                            ))}
                        </ul>
                    ) : <p className='empty-state'>No tasks yet. Add one to get started!</p>}
                </div>
            </div>
        </div>
    );
};

// ==================== 2️⃣ useEffect HOOK ====================
export const UseEffectHook = () => {
    const [data, setData] = useState('Loading...');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData('✨ Data Loaded Successfully! useEffect Hook Works!');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.title = `useEffect - ${toggle ? 'ON' : 'OFF'}`;
    }, [toggle]);

    return (
        <div className='hooks-card hooks-effect'>
            <div className='hooks-header'>
                <h2>🔄 useEffect - Side Effects</h2>
                <p>Manage side effects in functional components</p>
            </div>
            <div className='hooks-content'>
                <div className='effect-display'>
                    <p className='effect-text'>{data}</p>
                </div>
                <div className='toggle-section'>
                    <h4>Toggle Title Change</h4>
                    <div className='toggle-switch'>
                        <input
                            type="checkbox"
                            checked={toggle}
                            onChange={() => setToggle(!toggle)}
                            id='effect-toggle'
                        />
                        <label htmlFor='effect-toggle'>Status: {toggle ? '✓ ON' : '✗ OFF'}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==================== 3️⃣ useContext HOOK ====================
const ThemeContext = createContext();

export const UseContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const UseContextHook = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='hooks-card hooks-context' style={{
            backgroundColor: theme === 'light' ? '#f8f9ff' : '#1a1a2e',
            color: theme === 'light' ? '#333' : '#fff'
        }}>
            <div className='hooks-header'>
                <h2>🌍 useContext - Context API</h2>
                <p>Share state across components without prop drilling</p>
            </div>
            <div className='hooks-content'>
                <div className='context-display'>
                    <h3>Current Theme: <span className='highlight'>{theme.toUpperCase()}</span></h3>
                    <p>Switch theme to update context value globally</p>
                </div>
                <div className='button-group'>
                    <button className='btn btn-primary' onClick={() => setTheme('light')}>☀️ Light Mode</button>
                    <button className='btn btn-dark' onClick={() => setTheme('dark')}>🌙 Dark Mode</button>
                </div>
            </div>
        </div>
    );
};

// ==================== 4️⃣ useRef HOOK ====================
export const UseRefHook = () => {
    const inputRef = useRef(null);
    const [text, setText] = useState('');
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleClear = () => {
        setText('');
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div className='hooks-card hooks-ref'>
            <div className='hooks-header'>
                <h2>📍 useRef - Direct DOM Access</h2>
                <p>Access DOM elements directly without re-renders</p>
            </div>
            <div className='hooks-content'>
                <div className='ref-display'>
                    <h4>Component Renders: <span className='counter-badge'>{renderCount.current}</span></h4>
                    <p className='info-text'>This counter updates without causing re-renders!</p>
                </div>
                <div className='input-section'>
                    <input
                        ref={inputRef}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type something... (useRef input)"
                        className='modern-input'
                    />
                </div>
                <div className='button-group'>
                    <button className='btn btn-primary' onClick={handleFocus}>🎯 Focus Input</button>
                    <button className='btn btn-danger' onClick={handleClear}>🗑️ Clear Input</button>
                </div>
                <p className='text-display'>{text && `You typed: ${text}`}</p>
            </div>
        </div>
    );
};

// ==================== 5️⃣ useMemo HOOK ====================
export const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += i;
        }
        return result + number;
    }, [number]);

    return (
        <div className='hooks-card hooks-memo'>
            <div className='hooks-header'>
                <h2>⚡ useMemo - Performance Optimization</h2>
                <p>Memoize expensive computations</p>
            </div>
            <div className='hooks-content'>
                <div className='memo-display'>
                    <h3>Counter (No Dependency): {count}</h3>
                    <p className='info-text'>This button won't trigger expensive computation</p>
                    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
                        ➕ Increment Count
                    </button>
                </div>
                <div className='memo-display'>
                    <h3>Number (Dependency): {number}</h3>
                    <p className='info-text'>This triggers expensive computation</p>
                    <button className='btn btn-success' onClick={() => setNumber(number + 1)}>
                        ➕ Increment Number
                    </button>
                </div>
                <div className='result-box'>
                    <h4>Memoized Result:</h4>
                    <p className='result'>{expensiveValue.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

// ==================== 6️⃣ useCallback HOOK ====================
export const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const memoizedCallback = useCallback(() => {
        console.log('Callback executed with count:', count);
        alert(`Current count is: ${count}`);
    }, [count]);

    return (
        <div className='hooks-card hooks-callback'>
            <div className='hooks-header'>
                <h2>🔗 useCallback - Function Memoization</h2>
                <p>Prevent unnecessary function recreations</p>
            </div>
            <div className='hooks-content'>
                <div className='callback-display'>
                    <h3>Count: {count}</h3>
                    <div className='button-group'>
                        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
                            ➕ Increment
                        </button>
                        <button className='btn btn-warning' onClick={memoizedCallback}>
                            🎯 Show Alert
                        </button>
                    </div>
                </div>
                <div className='input-section'>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type here... (won't affect callback)"
                        className='modern-input'
                    />
                    <p className='info-text'>Input changes won't regenerate the callback</p>
                </div>
            </div>
        </div>
    );
};

// ==================== 7️⃣ useReducer HOOK ====================
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + (action.payload || 1) };
        case 'DECREMENT':
            return { count: state.count - (action.payload || 1) };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

export const UseReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div className='hooks-card hooks-reducer'>
            <div className='hooks-header'>
                <h2>⚙️ useReducer - Complex State Logic</h2>
                <p>Manage complex state with reducer function</p>
            </div>
            <div className='hooks-content'>
                <div className='reducer-display'>
                    <h1 className='count-display'>{state.count}</h1>
                    <p className='info-text'>Manage state with reducer pattern</p>
                </div>
                <div className='button-group'>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'INCREMENT' })}>
                        ➕ +1
                    </button>
                    <button className='btn btn-success' onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
                        ➕ +5
                    </button>
                    <button className='btn btn-secondary' onClick={() => dispatch({ type: 'DECREMENT' })}>
                        ➖ -1
                    </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type: 'RESET' })}>
                        🔄 Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

// ==================== ADVANCED: TODO APP ====================
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };

        default:
            return state;
    }
}

export function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: 'all'
    });

    const [input, setInput] = useState('');

    const addTodo = useCallback(() => {
        if (input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    }, [input]);

    const getFilteredTodos = useMemo(() => {
        if (state.filter === 'completed') {
            return state.todos.filter(t => t.completed);
        }
        if (state.filter === 'active') {
            return state.todos.filter(t => !t.completed);
        }
        return state.todos;
    }, [state.todos, state.filter]);

    const stats = useMemo(() => ({
        total: state.todos.length,
        completed: state.todos.filter(t => t.completed).length,
        active: state.todos.filter(t => !t.completed).length
    }), [state.todos]);

    return (
        <div className='todo-app-modern'>
            <div className='todo-header'>
                <h1>📝 Pro Todo Manager</h1>
                <p>Built with Advanced React Hooks</p>
            </div>

            <div className='todo-stats'>
                <div className='stat-card'>
                    <span className='stat-number'>{stats.total}</span>
                    <span className='stat-label'>Total Tasks</span>
                </div>
                <div className='stat-card'>
                    <span className='stat-number'>{stats.active}</span>
                    <span className='stat-label'>Active</span>
                </div>
                <div className='stat-card'>
                    <span className='stat-number'>{stats.completed}</span>
                    <span className='stat-label'>Completed</span>
                </div>
            </div>

            <div className='todo-input-section'>
                <input
                    className='todo-modern-input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder='✨ What needs to be done?'
                />
                <button className='btn btn-add' onClick={addTodo}>Add Task ✨</button>
            </div>

            <div className='todo-filters'>
                <button
                    className={`filter-btn ${state.filter === 'all' ? 'active' : ''}`}
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
                >
                    All ({state.todos.length})
                </button>
                <button
                    className={`filter-btn ${state.filter === 'active' ? 'active' : ''}`}
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
                >
                    Active ({stats.active})
                </button>
                <button
                    className={`filter-btn ${state.filter === 'completed' ? 'active' : ''}`}
                    onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
                >
                    Completed ({stats.completed})
                </button>
            </div>

            <div className='todo-list'>
                {getFilteredTodos.length > 0 ? (
                    <ul>
                        {getFilteredTodos.map(todo => (
                            <li key={todo.id} className={`todo-item-modern ${todo.completed ? 'completed' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                                    className='todo-checkbox'
                                />
                                <span className='todo-text'>{todo.text}</span>
                                <button
                                    className='btn btn-delete'
                                    onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                >
                                    🗑️
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className='empty-state-todo'>
                        <p>🎉 All tasks completed! or {state.filter === 'active' ? 'no active tasks' : 'add a new task'}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UseStateHook;
