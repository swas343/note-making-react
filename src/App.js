import { Route, Switch, Redirect } from 'react-router-dom';
import Thoughts from './pages/Thoughts';
import Notes from './pages/Notes';
import NewNote from './pages/NewNote';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes/:noteId">
          <Notes />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/new-note">
          <NewNote />
        </Route>
        <Route path="/thoughts/:thought">
            <Thoughts />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
