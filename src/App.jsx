import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftContainer from "./layouts/LeftContainer";
import Visualisation from "./layouts/visualisation/Visualisation";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <BrowserRouter>
                <Header />
            </BrowserRouter>
            <main className="flex flex-wrap justify-center items-start flex-grow bg-gray-100 px-10 md:flex-nowrap">
                <LeftContainer />
                <Visualisation />
            </main>
            <Footer />
        </div>
    );
}

export default App;
