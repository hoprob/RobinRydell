import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience() {
  return (
    <div>
      <h3 className="mb-5 space-x-2 text-2xl font-bold text-secondary underline">Arbetslivserfarenhet</h3>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Varbergs Kommun", years: "2023-06-19 – nu",
      title: "Systemutvecklare",
      text: "Som fullstack-utvecklare på Varbergs Kommun arbetar jag med Blazor i frontend och .NET i backend. Jag driver projekt självständigt med stortansvar och har mycket kundkontakt. Vid större projekt samarbetar vi i team. Jobbet ger mig även erfarenhet av att publicera och hantera applikationer i Azure samt on-prem.",
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Digital Creation (LIA)", years: "2022-02-26 - 2023-05-05",
      title: "Systemutvecklare",
      text: "LIA hos Digital Creation där jag deltog i det dagliga arbetet och var med i projekt mot kunder. Jag fick jobba med .NET i backend och Vue och Angular i frontend samt bekanta mig med tekniker som mediatR, AKKA.NET och Clean Architecture."
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Varbergs Kommun (LIA)", years: "2022-11-07 – 2023-02-24",
      title: "Systemutvecklare",
      text: "Under min LIA på Varbergs Kommun arbetade jag med Blazor i frontend och .NET i backend. Jag utvecklade en webbapplikation med databaser och API:er efter specifikationer och kunddialoger, samt integrationer mellan boknings och passagesystem för idrottsanläggningar. Jag deltog även i projekt och hanterade kundkontakt.",
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-bolt'
      workExpInfo = {{company: "Elektro Emanuel", years: "2014 - 2021",
      title: "Serviceelektriker",
      text: "Arbetade självständigt hos privatpersoner, företag och på industri med nära kundkontakt. Inriktade mig mot KNX programmering och felsökningar i styrsystem hos industrier",
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-bolt'
      workExpInfo = {{company: "Kungsäters El", years: "2012 - 2014",
      title: "Installationselektriker",
      text: "Arbetade i huvudsak med elinstallationer i nybyggnationer",
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-bolt'
      workExpInfo = {{company: "Elektro Emanuel", years: "2010 - 2012",
      title: "Lärling Installationselektriker",
      text: "Arbetade med diverse elinstallationer i lärande syfte.",
      }}>
      </WorkExperienceItem>
    </div>
  );
}

export default WorkExperience;
