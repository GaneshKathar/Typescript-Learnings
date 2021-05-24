export {};
function printForecast({
  currentDate,
  whether,
}: {
  currentDate: Date;
  whether: string;
}): void {
  console.log(currentDate);
  console.log(whether);
}

const person = {
  name: "ganesh",
  age: 23,
  coordinates: {
    lat: 123,
    lan: 2312,
  },
};

const { name }: { name: string } = person;
const {
  coordinates: { lat, lan },
}: { coordinates: { lat: number; lan: number } } = person;
