import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
// const container = document.getElementById('root');
const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
root.render(<App/>);
// createRoot.render(<App/>, document.querySelector("#root"));