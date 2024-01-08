type TPerson = {
  name: string;
  age: number;
  isActive: boolean;
  sallary: number;
};

const getData = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1"
  );
  const data = await response.json();
  const activePersons = await data.filter((person) => person.isActive);
  await activePersons.forEach((person) => {
    person.sallary = parseInt(person.sallary) + parseInt(person.sallary) * 10;
  });
  await activePersons.sort((a, b) => {
    return a.sallary - b.sallary;
  });
  console.log(activePersons);
};

getData();
