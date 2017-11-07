import * as React from 'react';

const AboutMe = (props) => (
    <div className="aboutme">
        <div className="aboutme-profile-image"></div>
        <div className="aboutme-content">
            <div>
                <label>What I do</label>
                <p>
                    Have worked with many tools across different industries facing many problems. 
                    I like to learn about software, new paradigms, and optimization techniques, 
                    but what drives me the most is solving tough problems.
                </p>
            </div>
            <div>
                <label>Achievements</label>
                <p>
                    Designed project architecture, database structures, mid tier APIs, front end javascript code, and accompanying internal tools, 
                    for varying companies, from chemical manufacturing and ad tech, to business intelligence products.
                </p>
            </div>
            <div>
                <label>Skills</label>
                <p>
                    Mostly C# and pure JavaScript but with a sprinkle of  
                    Angular, React, TypeScript, Node, Webpack, Web Services, .NET Core, SQL
                </p>
            </div>
        </div>
    </div>
)

export default AboutMe;