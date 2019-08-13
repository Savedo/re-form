import $$observable from 'symbol-observable';

export default function createFormObservable(state: any) {
  let currentState = state;
  let currentListeners: Array<any> = [];
  let nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function getState() {
    return currentState;
  }

  function setState(updateState: any) {
    currentState = Object.assign({}, currentState, updateState);

    const listeners = (currentListeners = nextListeners);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener(currentState);
    }
  }

  function subscribe(listener: any) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    let isSubscribed = true;
    if (currentListeners.some(currentListener => currentListener === listener)) {
      return;
    }

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      const index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = [];
    };
  }

  function observable() {
    const outerSubscribe = subscribe;
    return {
      subscribe(observer: any) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return { unsubscribe };
      },

      // @ts-ignore
      [$$observable]() {
        return this;
      }
    };
  }

  return {
    subscribe,
    getState,
    setState,
    [$$observable]: observable
  };
}
