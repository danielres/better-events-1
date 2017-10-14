import { setupAll } from './location.test.support';

const { store, history } = setupAll('/first');
const { push, replace } = history;

const getLocation = () => store.getState().location;

describe('Home route', () => {
  it('Supports "/"', () => {
    push('/');
    expect(getLocation().type).toEqual('HOME');
    expect(getLocation().pathname).toEqual('/');
  });
});
