import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { store } from "../src/app/store";
import AddItem from "./components/AddItem";

function App() {
    return (
        <>
            <Provider store={store}>
                <div className="App">
                    <AppNavbar />
                    <AddItem />
                    <ShoppingList />
                </div>
            </Provider>
        </>
    );
}

export default App;
