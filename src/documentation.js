import React from "react";
export class Documentation extends React.Component {
  render() {
    return (
      <ul className="screenbox">
        <li className="sceneheader">
          INT. OFFICE / MEETING ROOM – WEDNESDAY 11:30am
        </li>
        <li className="action">Susan is on a jabber call with John.</li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          Hi John. Susan again... Im using the Swagger docs you've sent me.
          Thank you by the way. Let me share my screen...As you can see this
          http call keeps failing. As far as I can see I'm sending everything
          exactly as described in the docs.
        </li>
        <li className="character">JOHN</li>
        <li className="dialogue">
          Let's see...Ohh..Yes..I can see it. Well, you know, the docs dont have
          all the details exactly right. What you need to do is...
        </li>
      </ul>
    );
  }
}
