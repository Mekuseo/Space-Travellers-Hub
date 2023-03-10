import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Profile from '../Profile'

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Profile /></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});