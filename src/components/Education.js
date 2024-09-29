import EducationItem from "./EducationItem";

function Education(){
        return(
            <div className="">
                <h3 className="mb-5 text-2xl font-bold text-secondary underline">Utbildning</h3>
                    <EducationItem icon='fa-solid fa-code' educationInfo={{text: 'Utbildningen gav mig breda kunskaper inom både frontend och backend. Under de kurser jag läst har jag bland annat gått igenom grundläggande och avancerad programmering i C# och .NET, agila arbetsmetoder, databaser med fokus på SQL, systemtestning, API:er, Webbutveckling och MVC. Under utbildningen har jag också gjort projekt i både Angular och React samt utövat och tränat på mina kunskaper under 2 LIA perioder. Utbildningen gav mig en stabil grund att stå på i början av min karriär som systemutvecklare.'
                    , title: 'Systemutvecklare .NET', years: '2021-2023', institution: 'Campus Varberg YH'}}></EducationItem>
                    <EducationItem icon='fa-solid fa-bolt' educationInfo={{title:"Elteknik/Automation", years: "2008-2012",
                    institution: "Pederskrivares gymnasieskola , Varberg",
                    text: "Gymnasieutbildning i elteknik med inriktning mot automation på 4 år"}}>
                    </EducationItem>
            </div>
        );
    }

export default Education;