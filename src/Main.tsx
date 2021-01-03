import { h, FunctionalComponent } from "preact";
import { Button, Card, Hero, Typography, layout } from "teenyui";

const { Container, Grid } = layout;

const Main: FunctionalComponent = () => (
  <Typography>
    <Container pillar>
      <Grid size={12}>
        <Hero
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          image={require("./assets/banner.jpg")}
          imageFallback="linear-gradient(to bottom right, #1a2b43, #01122A)"
          imageLabel="AreaFiftyLAN Event"
        >
          <img
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={require("./assets/logo.png")}
            alt="AreaFiftyLAN Logo"
          />
          <h5>The biggest gaming event in The Netherlands!</h5>
          <div>
            <Button>Button 1</Button>
            <Button secondary>Button 2</Button>
          </div>
        </Hero>
        <Card>
          <h1>Hello LAN!</h1>
          <p>
            This is some text, with a <a href="https://dany.dev">link</a>.
          </p>
        </Card>
      </Grid>
    </Container>
  </Typography>
);

export default Main;
