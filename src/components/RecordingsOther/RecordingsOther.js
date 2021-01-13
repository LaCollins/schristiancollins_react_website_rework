import React from 'react';
import './RecordingsOther.css';
import Divider from '@material-ui/core/Divider';
import DScarlattiSonata from '../../assets/music/D_Scarlatti--Sonata_in_F-minor_K466-(S_C_Collins-piano).mp3';
import RavelMirrors3 from '../../assets/music/Ravel--Miroirs-III_Une_barque_sur_l_ocean-(S_C_Collins-piano).mp3';
import DScarlattiSonataSheetMusic from '../../assets/music/sheet_music/scarlatti/D_Scarlatti--Sonata_K466.pdf';
import RavelMirrors4 from '../../assets/music/Ravel--Miroirs-IV_Alborada_del_gracioso-(S_C_Collins-piano).mp3';
import MessiaenXV from '../../assets/music/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XV-(S_C_Collins-piano).mp3';
import MessiaenXVI from '../../assets/music/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XVI-(S_C_Collins-piano).mp3';

const RecordingsOther = () => {
    return (
        <div className="RecordingsOther">
            <h1>Performances</h1>
            <div className="newText text-left">
                <p>Currently, I don't have many recordings of my performances, and
                some have pretty lousy audio quality. Rather than subject you to all
                of that, I have chosen the most listenable examples from my
                collection.</p>

                <h4><i>D. Scarlatti - Sonata in F minor, K. 466 <span className="date">(2010)</span></i></h4>
                <div className="youtubeContainer">
                    <iframe 
                        title="D. Scarlatti - Sonata in F Minor, K. 466"
                        src="//www.youtube.com/embed/WvIwXC-VVVQ?theme=light"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
                <br />
                <span className="download"><a href={DScarlattiSonata} download="D. Scarlatti - Sonata in F minor, K. 466 (S. C. Collins, piano).mp3">download</a> | <a href={DScarlattiSonataSheetMusic} target="_blank" rel="noreferrer">sheet music</a> | Recorded on my RD-700GX with SuperNATURAL piano expansion</span>
                <p>I have been studying the creative process of improvisation to help me better understand the music of others. This is my first recorded experiment in this vein.</p>

            <Divider className="mb-3" />
                <h4><i>Ravel - Miroirs-III. Une barque sur l'ocean <span className="date">(2003)</span></i></h4>
                <audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/pj6j9hk36pam76n/Ravel--Miroirs-III_Une_barque_sur_l_ocean-%28S_C_Collins-piano%29.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/x358a26umt7qwft/Ravel--Miroirs-III_Une_barque_sur_l_ocean-%28S_C_Collins-piano%29.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={RavelMirrors3} download="Ravel - Miroirs-III. Une barque sur l'ocean (S. C. Collins, piano).mp3">download</a> | Recording from my master's recital at the University of Minnesota</span>
            
            <Divider className="mb-3" />
                <h4><i>Ravel - Miroirs-IV. Alborada del gracioso <span className="date">(2003)</span></i></h4>
                <audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/ij7n94lf04mpe97/Ravel--Miroirs-IV_Alborada_del_gracioso-%28S_C_Collins-piano%29.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/tzm5vlqj1nox1d4/Ravel--Miroirs-IV_Alborada_del_gracioso-%28S_C_Collins-piano%29.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={RavelMirrors4} download="Ravel - Miroirs-IV. Alborada del gracioso (S. C. Collins, piano).mp3">download</a> | Recording from my master's recital at the University of Minnesota</span>
            
            <Divider className="mb-3" />
                <h4><i>Messiaen - 20 Regards Sur L'Enfant Jesus-XV. Le Baiser de L'Enfant Jesus <span className="date"  >(2003)</span></i></h4>
                <audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/78n420d7wobew04/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XV-%28S_C_Collins-piano%29.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/dpvgzl9pz47my3y/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XV-%28S_C_Collins-piano%29.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={MessiaenXV} download="Messiaen - 20 Regards Sur L'Enfant Jesus-XV. Le Baiser de L'Enfant Jesus (S. C. Collins, piano).mp3">download</a> | Recording from my master's recital at the University of Minnesota</span>

            <Divider className="mb-3" />
                <h4><i>Messiaen - 20 Regards Sur L'Enfant Jesus-XVI. Regard des Prophetes, des Bergers et des Mages <span className="date">(2003)</span></i></h4>
                <audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/ho3v9a2rxibejzz/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XVI-%28S_C_Collins-piano%29.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/z2dxevm48vu5dnt/Messiaen--20_Regards_Sur_L_Enfant_Jesus-XVI-%28S_C_Collins-piano%29.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={MessiaenXVI} download="Messiaen - 20 Regards Sur L'Enfant Jesus-XVI. Regard des Prophetes, des Bergers et des Mages (S. C. Collins, piano).mp3">download</a> | Recording from my master's recital at the University of Minnesota</span>
            </div>
        </div>
    )
}

export default RecordingsOther;