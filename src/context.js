// Import React
import React from "react";
import { Text, Appear } from "spectacle";
const textColor = "hsl(0, 0%, 50%)";
export class Context extends React.Component {
  render() {
    return (
      <>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              10 UI teams, +10 WS teams, 2 UX teams, +5 MSM teams, +8
              organizations, 6 locations, 4 timezones
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              They dont know it yet but the integration cost will be...
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              their nightmare
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              No requirements and 9 months deadline
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              No requirements and 9 months deadline
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              No requirements and 9 months deadline
            </Text>
          </div>
        </Appear>
        <Appear>
          <div>
            <Text margin="20px 0 0" textColor={textColor} fit>
              No requirements and 9 months deadline
            </Text>
          </div>
        </Appear>
      </>
    );
  }
}
