import React, { useState } from 'react';
import budgettrackerImage from "../../assets/images/budget-tracker.jpg";
import datenightImage from "../../assets/images/datenight.jpg";



function Project() {
    const [projects] = useState([
        {
            image: budgettrackerImage,
            title: 'Mod-19 budget-tracker app',
            description: 'app designed to keep track of spending even whenoffline transactions will be saved and updated when back online.',
            deployLink: 'https://mod19-budget-tracker.herokuapp.com/',
            repoLink: 'https://github.com/CherylFogerty/mod19-budget-tracker',
        },
        {
            image: datenightImage,
            title: 'Date Night Generator',
            description: 'Conceptualized, designed and created an application to assist couples in planning a date-night. Select by category and hit "Replace" to generate a random movie, meal, or drink selection until you find a suggestion you like. After putting together a suitable trio, hit "Save Current Picks" to add them permanently to your Date Night Queue!',
            deployLink: 'https://jscottrumptz.github.io/date-night-generator/',
            repoLink: 'https://github.com/jscottrumptz/date-night-generator',
        }
    ])

    return (
        <div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-4 pt-10">
                {projects.map((project) => (
                    <li className="col-span-1 flex flex-col text-center bg-gray-100 rounded-lg shadow divide-y divide-gray-200">
                        <div className="flex-1 flex flex-col pb-8">
                            <a href={!project.deployLink ? (project.repoLink) : (project.deployLink)} target="_blank" rel="noreferrer">
                                <img className="w-full flex-shrink-0 mx-auto"
                                    src={project.image}
                                    alt={project.title} />
                            </a>
                            <h3 className="mt-3 text-gray-600 text-2xl font-bold">{project.title}</h3>
                            <p className="mt-3 mx-3 text-gray-500 text-sm">{project.description}</p>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="mt-3 flex flex-wrap justify-center">
                                    {project.skills.map((skill) => (
                                        <span className="px-2  m-1 py-1 text-indigo-500 text-xs font-medium bg-indigo-100 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-indigo-100">
                                {project.deployLink &&
                                    <div className="w-0 flex-1 flex">
                                        <a href={project.deployLink} target="_blank" rel="noreferrer"
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-bl-lg hover:text-indigo-400">

                                            <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"
                                                />
                                            </svg>
                                            <span className="ml-3">View Project</span>
                                        </a>
                                    </div>
                                }
                                {project.repoLink &&
                                    <div className="-ml-px w-0 flex-1 flex">
                                        <a href={project.repoLink} target="_blank" rel="noreferrer"
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-indigo-400">

                                            <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                />
                                            </svg>
                                            <span className="ml-3">View Repository</span>
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Project;