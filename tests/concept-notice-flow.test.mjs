import test from 'node:test';
import assert from 'node:assert/strict';

/**
 * Mirrors ConceptNotice storage behaviour:
 * dismiss → remount (refresh) stays closed → reopen via sticky "About this sample" → dismiss again.
 */
test('dismiss → remount → reopen → dismiss again', () => {
  const storageKey = 'excalibur-renovations-concept-notice-dismissed-v5';
  const store = new Map();

  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };

  function mount() {
    const dismissed = localStorage.getItem(storageKey) === 'yes';
    return { open: !dismissed };
  }

  function dismiss(state) {
    localStorage.setItem(storageKey, 'yes');
    return { ...state, open: false };
  }

  function reopen(state) {
    return { ...state, open: true };
  }

  let state = mount();
  assert.equal(state.open, true, 'first visit opens modal');

  state = dismiss(state);
  assert.equal(state.open, false);
  assert.equal(localStorage.getItem(storageKey), 'yes');

  // remount / refresh
  state = mount();
  assert.equal(state.open, false, 'after refresh stays dismissed');

  state = reopen(state);
  assert.equal(state.open, true, 'sticky About this sample reopens');

  state = dismiss(state);
  assert.equal(state.open, false, 'dismiss again works');
  assert.equal(localStorage.getItem(storageKey), 'yes');
});
