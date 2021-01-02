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
        >
          <h1>AreaFiftyLAN</h1>
          <h5>The biggest gaming event in The Netherlands!</h5>
          <div>
            <Button>Button 1</Button>
            <Button secondary>Button 2</Button>
          </div>
        </Hero>
        <Card>
          <h2>Hello LAN!</h2>
          <p>
            This is some text, with a <a href="https://dany.dev">link</a>.
          </p>
        </Card>
      </Grid>
    </Container>
  </Typography>
);

export default Main;
