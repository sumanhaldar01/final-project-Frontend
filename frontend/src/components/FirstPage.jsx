import Firstcard from "./FirstPage/Firstcard";
import Hero from "./FirstPage/Hero";
import Carousel from "./FirstPage/Carousel";
import Secondcard from "./FirstPage/Secondcard";
import HTMLtutorial from "./FirstPage/HTMLtutorial";
import JavaScriptTutorial from "./FirstPage/JavaScriptTutorial";
import CssTutorial from "./FirstPage/CssTutorial";



const FirstPage = () => {
  return (
    <div>
      
      <Hero/>
      <Firstcard/>
      <Carousel/>
      <Secondcard/>
      <HTMLtutorial/>
      <JavaScriptTutorial/>
      <CssTutorial/>

    </div>
  )
}

export default FirstPage
