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
  );
}

export default Jumbotron;
