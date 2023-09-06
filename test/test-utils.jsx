
import {render} from '@testing-library/react'
import { Provider } from "react-redux";
import { store } from '../src/store';

const allProviders = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}

function customRender(ui, ...options) {
    return render(ui, { wrapper: allProviders, ...options });
}
export * from '@testing-library/react'
export {customRender as render}