import ContactIcons from './ContactIcons';

function Jumbotron() {
  return (
    <div className="w-full flex items-center flex-col space-y-16">
      <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
        <div className="flex flex-col space-y-2">
          <h5 className="text-secondary text-xl font-semibold">
          <span>Hej där, mitt namn är Robin <span className="text-4xl animate-waving-hand inline-block origin-bottom-right">👋</span></span>
          </h5>
          <h2 className="text-info text-3xl font-bold">Systemutvecklare</h2>
          <p className="text-secondary text-xl font-semibold">
            Drivs av att lösa problem med hjälp av kod i både front- och
            backend.
          </p>
        </div>
      </div>
      <ContactIcons></ContactIcons>
    </div>
    // <div className="lg:m-10 sm:m-5 m-2 flex justify-center">
    //   <div className="bg-primary md:max-h-80 md:max-w-2xl flex p-5 rounded-md sm:flex-row flex-col items-center drop-shadow-lg">
    //     <div className="flex items-center sm:w-1/3">
    //       <img src={jumbotronImg} className="w-full md:max-w-72 object-cover h-auto" alt="logo" />
    //     </div>
    //     <div className="ms-5 flex flex-col h-full justify-between sm:w-2/3">
    //       <div className='space-y-1'>
    //         <h4 className="text-2xl text-info">Robin Rydell</h4>
    //         <h5 className="text-3xl text-secondary">Systemutvecklare</h5>
    //         <p className="text-info pt-2">
    //           En utvecklare som gillar att utvecklas medans jag utvecklar saker
    //           som behöver utveckling i en utvecklande miljö på ett utvecklat
    //           sätt.
    //         </p>
    //       </div>

    //       <div className="flex align-bottom justify-between w-full">
    //         <button className="py-1.5 px-5 ms-5 rounded-md text-dark bg-secondary hover:drop-shadow-lg">
    //           Gå hit
    //         </button>
    //         <button className="py-1.5 px-5 me-5 rounded-md text-dark bg-secondary hover:drop-shadow-lg">
    //           Gå dit
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Jumbotron;
