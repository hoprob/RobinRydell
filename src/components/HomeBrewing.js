import homebrewImg from "../img/homebrewing.jpg";

function HomeBrewing(){
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    <div className="me-5">
                        <h5 className="text-xl text-info font-bold">Hembryggning</h5>
                        <p className="text-secondary font-semibold [&>span]:text-info [&>span]:italic">
                            När jag inte kodar, brygger jag gärna öl hemma. 
                            Ölbryggning är en hobby där man verkligen kan 
                            nörda ned sig i detaljer. Just nu finslipar jag 
                            lager- och pilsnerrecept för att få fram den 
                            perfekta lagern hemma i tappen. För att lyckas 
                            använder jag en Raspberry Pi med en 
                            egenbyggd <span>Python</span>-applikation för att styra 
                            temperaturen och lagra statistik. 
                            Jag har även byggt ett <span>Angular</span>-gränssnitt 
                            för att styra jäskammaren både lokalt och på 
                            distans.<br/>                           
                            Allt i jakten på den perfekta lagern.</p>
                    </div>
                    <img className="h-60 rounded-md drop-shadow-md mb-5 sm:mb-0" src={homebrewImg} alt="Image of code"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeBrewing;