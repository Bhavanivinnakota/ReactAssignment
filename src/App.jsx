import Header from "./Components/1.LayoutReact"
import Footer from "./Components/2.SimpleFooter"
import Layout from "./Components/3.Layout"
import Carouse from "./Components/4.Carousel"
import Counter from "./Components/5.Counter"
import Toggle from "./Components/6.ToggleButton"
import InputDisplay from "./Components/7.InputDisplay"
import WeatherDisplay from "./Components/8.WeatherDisplay"
import EmployyeCard from "./Components/9.EmployeeCard"
import BlogPost from "./Components/10.BlogPostComment"
function App() {
  return (
      <div>
        <Header/>
        <Footer/>
        <Layout/>
        <Carouse/>
        <Counter/>
        <Toggle/>
        <InputDisplay/>
        <WeatherDisplay city="New York" temp="22°C" condition="Sunny"/>
        <EmployyeCard url="https://i.pinimg.com/564x/10/11/38/101138716e268c39e49b77a158bce102.jpg" name="John Doe" role="Developer"/>
        <EmployyeCard url="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" name="Alice Robot" role="Tester"/>
        <BlogPost title={"Introduction to React"} author={" Jane Smith "} date={"October 5, 2023 "} content={"React is a JavaScript library for building user interfaces..."}/>
       </div>
  )
}

export default App
