import React, { useEffect, useState } from 'react';
import web from '../Images/web.png';
import '../Css/Services.css';
// import JSON from '../json/data.json';

const Services = () => {

    // const [posts, setPosts] = useState([]);

    // // fetch('http://localhost:3700/posts').then(data => data.json()).then(data => {
    // //     console.log(data);
    // //     setPosts(data);
    // // }, [])

    // useEffect(() => {
    //     fetch('http://localhost:3700/posts').then(data => data.json()).then(data => {
    //         // console.log();
    //         setPosts(data.data);

    //     })
    // },[])




    const posts = [
        {
            title : "Web Developement",
            img   : "",
            description : "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
            button : "Read More"
        },

        {
            title : "Graphic Designing",
            img   : "",
            description : "Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts.",
            button : "Read More"  
        },

        {
            title  : "SEO",
            description : "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic. ",
            button : "Read More"
        }

    ];

    return (
        <>
            <section className='services'>
                <h2>Our Services</h2><br /><br />
                <div className='container'>
                    {
                        posts.map(post => {
                            return (
                                <>
                                    <div className='card'>
                                        <h3>{post.title}</h3>
                                        <img src={web} alt='service' />
                                        <p>{post.description}</p>
                                        <button>{post.button}</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Services;


// {
//     "title"  : "SEO",
//     "description" : "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic. ",
//     "button" : "Read More"
// }