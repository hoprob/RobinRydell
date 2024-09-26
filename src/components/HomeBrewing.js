import homebrewImg from "../img/homebrewing.jpg";

function HomeBrewing(){
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    <div className="me-5">
                        <h5 className="text-xl text-info font-bold">Hembryggning</h5>
                        <p className="text-secondary font-semibold [&>span]:text-info [&>span]:italic">
                        När jag inte kodar på fritiden brygger jag gärna öl hemma i mitt bryggeri. 
                        Ölbryggning är ett ämne man verkligen kan nörda ned sig i och finslipa in i de minsta detaljerna. 
                        Just nu håller jag på att finslipa lager och pilsner recept för att kunna avnjuta en 
                        perfekt lager hemma i tappen. För att lyckas med detta behöver man ju givetvis bra mjukvara. 
                        Min jäskammare styrs av en raspberry pi där jag kör en egenbyggd applikation i 
                        <span>Python</span> för att styra temperatur samt lagra statistik kring jäsningen. 
                        Den kör också en server där ett gränssnitt byggt i <span>Angular</span> gör det 
                        möjligt att styra min jäskammare både lokalt och på distans.<br/> Allt i jakten på den perfekta 
                        lagern..</p>
                    </div>
                    <img className="h-60 rounded-md drop-shadow-md mb-5 sm:mb-0" src={homebrewImg} alt="Image of code"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeBrewing;