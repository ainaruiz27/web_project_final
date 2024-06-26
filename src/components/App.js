import './App.css';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import QuestionnaireForm from './QuestionnaireForm';
import Presentation from './Presentation';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { api } from '../utils/api';
import LangContext from '../contexts/LangContext';

function App() {

  const [exercises, setExercises] = React.useState([]);
  const lang = React.useContext(LangContext);

  const getExercises = (value = 'it') => {
    api.getExercises(value).then(data => {
      console.log(data);
      setExercises(data.results);
    })
  }

  React.useEffect(() => {
    getExercises()
  }, [])

  return (
    <div className="page">
      <Header handleUpdateLanguage={getExercises} />
      <main className='main'>
        <Switch>
          <Route exact path="/">
            <Presentation exercises={exercises} />
          </Route>
          <Route path="/contact">
            <QuestionnaireForm />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;


