import {motion} from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Experience() {
    return (
        <motion.div
            key="experience"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-md mx-auto px-6 py-28 sm:px-8 lg:px-10">
                <div className="py-8">
                    <h3 className="text-xl font-bold mb-2">Professional Experience</h3>
                    <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="it-support">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    IT Knokke-Heist
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <h4 className="text-lg font-bold">Information Technology Help Desk Support</h4>
                                <p className="text-gray-600">Jul 2021 & Aug 2022 - Summer job</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Managed helpdesk requests using a Kanban system</li>
                                    <li>Provided technical support to clients and employees</li>
                                    <li>Set up school IT infrastructure and prepared PCs for deployment</li>
                                    <li>Diagnosed and resolved system/software issues</li>
                                    <li>Developed documentation and knowledge-based articles</li>
                                    <li>Communicated with team members to ensure timely issue resolution</li>
                                    <li>Trained employees on using hardware and software tools</li>
                                    <li>Gained insights into new technologies and industry trends</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="py-8">
                    <h3 className="text-xl font-bold mb-2">Technical Projects</h3>
                    <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="svk">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    SVK - Web Application & Android Application
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Collaborated on both the C# web application and the Android application, actively
                                    participating in various development stages. Assisted in the development process,
                                    offering support where needed to ensure the successful creation of a control system
                                    app. Developed features allowing warehouse workers to scan codes for instant access
                                    to loading order information and the capability to upload order images to the
                                    control system. Enabled management and customers to monitor orders, ensuring correct
                                    shipment and providing access to order profiles and related functionalities.</p>
                                <a href="https://www.svk.be" target="_blank"
                                   className="text-blue-500 underline">https://www.svk.be</a>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="amalias">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    Amalia's - Web Application
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Independently developed a comprehensive web application using React, TypeScript, SWR,
                                    Zod, and Tailwind CSS for styling. Implemented Firebase as the backend technology to
                                    support the application's functionality. Created a user registration system,
                                    allowing users to sign up using Google or Facebook accounts. Designed the system to
                                    enable users to register for activities and events managed by an admin user from the
                                    Amalia group. Empowered admin users with the ability to create, update, and delete
                                    activities from an integrated dashboard within the web application, providing them
                                    with oversight of activities and user registrations.</p>
                                <a href="https://www.ms-vlaanderen.be" target="_blank"
                                   className="text-blue-500 underline">https://www.ms-vlaanderen.be</a>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="library">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    Library - Web Application
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Developed a full-fledged library simulation web app with user and admin access, built
                                    on Spring MVC for both backend and frontend. Enabled users to search, add favorites,
                                    and explore book listings based on various criteria, enhancing user experience.
                                    Empowered admin users to manage books, including adding, editing, and deleting
                                    entries, with ISBN verification. Implemented Tailwind CSS for responsive and modern
                                    styling, providing an appealing user interface. Integrated I18n support for
                                    multi-language accessibility, improving user reach and usability.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="delaware">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    Delaware - B2B Portal
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Collaborated as part of a team of five, assisting the leader in developing a B2B
                                    portal for Delaware customers to purchase goods. Implemented role-based access
                                    control, assigning employees to specific company accounts, providing individualized
                                    overviews of orders and purchases for each company. Designed a tracking and tracing
                                    system that enabled customers to monitor the progress of their orders. Developed a
                                    Java application integrated with Delaware's internal system for order processing,
                                    featuring role-based access for different operations, including order management and
                                    transport service assignment. Utilized a technology stack that included TypeScript,
                                    Node, Java, React, PlanetScale, Prisma, and Tailwind CSS to create a functional and
                                    robust system. The project was executed as a proof of concept (POC), demonstrating
                                    the system's feasibility and functionality.</p>
                                <a href="https://www.delaware.pro" target="_blank"
                                   className="text-blue-500 underline">https://www.delaware.pro</a>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="loof">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    Loof - Discord Bot
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Independently developed Loof bot as a hobby project during the school year, creating
                                    custom commands, bot structure, and integrations from scratch. Designed the bot to
                                    be easily expandable, allowing for the addition of new features and functionality at
                                    will. Customized the bot for use in small to friend group communities, providing
                                    both fun and useful features to enhance the Discord experience.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mtwt">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    MTWT - API
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Developed a RESTful API as part of an assignment, using Koa, MongoDB, Mocha, and
                                    TypeScript. Created the API to serve as a point of communication for the MTWT group,
                                    enabling potential future use. Implemented essential features, including health
                                    checks, testing, logging, authorization, and support for database seeding and
                                    migration, aligning with modern REST API standards and practices.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="zatre">
                            <AccordionTrigger>
                                <p className="p-2 text-start">
                                    Zatre - Board Game
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Collaborated in a team of three to create a Java application with a graphical user
                                    interface (GUI) for a local board game. Conducted comprehensive analysis of the
                                    project, contributing to the development of the game's rules and mechanics.
                                    Demonstrated a strong commitment to quality and achieved top scores for the project,
                                    reflecting exceptional performance in a team development environment.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </motion.div>
    );
}