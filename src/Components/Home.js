import React from 'react';
import web from '../Images/web.png';
import Same from '../Components/Same';

const Home = () => {
    return (
        <>
            <h1 style={{textAlign:'center',backgroundColor:'#91fcea',padding:'1rem',margin:'0'}}>Welcome to CLIKTECH</h1>
            <Same
                title='Learning Web Development'
                text='Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.'
                button='Read More'
                img={web}

            />
        </>
    )
}
export default Home;