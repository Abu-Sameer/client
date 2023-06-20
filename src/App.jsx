import React from 'react';
import { Provider } from 'react-redux';
import store from './newComponent/store/Store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContact from './newComponent/features/AddContact';
import ContactList from './newComponent/features/ContactList';

function App() {
  return (
    <div className="container d-flex flex-column mt-5">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route index element={<ContactList />} />
            <Route path="list" element={<AddContact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
