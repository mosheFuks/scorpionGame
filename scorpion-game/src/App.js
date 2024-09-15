import './index.css';
import React, { useEffect } from 'react';
import SheetNumber from './Content/SheetNumber/SheetNumber';
import Tittle from './Content/Title/Tittle';
import Boxes from './Content/Boxes/Boxes';
import AppProvider from './Context/Context';

function App() {
    return (
    <>
      <AppProvider>
        {" "}
        <React.StrictMode>
          <Tittle />
          <SheetNumber />
          <Boxes />
        </React.StrictMode>
      </AppProvider>
    </>
    )
}

export default App;