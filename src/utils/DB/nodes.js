// const nodes = [
//   {
//     id: 0,
//     name: ["Lev", "Лев"],
//     surname: ["Vasilyev", "Васильев"],
//     social: {
//       vk: "https://vk.com/the_sociophobic",
//       inst: "https://instagram.com/the_sociophobic",
//       fb: "https://facebook.com/the.sociophobic",
//     },
//   },
//   {
//     id: 1,
//     name: ["Kristina", "Кристина"],
//     surname: ["Boyarkina", "Бояркина"],
//     social: {
//       vk: "",
//       inst: "",
//       fb: "",
//     },
//   },
//   {
//     id: 2,
//     name: ["David", "Давид"],
//     surname: ["Zharnitskiy", "Жарницкий"],
//     social: {
//       vk: "",
//       inst: "",
//       fb: "",
//     },
//   },
// ];

const initial = [
  "Alek Kaplun",
  "Alexander Ilyin",
  "Alexander Koshelev",
  "Alexander Kuzyakin",
  "Alexandra Kuchumova",
  "Alexandra Polosukhina",
  "Alexey Nevsky",
  "Alexey Potokin",
  "Alina Dynay",
  "Alina Mamina",
  "Alina Nesmiyan",
  "Alina Shklyarskaya",
  "Anastasiya Nemilova",
  "Anastasiya Nikitina",
  "Andrey Gabriel",
  "Andrey Koshkin",
  "Andrey Minkinen",
  "Andrey Potashev",
  "Andrey Savin",
  "AnnaMaria Chernigovskaya",
  "Anton Alexeev",
  "Anton Artanov",
  "Anton Borzenko",
  "Anton Plevako",
  "Anton Shirokov",
  "Anya Danilova",
  "Anya Grin",
  "Anya Khmeleva",
  "Anya Kudryavtseva",
  "Anya Maxutova",
  "Anya Vinogradova",
  "Arina Nachinova",
  "Arishka Bolshakova",
  "Arseniy",
  "Artyom Arsenyan",
  "Asya Dobina",
  "Canada",
  "Chemi Kun",
  "Daniil Belikov",
  "Daniil Grinzhola",
  "Daniil Merzon",
  "Daniil Vachegin",
  "Daniil Zheleznetsov",
  "Danila Poperechniy",
  "Daria Selyunina",
  "Dasha Kaminskaya",
  "Dasha Moskvina",
  "Dasha Proskuryakova",
  "David Zharnitsky",
  "Denis Drozdov",
  "Diana Ignatovich",
  "Diana Shikhalieva",
  "Dima Lutsenko",
  "Dima Potekhin",
  "Dima Pyatnitsa",
  "Dmitriy Belysh",
  "Dmitriy Tomnuk",
  "Dmitry Larin",
  "Eduard Belov",
  "Egor Bystritsky",
  "Egor Tsygankov",
  "Elena Savina",
  "Elya Novopashennaya",
  "Vita Polovinkina",
  "Emil Soldatkin",
  "Esconder",
  "Evgeny Fomenko",
  "Fedya Alexeev",
  "Feya",
  "Filip Vulakh",
  "Fill",
  "Fydor Bilef",
  "Fyodor",
  "Fyodor Ludinov",
  "Grigoriy Fenyov",
  "Grisha Vykhnovich",
  "Igor Grabuzov",
  "Igor Prostakov",
  "Igor Zhidkov",
  "Ildar Dzharahov",
  "Ilya Dorkhanov",
  "Ilya Kalmyk",
  "Ilya Meddison",
  "Ilya Roschin",
  "Ilyachan1",
  "Ilyachan2",
  "Ira",
  "Ira Bibisheva",
  "Ira Khanakhbeeva",
  "Irina Meppltorp",
  "Ivan Chukalsky",
  "Ivan Kachmar",
  "Ivan Makarov",
  "Ivan Shipitsyn",
  "Japan",
  "Jerry",
  "Julia Resh",
  "Kamilla Kadyrova",
  "Kate Alexandrova",
  "Kate Bulgakova",
  // "Kate Buyanova",
  "Kate Mironovich",
  "Kate Panfilova",
  "Kate Rusetskaya",
  "Kate Sulina",
  "Katerina Kokokulina",
  "Katrin Tublina",
  "Katya Abramova",
  "Katya Kornetova",
  "Kirill Ermakov",
  "Kirill Posterov",
  "Kirill Rokotov",
  "Kirill Scherbinskiy",
  "Klim Moisenkov",
  "Kolya Schegolev",
  "Kostya Plytech",
  "Kostya Schegolev",
  "Kostya Solovyov",
  "Kostya Unknown",
  "Kristina Boyarkina",
  "Kristina Kukushkina",
  "Ksusha Kozhevnikova",
  "Ksusha Morozova",
  "Ksusha Nesterova",
  "Ksusha Usha",
  "Lada Larkina",
  "Lena Muradymova",
  "Leo",
  "Lera",
  "Lesha Pavlov",
  "Lev Vasilyev",
  "Liza Kalmykova",
  "Liza Sorokina",
  "Lyonya Tseytin",
  "Maria Manylova",
  "Mark Kozharskiy",
  "Masha Nikitina",
  "Masha Safronova",
  "Masha Tublina",
  "Maxim Ivanov",
  "Maxim Karnaukhov",
  "Maxim ObmanBasquiat",
  "Mikhail Chuley",
  "Mikhail Lisyanskiy",
  "Mikhail Solovyov",
  "Misha Gordon",
  "Misha Kasapov",
  "Misha Tychinin",
  "Mks Astro",
  "Monro",
  "Nadezhda Novikova",
  "Nastya Bagrina",
  "Nastya Bazyka",
  "Nastya Bogdanova",
  "Nastya Homyak",
  "Nastya Pavlova",
  "Nastya Shushkova",
  "Nastya Smirnova",
  "Nastya Uhimenko",
  "Nastya Zhelavskaya",
  "Nata Naumova",
  "Natalia Uchitel",
  "Nataliya Kakhanovskaya",
  "Natasha Kozhevnikova",
  "Nika Frolova",
  "Nikita Baklazhenko",
  "Nikita Danilchenko",
  "Nikita Fadeev",
  "Nikita Loginov",
  "Nikolay Gabriel",
  // "Oleg Kalinin",
  "Oleg Provotorov",
  "Olya Bykova",
  "ParenAni1",
  "ParenAni2",
  "Pasha Nosov",
  "Patrick",
  "Petr Kostenko",
  "Podruga Lery",
  "Polina Avatulina",
  "Polina Nazarova",
  "Polina Nikolaeva",
  "Polina Rozhko",
  "Pyotr Grachev",
  "Radik Kadyrov",
  "Rodion Raskolnikov",
  "Ruslan Kudanko",
  "Ruslan Usachev",
  "Sasha Bashmakov",
  "Sasha Boyarinov",
  "Sasha Chernyshov",
  "Sasha Glutshetskiy",
  "Sasha Kovanova",
  "Sasha Zemlyanova",
  "Sergay Nikitin",
  "Sergey Married",
  "Sestra Peti",
  "Slava Golubev",
  "Sofia Mityaeva",
  "Sofiya",
  "Sofiya Mihalchenko",
  "Stepan Nesmiyan",
  "Sveta Strugatskaya",
  "Syoma Shutkin",
  "Tatyana Dengova",
  "Tikhon Timanov",
  "Timofey Belkin",
  "Timur Finov",
  "Tonya Evdokimova",
  "Ura Eroshkin",
  "Uriy Hovansky",
  "Vadim",
  "Valeria Lavrentyeva",
  "Valeriya Lapina",
  "Varya Efremova",
  "Varya Tsypuna",
  "Varya Tuchkova",
  "Varya Vodova",
  "Vasiliy Cheptsov",
  "Vera Karaseva",
  "Veronika Litvinova",
  "Veronika Voychuk",
  "Vitaliy Memes",
  "Vlad Golev",
  "Vladimir Suzdaltsev",
  "Vladislav Degtyar",
  "Vova Blinov",
  "Vovan Konovalov",
  "Yana Dubovitskaya",
  "Yana Moiseeva",
  "Yana Zarifulina",
  "Yasha Karaev",
  "Yudoshin",
  "Yulia Morozova",
  "Yulya Alexandrova",
  "Zhenya",
  "Zhenya Kozlova",
  "Zhenya Shepunov",
  "some Ionka",
  "unknown0",
  "unknown1",
];

