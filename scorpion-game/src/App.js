import './index.css';
import React, { useEffect } from 'react';
import SheetNumber from './Content/SheetNumber/SheetNumber';
import Tittle from './Content/Title/Tittle';
import Boxes from './Content/Boxes/Boxes';
import AppProvider from './Context/Context';
import Navbar from './Content/Navbar/Navbar'

function App() {
    return (
    <>
      <AppProvider>
        {" "}
        <React.StrictMode>
          <Navbar />
          <Tittle />
          <SheetNumber />
          <Boxes />
        </React.StrictMode>
      </AppProvider>
    </>
    )
}

export default App;