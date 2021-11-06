import dmt from 'dmt/common';
import onConnect from './onConnect';

import meetupState from './meetup/meetupState';

export default function initProtocol({ program }) {
  const protocol = 'dmt/meetup-component-demo';

  const channels = program.registerProtocol({ protocol, onConnect });

  const dmtVersion = dmt.dmtVersion();

  const loop = () => {
    const meetup = meetupState();
    channels.state.set({ dmtVersion, meetup });
    setTimeout(loop, 500);
  };

  loop();
}

function init(program) {
  initProtocol({ program });
}

export { init };
