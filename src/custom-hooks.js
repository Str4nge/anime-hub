import { useReducer, useEffect, useState } from 'react';

function stateReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, { data: action.resourceID, type: action.val }];
    }
    case 'REMOVE': {
      return prevState.filter(({ data }) => {
        return data !== action.resourceID;
      });
    }

    default: {
      return prevState;
    }
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useStarred(key = 'starred') {
  return usePersistedReducer(stateReducer, [], key);
}

export function usePersistedQuery(key = 'lastInput') {
  const [input, setInput] = useState(() => {
    const lastInput = sessionStorage.getItem(key);

    return lastInput ? JSON.parse(lastInput) : '';
  });

  const setPersistedInput = newInput => {
    setInput(newInput);
    sessionStorage.setItem(key, JSON.stringify(newInput));
  };
  return [input, setPersistedInput];
}
