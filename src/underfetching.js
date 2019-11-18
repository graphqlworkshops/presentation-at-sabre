import React from "react";
export class Underfetching extends React.Component {
  render() {
    return (
      <ul className="screenbox">
        <li className="sceneheader">
          INT. OFFICE / MEETING ROOM – TUESDAY 11am
        </li>
        <li className="action">Susan is on a jabber call with Paul.</li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          I wanted to discuss about the existing API your team manages. We are
          building a new app and the /pets endpoint returns only the list of
          pets without its race details or their health history.
        </li>
        <li className="character">PAUL</li>
        <li className="dialogue">
          That's right. Following REST we are returning a list of resources. We
          add the link to all of the details with the proper url. So you have
          link to make a new http call to get health history, owners, skills,
          photos. You name it. You are welcome!
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          Right...yes...so for a results's list of 10 pets, if I need the race
          and health history, then the UI would need to do...mmm... 21 http
          calls. We are using HTTP 1.1 so everytime we make a call there is
          500-600ms on latency due to DNS lookup, TCP Connection and TLS
          handshake. Taking into account the browser can do around 6-8 calls in
          parallel to the same domain, if all calls in average return within 2
          seconds, we are looking at 24 seconds just to receive the data back.
        </li>
        <li className="character">SUSAN</li>
        <li className="dialogue">
          So....We could shave 12 seconds if we had an endpoint that returned
          all the data in a single shot.
        </li>
        <li className="character">PAUL</li>
        <li className="dialogue">
          I feel your pain. Let's think about it from our perspective. If we
          were to create endpoints to return the exact response needed for every
          consumer/client we have and will have in the future, it would be
          almost impossible to maintain or change. Would you agree?
        </li>
        <li className="character">SUSAN - thinking</li>
        <li className="dialogue">
          Is it too late to become a Product Owner or a PM?
        </li>
      </ul>
    );
  }
}
