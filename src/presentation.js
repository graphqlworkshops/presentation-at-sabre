// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableItem,
  TableBody,
  Image,
  Link
} from "spectacle";

import { Context } from "./context";
import { Title } from "./halloween-title";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Overfecthing } from "./overfetching";
import { Underfetching } from "./underfetching";
import { Documentation } from "./documentation";
import { MockedData } from "./mocked-data";
import { IdealResponses } from "./ideal-responses";

// Require CSS
require("normalize.css");
require("./cat.css");
require("./glitch.css");
require("./halloween.css");
require("./dialogue.css");
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE",
    graphql: "#e535ab"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const slide1 =
  "How many of you are familiar with GraphQl? Today Im going to tell you a story. So get comfy. Here we go...";
const slide3 =
  "Today's story is about a group of naive developers who faced THE NON_ANALOG WORKSPACE project. It received many reviews during and after it was delivered...";
const slide4 = " The NGP times said...";
const slide5 =
  " The VP group which stands for Very Pressing News group said...The story goes something like this...";
const slide6 = "It was the year 1 after trump, we had....";
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        contentHeight={900}
        contentWidth={1000}
      >
        <Slide bgColor="secondary" textColor="primary" caps notes={slide1}>
          <div class="glitch" data-text="Sabre Story Times">
            Sabre Story Times
          </div>
          <Text textColor="primary">presents...</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Any resemblance to reality is purely coincidental
          </Heading>
          <Text>
            The story adresses common places but this is not the case across all
            teams.
          </Text>
        </Slide>
        <Slide bgColor="#82958f" notes={slide3}>
          <Title />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          notes={slide4}
        >
          <BlockQuote>
            <Quote>
              Alfred Hitchcock would have learnt a thing or two from scary dev
              stories like this one.
            </Quote>
            <Cite>The NGP Times</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          notes={slide5}
        >
          <BlockQuote>
            <Quote>
              Disappointing. I think they should have added more devs.
            </Quote>
            <Cite>
              The <span style={{ fontWeight: 900 }}>V</span>ery{" "}
              <span style={{ fontWeight: 900 }}>P</span>ressing NewsGroup
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="primary" notes={slide6}>
          <Heading size={6} textColor="secondary">
            It was the year 1 A.T. ...
          </Heading>
          <Context />
          <div class="foreground"></div>
          <div class="midground">
            <div class="tuna"></div>
          </div>
          <div class="background"></div>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 1 - Overfetching
          </Heading>
          <Overfecthing />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 2 - Underfetching
          </Heading>
          <Underfetching />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 3 - Documentation
          </Heading>
          <Documentation />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 4 - Mocked Data
          </Heading>
          <MockedData />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 5 - We end up paying an external service for a ws it exists
            internally
          </Heading>
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 6 - We have the same service duplicated across the company
          </Heading>
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 7 - Getting data from other apps is really really really
            hard.
          </Heading>
          <Heading size={6} textColor="primary" margin="50px 0">
            Chapter 8 - Guessing what part of our responses are useful for our
            consumers is hard.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Final Chapter - It's not late to make a change...
          </Heading>
          <Text textColor="primary">How to become a PM in 12 months?</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Let's design a BLOG platform
          </Heading>
          <Text textColor="tertiary">We get to play the Backend team</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            As a desktop user, When I land on the blog's main screen Then Im
            able to ...
          </Heading>
          <List textColor="tertiary">
            <ListItem>
              see a list of posts displaying the title only, NOT the content
            </ListItem>
            <ListItem>see the post's author name</ListItem>
            <ListItem>
              see how many comments it got, not the actual comment
            </ListItem>
            <ListItem>
              click on the author's name and see a modal with a list of other
              posts he/she wrote
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            As a mobile user, When I land on the blog's main screen Then Im able
            to ...
          </Heading>
          <List textColor="tertiary">
            <ListItem>
              see a list of posts displaying the title only, NOT the content
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            As a blog api consumer, When I ask for all posts, Then I get...
          </Heading>
          <List textColor="tertiary">
            <ListItem>
              a list of posts with title, content, author complete info and all
              comments
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary" margin="50px 0">
            Lets go to POSTMAN
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <IdealResponses />
        </Slide>
        {
          //   <Slide bgColor="secondary">
          //   <Heading size={6} textColor="primary" margin="50px 0">
          //     /posts => 100 posts P 27kb, T 979ms, K 1
          //   </Heading>
          //   <List textColor="primary">
          //     <ListItem margin="20px 0 0 20px">
          //       We get the tile and content => Overfetching
          //     </ListItem>
          //     <ListItem margin="20px 0 0 20px">
          //       We need to do more calls to get the user's info and comments =>
          //       Underfetching
          //     </ListItem>
          //   </List>
          // </Slide>
          // <Slide bgColor="secondary">
          //   <Heading size={6} textColor="primary" margin="50px 0">
          //     /users/:userId P 1kb. T 213ms, K 100
          //   </Heading>
          //   <List textColor="primary">
          //     <ListItem margin="20px 0 0 20px">
          //       We get ALL user's info => Overfetching
          //     </ListItem>
          //   </List>
          // </Slide>
          // <Slide bgColor="secondary">
          //   <Heading size={6} textColor="primary" margin="50px 0">
          //     /comments?postId=:postId P 2kb, T 218ms, K 100
          //   </Heading>
          //   <List textColor="primary">
          //     <ListItem margin="20px 0 0 20px">
          //       We get ALL comments, we just want to know how many there are =>
          //       Overfetching
          //     </ListItem>
          //     <ListItem margin="20px 0 0 20px">
          //       /posts?filter=userId=:userId FREE
          //     </ListItem>
          //     <ListItem margin="20px 0 0 20px">P 327kb T 20-43s K 201</ListItem>
          //   </List>
          // </Slide>
          // <Slide bgColor="secondary">
          //   <Heading size={6} textColor="primary" margin="50px 0">
          //     /posts?filter=userId=:userId FREE
          //   </Heading>
          //   <List textColor="primary">
          //     <ListItem margin="20px 0 0 20px">
          //       Not needed as we can reuse the posts gigantic data in memory.
          //     </ListItem>
          //   </List>
          // </Slide>
          // <Slide bgColor="secondary">
          //   <Heading size={6} textColor="primary" margin="50px 0">
          //     Totals
          //   </Heading>
          //   <List textColor="primary">
          //     <ListItem margin="20px 0 0 20px">Payload 327kb</ListItem>
          //     <ListItem margin="20px 0 0 20px">Time 20-43s</ListItem>
          //     <ListItem margin="20px 0 0 20px">Calls 201</ListItem>
          //   </List>
          // </Slide>
        }
        <Slide bgColor="secondary">
          <Heading textColor="primary" textSize={48} margin="20px 0 50px 0">
            Can we solve this today?
          </Heading>
          <Appear>
            <Text textColor="tertiary">Orchestrator</Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">Business Layer</Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">Backend For Frontend</Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Table>
            <TableHeader>
              <TableRow textColor="tertiary">
                <TableHeaderItem textSize={34}>Feature</TableHeaderItem> 
                <TableHeaderItem textSize={34} />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow textColor="primary">
                <TableItem textSize={32}>
                  Solves under/over fetching, n+1
                </TableItem>
                <TableItem textColor="quaternary" textSize={32}>
                  extra work/libs
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>
                  Documentation based on Types
                </TableItem>
                <TableItem textColor="quaternary" textSize={32}>
                  lib + manual work
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Mocked Data</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  lib + manual work
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Orchestration</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  possible
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Playground</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  possible
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Analytics on api usage</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  possible with some work
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Federation/Discoverability</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  Possible with some work
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>UI types</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  Possible with some work
                </TableItem>
              </TableRow>
              <TableRow textColor="primary">
                <TableItem textSize={32}>Cost of query on IDE</TableItem>
                <TableItem textSize={32} textColor="quaternary">
                  Mmmmm......
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="primary" textSize={48} margin="20px 0 50px 0">
            Then why oh why we don't have this?
          </Heading>
          <Appear>
            <Text textColor="tertiary" margin="20px 0 20px 0">
              People? usually not the case
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">Tools? Mmmm...</Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="primary">Learning from other tools</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="graphql">What is GraphQL</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Text textColor="graphql">
            It provides an alternative to REST-based architectures with the
            purpose of increasing developer productivity and minimizing amounts
            of data transferred.
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <List textColor="primary">
            <ListItem>It's a spec</ListItem>
            <Appear>
              <ListItem>Java, Javscript, Ruby, Go, Scala, etc.</ListItem>
            </Appear>
            <Appear>
              <ListItem>is a query language for APIs queries</ListItem>
            </Appear>
            <Appear>
              <ListItem>a runtime for fulfilling those queries</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ask for what you need, get exactly that</ListItem>
            </Appear>
            <Appear>
              <ListItem>Get many resources in a single request</ListItem>
            </Appear>
            <Appear>
              <ListItem>Describe what’s possible with a type system</ListItem>
            </Appear>
            <Appear>
              <ListItem>Move faster with powerful developer tools</ListItem>
            </Appear>
            <Appear>
              <ListItem>Evolve your API without versions</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="graphql" textSize={48} margin="20px 0 50px 0">
            High Level Architecture
          </Heading>
          <Image src="https://www.apollographql.com/docs/apollo-server/ee7fbac9c0ca5b1dd6aef886bb695e63/index-diagram.svg"></Image>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="graphql" textSize={48}>
            Enough talking...
          </Heading>
          <List textColor="primary">
            <ListItem>
              <Link
                textColor="primary"
                href="https://codesandbox.io/s/apollo-server-75f99"
                target="_blank"
              >
                Editor
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://75f99.sse.codesandbox.io/"
                target="_blank"
                textColor="primary"
              >
                Standalone Playground
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
