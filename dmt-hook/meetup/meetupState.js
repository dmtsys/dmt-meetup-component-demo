import dmt from 'dmt/common';

const { parseISO, formatISO, subHours, addHours, subMinutes, addMinutes } = dmt.dateFns;

let startsAtISO = '2021-11-11T19:00:00+0100';

startsAtISO = formatISO(addMinutes(Date.now(), 2)); // set meetup to start 2 minutes after our dmt proc started

const meetupUrl = 'https://dmt-system.com';

export default function meetupState() {
  return dmt.meetup({ startsAtISO, meetupUrl });
}
