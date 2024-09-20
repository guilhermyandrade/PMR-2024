import Header from "./app/components/Header"
import Footer from "./app/components/Footer"
import Section from "./app/components/Section"
import HightLightSection from "./app/components/HighlightSection"


function App() {
  return (

    /* Fragmento */
    <div className="wrapper"> 

      <Header />
      <main
        style = {{
          marginTop: '8rem'
        }}
      >
        <HightLightSection />
        <Section sectionTitle="Para Toda sua Família" />
        <Section sectionTitle="Recomendados para Você"/>
        
      </main>
      <Footer />
      
    </div>
  )
}

export default App
