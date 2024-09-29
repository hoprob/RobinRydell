import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience() {
  return (
    <div>
      <h3 className="mb-5 space-x-2 text-2xl font-bold text-secondary underline">Arbetslivserfarenhet</h3>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Varbergs Kommun", years: "2023-06-19 – nu",
      title: "Systemutvecklare",
      text: "Under min LIA på Varbergs Kommun har jag deltagit i det dagliga arbetet med en blandning av Blazor (server- och clientside) i frontend och .NET i backend. Jag utvecklade själv en webbapplikation som fungerar som CMS mot ett system för e-tjänster där huvuddelen är byggd i Blazor och ett API för att kommunicera med det externa systemet. Ett annat projekt jag utvecklade var en integration mellan ett bokningssystem och ett passagesystem för kommunens idrottsanläggningar. Jag fick också delta i projekt tillsammans med andra teammedlemmar samt hantera kundkontakt",
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Digital Creation (LIA)", years: "2022-02-26 - 2023-05-05",
      title: "Systemutvecklare",
      text: "LIA hos Digital Creation där jag deltog i det dagliga arbetet och var med i projekt mot kunder. Jag fick möjligheten att jobba med .NET i backend och Vue och Angular i Frontend. Gjorde även mitt projektarbete här där jag utforskada AKKA.NET i en applikation för ölbryggning."
      }}>
      </WorkExperienceItem>
      <WorkExperienceItem
      icon='fa-solid fa-code'
      workExpInfo = {{company: "Varbergs Kommun (LIA)", years: "2022-11-07 – 2023-02-24",
      title: "Systemutvecklare",
      text: "Under min LIA på Varbergs Kommun har jag deltagit i det dagliga arbetet med en blandning av Blazor (server- och clientside) i frontend och .NET i backend. Jag utvecklade själv en webbapplikation som fungerar som CMS mot ett system för e-tjänster där huvuddelen är byggd i Blazor och ett API för att kommunicera med det externa systemet. Ett annat projekt jag utvecklade var en integration mellan ett bokningssystem och ett passagesystem för kommunens idrottsanläggningar. Jag fick också delta i projekt tillsammans med andra teammedlemmar samt hantera kundkontakt",
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
