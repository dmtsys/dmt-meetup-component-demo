import './assets/css/global.css';

import { writable } from 'svelte/store';

import { connect } from 'connectome';

import { LogStore } from 'connectome/stores';

const logStore = new LogStore();

// source: https://stackoverflow.com/a/9216488
const log = console.log.bind(console);
console.log = (...args) => {
  logStore.addToLog({ origConsoleLog: log, limit: 5 }, ...args);
  log(...args); // 'BLANKIFY' console.log !
};

const errorStore = writable({ errors: [] });

window.onerror = (msg, file, line, col, error) => {
  errorStore.set({ errors: [msg] });
};

const protocol = 'dmt/meetup-component-demo';
const port = 7780;

const { connected, state } = connect({ protocol, port });

import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    connected,
    state,
    errorStore,
    logStore
  }
});

export default app;
