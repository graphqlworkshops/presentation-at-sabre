import React from "react";
export class Overfecthing extends React.Component {
  render() {
    return (
      <ul className="screenbox">
        <li className="sceneheader">INT. OFFICE / MEETING ROOM – MONDAY 2pm</li>
        <li className="action">Susan is on a jabber call with John.</li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          I wanted to discuss about the existing API your team manages. We are
          building a new app and the /results endpoint returns a significantly
          large amount of data.
        </li>
        <li className="character">JOHN</li>
        <li className="dialogue">
          That's right. Thorough the years - as we added more consumers - we
          receieved requests to add one more item here, there. Lesson learnt, we
          finally added everything.
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          I can only imagine...so...we are building a new app. It targets
          desktop, tablet and smartphones. We would like to get only half of the
          data points for the desktop and just a few parts for the tablet/mobile
          app. You know...less screen real state to display info. Im sure you
          understand.
        </li>
        <li className="action">
          All of th sudden, a profound heavy silence suffocates the line
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          So....Who should I send the details? When do you think this will be
          done?
        </li>
      </ul>
    );
  }
}
