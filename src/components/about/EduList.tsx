import {motion} from "framer-motion";

export default function EduList() {
    return (
        <motion.div
            key="edu"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-xl mx-auto px-6 sm:px-8 py-28 flex flex-col">
                <div className="py-8">
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <div className="mt-4">
                        <h4 className="text-lg font-bold">Bachelor of Science in Applied Computer Science</h4>
                        <p className="text-gray-600">Ghent University of Applied Sciences and Arts <br/>Feb 2021 - Jun
                            2024</p>
                        <p className="mt-2">Specialisation: Mobile & Enterprise development</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-bold">The Washington Center for Internships and Academic Seminars</h4>
                        <p className="text-gray-600">Washington D.C. <br/>Feb 2024 - Apr 2024</p>
                        <p className="mt-2">Class: SP4010 - Cybersecurity Policy</p>
                    </div>
                </div>
                <div className="py-8">
                    <h3 className="text-xl font-bold mb-2">Competition</h3>

                    <div className="mt-4">
                        <h4 className="text-lg font-bold">.NET Challenge</h4>
                        <p className="text-gray-600">Algorithmic competition - Dec 2023</p>
                        <p className="text-gray-600">Team size: 1</p>
                        <p className="text-gray-600">Challenge by:
                            <a className="underline px-2" target="_blank" href="https://www.delen.be/">Delen Private
                                Banking</a></p>
                        <p>Place: 1st - Student & Professional</p>
                        <div/>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-lg font-bold">The Flemish Programming Competition</h4>
                        <p className="text-gray-600">Algorithmic competition - Feb 2023</p>
                        <p className="text-gray-600">Team size: 3</p>
                        <p className="text-gray-600">Challenge by:
                            <a className="underline px-2" target="_blank"
                               href="https://www.vlaamseprogrammeerwedstrijd.be/">Vlaamse Programmeer Wedstrijd</a></p>
                        <p>Place: 6th - Category II</p>
                        <div/>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-lg font-bold">Hack The Future</h4>
                        <p className="text-gray-600">Hackathon - Oct 2022</p>
                        <p className="text-gray-600">Team size: 2</p>
                        <p className="text-gray-600">Challenge by:
                            <a className="underline px-2" target="_blank" href="https://i8c.nl/">I8C</a></p>
                        <p>Place: 2nd</p>
                        <div/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

