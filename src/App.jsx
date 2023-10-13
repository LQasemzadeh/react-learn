import NavbarComponent from "./components/ui/Navbar.component";
import FooterComponent from "./components/ui/Footer.component";


function App() {
  return (
    <div>
        {/* Navbar */}
          <NavbarComponent />
        {/* Wrapper */}
          <div className="wrapper">
              <h2>Wrapper</h2>
          </div>

        {/* Footer */}
           <FooterComponent />

    </div>
  );
}

export default App;
