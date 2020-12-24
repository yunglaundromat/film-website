import React from 'react'
import {
  Card,
  Icon,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const App = () => (
  <div>
    <Menu fixed='top' inverted size="huge" color="violet">
      <Container>
        <Menu.Item as='a' header>
          <Icon name="home"/>
          VideoShare
        </Menu.Item>
        <Menu.Item as='a' position="right">
          <Icon name="fire"/>
          Popular Videos
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name="user plus"/>
          Following
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name="thumbs up"/>
          <Icon name="thumbs down"/>
          Vote
        </Menu.Item>
        <Dropdown item simple text='My Profile'>
          <Dropdown.Menu>
            <Dropdown.Item>Edit My Profile</Dropdown.Item>
            <Dropdown.Item>Upload a Video</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Check Out More Members</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
      <Grid celled='internally' style={{ marginTop: '7em' }}>
        <Grid.Row>
          <Grid.Column width={6}>
          <Card centered>
            <Image src='otherexample.jpg' wrapped ui={false} size="large"/>
            <Card.Content>
              <Card.Header>Featured Video</Card.Header>
              <Card.Meta>Uploaded today</Card.Meta>
              <Card.Description>
                This video is featured!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                400000 views
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Group itemsPerRow={3}>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src='example.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>MarioKart Video</Card.Header>
                  <Card.Meta>
                    <span className='date'>Uploaded yesterday</span>
                  </Card.Meta>
                  <Card.Description>
                    This is a video about Mario Kart.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    1300 views
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}  color="violet">
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default App;
