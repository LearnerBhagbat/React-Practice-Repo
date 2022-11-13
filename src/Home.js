import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [name, setName]=useState('Mario');
    const [Age, setAge]=useState(25);
    const [Blogs, setBlogs]=useState([
        {Title:'My new Site',Body:'lorem ......',Author:'Raja1',ID:1},
        {Title:'My new Site',Body:'lorem ......',Author:'Raja2',ID:2},
        {Title:'My new Site',Body:'lorem ......',Author:'Raja3',ID:3}
    ])
    const handleClick=()=>{
        console.log("Hello");
        setName('Raja');
        setAge(35);
    }
    const Click2 =(name)=>{
        console.log('Hello '+name);
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {Age} Years Old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{Click2('Raja')} }>Click me 2</button>
            <br />
            <br />
            <div className="home2">
                {Blogs.map((Blog) =>(
                    <div className="blogPreview" key={Blog.ID}>
                        <h2>{Blog.Title}</h2>
                        <p>Written By {Blog.Author}</p>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <div className="home3">
              <BlogList/>
            </div>
        </div>
     );
}
 
export default Home;