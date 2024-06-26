import React, { useState } from 'react';
import './App.css';
import LangContext from "../contexts/LangContext";
import { api } from '../utils/api';
import { jsonToText } from '../utils/utils';

const QuestionnaireForm = () => {

  const lang = React.useContext(LangContext);

  const [formData, setFormData] = useState({
    objective: '',
    height: '',
    age: '',
    weight: '',
    mealsPerDay: '',
    desiredMealsPerDay: '',
    muscleJointPain: '',
    workoutsPerWeek: '',
    workoutTimePerDay: '',
    currentOrPastSports: '',
    trainingLevel: '',
    favoriteFoods: '',
    indispensableFoods: '',
    dislikedFoods: '',
    intoleranceAllergy: '',
    waterPerDay: '',
    sleepPerDay: '',
    coffeePerDay: '',
    alcoholUse: '',
    trainingLocation: '',
    breakfastType: '',
    preferredTrainingTimes: '',
    occupation: '',
    extraIntegration: '',
  });

  const [page, setPage] = useState(0);
  const [isPopupVisible, setPopupVisible] = useState(false); // Estado para controlar la visibilidad del popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    api.saveForm(jsonToText(formData)).then(() => {
      setPopupVisible(true); // Mostrar el popup cuando el formulario se envíe con éxito
    });
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <>
            <label>
              {lang.translate('form.name')}:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              {lang.translate('form.email')}:
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              {lang.translate('form.objective')}:
              <input type="text" name="objective" value={formData.objective} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.height')}:
              <input type="text" name="height" value={formData.height} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.age')}:
              <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.weight')}:
              <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 1:
        return (
          <>
            <label>
              {lang.translate('form.mealsPerDay')}:
              <input type="text" name="mealsPerDay" value={formData.mealsPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.desiredMealsPerDay')}:
              <input type="text" name="desiredMealsPerDay" value={formData.desiredMealsPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.muscleJointPain')}:
              <input type="text" name="muscleJointPain" value={formData.muscleJointPain} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.workoutsPerWeek')}:
              <input type="text" name="workoutsPerWeek" value={formData.workoutsPerWeek} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 2:
        return (
          <>
            <label>
              {lang.translate('form.workoutTimePerDay')}:
              <input type="text" name="workoutTimePerDay" value={formData.workoutTimePerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.currentOrPastSports')}:
              <input type="text" name="currentOrPastSports" value={formData.currentOrPastSports} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.trainingLevel')}:
              <input type="text" name="trainingLevel" value={formData.trainingLevel} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.favoriteFoods')}:
              <input type="text" name="favoriteFoods" value={formData.favoriteFoods} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 3:
        return (
          <>
            <label>
              {lang.translate('form.indispensableFoods')}:
              <input type="text" name="indispensableFoods" value={formData.indispensableFoods} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.dislikedFoods')}:
              <input type="text" name="dislikedFoods" value={formData.dislikedFoods} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.intoleranceAllergy')}:
              <input type="text" name="intoleranceAllergy" value={formData.intoleranceAllergy} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.waterPerDay')}:
              <input type="text" name="waterPerDay" value={formData.waterPerDay} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 4:
        return (
          <>
            <label>
              {lang.translate('form.sleepPerDay')}:
              <input type="text" name="sleepPerDay" value={formData.sleepPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.coffeePerDay')}:
              <input type="text" name="coffeePerDay" value={formData.coffeePerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.alcoholUse')}:
              <input type="text" name="alcoholUse" value={formData.alcoholUse} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.trainingLocation')}:
              <input type="text" name="trainingLocation" value={formData.trainingLocation} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.breakfastType')}:
              <input type="text" name="breakfastType" value={formData.breakfastType} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.preferredTrainingTimes')}:
              <input type="text" name="preferredTrainingTimes" value={formData.preferredTrainingTimes} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.occupation')}:
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
            </label>
            <br />
            <label>
              {lang.translate('form.extraIntegration')}:
              <input type="text" name="extraIntegration" value={formData.extraIntegration} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderPage()}
        <br />
        {page > 0 && <button type="button" onClick={prevPage}>Precedente</button>}
        {page < 4 && <button type="button" onClick={nextPage}>Prossimo</button>}
        {page === 4 && <button type="submit">Invia</button>}
      </form>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>{lang.translate('form.successMessage')}</h2>
            <button onClick={() => setPopupVisible(false)}>{lang.translate('form.closePopup')}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireForm;

/*import React, { useState } from 'react';
import './App.css';
import LangContext from "../contexts/LangContext";
import { api } from '../utils/api';
import { jsonToText } from '../utils/utils';

const QuestionnaireForm = () => {

  const lang = React.useContext(LangContext);

  const [formData, setFormData] = useState({
    objective: '',
    height: '',
    age: '',
    weight: '',
    mealsPerDay: '',
    desiredMealsPerDay: '',
    muscleJointPain: '',
    workoutsPerWeek: '',
    workoutTimePerDay: '',
    currentOrPastSports: '',
    trainingLevel: '',
    favoriteFoods: '',
    indispensableFoods: '',
    dislikedFoods: '',
    intoleranceAllergy: '',
    waterPerDay: '',
    sleepPerDay: '',
    coffeePerDay: '',
    alcoholUse: '',
    trainingLocation: '',
    breakfastType: '',
    preferredTrainingTimes: '',
    occupation: '',
    extraIntegration: '',
  });

  const [page, setPage] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    api.saveForm(jsonToText(formData)).then(() => {

    });
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <>
          <label>

          </label>
          <label>
          {lang.translate('form.name')}:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
          {lang.translate('form.email')}:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </label>
            <label>
              {lang.translate('form.objective')}:
              <input type="text" name="objective" value={formData.objective} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.height')}:
              <input type="text" name="height" value={formData.height} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.age')}:
              <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.weight')}:
              <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 1:
        return (
          <>
            <label>
            {lang.translate('form.mealsPerDay')}:
              <input type="text" name="mealsPerDay" value={formData.mealsPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.desiredMealsPerDay')}:
              <input type="text" name="desiredMealsPerDay" value={formData.desiredMealsPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.muscleJointPain')}:
              <input type="text" name="muscleJointPain" value={formData.muscleJointPain} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.workoutsPerWeek')}:
              <input type="text" name="workoutsPerWeek" value={formData.workoutsPerWeek} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 2:
        return (
          <>
            <label>
            {lang.translate('form.workoutTimePerDay')}:
              <input type="text" name="workoutTimePerDay" value={formData.workoutTimePerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.currentOrPastSports')}:
              <input type="text" name="currentOrPastSports" value={formData.currentOrPastSports} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.trainingLevel')}:
              <input type="text" name="trainingLevel" value={formData.trainingLevel} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.favoriteFoods')}:
              <input type="text" name="favoriteFoods" value={formData.favoriteFoods} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 3:
        return (
          <>
            <label>
            {lang.translate('form.indispensableFoods')}:
              <input type="text" name="indispensableFoods" value={formData.indispensableFoods} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.dislikedFoods')}:
              <input type="text" name="dislikedFoods" value={formData.dislikedFoods} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.intoleranceAllergy')}:
              <input type="text" name="intoleranceAllergy" value={formData.intoleranceAllergy} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.waterPerDay')}:
              <input type="text" name="waterPerDay" value={formData.waterPerDay} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      case 4:
        return (
          <>
            <label>
            {lang.translate('form.sleepPerDay')}:
              <input type="text" name="sleepPerDay" value={formData.sleepPerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.coffeePerDay')}:
              <input type="text" name="coffeePerDay" value={formData.coffeePerDay} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.alcoholUse')}:
              <input type="text" name="alcoholUse" value={formData.alcoholUse} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.trainingLocation')}:
              <input type="text" name="trainingLocation" value={formData.trainingLocation} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.breakfastType')}:
              <input type="text" name="breakfastType" value={formData.breakfastType} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.preferredTrainingTimes')}:
              <input type="text" name="preferredTrainingTimes" value={formData.preferredTrainingTimes} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.occupation')}:
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
            </label>
            <br />
            <label>
            {lang.translate('form.extraIntegration')}:
              <input type="text" name="extraIntegration" value={formData.extraIntegration} onChange={handleChange} />
            </label>
            <br />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderPage()}
      <br />
      {page > 0 && <button type="button" onClick={prevPage}>Precedente</button>}
   
      {page < 4 && <button type="button" onClick={nextPage}>Prossimo</button>}

      {page === 4 && <button type="submit">Invia</button>}
    </form>
  );
};

export default QuestionnaireForm;*/
