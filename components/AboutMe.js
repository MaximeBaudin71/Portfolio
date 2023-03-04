import React from "react";
import userData from "@constants/data";
import Image from "next/image";


export default function AboutMe() {
  
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          A propos.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title} Je travaille actuellement pour le client {" "}
            <a
              className="bg-blue-800 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          
          <div className="inline-flex flex-col">
          <div >
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Taux Journalier
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Le prix journalier de mon travail s'élève à {" "}
                <h5 className="bg-blue-700 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              450€
                </h5>
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
               Pour toute question, proposition de mission ou demande d'entretien, n'hésitez pas à m'envoyer un {" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                et je reviendrais vers vous.
              </p>
            </div>
            
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Réseaux Sociaux
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-blue-700 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Stack Technique
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="stack/vbnet.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
                alt="VB.NET"
              />
              <img
                src="stack/csharp.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
                alt="C#"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
              />
              <img
                src="stack/trello.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
              />
              <img
                src="stack/jira.png"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
