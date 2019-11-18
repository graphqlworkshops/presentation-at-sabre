import React from "react";
export class MockedData extends React.Component {
  render() {
    return (
      <ul className="screenbox">
        <li className="sceneheader">
          INT. OFFICE / MEETING ROOM – WEDNESDAY 3pm
        </li>
        <li className="action">Susan is on a jabber call with John.</li>
        <li className="character">SUSAN</li>
        <li className="dialogue">Hi John. Susan again...</li>
        <li className="character">JOHN (making a robotic voice)</li>
        <li className="dialogue">
          You've reached John's voicemail. Please leave a msg.
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          Funny...So I was working and the dev instance you've sent me seems to
          be down...again. Do you have a docker so I can run it locally?
        </li>
        <li className="character">JOHN</li>
        <li className="dialogue">
          Now who's talking crazy now? Do you know how many things you would
          need ?
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          Can I run a version locally with mocked data? Or could you deploy it
          with mocked data?
        </li>
        <li className="character">JOHN</li>
        <li className="dialogue">Yeah...we used to have that but ...</li>
      </ul>
    );
  }
}
