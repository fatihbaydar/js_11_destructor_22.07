//object destructing

const product = {
  id: 123,
  brand: "samsung",
  type: "samrt phone",
  price: 2000,
};

// nokta notasyonu:
console.log(product.id);

// köşeli parantez
console.log(product["brand"]);

let ids = product.id;
ids = "678"; // yapılan değişiklik objeyi etkilemez

console.log(ids);
console.log(product.id);

let brands = product["brand"];
console.log(brands);

const product2 = {
  id: 678,
  brand: "apple",
  type: "samrt phone",
  price: 3000,
};

//object destructuring

const { id, price } = product2;
console.log(id, price);

{
  const { id, brand } = product; // {} ile yeni bir alan oluşturunca consola yazdı. {} açmasydık hata verirdi.
  console.log(id, brand);
}

// varsayılan değer

const person = {
  personName: "Jean-Jacques",
  surname: "Rousseau",
};

let { personName, surname, age = 66 } = person; // destructing yaparken nesnede olmayan bir özelliği varsayılan değer olarak tanımlayabiliriz
console.log(personName, surname, age);

const person2 = {
  personName: "John",
  surname: "Doe",
};

let { personName: userName, surname: UserSurname, Userage = 66 } = person2;
//
console.log(userName, UserSurname, Userage);

// fonksiyonlarda object destructing

const person3 = {
  personName: "Jane",
  surname: "Doe",
};

const printPerson = (a) => {
  console.log(`Name: ${a.personName} Surname :${a.surname}`);
};

printPerson(person2);
printPerson(person3);

// const printPerson2 = (person) => {
//     const
// }

const objectReturn = function () {
  return {
    name: "Mark",
    surName: "Brown",
    location: "Turkey",
  };
};

let { surName, name } = objectReturn();
console.log(name, surName);

// nested içiçe objelerde destructing:

const user = {
  name: "Mark",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Istanbul",
    zip: "12345",
  },
};

console.log(user.address.city);

//   const {name, address} = user
//   console.log(name,address);

// const {adress:{city,zip,street}} = user
// console.log(city,zip,street);

const company = {
  name: "Tech Corp",
  location: {
    country: "USA",
    address: {
      street: "456 Tech Road",
      city: "Innovation",
      zip: "67890",
    },
  },
  employees: [
    { name: "John", position: "Developer" },
    { name: "Jane", position: "Designer" },
  ],
};

const {
  location: {
    address: { city: companyCity },
  },
} = company;
console.log(companyCity);

//Array Destructing:
const num = [1, 2, 3, 4, 5, 6, 7];

let [first, second, thirth] = num;

console.log(first);
console.log(second);
console.log(thirth);

//item skipping
const num2 = [1, 2, 3, 4, 5, 6, 7];
let [birinci, , , forth, fifth] = num2; // 2 ve 3 almak istemiyorsak , koyduk
console.log(birinci);
console.log(forth);
console.log(fifth);

// nested arraylerde destructing
const nestedArray = [1, 2, [3, 4], 5, 6, 7];
let [, , nested, besinci] = nestedArray;

console.log(nested); // [3,4] döner
console.log(besinci); // 5

let [bir, iki, [üc], bes] = nestedArray;
console.log(üc);

// rest operatoru
// arraylarde rest

const araclar = ["kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minibüs"];

const [arac1, arac2, , ...binek] = araclar;
console.log(arac1);
console.log(arac2);
console.log(binek);

//objectlerde rest

const person4 = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
};

const { soyad, yas, ...gerisi } = person4; // isimle çağrılanlar dışındakileri obje olarak döndürür

console.log(soyad, yas, gerisi);

// fonkisyonlarda rest operatörü
const topla = (a, b) => a + b;
console.log(topla(1, 2, 3, 4, 5));

const toplam = (...sayilar) => {
  console.log(sayilar);
  return sayilar.reduce((a, b) => a + b);
};
console.log(toplam(1, 2, 3, 4, 5));

// spread operatörü
// objelerde spread operatörü
const person5 = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
};

const person6 = person5;
person5.yas = 41;
console.log(person5.yas);
console.log(person6.yas);

const person7 = { ...person5 };
console.log(person7);

person5.yas += 1;
console.log(person5.yas);
console.log(person7.yas);
console.log(person6.yas);

// arraylerde spread operatörü
const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "marti"];

const tumAraclar = [ucanAraclar, karaAracları]; // nested bir array oluşturur
console.log(tumAraclar);

const tumAraclar2 = [...karaAracları, ...ucanAraclar];
console.log(tumAraclar2);
