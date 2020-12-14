import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import WhatsNew from '../components/WhatsNew/WhatsNew';
import Talents from '../components/Talents/Talents';
import RecordingsOriginal from '../components/RecordingsOriginal/RecordingsOriginal';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/whatsnew" component={WhatsNew} />
        <Route path="/talents" component={Talents} />
        <Route path="/compositions" component={RecordingsOriginal} />
      </Switch>
    );
  }