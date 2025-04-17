import React from 'react';
import { Routes } from './src/routes';
import { DataProvider } from './src/data';

export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
