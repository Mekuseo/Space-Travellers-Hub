import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Rockets from '../Rockets';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Rockets /></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});
