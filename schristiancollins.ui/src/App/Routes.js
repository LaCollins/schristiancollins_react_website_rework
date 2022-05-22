import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home/Home';
import WhatsNew from '../components/WhatsNew/WhatsNew';
import Talents from '../components/Talents/Talents';
import RecordingsOriginal from '../components/RecordingsOriginal/RecordingsOriginal';
import RecordingsOther from '../components/RecordingsOther/RecordingsOther';
import SheetMusicOther from '../components/SheetMusicOther/SheetMusicOther';
import AboutVirtualInstruments from '../components/VirtualInstruments/AboutVirtualInstruments/AboutVirtualInstruments';
import AboutGeneralUserGS from '../components/VirtualInstruments/AboutGeneralUserGS/AboutGeneralUserGS';
import GuitarAndBass from '../components/VirtualInstruments/GutarAndBass/GutarAndBass';
import Orchestral from '../components/VirtualInstruments/Orchestral/Orchestral';
import Percussion from '../components/VirtualInstruments/Percussion/Percussion';
import Virtue from '../components/VirtualInstruments/Virtue/Virtue';
import Misc from '../components/VirtualInstruments/Misc/Misc';
import Obsolete from '../components/VirtualInstruments/Obsolete/Obsolete';
import ContactForm from '../components/Contact/Contact';

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
        <Route path="/generaluser" component={AboutGeneralUserGS} />
        <Route path="/guitarandbass" component={GuitarAndBass} />
        <Route path="/orchestral" component={Orchestral} />
        <Route path="/percussion" component={Percussion} />
        <Route path="/virtue" component={Virtue} />
        <Route path="/misc" component={Misc} />
        <Route path="/obsolete" component={Obsolete} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/generaluser.php" component={AboutGeneralUserGS} />
      </Switch>
    );
  }