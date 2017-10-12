import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:3010/`;  // specify the start page


//then create a test and place your code there
test('Homepage renders', async t => {
    await t
        .expect(Selector('.App-header').innerText).contains('Welcome to React');
});