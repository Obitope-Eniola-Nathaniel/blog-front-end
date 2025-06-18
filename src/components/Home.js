// Home.js
import React from "react";
import "./Home.css"; // Assuming you have a CSS file for styling
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
            </main>
        </div>
    );
}

export default Home;
