import './App.css'
import Summary from "./components/Summary";
import MainContent from "./components/MainContent"
import SocialLinks from "./components/SocialLinks"

export default function App() {
  return (
    <div className="App">
      <Summary />
      <MainContent />
      <SocialLinks />
    </div>
  )
}
