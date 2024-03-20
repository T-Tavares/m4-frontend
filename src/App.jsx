import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ImageAnalyzer from './components/ImageAnalyzer.jsx';

function App() {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="image-analyzer">
                <ImageAnalyzer />
            </div>
            <Footer />
        </div>
    );
}

export default App;
