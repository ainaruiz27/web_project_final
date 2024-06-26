import React from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../contexts/LangContext';

import Card from './Card';

const Presentation = ({ exercises }) => {

  const lang = React.useContext(LangContext);



  return (
    <section className='content'>
      <div className=''>
        {exercises.map((item, index) => {
          console.log(item.description);
          return <Card key={index} title={item.name} content={item.description} />
        })}
      </div>
      <div className="presentation">
        <h2>
          {lang.translate('hello')}
        </h2>

        <h1> {lang.translate('presentation.title')}</h1>
        <h2>UNA FORMA MIGLIORE PER UNA VITA MIGLIORE</h2>
        <p>
          Con oltre 6 anni di esperienza nel settore del fitness, ho aiutato tante persone a trasformare le loro vite, perdendo quei chili di troppo e scolpendo i muscoli dei loro sogni. E tu che cosa aspetti?
        </p>
        <p>
          Basta con le illusioni e le promesse. Hai provato le mode, gli escamotages e le promesse non mantenute, solo per trovarti di nuovo al punto di partenza.
        </p>
        <p>
          È ora di cambiare – un cambiamento basato su metodi comprovati e guida personalizzata.
        </p>
        <h3>COSA PUOI ASPETTARTI DAL MIO PROGRAMMA DI COACHING?</h3>
        <p>
          Nel mio programma di coaching, metto a disposizione una serie completa di servizi progettati per guidarti verso il tuo obiettivo di fitness. Sono qui per affiancarti in ogni fase del percorso, assicurando che tu ottenga risultati tangibili e duraturi.
        </p>
        <h4>ALIMENTAZIONE PERSONALIZZATA:</h4>
        <p>
          Che tu stia cercando di guadagnare massa muscolare, definirti o rielaborare la tua composizione corporea, lavoreremo insieme per creare un piano alimentare su misura. I pasti saranno flessibili e semplici da preparare, sia che tu sia a casa o fuori.
        </p>
        <h4>ALLENAMENTO PERSONALIZZATO:</h4>
        <p>
          I piani di allenamento saranno adattati alle attrezzature che hai a disposizione o potremo sviluppare allenamenti a corpo libero. L'obiettivo è massimizzare il tuo potenziale e adattare il programma alle tue esigenze in continua evoluzione.
        </p>
        <h4>CHECK OGNI 2 SETTIMANE:</h4>
        <p>
          Per assicurare che stai facendo progressi tangibili, eseguiamo controlli regolari del tuo stato. Questi checkpoint consentono di adattare il piano di allenamento e alimentazione per ottimizzare i risultati.
        </p>
        <h4>CONSIGLI SULLE INTEGRAZIONI:</h4>
        <p>
          In base alla tua condizione fisica e ai tuoi obiettivi, ti fornirò consigli sulle integrazioni per massimizzare i risultati del tuo programma.
        </p>
        <h4>SUPPORTO VIA CHAT PRIVATA:</h4>
        <p>
          La tua trasformazione non si ferma quando esci dalla palestra. Sarò a tua disposizione 7 giorni su 7 tramite chat privata, per rispondere alle tue domande, fornire supporto emotivo e anche correggere i tuoi esercizi tramite video.
        </p>
        <h3>PRONTO A INIZIARE IL TUO PERCORSO PERSONALIZZATO?</h3>
        <p>Contattami per una consulenza gratuita.</p>
        <Link to="/contact">VOGLIO INIZIARE</Link>
      </div>
    </section>
  );
};

export default Presentation;

/*import React from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../contexts/LangContext';

import Card from './Card';

const Presentation = ({ exercises }) => {

  const lang = React.useContext(LangContext);

  return (
    <section className='content'>
      <div className=''>
        {exercises.map((item, index) => {
          console.log(item.description);
          return <Card key={index} title={item.name} content={item.description} />
        })}
      </div>
      <div className="presentation">
        <h2>
          {lang.translate('hello')}
        </h2>
     
        <h1> {lang.translate('presentation.title')}</h1>
        <h2>{lang.translate('presentation.subtitle')}</h2>
        <p>
          {lang.translate('presentation.intro1')}
        </p>
        <p>
          {lang.translate('presentation.intro2')}
        </p>
        <p>
          {lang.translate('presentation.intro3')}
        </p>
        <h3>{lang.translate('presentation.expectations')}</h3>
        <p>
          {lang.translate('presentation.expectations_detail')}
        </p>
        <h4>{lang.translate('presentation.nutrition')}</h4>
        <p>
          {lang.translate('presentation.nutrition_detail')}
        </p>
        <h4>{lang.translate('presentation.training')}</h4>
        <p>
          {lang.translate('presentation.training_detail')}
        </p>
        <h4>{lang.translate('presentation.check')}</h4>
        <p>
          {lang.translate('presentation.check_detail')}
        </p>
        <h4>{lang.translate('presentation.supplements')}</h4>
        <p>
          {lang.translate('presentation.supplements_detail')}
        </p>
        <h4>{lang.translate('presentation.support')}</h4>
        <p>
          {lang.translate('presentation.support_detail')}
        </p>
        <h3>{lang.translate('presentation.ready')}</h3>
        <p>{lang.translate('presentation.contact')}</p>
        <Link to="/contact">{lang.translate('presentation.cta')}</Link>
      </div>
    </section>
  );
};

export default Presentation;*/
