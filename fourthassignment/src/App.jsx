import React from 'react'
import Render from './1Render/Render'
import Table from './2DynamicTable/Table'
import Gridlayout from './3GridLayout/Gridlayout'
import Form from './4Form/Form'
import Conditionstyle from './5Conditionalstyling/conditionstyle'
import Theme from './6Themeswitch/Theme'
import SearchBar from './7SearchFilter/Search'
import ProfileCard from './8ProfileCard/ProfileCard'
import Product from './9ProductCard/Product'
import Images from './10ImageGallery/Images'
import TodoList from './11ToDo/Todo'
import Loginform from './12Loginform/Loginform'
import News from './14News/News'
import Weather from './15WeatherCard/Weather'
import Rating from './13Ratingcomponent/Rating'
function App() {
  return (
    <div>
     <Render/>
     <Table/>
     <Gridlayout/>
     <Form/>
     <Conditionstyle status="success" />
<Conditionstyle status="error" />
<Conditionstyle status="pending" />
     <Theme/>
     <SearchBar names={['Alice', 'Bob', 'Charlie']} />
     <ProfileCard image={"https://media.licdn.com/dms/image/v2/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=pcv3nQmuGNO--DYXy4h9jVh8cUdkYEaArH8927o3BTE"} name={"React Js"} desc={"React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components that efficiently update and render as the data changes, making it ideal for dynamic and interactive web applications. "} />
     <ProfileCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&s"} name={"Node Js"} desc={"Node.js is a powerful, open-source, cross-platform JavaScript runtime environment that allows developers to build server-side "}/>
       
        <Product name={"KurtaSet"} image={"https://5.imimg.com/data5/SELLER/Default/2022/7/KA/UD/EO/155591082/latest-kurti-design-images-2022-with-price.jpg"} price={"1000/-"}/>
       
       <Images url={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jrebel.com%2Fblog%2Ftop-java-development-tools-and-software&psig=AOvVaw1NDMfUDJQc_NrPGwtEVyjR&ust=1735994215906000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjEhcfI2YoDFQAAAAAdAAAAABAE"} /> 
       <Images url={"https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08="} /> 
       <Images url={"https://miro.medium.com/v2/resize:fit:1024/0*vq-JSMynSHUPXx70"} /> 
       
        <TodoList/>
        <Loginform/>
        <News  artimg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTaL1Ta96rKF5q19oQmST42oMpofDQoYO_Q&s"} headline={"ArticleImage"} description={"An article image is an image that is used to complement and enhance an article's content. It typically serves to visually represent the topic of the article, making it more engaging and easier for readers to understand. "} />

        <Weather icon={"https://static.vecteezy.com/system/resources/thumbnails/022/823/390/small_2x/sunny-and-rainy-on-white-background-weather-animated-icon-video.jpg"} city={"hyderabad"} temp={"13 c"}/>

        <Rating maxStars={5}/>
    </div>
  )
}

export default App