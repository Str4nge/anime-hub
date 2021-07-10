import { useReducer, useEffect } from 'react';

function stateReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.resourceID];
    }
    case 'REMOVE': {
      return prevState.filter(id => {
        return id !== action.resourceID;
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

export function useStarred(key = 'anime') {
  return usePersistedReducer(stateReducer, [], key);
}
