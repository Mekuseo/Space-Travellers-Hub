import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Mission from '../Mission';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Mission /></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});
