import React from "react";
import { teamMembers } from "../../constants"; 
import Section from "../Section";
import { BackgroundCircles } from "../design/Hero";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; 
import AboutUs from "../AboutUs";
import Heading from "../Heading";



const OurTeam = () => {
  
  const TeamMember = ({ member }) => {
    return (
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-64 h-56 md:h-64 xl:h-80 "
          src={member.imageUrl}
          alt={member.name}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">{member.name}</p>
          <p className="mb-4 text-xs text-gray-100">{member.role}</p>
          <p className="mb-4 text-xs tracking-wide text-gray-400">
            {member.description}
          </p>
          <div className="flex items-center justify-center space-x-3">
         
            <a
              href={member.twitterUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

          
            <a
              href={member.instagramUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

          
            <a
              href={member.githubUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>

           
            <a
              href={member.linkedinUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    );
  };


  return (
   <div >
    <Section id="">
        <div className="container relative z-2 ">
        <Heading tag="💡 Idea Creator and Developer" title="Our Team" className="text-center sm:text-left" />
        <div className="flex justify-center"> 
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2"> 
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
            
            
            
          </div>
         
        </div>
            
        </div>
        <BackgroundCircles />
       
        </Section>
     
        <AboutUs/>
     
      </div>
       
    
  );
};

export default OurTeam;
