import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Example";

function App() {

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <CoreConcept />
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
