// import classNames from 'classnames';
// import React, { useEffect, useState } from 'react';

// import styles from './VideoPlayer.module.css';

// export default function VideoPlayer() {
//   const [scriptHtml, setScriptHtml] = useState('');

//   useEffect(() => {
//     const dataUrl = window.location.href;
//     fetch(
//       '//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=' +
//         dataUrl,
//     )
//       .then(res => res.text())
//       .then(data => setScriptHtml(data.match(/<iframe.*<\/iframe>/gm)[1]));
//   }, []);

//   return (
//     <div
//       className={classNames('uitools', styles.video)}
//       id="videoplayers"
//       dangerouslySetInnerHTML={{ __html: scriptHtml }}
//     ></div>
//   );
// }

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './VideoPlayer.module.css';


export default function VideoPlayer({ filmId }) {
    const [scriptHtml, setScriptHtml] = useState('');
  
    useEffect(() => {
      if (!filmId) return;
  
      fetch(
        `//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=${filmId}&players=videocdn,hdvb,bazon`
      )
        .then((res) => res.text())
        .then((data) => {
          const iframeMatch = data.match(/<iframe.*<\/iframe>/gm);
          if (iframeMatch && iframeMatch.length > 0) {
            setScriptHtml(iframeMatch[1]);
          } else {
            console.error('IFrame not found in response');
          }
        })
        .catch((error) => {
          console.error('Error fetching video player:', error);
        });
    }, [filmId]);
  
    return (
      <div
        className={classNames('uitools', styles.video)}
        id="videoplayers"
        dangerouslySetInnerHTML={{ __html: scriptHtml }}
      ></div>
    );
  }




//   import classNames from 'classnames';
// import React, { useEffect, useState } from 'react';

// import styles from './VideoPlayer.module.css';

// export default function VideoPlayer() {
//   const [scriptHtml, setScriptHtml] = useState('');

//   useEffect(() => {
//     const dataUrl = window.location.href;
//     fetch(
//       '//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=' +
//         dataUrl,
//     )
//       .then(res => res.text())
//       .then(data => setScriptHtml(data.match(/<iframe.*<\/iframe>/gm)[1]));
//   }, []);

//   return (
//     <div
//       className={classNames('uitools', styles.video)}
//       id="videoplayers"
//       dangerouslySetInnerHTML={{ __html: scriptHtml }}
//     ></div>
//   );
// }
