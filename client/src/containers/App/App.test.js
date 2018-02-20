import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


describe('<App />', () => {

    describe('componentDidMount', () => {
        it('sets the state componentDidMount', async () => {
            window.fetch = jest.fn().mockImplementation(() => ({
                status: 200,
                json: () => new Promise((resolve, reject) => {
                    resolve({
                        data: [
                            { code: "ES", name: "Spain" }, { code: "PT", name: "Portugal" }
                        ]
                    })
                })
            }))

            const renderedComponent = await shallow(<App />)
            await renderedComponent.update()
            expect(renderedComponent.state('response').length).toEqual(2)
        })

        it('sets the state componentDidMount on error', async () => {
            window.fetch = jest.fn().mockImplementation(() => ({
                status: 500,
            }))

            const renderedComponent = await shallow(<App />)
            await renderedComponent.update()
            expect(renderedComponent.state('errorStatus')).toEqual('Error fetching countries')
        })
    })
});