const initialN = [
  "Aelitta Ezugbaya",
  "Alek Kaplun",
  "Alesya Nikolaeva",
  "Alexander Ilyin",
  "Alexander Koshelev",
  "Alexander Kuzyakin",
  "Alexander Lebedev",
  "Alexandra Kuchumova",
  "Alexandra Latysheva",
  "Alexandra Polosukhina",
  "Alexandra Schlyakhtina",
  "Alexandrov Konstantin",
  "Alexey Fastovets",
  "Alexey Nevsky",
  "Alexey PavlovRyzhyi",
  "Alexey Potokin",
  "Alina Dynay",
  "Alina Khadzhakhova",
  "Alina Mamina",
  "Alina Nesmiyan",
  "Alina Shklyarskaya",
  "Alisa Verhovskaya",
  "Anastasiya Batanina",
  "Anastasiya Nemilova",
  "Anastasiya Nikitina",
  "Andrey Gabriel",
  "Andrey Koshkin",
  "Andrey Minkinen",
  "Andrey Potashev",
  "Andrey Savin",
  "Angelina Ryabchenko",
  "Anna Vasilyeva",
  "Anna Vilpon",
  "AnnaMaria Chernigovskaya",
  "Anton Alexeev",
  "Anton Artanov",
  "Anton Borzenko",
  "Anton Plevako",
  "Anton Shirokov",
  "Anya Chernyshova",
  "Anya Danilova",
  "Anya Doroshenko",
  "Anya Grin",
  "Anya Ivanova",
  "Anya Ivanova2",
  "Anya Khmeleva",
  "Anya Kosti",
  "Anya Kudryavtseva",
  "Anya Kuzlo",
  "Anya Maxutova",
  "Anya Novik",
  "Anya Vinogradova",
  "Anya Zinevich",
  "Anzhela Groznova",
  "Archi",
  "Arina Gavrilova",
  "Arina Nachinova",
  "Arishka Bolshakova",
  "Arseniy",
  "Artyom Afanasyev",
  "Artyom Arsenyan",
  "Artyom Makarov",
  "Artyomka Dotrakiyskiy",
  "Asya Dobina",
  "Boris Evdokimov",
  "Chemi Kun",
  "Daniil Belikov",
  "Daniil Grinzhola",
  "Daniil Merzon",
  "Daniil Vachegin",
  "Daniil Zheleznetsov",
  "Danila Poperechniy",
  "Daria Selyunina",
  "Darya Beresneva",
  "Darya Gerasimova",
  "Darya Romanovskaya",
  "Dasha Kaminskaya",
  "Dasha Moskvina",
  "Dasha Proskuryakova",
  "David Zharnitsky",
  "Denis Drozdov",
  "Diana Ignatovich",
  "Diana Shikhalieva",
  "Dima Lutsenko",
  "Dima Potekhin",
  "Dima Pyatnitsa",
  "Dmitriy Belysh",
  "Dmitriy Tomnuk",
  "Dmitry Larin",
  "Eduard Belov",
  "Egor Bystritsky",
  "Egor Chaos",
  "Egor Kozyrev",
  "Egor Tsygankov",
  "Ekaterina Saprykina",
  "Elena Savina",
  "Elizaveta Barkova",
  "Elizaveta Horetzhkaya",
  "Elizaveta Pashkovskaya",
  "Elya Novopashennaya",
  "Emil Nepravda",
  "Emil Soldatkin",
  "Esconder",
  "Evgeniya Damme",
  "Evgeny Fomenko",
  "Fedya Alexeev",
  "Feya",
  "Filip Vulakh",
  "Fill",
  "Fydor Bilef",
  "Fyodor",
  "Fyodor Ludinov",
  "German Berezhko",
  "Gleb Pechorin",
  "Grigoriy Fenyov",
  "Grisha Vykhnovich",
  "Igor Grabuzov",
  "Igor Molchanov",
  "Igor Prostakov",
  "Igor Zhidkov",
  "Ildar Dzharahov",
  "Ilya Dorkhanov",
  "Ilya Kalmyk",
  "Ilya Kotkin",
  "Ilya Meddison",
  "Ilya Roschin",
  "Ilyachan1",
  "Ilyachan2",
  "Ira",
  "Ira Bibisheva",
  "Ira Khanakhbeeva",
  "Irina Meppltorp",
  "Ivan Chukalsky",
  "Ivan Kachmar",
  "Ivan Makarov",
  "Ivan Shipitsyn",
  "Jerry",
  "Julia Resh",
  "Kamilla Kadyrova",
  "Kate Alexandrova",
  "Kate Bulgakova",
  // "Kate Buyanova",
  "Kate Mironovich",
  "Kate Panfilova",
  "Kate Rusetskaya",
  "Kate Sizova",
  "Kate Sulina",
  "Katerina Kokokulina",
  "Katrin Tublina",
  "Katya Abramova",
  "Katya Butovskaya",
  "Katya Hlebushkina",
  "Katya Kalmitskaya",
  "Katya Kornetova",
  "Katya Matveeva",
  "Kira Kastaneda",
  "Kira Longvenova",
  "Kirill Ermakov",
  "Kirill Posterov",
  "Kirill Rokotov",
  "Kirill Scherbinskiy",
  "Klim Moisenkov",
  "Kolya Schegolev",
  "Kostya Plytech",
  "Kostya Schegolev",
  "Kostya Solovyov",
  "Kostya Unknown",
  "Kristina Boyarkina",
  "Kristina Gavrilova",
  "Kristina Kukushkina",
  "Ksusha Kozhevnikova",
  "Ksusha Morozova",
  "Ksusha Nesterova",
  "Ksusha Usha",
  "Lada Larkina",
  "Lena Korobko",
  "Lena Korzh",
  "Lena Muradymova",
  "Leo",
  "Leonid Dmitriev",
  "Lera",
  "Lera Zhuk",
  "Lesha Pavlov",
  "Lev Vasilyev",
  "Liza Kalmykova",
  "Liza Korshunova",
  "Liza Pashkovskaya",
  "Liza Sorokina",
  "Liza Vlasova",
  "Liza Yeromkina",
  "Lubov Burukhina",
  "Lyonya Tseytin",
  "Margarita Kiseleva",
  "Maria Alexeeva",
  "Maria Manylova",
  "Mariya Oshurpova",
  "Mariya Semyonova",
  "Mariya Stolik",
  "Mark Kozharskiy",
  "Masha Nikitina",
  "Masha Safronova",
  "Masha Tublina",
  "Maxim Ivanov",
  "Maxim Karnaukhov",
  "Maxim Lebedev",
  "Maxim ObmanBasquiat",
  "Michel Tevotia",
  "Mikhail Chuley",
  "Mikhail Lisyanskiy",
  "Mikhail Solovyov",
  "Misha Gordon",
  "Misha Kasapov",
  "Misha Tychinin",
  "Mks Astro",
  "Monro",
  "Nadezhda Novikova",
  "Nastya Bagrina",
  "Nastya Bazyka",
  "Nastya Bogdanova",
  "Nastya Dal",
  "Nastya Homyak",
  "Nastya Ivanova",
  "Nastya Klukova",
  "Nastya Kozlova",
  "Nastya Pavlova",
  "Nastya Shushkova",
  "Nastya Smirnova",
  "Nastya Solovyova",
  "Nastya Uhimenko",
  "Nastya Zhelavskaya",
  "Nata Naumova",
  "Natalia Uchitel",
  "Nataliya Kakhanovskaya",
  "Natasha Kozhevnikova",
  "Nika Frolova",
  "Nikita Baklazhenko",
  "Nikita Danilchenko",
  "Nikita Fadeev",
  "Nikita Loginov",
  "Nikolay Gabriel",
  "Nina Ivanova",
  // "Oleg Kalinin",
  "Oleg Provotorov",
  "Olya Bykova",
  "ParenAni1",
  "ParenAni2",
  "Pasha Klimachov",
  "Pasha Nosov",
  "Patrick",
  "Pavel Gultyaev",
  "Petr Kostenko",
  "Podruga Lery",
  "Polina Avatulina",
  "Polina Makarova",
  "Polina Nazarova",
  "Polina Nikolaeva",
  "Polina Rozhko",
  "Pyotr Grachev",
  "Radik Kadyrov",
  "Rodion Raskolnikov",
  "Rolan Alexeev",
  "Ronya Shurze",
  "Ruslan Kudanko",
  "Ruslan Usachev",
  "Sabina Isaeva",
  "Sasha Bashmakov",
  "Sasha Boyarinov",
  "Sasha Chernyshov",
  "Sasha Glutshetskiy",
  "Sasha Kovanova",
  "Sasha Zemlyanova",
  "Sergay Nikitin",
  "Sergey Married",
  "Sestra Peti",
  "Slava Golubev",
  "Sofia Mityaeva",
  "Sofiya",
  "Sofiya Mihalchenko",
  "Sonya Krasnobaeva",
  "Stepan Nesmiyan",
  "Sveta Ivanova",
  "Sveta Strugatskaya",
  "Sveta Topol",
  "Svetlana Klyavlina",
  "Syoma Shutkin",
  "Tatyana Dengova",
  "Tikhon Timanov",
  "Timofey Belkin",
  "Timur Finov",
  "Tonya Evdokimova",
  "Tonya Kuper",
  "Uliya Babaeva",
  "Uliya Korzh",
  "Ura Eroshkin",
  "Uriy Hovansky",
  "Vadim",
  "Valeria Lavrentyeva",
  "Valeriya Lapina",
  "Varya Efremova",
  "Varya Tsypuna",
  "Varya Tuchkova",
  "Varya Vodova",
  "Vasilisa Ikonnikova",
  "Vasilisa Nesterenko",
  "Vasiliy Cheptsov",
  "Venya Migay",
  "Vera Karaseva",
  "Vera Tsygankova",
  "Veronika Litvinova",
  "Veronika Voychuk",
  "Vika Ermolaeva",
  "Vika Nikolaeva",
  "Viktor Maffin",
  "Viktoriya Begaeva",
  "Viktoriya Gil",
  "Viktoriya Shanina",
  "Vitaliy Memes",
  "Vlad Golev",
  "Vladimir Eldzhin",
  "Vladimir Suzdaltsev",
  "Vladislav Degtyar",
  "Vova Blinov",
  "Vovan Konovalov",
  "Yana Doza",
  "Yana Dubovitskaya",
  "Yana Moiseeva",
  // "Yana Zarifulina",
  "Yaroslava Gordeeva",
  "Yasha Karaev",
  "Yudoshin",
  "Yulia Alentieva",
  "Yulia Morozova",
  "Yulya Alexandrova",
  "Yulya Meller",
  "Yura Evstigneev",
  "Zhenya",
  "Zhenya Kozlova",
  "Zhenya Shepunov",
  "unknown0",
  "unknown1",
];

var nodes = initialN
.map((name, index) => {
  return {
    id: index,
    name: name.split(" ")[0],
    surname: name.split(" ").length > 1 ? name.split(" ")[1] : "",
    social: {
      vk: "",
      inst: "",
      fb: "",
    },
  };
});

export default nodes;
