import React from "react";
import { teamMembers } from "../../constants"; // Import team member data
import Section from "../Section";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import Heading from "../Heading"
const OurTeam = () => {
  // TeamMember component inside OurTeam component
  const TeamMember = ({ member }) => {
    return (
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
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
            {/* Twitter Icon */}
            <a
              href={member.twitterUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

            {/* Instagram Icon */}
            <a
              href={member.instagramUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            {/* GitHub Icon */}
            <a
              href={member.githubUrl}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            {/* LinkedIn Icon */}
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
    <Section id="features">
    <div className="container relative z-2">
   
        <Heading
        
        tag="Why Sarathi ?"
          title="Your Trusted Partner in Academic Success"
          text="Your Academic Companion: Sarathi is your go-to resource, offering a vast and reliable collection of university notes and previous exam papers."
        />
       
       <Heading
              tag="Developers"
             
        />

      
        <div className="flex justify-center"> {/* Use flexbox to center the grid container */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2"> {/* Grid container */}
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
