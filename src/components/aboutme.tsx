import * as React from 'react';
interface Abstract{
    title:string;
    abstract:string;
}
const snippets: Abstract[] =[
    {
        title:"What I Do",
        abstract:"I have worked with many tools across different industries facing many problems. I like to learn about software, new paradigms, and optimization techniques, but what drives me the most is solving tough problems."
    },
    {
        title:"Achievements",
        abstract:"I have designed project architectures, database structures, mid tier APIs, front-end javascript code and accompanying internal tools for varying companies, from chemical manufacturing and ad tech, to business intelligence products."
    },
    {
        title:"Skills",
        abstract:"Mostly C# and pure JavaScript, but with a sprinkle of Angular, React, TypeScript, Node, Webpack, Web Services, .NET Core, and SQL."
    }
]

const AboutMe = (props) => (
    <div className="aboutme">
        {snippets.map((sn) => (
                <div className="snippet">
                    <div><label className="title">{sn.title}</label></div>
                    <div><p className="abstract">{sn.abstract}</p></div>
                </div>
            ))}
    </div>
)

export default AboutMe;