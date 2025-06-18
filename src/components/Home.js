// Home.js
import React from "react";
import "./Home.css"; // Assuming you have a CSS file for styling
import image from "../images/peoplecom.jpg"; // Adjust the path as necessary
const Home = () => {
    
    return (
        <div>
            <main className="home">
                <section className="showblog">
                    <h1>Welcome to ShowBlog</h1>
                    <p>Your one-stop solution for blogging!</p>
                    <p>Explore our features and start your blogging journey today!</p>
                    <p>Login or Register to get started.</p>
                    <div className="happy-blogging">Happy Blogging!</div>
                </section>
                <section className="features">
                    <h2>Show Case Your Creativity</h2>
                    <img src={image} alt="Showcase" className="image-people"/>
                </section>
            </main>
        </div>
    );
}

export default Home;
