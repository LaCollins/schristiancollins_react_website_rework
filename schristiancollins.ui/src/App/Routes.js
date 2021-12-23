import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home/Home';
import WhatsNew from '../components/WhatsNew/WhatsNew';
import Talents from '../components/Talents/Talents';
import RecordingsOriginal from '../components/RecordingsOriginal/RecordingsOriginal';
import RecordingsOther from '../components/RecordingsOther/RecordingsOther';
import SheetMusicOther from '../components/SheetMusicOther/SheetMusicOther';
import AboutVirtualInstruments from '../components/VirtualInstruments/AboutVirtualInstruments/AboutVirtualInstruments';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/whatsnew" component={WhatsNew} />
        <Route path="/talents" component={Talents} />
        <Route path="/compositions" component={RecordingsOriginal} />
        <Route path="/performances" component={RecordingsOther} />
        <Route path="/sheetmusic-other" component={SheetMusicOther} />
        <Route path="/soundfonts" component={AboutVirtualInstruments} />
      </Switch>
    );
  }