import robinImg from "../img/robinrydell_midsize.jpg"
import ContactIcons from "./ContactIcons";

function AboutMe(){
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    <div className="me-5">
                        <h5 className="text-xl text-info font-bold">Låt oss prata</h5>
                        <p className="text-secondary font-semibold">
                            Om du har kommit så här långt är du förmodligen nyfiken
                            på vad jag gör och vad som fångar mitt intresse. Jag har 
                            alltid en ny utmaning på gång och gillar att lära mig nya 
                            saker, oavsett om det handlar om nya tekniker eller smartare 
                            sätt att lösa problem. Tveka inte att höra av dig om du 
                            vill veta mer eller har något spännande projekt i åtanke 
                            – du hittar mig via kontaktvägarna här nedan!</p>
                        <ContactIcons 
                            textSizeClass="text-lg"
                            spaceXClass="space-x-5">
                        </ContactIcons>
                    </div>
                    <img className="h-60 rounded-md drop-shadow-md mb-5 sm:mb-0" src={robinImg} alt="Image of me"></img>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;