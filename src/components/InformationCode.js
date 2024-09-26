import codeImg from "../img/Designer.jpeg";

function InformationCode(){
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
                <div className="flex flex-col sm:flex-row items-center">
                    <img className="h-60 rounded-md drop-shadow-md mb-5 sm:mb-0" src={codeImg} alt="Image of code"></img>
                    <div className="ms-5">
                        <h5 className="text-xl text-info font-bold">Kod är kul</h5>
                        <p className="text-secondary font-semibold [&>span]:text-info [&>span]:italic">Jag tycker det är kul att skriva kod både på jobbet och på fritiden.
                            Allra roligast är det när det finns ett problem att lösa
                            eller när jag får utforska och lära mig nya saker.
                            Hemma testar jag gärna nya ramverk, tekniker och språk
                            i mina olika projekt. Jag gillar ramverk i frontend
                            som <span className="">Angular</span>, <span>Blazor</span> och
                            <span> React</span>. I backend skriver jag för det
                             mesta <span>C#</span> och testar arkitektuter och
                            tekniker. Har även ett par hobby projekt i 
                            <span> Python</span> och skulle gärna vilja
                            lägga fokus framåt på att lära mig skriva
                            <span> Go</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationCode;