import nodes from './nodes.js';

// const edges = [
//   {
//     nodes: [
//       {
//         id: 0,
//         accepted: true,
//         privacyType: "anyone",
//       },
//       {
//         id: 2,
//         accepted: true,
//         privacyType: "anyone",
//       },
//     ],
//     date: "",
//     approved: true,
//   },
//   {
//     nodes: [
//       {
//         id: 1,
//         accepted: true,
//         privacyType: "anyone",
//       },
//       {
//         id: 2,
//         accepted: true,
//         privacyType: "anyone",
//       },
//     ],
//     date: "",
//     approved: true,
//   },
// ];

const initial = [
  ["Alek Kaplun", "Pasha Nosov", "Varya Tuchkova"],
  ["Alexander Koshelev", "Katrin Tublina"],
  ["Alexandra Polosukhina", "Kristina Kukushkina"],
  ["Alexey Potokin", "Anya Vinogradova"],
  ["Alina Dynay", "Monro"],
  ["Alina Nesmiyan", "Sergay Nikitin"],
  ["Andrey Gabriel", "Anya Khmeleva", "Kate Panfilova", "Nastya Pavlova", "Nika Frolova", "Zhenya Kozlova"],
  ["Andrey Koshkin", "Nastya Pavlova", "unknown0"],
  ["Anton Alexeev", "Dasha Proskuryakova", "Ksusha Kozhevnikova", "Varya Tsypuna"],
  ["Anton Borzenko", "Kirill Ermakov"],
  ["Anton Plevako", "Ilya Roschin"],
  ["Anya Danilova", "Kostya Solovyov", "Zhenya Shepunov"],
  ["Anya Grin", "Daniil Grinzhola", "Dima Lutsenko", "Feya", "Grigoriy Fenyov", "Lev Vasilyev", "Maxim Ivanov", "Mikhail Chuley", "Timur Finov"],
  ["Anya Khmeleva", "Artyom Arsenyan", "Daniil Merzon", "Nastya Pavlova", "Slava Golubev"],
  ["Anya Maxutova", "ParenAni1", "ParenAni2"],
  ["Arina Nachinova", "Katrin Tublina"],
  ["Arishka Bolshakova", "Arseniy", "David Zharnitsky", "Nata Naumova", "Sofiya Mihalchenko"],
  ["Arseniy", "Nata Naumova"],
  ["Artyom Arsenyan", "Kate Alexandrova", "Monro", "Nadezhda Novikova"],
  ["Kate Alexandrova", "Ildar Dzharahov", "David Zharnitsky", "Nata Naumova", "Arishka Bolshakova"],
  ["Daniil Belikov", "Alexandra Polosukhina", "Kristina Kukushkina"],
  ["Daniil Vachegin", "Alina Shklyarskaya", "Dasha Kaminskaya"],
  ["Danila Poperechniy", "Ruslan Usachev"],
  ["David Zharnitsky", "AnnaMaria Chernigovskaya", "Dasha Proskuryakova", "Lena Muradymova", "Lev Vasilyev", "Liza Kalmykova", "Maria Manylova", "Masha Tublina", "Nata Naumova", "Natalia Uchitel", "Polina Nikolaeva", "Sveta Strugatskaya"],
  ["Diana Shikhalieva", "Kostya Plytech"],
  ["Dima Potekhin", "Anya Grin", "Nastya Pavlova"],
  ["Dmitry Larin", "Julia Resh"],
  ["Egor Bystritsky", "Anya Grin", "Dima Potekhin", "Nastya Pavlova"],
  ["Elena Savina", "Andrey Savin", "Artyom Arsenyan"],
  ["Vita Polovinkina", "Lev Vasilyev"],
  ["Evgeny Fomenko", "Anya Grin", "Kate Mironovich", "Lev Vasilyev"],
  ["Fedya Alexeev", "Vita Polovinkina", "Misha Gordon"],
  ["Feya", "Elya Novopashennaya"],
  ["Filip Vulakh", "Sasha Boyarinov"],
  ["Fydor Bilef", "Lada Larkina", "Nastya Pavlova"],
  ["Fyodor", "Dasha Moskvina"],
  ["Fyodor Ludinov", "Anya Khmeleva"],
  ["Grisha Vykhnovich", "Nastya Zhelavskaya"],
  ["Igor Grabuzov", "David Zharnitsky", "Kate Bulgakova", "Lev Vasilyev"],
  ["Igor Zhidkov", "Nastya Uhimenko", "Nikita Danilchenko", "Sergay Nikitin"],
  ["Ildar Dzharahov", "Uriy Hovansky"],
  ["Ilya Dorkhanov", "Ilyachan1", "Ilyachan2", "Valeria Lavrentyeva"],
  ["Ilya Roschin", "Ksusha Morozova"],
  ["Ira Khanakhbeeva", "Leo"],
  ["Ivan Kachmar", "Alina Mamina"],
  ["Ivan Shipitsyn", "Anya Grin", "Egor Bystritsky", "Nastya Pavlova"],
  ["Julia Resh", "Ildar Dzharahov"],
  ["Kate Bulgakova", "David Zharnitsky", "Dmitriy Belysh", "Misha Kasapov", "Nata Naumova"],
  ["Kate Mironovich", "Alexander Kuzyakin", "Dima Lutsenko", "Vladislav Degtyar"],
  ["Kate Sulina", "Anton Artanov"],
  ["Katerina Kokokulina", "Mikhail Solovyov"],
  ["Katrin Tublina", "David Zharnitsky", "Emil Soldatkin"],
  ["Kirill Ermakov", "Kate Bulgakova", "Kate Sulina", "Yana Moiseeva", "unknown1"],
  ["Kirill Posterov", "Anya Khmeleva", "Kate Alexandrova", "Katya Kornetova", "Nastya Bagrina", "Tatyana Dengova", "Vera Karaseva", "Yana Zarifulina"],
  ["Klim Moisenkov", "Yana Moiseeva"],
  ["Kolya Schegolev", "Nastya Pavlova", "Sasha Kovanova"],
  ["Kostya Schegolev", "Sasha Kovanova"],
  ["Kostya Solovyov", "Anastasiya Nikitina", "Arishka Bolshakova", "Ira Bibisheva", "Ksusha Nesterova", "Nastya Bogdanova", "Rodion Raskolnikov", "Vera Karaseva"],
  ["Kristina Boyarkina", "Arishka Bolshakova", "Arseniy", "David Zharnitsky", "Nata Naumova", "Sasha Chernyshov", "Tikhon Timanov"],
  ["Ksusha Kozhevnikova", "Artyom Arsenyan"],
  ["Ksusha Usha", "Dmitry Larin"],
  ["Lera", "Anton Shirokov"],
  ["Lesha Pavlov", "Diana Ignatovich", "Podruga Lery", "Sasha Kovanova", "Sestra Peti"],
  ["Lev Vasilyev", "Dasha Moskvina", "Fyodor Ludinov", "Monro", "Vadim", "some Ionka"],
  ["Liza Kalmykova", "Kirill Rokotov"],
  ["Lyonya Tseytin", "Anya Kudryavtseva", "Asya Dobina", "Katrin Tublina", "Leo", "Polina Rozhko"],
  ["Mark Kozharskiy", "Ilya Roschin", "Ivan Makarov"],
  ["Masha Nikitina", "Vera Karaseva"],
  ["Masha Safronova", "Dmitriy Tomnuk", "Igor Prostakov"],
  ["Maxim Karnaukhov", "Daria Selyunina", "Liza Sorokina"],
  ["Misha Kasapov", "Ksusha Usha"],
  ["Mks Astro", "Jerry", "Nastya Pavlova"],
  ["Monro", "Arishka Bolshakova", "David Zharnitsky", "Denis Drozdov", "Igor Prostakov", "Maxim ObmanBasquiat", "Nastya Pavlova", "Nata Naumova"],
  ["Nastya Bazyka", "Ivan Chukalsky"],
  ["Nastya Homyak", "Fyodor Ludinov"],
  ["Nastya Pavlova", "Andrey Potashev", "Anya Grin", "Chemi Kun", "Ivan Kachmar", "Kirill Posterov", "Misha Tychinin", "Patrick", "Pyotr Grachev", "Slava Golubev", "Varya Vodova", "Yudoshin", "some Ionka"],
  ["Nastya Shushkova", "Andrey Koshkin", "Fyodor Ludinov", "Nikolay Gabriel"],
  ["Nastya Smirnova", "Anton Plevako"],
  ["Nastya Zhelavskaya", "Artyom Arsenyan"],
  ["Nata Naumova", "Alina Dynay", "David Zharnitsky", "Lena Muradymova"],
  ["Natasha Kozhevnikova", "Sasha Chernyshov", "Tikhon Timanov"],
  ["Nikita Baklazhenko", "Canada", "Igor Zhidkov", "Irina Meppltorp", "Nikita Danilchenko"],
  ["Nikita Danilchenko", "Kate Rusetskaya"],
  ["Nikita Loginov", "Alexandra Kuchumova", "Anya Maxutova"],
  ["Oleg Provotorov", "Nastya Bogdanova"],
  ["Olya Bykova", "Ivan Kachmar", "Veronika Litvinova"],
  ["Pasha Nosov", "Yasha Karaev"],
  ["Petr Kostenko", "Nastya Shushkova"],
  ["Polina Avatulina", "Kamilla Kadyrova", "Radik Kadyrov", "Ruslan Kudanko", "Sasha Glutshetskiy", "Sofiya Mihalchenko", "Yana Dubovitskaya"],
  ["Polina Nazarova", "Alexey Nevsky", "Dima Pyatnitsa", "Mikhail Lisyanskiy", "Nikita Fadeev", "Syoma Shutkin", "Vitaliy Memes", "Vlad Golev"],
  ["Pyotr Grachev", "Kristina Kukushkina"],
  ["Rodion Raskolnikov", "Kostya Solovyov", "Nastya Bogdanova"],
  ["Ruslan Usachev", "Ildar Dzharahov", "Uriy Hovansky"],
  ["Sasha Bashmakov", "Ira", "Nataliya Kakhanovskaya"],
  ["Sasha Boyarinov", "unknown0"],
  ["Sasha Kovanova", "Daniil Zheleznetsov", "Dima Lutsenko", "Esconder", "Nastya Pavlova", "Timur Finov", "some Ionka"],
  ["Sasha Zemlyanova", "Kristina Kukushkina"],
  ["Sergay Nikitin", "Ilya Roschin", "Kristina Kukushkina", "Lev Vasilyev", "Nastya Uhimenko", "Sofiya"],
  ["Sofia Mityaeva", "Arseniy", "David Zharnitsky", "Eduard Belov", "Kristina Boyarkina", "Nata Naumova", "Vadim"],
  ["Stepan Nesmiyan", "Alina Nesmiyan"],
  ["Syoma Shutkin", "Japan"],
  ["Timofey Belkin", "Valeriya Lapina"],
  ["Tonya Evdokimova", "Alexander Ilyin", "Egor Tsygankov", "Kostya Unknown", "Lesha Pavlov", "Sergey Married"],
  ["Ura Eroshkin", "Ira Khanakhbeeva", "Leo"],
  ["Uriy Hovansky", "Ilya Meddison"],
  ["Vadim", "Alina Dynay", "Anastasiya Nemilova", "David Zharnitsky", "Ilya Kalmyk", "Monro"],
  ["Valeriya Lapina", "Kirill Ermakov"],
  ["Varya Efremova", "Dmitriy Tomnuk"],
  ["Varya Vodova", "Artyom Arsenyan", "Kirill Scherbinskiy", "Zhenya"],
  ["Vasiliy Cheptsov", "Kate Sulina"],
  ["Veronika Litvinova", "Fydor Bilef", "Nastya Pavlova"],
  ["Veronika Voychuk", "Nastya Bogdanova"],
  ["Vladimir Suzdaltsev", "Varya Tuchkova"],
  ["Vova Blinov", "Kirill Ermakov"],
  ["Vovan Konovalov", "Ira Bibisheva", "Katya Abramova", "Ksusha Nesterova"],
  ["Yasha Karaev", "Lyonya Tseytin", "Varya Tuchkova"],
  ["Yulia Morozova", "Andrey Minkinen"],
  ["Yulya Alexandrova", "Fill"],
  ["unknown1", "Kostya Solovyov"],
];

const initialN = [
  ["Alek Kaplun", "Pasha Nosov", "Varya Tuchkova"],
  ["Alexander Koshelev", "Katrin Tublina"],
  ["Alexander Lebedev", "Aelitta Ezugbaya", "Alexey Fastovets", "Alexey PavlovRyzhyi", "Anya Chernyshova", "Anya Doroshenko", "Anya Ivanova", "Anya Ivanova2", "Anya Kuzlo", "Anya Zinevich", "Arina Gavrilova", "Artyom Afanasyev", "Artyom Makarov", "Artyomka Dotrakiyskiy", "Egor Chaos", "Elizaveta Barkova", "Gleb Pechorin", "Igor Molchanov", "Katya Butovskaya", "Katya Hlebushkina", "Katya Kalmitskaya", "Katya Matveeva", "Kira Longvenova",  "Lena Korzh", "Lera Zhuk", "Liza Korshunova", "Liza Pashkovskaya", "Liza Yeromkina", "Mariya Oshurpova", "Nastya Dal", "Nastya Ivanova", "Nastya Klukova", "Nastya Kozlova", "Nastya Solovyova", "Pavel Gultyaev", "Sveta Ivanova", "Tonya Kuper", "Uliya Babaeva", "Venya Migay", "Vera Tsygankova", "Vika Ermolaeva", "Yana Doza", "Yulya Meller", "Yura Evstigneev"],
  ["Alexandra Latysheva", "Ilya Kotkin", "Lyonya Tseytin"],
  ["Alexandra Polosukhina", "Kristina Kukushkina"],
  ["Alexandrov Konstantin", "Anna Vilpon", "Anya Kosti", "Evgeniya Damme", "Leonid Dmitriev", "Liza Vlasova", "Ronya Shurze", "Sveta Topol", "Uliya Korzh", "Vasilisa Nesterenko"],
  ["Alexey Potokin", "Anya Vinogradova"],
  ["Alina Dynay", "Monro"],
  ["Alina Nesmiyan", "Sergay Nikitin"],
  ["Andrey Gabriel", "Anya Khmeleva", "Kate Panfilova", "Nastya Pavlova", "Nika Frolova", "Zhenya Kozlova"],
  ["Andrey Koshkin", "Nastya Pavlova", "unknown0"],
  ["Anton Alexeev", "Dasha Proskuryakova", "Ksusha Kozhevnikova", "Varya Tsypuna"],
  ["Anton Borzenko", "Kirill Ermakov"],
  ["Anton Plevako", "Anzhela Groznova", "Ilya Roschin"],
  ["Anya Danilova", "Kostya Solovyov", "Zhenya Shepunov"],
  ["Anya Grin", "Daniil Grinzhola", "Dima Lutsenko", "Feya", "Grigoriy Fenyov", "Lev Vasilyev", "Maxim Ivanov", "Mikhail Chuley", "Timur Finov"],
  ["Anya Khmeleva", "Artyom Arsenyan", "Daniil Merzon", "Nastya Pavlova", "Slava Golubev"],
  ["Anya Maxutova", "ParenAni1", "ParenAni2"],
  ["Anya Novik", "Alexander Lebedev"],
  ["Archi", "Alisa Verhovskaya", "Angelina Ryabchenko", "Boris Evdokimov", "Ekaterina Saprykina", "Elizaveta Horetzhkaya", "Elizaveta Pashkovskaya", "Mariya Semyonova", "Polina Makarova", "Svetlana Klyavlina", "Vika Nikolaeva"],
  ["Arina Nachinova", "Katrin Tublina"],
  ["Arishka Bolshakova", "Arseniy", "David Zharnitsky", "Kate Alexandrova", "Kira Kastaneda", "Nata Naumova", "Sofia Mityaeva", "Sofiya Mihalchenko"],
  ["Arseniy", "Nata Naumova"],
  ["Artyom Arsenyan", "Kate Alexandrova", "Monro", "Nadezhda Novikova"],
  ["Boris Evdokimov", "Alesya Nikolaeva", "Darya Beresneva", "Kristina Gavrilova", "Lena Korobko", "Michel Tevotia", "Sabina Isaeva", "Vasilisa Ikonnikova", "Yulia Alentieva"],
  ["Daniil Belikov", "Alexandra Polosukhina", "Kristina Kukushkina"],
  ["Daniil Vachegin", "Alina Shklyarskaya", "Dasha Kaminskaya"],
  ["Danila Poperechniy", "Ruslan Usachev"],
  ["David Zharnitsky", "AnnaMaria Chernigovskaya", "Dasha Proskuryakova", "Kate Alexandrova", "Kira Kastaneda", "Lena Muradymova", "Lev Vasilyev", "Liza Kalmykova", "Maria Manylova", "Masha Tublina", "Nata Naumova", "Natalia Uchitel", "Polina Nikolaeva", "Sonya Krasnobaeva", "Sveta Strugatskaya"],
  ["Diana Shikhalieva", "Kostya Plytech"],
  ["Dima Potekhin", "Anya Grin", "Nastya Pavlova"],
  ["Dmitriy Tomnuk", "Ira Bibisheva", "Kostya Solovyov", "Pasha Klimachov"],
  ["Dmitry Larin", "Julia Resh"],
  ["Egor Bystritsky", "Anya Grin", "Dima Potekhin", "Nastya Pavlova"],
  ["Elena Savina", "Andrey Savin", "Artyom Arsenyan"],
  ["Emil Nepravda", "Lev Vasilyev"],
  ["Evgeny Fomenko", "Anya Grin", "Kate Mironovich", "Lev Vasilyev"],
  ["Fedya Alexeev", "Emil Nepravda", "Misha Gordon"],
  ["Feya", "Elya Novopashennaya"],
  ["Filip Vulakh", "Sasha Boyarinov"],
  ["Fydor Bilef", "Lada Larkina", "Nastya Pavlova"],
  ["Fyodor", "Dasha Moskvina"],
  ["Fyodor Ludinov", "Anya Khmeleva"],
  ["Grisha Vykhnovich", "Nastya Zhelavskaya"],
  ["Igor Grabuzov", "David Zharnitsky", "Kate Bulgakova", "Lev Vasilyev"],
  ["Igor Zhidkov", "Alexander Lebedev", "Nastya Uhimenko", "Nikita Danilchenko", "Sergay Nikitin"],
  ["Ildar Dzharahov", "Uriy Hovansky"],
  ["Ilya Dorkhanov", "Ilyachan1", "Ilyachan2", "Valeria Lavrentyeva"],
  ["Ilya Roschin", "Ksusha Morozova"],
  ["Ira Khanakhbeeva", "Leo"],
  ["Ivan Kachmar", "Alina Mamina"],
  ["Ivan Makarov", "Maxim Lebedev", "Nata Naumova"],
  ["Ivan Shipitsyn", "Anya Grin", "Egor Bystritsky", "Nastya Pavlova"],
  ["Julia Resh", "Ildar Dzharahov"],
  ["Kate Bulgakova", "David Zharnitsky", "Dmitriy Belysh", "Misha Kasapov", "Nata Naumova"],
  ["Kate Mironovich", "Alexander Kuzyakin", "Dima Lutsenko", "Vladislav Degtyar"],
  ["Kate Rusetskaya", "Anya Novik", "Nastya Uhimenko", "Ronya Shurze"],
  ["Kate Sulina", "Anton Artanov"],
  ["Katerina Kokokulina", "Mikhail Solovyov"],
  ["Katrin Tublina", "David Zharnitsky", "Emil Soldatkin"],
  ["Kira Kastaneda", "Sofiya Mihalchenko"],
  ["Kirill Ermakov", "Kate Bulgakova", "Kate Sulina", "Yana Moiseeva", "Yaroslava Gordeeva", "unknown1"],
  ["Kirill Posterov", "Anya Khmeleva", "Katya Kornetova", "Nastya Bagrina", "Tatyana Dengova", "Vera Karaseva"],
  ["Klim Moisenkov", "Yana Moiseeva"],
  ["Kolya Schegolev", "Nastya Pavlova", "Sasha Kovanova"],
  ["Kostya Schegolev", "Sasha Kovanova"],
  ["Kostya Solovyov", "Anastasiya Nikitina", "Arishka Bolshakova", "Ira Bibisheva", "Ksusha Nesterova", "Nastya Bogdanova", "Rodion Raskolnikov", "Vera Karaseva"],
  ["Kristina Boyarkina", "Arishka Bolshakova", "Arseniy", "David Zharnitsky", "Kira Kastaneda", "Nata Naumova", "Sasha Chernyshov", "Tikhon Timanov"],
  ["Ksusha Kozhevnikova", "Artyom Arsenyan"],
  ["Ksusha Usha", "Dmitry Larin"],
  ["Lera", "Anton Shirokov"],
  ["Lesha Pavlov", "Diana Ignatovich", "Podruga Lery", "Sestra Peti"],
  ["Lev Vasilyev", "Dasha Moskvina", "Fyodor Ludinov", "Monro", "Vadim"],
  ["Liza Kalmykova", "Kirill Rokotov"],
  ["Lyonya Tseytin", "Anya Kudryavtseva", "Asya Dobina", "Kate Sizova", "Katrin Tublina", "Leo", "Maria Alexeeva", "Polina Rozhko"],
  ["Margarita Kiseleva", "Egor Kozyrev"],
  ["Mark Kozharskiy", "Ilya Roschin", "Ivan Makarov"],
  ["Masha Nikitina", "Vera Karaseva"],
  ["Masha Safronova", "Dmitriy Tomnuk", "Igor Prostakov"],
  ["Maxim Karnaukhov", "Daria Selyunina", "Liza Sorokina"],
  ["Misha Kasapov", "Ksusha Usha"],
  ["Mks Astro", "Jerry", "Nastya Pavlova"],
  ["Monro", "Arishka Bolshakova", "David Zharnitsky", "Denis Drozdov", "Igor Prostakov", "Maxim ObmanBasquiat", "Nastya Pavlova", "Nata Naumova"],
  ["Nastya Bazyka", "Alexander Lebedev", "Ivan Chukalsky"],
  ["Nastya Homyak", "Fyodor Ludinov"],
  ["Nastya Pavlova", "Andrey Potashev", "Anya Grin", "Chemi Kun", "Ivan Kachmar", "Kirill Posterov", "Misha Tychinin", "Patrick", "Pyotr Grachev", "Slava Golubev", "Varya Vodova", "Yudoshin"],
  ["Nastya Shushkova", "Andrey Koshkin", "Fyodor Ludinov", "German Berezhko", "Nikolay Gabriel"],
  ["Nastya Smirnova", "Anton Plevako"],
  ["Nastya Zhelavskaya", "Artyom Arsenyan"],
  ["Nata Naumova", "Alina Dynay", "David Zharnitsky", "Kate Alexandrova", "Lena Muradymova"],
  ["Natasha Kozhevnikova", "Sasha Chernyshov", "Tikhon Timanov"],
  ["Nikita Baklazhenko", "Igor Zhidkov", "Irina Meppltorp", "Nikita Danilchenko"],
  ["Nikita Danilchenko", "Kate Rusetskaya", "Uliya Korzh"],
  ["Nikita Loginov", "Alexandra Kuchumova", "Anya Maxutova"],
  ["Oleg Provotorov", "Nastya Bogdanova"],
  ["Olya Bykova", "Ivan Kachmar", "Veronika Litvinova"],
  ["Pasha Nosov", "Yasha Karaev"],
  ["Petr Kostenko", "Nastya Shushkova"],
  ["Polina Avatulina", "Kamilla Kadyrova", "Radik Kadyrov", "Ruslan Kudanko", "Sasha Glutshetskiy", "Sofiya Mihalchenko", "Yana Dubovitskaya"],
  ["Polina Nazarova", "Alexey Nevsky", "Dima Pyatnitsa", "Mikhail Lisyanskiy", "Nikita Fadeev", "Syoma Shutkin", "Vitaliy Memes", "Vlad Golev"],
  ["Pyotr Grachev", "Kristina Kukushkina"],
  ["Rodion Raskolnikov", "Kostya Solovyov", "Nastya Bogdanova"],
  ["Rolan Alexeev", "Nastya Pavlova", "Nina Ivanova"],
  ["Ruslan Usachev", "Ildar Dzharahov", "Uriy Hovansky"],
  ["Sasha Bashmakov", "Ira", "Nataliya Kakhanovskaya"],
  ["Sasha Boyarinov", "unknown0"],
  ["Sasha Kovanova", "Daniil Zheleznetsov", "Dima Lutsenko", "Esconder", "Nastya Pavlova", "Timur Finov"],
  ["Sasha Zemlyanova", "Kristina Kukushkina"],
  ["Sergay Nikitin", "Ilya Roschin", "Kristina Kukushkina", "Lev Vasilyev", "Nastya Uhimenko", "Sofiya"],
  ["Sofia Mityaeva", "Arseniy", "David Zharnitsky", "Eduard Belov", "Kristina Boyarkina", "Nata Naumova", "Vadim"],
  ["Stepan Nesmiyan", "Alina Nesmiyan"],
  ["Timofey Belkin", "Valeriya Lapina"],
  ["Tonya Evdokimova", "Alexander Ilyin", "Egor Tsygankov", "Kostya Unknown", "Lesha Pavlov", "Sergey Married"],
  ["Ura Eroshkin", "Ira Khanakhbeeva", "Leo"],
  ["Uriy Hovansky", "Ilya Meddison"],
  ["Vadim", "Alina Dynay", "Anastasiya Nemilova", "David Zharnitsky", "Ilya Kalmyk", "Monro"],
  ["Valeriya Lapina", "Kirill Ermakov"],
  ["Varya Efremova", "Dmitriy Tomnuk"],
  ["Varya Vodova", "Artyom Arsenyan", "Kirill Scherbinskiy", "Zhenya"],
  ["Vasiliy Cheptsov", "Kate Sulina"],
  ["Veronika Litvinova", "Fydor Bilef", "Nastya Pavlova"],
  ["Veronika Voychuk", "Nastya Bogdanova"],
  ["Viktor Maffin", "Anastasiya Batanina", "Anna Vasilyeva", "Darya Gerasimova", "Lubov Burukhina", "Mariya Stolik", "Viktoriya Shanina"],
  ["Vladimir Eldzhin", "Ildar Dzharahov", "Kate Alexandrova"],
  ["Vladimir Suzdaltsev", "Alexandra Schlyakhtina", "Alina Khadzhakhova", "Anna Vasilyeva", "Darya Romanovskaya", "Margarita Kiseleva", "Pasha Nosov", "Varya Tuchkova", "Viktoriya Begaeva", "Viktoriya Gil", "Yaroslava Gordeeva"],
  ["Vova Blinov", "Kirill Ermakov"],
  ["Vovan Konovalov", "Ira Bibisheva", "Katya Abramova", "Ksusha Nesterova"],
  ["Yasha Karaev", "Lyonya Tseytin", "Varya Tuchkova"],
  ["Yulia Morozova", "Andrey Minkinen"],
  ["Yulya Alexandrova", "Fill"],
  ["unknown1", "Kostya Solovyov"],
];

var edges = [];
initialN.forEach(line => {
  let id1 = nodes.find(node =>
    node.name + (node.surname ? (" " + node.surname) : "") === line[0]
    // node.name === line[0].split(" ")[0] &&
    // (node.surname === "" || node.surname === line[0].split(" ")[1])
  ).id
  line.slice(1).forEach(name => {
    let id2 = nodes.find(node =>
      node.name + (node.surname ? (" " + node.surname) : "") === name
      // node.name == name.split(" ")[0] &&
      // (node.surname == "" || node.surname == name.split(" ")[1])
    ).id;
    edges.push({
      nodes: [
        {
          id: id1,
          accepted: true,
          privacyType: "anyone",
        },
        {
          id: id2,
          accepted: true,
          privacyType: "anyone",
        },
      ],
      date: "",
      approved: true,
    });
  });
});

export default edges;
