import * as React from 'react';

interface Experience{
    company:string;
    specialty:string;
    title:string;
    responsibilities:string;
}

const experiences:Experience[] = [
    {
        company:"Infragistics",
        specialty: "Web Controls/UX/Data Analytics",
        title:"Software Developer",
        responsibilities:"Research/design/develop new features across all tiers for Infragistics' ReportPlus Server, an enterprise-level server application designed for storing, viewing and sharing business analytics. Migrate application front-end from JavaScript & JQuery to Angular & TypeScript front-end. Implement OAuth based data-sources. Add recent and favorite dashboard cross-platform sync functionality. Package and deploy release build to remote servers."
    },
    {
        company:"Princing Engine Inc.",
        specialty: "Digital Marketing",
        title:"Software Engineer",
        responsibilities:"Developed/maintained/deployed digital marketing SaaS platform that would be hosted in AWS EC2 instance. Upgraded and maintained support systems and APIs. Led overhaul of MVC application for Wix marketplace."
    },
    {
        company:"Ungerer & Company",
        specialty:"Chemicals Manufacturer",
        title:"Jr. Software Developer",
        responsibilities:"Supported, maintained, and extended, Expense System, PTO Application, Formula Inventory Tracking and Labeling, ERP system built on proprietary DML, SSRS Reports and other internal business applications."
    }
]

const Resume = (props) => (
    <div className="resume">
        {experiences.map((ex) => (
                <div className="experience">
                    <div><label className="company">{ex.company}</label></div>
                    <div><label className="specialty">{ex.specialty}</label></div>
                    <div><label className="title">{ex.title}</label></div>
                    <div><p className="responsibilities">{ex.responsibilities}</p></div>
                </div>
            ))}
    </div>
)

export default Resume;