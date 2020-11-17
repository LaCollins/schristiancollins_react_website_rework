import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import WhatsNew from '../components/WhatsNew/WhatsNew';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/whatsnew" component={WhatsNew} />
      </Switch>
    );
  }