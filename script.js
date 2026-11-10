const CONTACT_EMAIL = 'executiveteam@tedxki.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const EVENTS = [
  { year: 2027, theme: "To be announced", date: "To be announced", venue: "To be announced", summary: "The next TEDxKI is being planned now. The theme, speakers and tickets will be announced here first.", talks: [], hosts: [], performers: [] },
  {
    year: 2026,
    theme: "Momentum: Ideas in Motion",
    date: "18 April 2026",
    venue: "Medicinska Föreningen Aula",
    summary: "The theme for this year “Momentum” describes the invisible force that turns sparks into revolutions, ideas into action, and individuals into movements. Momentum is more than just the physics phenomenon of force or speed of an object in motion. It is the direction, purpose, and persistence that drives our actions to achieve a result.",
    talks: [
      { speaker: "Moa Ilar", title: "From play to pressure: Preserving joy in sport", caption: "National Cross-Country Skier", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5vmhLgR9qwVfWNOMEjHDNe/361c28d17510619f0154bced32281d4b/1.jpg?fm=webp&q=80&w=600", video: "oE6FM6cOYP0", linkedin: "" },
      { speaker: "Sam Hultin", title: "Learning From a Trans Activist’s Archive", caption: "Artist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5jBSo7u40l8AA4aMejxICo/76d2c70374e4a6ed82a1700a452a27b8/2.jpg?fm=webp&q=80&w=600", video: "Zscw0LK5S_M", linkedin: "" },
      { speaker: "Johanna Nissén", title: "Bridging the Gap: Why Innovation Alone Isn't Enough", caption: "Co-Founder & CEO", photo: "https://images.ctfassets.net/4fo2kk5ozptr/67VrOXcWGziPwa1gumAHvM/5cc4f94e739e9d32cdb9aac6d5ed0426/3.jpg?fm=webp&q=80&w=600", video: "RurUy_mKuYw", linkedin: "" },
      { speaker: "Sebastian Blomé", title: "Mystery of the Flying Bumblebee: Journey as a Childhood Stroke Survivor", caption: "Researcher", photo: "https://images.ctfassets.net/4fo2kk5ozptr/18KclIn0maMMmY8etF5pk2/60ee40aabad7ac2a34513cbdbce37597/4.jpg?fm=webp&q=80&w=600", video: "hvcg5ntwriQ", linkedin: "" },
      { speaker: "Sara Hägg", title: "The Science of Being a Scientist: Finding Momentum in Uncertainty", caption: "Associate Professor", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6QEGy9TWW8WkceoyGY8OP5/f69517cb3020cc73c488841323b193c8/7.jpg?fm=webp&q=80&w=600", video: "JMmP9vqypxw", linkedin: "" },
      { speaker: "Christopher Sparshott", title: "The Velocity of Caring", caption: "Teaching & Learning Specialist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6th0Mx03HjMHzVhqXKSofV/cdee4d52e256eedfb53cacb28c8bd6c5/6.jpg?fm=webp&q=80&w=600", video: "V2Xl3o4JVMk", linkedin: "" },
    ],
    hosts: [
      { name: "Gabriela Kaźmierczak", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2nwVoZEgBLkHfva950ZAYk/db39214645f6031442b0f5f566efc00e/6.jpg?fm=webp&q=80&w=600", linkedin: "" },
      { name: "Riti  Chatterjee", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/eHLoy1arCQ05lrcJ3V517/a2c48c335ce8cee0bfc953fc3a421446/7.jpg?fm=webp&q=80&w=600", linkedin: "" },
      { name: "Robert “Bob” Harris", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7B6UfwOrDwD4yZ0Lpy1jxl/61a8037decd7e8848a5b7df498885fe8/8.jpg?fm=webp&q=80&w=600", linkedin: "" },
    ],
    performers: [
      { name: "Johan Ståhl", caption: "Swedish Illusionist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7dNT2z7rx9QJAi2Ir4JC9i/00831394e87912ac3ace90f5037d01fc/2.jpg?fm=webp&q=80&w=600", video: "", linkedin: "" },
      { name: "Gravity Dance Studio", caption: "Dance Group", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5DMkixj3nm0EFrh3oravsB/1c31d39b3e8eadeede9d3faa684e9be7/4.jpg?fm=webp&q=80&w=600", video: "", linkedin: "" },
      { name: "Cosmos & the Spacetime Experience", caption: "Anton Landefjord, Ivar Selling & Arvid Barnö", photo: "https://images.ctfassets.net/4fo2kk5ozptr/peah77MkhD2QrtyelzDO4/5a5a71515ae1ded5bf36a94fe7e4a237/cosmo_cropped.JPEG?fm=webp&q=80&w=600", video: "IcwWtwJEoa8", linkedin: "" },
    ],
  },
  {
    year: 2025,
    theme: "Unwritten Letters: Voicing the Unspoken",
    date: "29 March 2025",
    venue: "Aula Medica",
    summary: "Our lives are filled with thoughts, emotions, and reflections that often remain unexpressed. TEDxKI’s theme, “Unwritten Letters: Voicing the Unspoken,” invites speakers to explore these hidden truths, like letters never sent or words left unsaid. From personal reflections to bold ideas, this theme delves into the stories and perspectives that challenge, inspire, and connect us.",
    talks: [
      { speaker: "Elin Bergman", title: "Enough! - The Economy That Benefits All", caption: "Circular Economy Queen of Sweden", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3QeLByM7APBa7616B5CsN1/b89cbeb5019443e7560500a9e2a1ebbe/Elin_Bergman_Headshot_0.JPG?fm=webp&q=80&w=600", video: "0yg1c9qNYkQ", linkedin: "https://www.linkedin.com/in/elinbergman/" },
      { speaker: "Valerie Porr", title: "Borderline Personality Disorder through the lens of Evolution & Neuroscience", caption: "Founder and president of TARA4BPD - Borderline Personality Disorder advocate", photo: "https://images.ctfassets.net/4fo2kk5ozptr/G1bzkomWubexU6JwQXfUk/2364db89af5190f68e1dcd3be9b8aa65/valerie_headshot.JPG?fm=webp&q=80&w=600", video: "iJ7kJmrz8To", linkedin: "https://www.linkedin.com/in/valerie-porr-89770625/ " },
      { speaker: "Hani Khalifa", title: "Redefining humanitarianism in medicine", caption: "Senior Consultant & Chief Medical Doctor | Family Medicine Specialist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4t0daO3vZpTqHN6e660pyF/7491db44f77e8fbf218b48ada82c0e6e/Hani_Khalifa_Headshot.jpeg?fm=webp&q=80&w=600", video: "k0hfCDK_aaE", linkedin: "" },
      { speaker: "Omar Alshogre", title: "The University of Whispers", caption: "Public speaker and a human rights activist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6wsCEzecJ01zBx9HuxJ1A1/cc83a61a1d4e9c83fe4dc6f853340baa/Omar_Alshogre_headshot.png?fm=webp&q=80&w=600", video: "dmA4gS4QdgM", linkedin: "https://www.linkedin.com/in/omaralshogre/?originalSubdomain=se " },
      { speaker: "Shahrzad Kiavash", title: "The Girl Who Didn’t Make It – And the One Who Did", caption: "Paralympian and keynote speaker", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2pihShP5T1fUSSfyzkPapF/0ecb45abb52b5f1fca23056b117fc0ce/Shahrzad_Kiavash_headshot.jpg?fm=webp&q=80&w=600", video: "s7KAjIoTZIM", linkedin: "https://www.linkedin.com/in/shahrzad-kiavash-9079a1115/?originalSubdomain=se" },
      { speaker: "Erik Angner", title: "Optimism: A Duty?", caption: "Professor of Practical Philosophy at Stockholm University and published author", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2YwvQIRSkWIz0CHn0Lu8u6/f48bd106fba3ab9fee4502f7f5625d11/Erik-Angner-59-KLAR_.jpg?fm=webp&q=80&w=600", video: "Rs_qMeqKc_I", linkedin: "https://www.linkedin.com/in/erikangner/?originalSubdomain=se" },
      { speaker: "Gabriel Oniscu", title: "The Power of Three: Death, Life and the Gift in Between", caption: "Professor and Transplant surgeon", photo: "https://images.ctfassets.net/4fo2kk5ozptr/bcT0z2v9NAbK71rriyBoM/374e35b712b3861fddde7c20608c030f/Gabriel_Oniscu.jpg?fm=webp&q=80&w=600", video: "VGo6Ag-jvX4", linkedin: "https://www.linkedin.com/in/gabriel-oniscu-59960115/?originalSubdomain=se" },
    ],
    hosts: [
      { name: "Robert “Bob” Harris", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1V5cUe0ia8azWhioBHhx2s/db46e57bf5f2393bf2c9c8a3551ba294/Foto_Bob_Harris_2024.jpg?fm=webp&q=80&w=600", linkedin: "" },
      { name: "Rebekah Ding Jin", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2Poyn1PJ2smj2RNS5NSbai/131e0d50745df369515e50fb3202950c/Rebekah_Ding_Jin.jpg?fm=webp&q=80&w=600", linkedin: "" },
      { name: "Joseba Gallastegui", caption: "Host", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2Un3n0esSzt887YHs3OwTc/06601cc20a2f46bae5176ca6f4019d43/JGG_Photo.jpeg?fm=webp&q=80&w=600", linkedin: "" },
    ],
    performers: [
      { name: "Stockholm Taiko", caption: "Japanese Drum for Vikings", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5oabmtx1n4ZUMl2VZQstQJ/8e92df186e26d987ca607feaf767d865/Copy_of_DSC02871_5.JPG?fm=webp&q=80&w=600", video: "iRUh7Iqg7LQ", linkedin: "" },
    ],
  },
  {
    year: 2024,
    theme: "Lights Out",
    date: "23 March 2024",
    venue: "Aula Medica",
    summary: "What Happens Now? From personal journeys to societal shifts, this theme delves into the profound question: what do we do when the familiar light dims, and we're faced with uncertainty? Join us on a journey through life's uncharted moments on March, 23rd 2024 - mark your calendars now! Get ready to explore how we #challenge adversity, #overcome obstacles, and #thrive in the path of uncertainty.",
    talks: [
      { speaker: "P.J. Wall", title: "Innovation Unleashed: Crafting a Brighter Future for the Global South", caption: "Adjunct Assistant Professor and Lecturer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7goQQJ99djqNduBevSoqrw/340dd4c0b4a106f02348b836bb86afb2/P.J._Wall_bio_picture.png?fm=webp&q=80&w=600", video: "jS9qOcImQFg", linkedin: "https://www.linkedin.com/in/dr-p-j-wall-86488478" },
      { speaker: "Paul Franks", title: "Precision Medicine: Challenging the One-Size-Fits-All Approach to Health", caption: "Director of the Department of Translational Medicine at the Novo Nordisk Foundation", photo: "https://images.ctfassets.net/4fo2kk5ozptr/pJzB0LPkgNo8rWkuTVOqO/79024d2a09302bd8acd03450556ef7fc/Franks-head-2.png?fm=webp&q=80&w=600", video: "PnUGL06pc7k", linkedin: "https://www.linkedin.com/in/paul-franks-phd-mphil-ms-ftos-582920149" },
      { speaker: "Ida Kjos", title: "Can \"Aliveness\" Thrive Alongside Death", caption: "Key-note, Podcaster, Board Professional, Lawyer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/e67zk78SJi8aYeRnd7PaL/725743455be6a4730da95ac3479150aa/Ida_Kjos.jpg?fm=webp&q=80&w=600", video: "USMkaEMGmYE", linkedin: "https://www.linkedin.com/in/ida-kjos-42840941" },
      { speaker: "Henrik Wahlström", title: "Ups & Downs: An Insider View on Bipolar Disorder", caption: "Author, director, lecturer, and popular influencer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1ga0NqDfKaoby6L0bB6mtl/b4c0e6a78c128097be51b22524c6aa70/Henrik_Wahlstr_m.jpg?fm=webp&q=80&w=600", video: "UgRVYjnO5TI", linkedin: "" },
      { speaker: "Li Åslund", title: "Innovating Sleep: Embracing Technology for a Better Night’s Rest", caption: "PhD in Psychology, Head of R&D at Mindler", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3jircZWzGvFcWkC9LVSa0e/55ac930c8c73048f546073200d0018c5/Li_Aslund.jpg?fm=webp&q=80&w=600", video: "8lGKqieGXM0", linkedin: "https://www.linkedin.com/in/li-aslund" },
      { speaker: "Binette Seck", title: "Democratizing Tech: The Power in Reversing Generational Limitations", caption: "Social entrepreneur dedicated to democratizing tech worldwide, Obama Leader 2023", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5vyyYWIxWa5h5WVkH2Knlk/39b94fcaedeef5f1fa3b60c7678f94f1/Binette_Seck.jpg?fm=webp&q=80&w=600", video: "9c1_mfWivfo", linkedin: "https://se.linkedin.com/in/binette-seck-2046939" },
      { speaker: "Aron Anderson", title: "Shifting Perspectives: The Gateway to Gratitude", caption: "Motivational Speaker, Adventurer & Ambassador for cancer at World Health Organization", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7igAD9NQKLA16fHGl5gL1e/091402d50c2536759ac6b3a700324cd7/Aron_headshot.jpeg?fm=webp&q=80&w=600", video: "kLnd1UGMLrw", linkedin: "https://www.linkedin.com/in/aron-anderson" },
    ],
    hosts: [
    ],
    performers: [
      { name: "Royal Swedish Ballet School", caption: "Ballet School", photo: "https://images.ctfassets.net/4fo2kk5ozptr/55F0IeaACDSlXWkDuwfxYE/f975d8803734c8c34a23cba6bd5cb3f4/Swedish_Royal_Ballet_School.jpg?fm=webp&q=80&w=600", video: "z2VHyfjm_fA", linkedin: "" },
      { name: "Yoonsuk Choe", caption: "Multi-instrumental musician", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2bRA43eejm3QkA5icYzoeI/bba8f38184f3008adfb6c273beacca8d/Yoonsuk_profile.jpeg?fm=webp&q=80&w=600", video: "nyREht15kmc", linkedin: "" },
    ],
  },
  {
    year: 2023,
    theme: "The Butterfly Effect",
    date: "17 March 2023",
    venue: "Aula Medica",
    summary: "How a small change can impact the whole world. Have you ever had one moment that you look back on now and think how big of an impact it had on your life? What if you dared to #believe in something impossible? Join us on a journey on how a small #act can #evolve into something incredible. We are living in an ever changing world that requires innovative ideas that can tackle global challenges.",
    talks: [
      { speaker: "Anna Duberg", title: "How We Can Dance Our Way to Better Mental Health", caption: "Physiotherapist and health sciences researcher", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5uim1GmAC9WR3k1KQBjH3P/e49f8a12beba275265d732427e07d5f5/01_dans_for_halsa_by_delafoi_LR_cropped.jpg?fm=webp&q=80&w=600", video: "_0R_0n41y90", linkedin: "https://www.linkedin.com/in/anna-duberg-91082191/" },
      { speaker: "Alex Budak", title: "You don't have to be a CEO to be a leader", caption: "Educator, author, and social entrepreneur", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5xeKv2QnKFHoLFUSwXMbqP/924ac42b18f15635f16d3964b30e3101/Alex.png?fm=webp&q=80&w=600", video: "CUcWEDxyZKA", linkedin: "https://www.linkedin.com/in/alexbudak/" },
      { speaker: "Doug Lansky", title: "4 things healthcare needs to learn from tourism", caption: "Tourism advisor, travel journalist, editor, and author", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4A6Wnf3PdRRDgOqemadQnd/082e7e00555f6fcc554d43911ecbc45a/IMG-6676_cropped.jpg?fm=webp&q=80&w=600", video: "-nQ1zspojRo", linkedin: "https://www.linkedin.com/in/doug-lansky-058234a/" },
      { speaker: "Wilma Emanuelsson", title: "From Hacking Systems to Hacking the World: How to Redefine Potential", caption: "Offensive cybersecurity specialist and entrepreneur", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1F1P71ShdtY8hGLr4CUhAR/568c81aaa226be3131788e906192ad96/Wilma_01_prefer_to_use_B_W_cropped.png?fm=webp&q=80&w=600", video: "ApYgfa17wUU", linkedin: "https://www.linkedin.com/in/wilmaemanuelsson/" },
      { speaker: "Åsa Sandberg", title: "Mind the gap - what can you do against food waste?", caption: "Waste warrior, impact agent, and food waste expert", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4Csr3GCuVieIEl3fZMg5ng/219fa67dc03c4bd53048314b51e533be/Asa2_cropped.jpg?fm=webp&q=80&w=600", video: "oThgvWDHUgg", linkedin: "https://www.linkedin.com/in/%C3%A5sa-sandberg-no-time-to-waste-82a8772/" },
      { speaker: "Oscar Sedholm", title: "It All Started with the Words \"Kiss My Ass\"", caption: "Behavioural scientist, writer, musician, and debater", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1d47DmhOop0u5677Yk9Udj/3c5f53e36025aec18ed518b2456d9466/OscarSedholm_cropped.JPG?fm=webp&q=80&w=600", video: "_d4KpLku3Nc", linkedin: "https://www.linkedin.com/in/oscar-sedholm-804969104/" },
      { speaker: "Camilla Hamid", title: "Throwing Away a Recipe for Life: Journey Towards Becoming My Own Role Model", caption: "Cookbook author, home economics teacher, and TV chef", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6Qg1UNAyXJwMJGvhzoC5QP/f691023848195dacef74456dd52c6a6b/Camilla_Hamid_cropped.jpeg?fm=webp&q=80&w=600", video: "QE8Xdv9hUVg", linkedin: "https://www.instagram.com/camillahamid/" },
    ],
    hosts: [
    ],
    performers: [
      { name: "William Paaso", caption: "Composer and musician", photo: "https://images.ctfassets.net/4fo2kk5ozptr/19TO72nJqL8tBRb2c39Jvs/58244e2fccaccb450f7642a45c71baf2/william-paaso_cropped.jpeg?fm=webp&q=80&w=600", video: "1B2202qxBf0", linkedin: "" },
      { name: "Cosmos & the Spacetime Experience", caption: "Three-person country band", photo: "https://images.ctfassets.net/4fo2kk5ozptr/peah77MkhD2QrtyelzDO4/5a5a71515ae1ded5bf36a94fe7e4a237/cosmo_cropped.JPEG?fm=webp&q=80&w=600", video: "IcwWtwJEoa8", linkedin: "" },
    ],
  },
  {
    year: 2022,
    theme: "CTRL+R",
    date: "18 March 2022",
    venue: "Aula Medica",
    summary: "CTRL+R, the symbol for refreshing. How often have you been stuck on a page and had to restart your browser? We've all been there. But what if we're stuck in reality? Today more than ever, we are aware that sometimes we need to #reload , #recharge or #refresh our lives, environment, and system. We are stuck between global crises like the pandemic, recession and climate change.",
    talks: [
      { speaker: "Helena Samsioe", title: "How crowd-droning is predicting the future", caption: "Founder & CEO at GLOBHE", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1fDHJOQrannoj7b3P7AaoQ/2d476ce52dad834f7ad4e90357636d67/Helena_Samsioe_-_Globhe-Drones-131805_cropped.jpg?fm=webp&q=80&w=600", video: "XYjJiT6gtxA", linkedin: "https://www.linkedin.com/in/helena-samsioe/" },
      { speaker: "Claudia Gård", title: "How a safe space online reveals the need for more women in tech", caption: "Co-founder & COO at GoFrendly", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3bog6fBRVqelujoarIHooP/6cc638be574057d8387c0465872c4329/GoFrendly_Claudia_-_H__guppl__st__liten_.jpg?fm=webp&q=80&w=600", video: "NjpTMCC7iw8", linkedin: "https://www.linkedin.com/in/claudia-g%C3%A5rd-9b808842/" },
      { speaker: "Oliver Fleetwood", title: "Using software as medicine", caption: "Co-founder & CTO at Alex Therapeutics", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3xLZpm6NwU02SPaKk1c5el/624eb90f938d5fa7658cb60107036b8a/pp_headshot_Oliver.JPG?fm=webp&q=80&w=600", video: "FMemZpdRH94", linkedin: "https://www.linkedin.com/in/oliverfleetwood/" },
      { speaker: "Elin Kjos", title: "My life started when they said it was over", caption: "Former Elite Swimmer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/33IubeFhwZuQCpTuBKsj2L/6f2007b9f5ee4d09e5b430d1502526b4/elin_kjos.png?fm=webp&q=80&w=600", video: "DClv5kj_TB8", linkedin: "https://www.instagram.com/elin.kjos/?hl=en" },
      { speaker: "Hannaneh Yazdi", title: "Taking a spiral journey to authentic diversity", caption: "Industrial PhD Candidate at Volvo Cars and Karolinska Institutet", photo: "https://images.ctfassets.net/4fo2kk5ozptr/016D02LlnBUh8pTmOlxMuQ/b0cac8d96b7165d37a9053bac2aaba2b/Hannaneh_Yazdi.jpg?fm=webp&q=80&w=600", video: "Vp5-6uaPHnk", linkedin: "https://www.linkedin.com/in/hannanehyazdi/" },
    ],
    hosts: [
    ],
    performers: [
      { name: "HATAMI", caption: "Musician", photo: "https://images.ctfassets.net/4fo2kk5ozptr/8PiJdFarlRb7wezUwSz4h/86b00687fc8e7dbf2d51f746ba722588/hatami2.jpg?fm=webp&q=80&w=600", video: "BgEB-OfZ0Uo", linkedin: "" },
    ],
  },
  {
    year: 2021,
    theme: "From Mirage To Oasis",
    date: "17 March 2021",
    venue: "Aula Medica",
    summary: "TEDxKI’s From Mirage to Oasis was the first TEDx event to be held at Karolinska Institutet in a decade! Presented virtually during the pandemic, the event seeked to explore the process of pursuit, discovery, and transformation through short varied talks and many opportunities to mingle with fellow attendees.",
    talks: [
      { speaker: "Tobias Ström", title: "Rainbow Blood: The Need of an Evidence-Based Blood Donation Policy in Sweden", caption: "HLR-instruktör ∘ Anestesisjuksköterska ∘ Founder of #regnbågsblod", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6Q0MYj67YxtYhYW9HnqaGS/2d79396895463a518f3531cd30a3a6d0/Tobias_Str__m.jpeg?fm=webp&q=80&w=600", video: "APipne9SSkQ", linkedin: "https://www.linkedin.com/in/tobias-str%C3%B6m-1a286a80/" },
      { speaker: "Olle Bjerkås", title: "To Solve a Crisis, Just Look at What Is Around You", caption: "Artist ∘ Social Entrepreneur", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3r6gB6VEszFuBVN7ciDCAY/d4382c63191b6cb4a3aac67785217611/Olle_Bjerk__s.png?fm=webp&q=80&w=600", video: "fcB1zYp8fBg", linkedin: "" },
      { speaker: "Matilda", title: "The Art of Mental Health Advocacy", caption: "Visual Artist ∘ Mental Health Advocate", photo: "https://images.ctfassets.net/4fo2kk5ozptr/54db8WSknqV9OwkxfrujXS/acf9da91745bad07463b0810c45c3494/Matilda__crazyheadcomics_.jpg?fm=webp&q=80&w=600", video: "6dOgnrEB6Vs", linkedin: "" },
      { speaker: "Paula Urbano", title: "How Public Is Our Public Land?", caption: "Bildkonstnär", photo: "https://images.ctfassets.net/4fo2kk5ozptr/A3TQ8IEABISl0nXociIpD/d9860296f8e59b8cab9256b1e18341ac/Paula_Urbano.php.jpeg?fm=webp&q=80&w=600", video: "8n_UQkQMaqs", linkedin: "https://www.linkedin.com/in/paula-urbano-737a1378/" },
    ],
    hosts: [
    ],
    performers: [
      { name: "Elena Küssner", caption: "Elena is a first-year Biomedicine student and an avid climber.", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4vaZSevZW1YREp9d5iudS7/2003b58139f581c35092dbb072fc8788/Elena_K__ssner.png?fm=webp&q=80&w=600", video: "z68-CgehhnI", linkedin: "" },
      { name: "Paloma Araceli Ruiz", caption: "Paloma is a current Master’s student in Biomedicine at Karolinska Institutet.", photo: "https://images.ctfassets.net/4fo2kk5ozptr/K2qIN6VRdFkH7DireRTL4/279a99cb374394cf4ee43c3d1a8fb75f/Paloma_Ruiz_de_Castroviejo_Teba.JPG?fm=webp&q=80&w=600", video: "Cj2_sNGxSwE", linkedin: "" },
      { name: "Xinhe Xiang", caption: "Xinhe is a second-year Biomedicine student at KI, and if that doesn’t work out, she’ll become a streamer or something.", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5IkYtOLVWFPkQtdpQyvclj/d5ffc2327f84cd22759b9259f58d33a6/Xinhe_Xiang.png?fm=webp&q=80&w=600", video: "", linkedin: "" },
    ],
  },
];

const TEAM_GROUPS = [
  { name: 'Executive', intro: 'Leads the event, holds the TEDx license and keeps every group moving in the same direction.' },
  { name: 'Speaker', intro: 'Finds, selects and coaches the speakers and performers.' },
  { name: 'Marketing', intro: 'Tells the story of the event online, in print and on campus.' },
  { name: 'Finance', intro: 'Manages the budget and works with our sponsors and partners.' },
  { name: 'Logistics', intro: 'Runs the venue, the stage, filming and everything on the day.' },
];

const TEAMS = [
  {
    year: 2026,
    members: {
      Executive: [
        { name: "Karolina Kublickiene", role: "License Holder", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1nhDZvwXL0DQ0nYeCGpcKC/16da8543d1c146113d9bda38d5ecc433/imageKK_-_Marius_Kublickas.png?fm=webp&q=80&w=600", linkedin: "https://ki.se/personer/karolina-kublickiene" },
        { name: "Lucia Adam", role: "Co-Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/CwkxOB03nDMy29Z9J2QyV/9a622d56b3deab8c7835702283f5e683/image.png?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/lucia-adam/" },
        { name: "Diana Tikhomirova", role: "Co-Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6nbimRB03Of9VpkJ2nQCKE/00684b818074b60a21667614097855f9/IMG_0187-2-2_-_Diana_T.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/diana-tikhomirova" },
      ],
      Speaker: [
        { name: "Marcus Beech", role: "Head of Speaker Team", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6PFeeZzYcXfUE1pJKuuc3L/9f32353b6ce6d318c2bcb108c0a2f787/IMG_0250-2_-_Marcus_Beech.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/marcus-beech/" },
        { name: "Sheena Jasley Samonte", role: "Performance Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/Z8vkZ35DYT1lsImD4TV7i/974456c168c15824df88170c0b4a602e/IMG_0287-2_-_Sheena_Samonte.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/sheenajasley/" },
        { name: "Shivani Devata", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7BaYQ9Ghsn5zZb1ugu08jZ/5f1aa6df9dea8e9323f284a3cb5b6608/IMG_0319-2_-_TEDxKI_Speaker_Team.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/s-shivani-devata-333134213/" },
        { name: "Vrinda Kohli", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/y5Hdqo0WkWVoXCnr4L86u/4ebd08d60efadc6a80c05b796b264ffa/C6ECD246-7B6A-4562-8A1B-B7AD6C59C18C_1_102_o_-_Vrinda_Kohli.jpeg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/vrindakohli3/" },
        { name: "Antigoni Papadhima", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/647zp5j9XeD6pO2jVQLed/556b3a2883245a593aa7ceed0f99148b/IMG_0280-2_-_Antigoni_Papadhima.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/antigoni-papadhima/" },
        { name: "Maja Piechocka", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/16JCFana4jHWNdqsDnemNu/72dbbd6c7a2ca587cd400ab22beeda3b/Maja_Piechocka_-_Maja_Piechocka.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/maja-piechocka/" },
        { name: "Shivaani Tishadas", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/0AuMuI1LUKUsh99s1Xeb2/3a73b5bc3348bd3d83b687573a469914/TEDxKI_Headshot_ShivaaniTishadas_-_Shivaani_Tishadas.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/shivaani-tishadas-914212267" },
        { name: "Julia West", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5aYKBEpQSvcBXCrweEainr/d679d9af168a9dac983a0f50fce4504c/IMG_5018_2_-_TEDxKI_Speaker_Team.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/julia-west-83b943201/" },
        { name: "Gaopan Xu", role: "Speaker Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/64lMbql2PWgw11cAgoKSn9/1a541c2ab612bebed695f6724a69cde2/IMG_0178-2_-_Gaopan_Xu.JPEG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Marketing: [
        { name: "Wendy Boakai", role: "Head of Marketing", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6V4wqm8YuX8FBRaoKx8DWN/1792fd3f3cbed5ea39d4ea22d13bdca4/IMG_0166-2_-_TEDxKI_Leads.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/wendy-boakai-2b967b226/" },
        { name: "Janani Arunkumar", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4LpjzgeVUWu1WuCaWSaZgy/809c6bfd4744beae2d13c8d3d43e52cb/IMG_3962_-_Janani_Arunkumar.jpeg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/janani-arunkumar-471bbb272/" },
        { name: "Christina Heinle", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6MsF4Bkt5n7m6aN6HKhlTL/131b32b5684872894bce323400480924/IMG_0257-2_-_Christina_Alisia.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/christina-heinle-5bbb99250" },
        { name: "Franziska Weinberger", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4wjBLOgz54elf91I23HOQ8/f560a4034e58bf28613202bb2573cc66/Fototedx_-_Franziska_Weinberger.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/franziska-weinberger-0454a4372" },
        { name: "Aslı Türker", role: "Content Creator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4ZoSlAVNLzqlsF5iNKD8OD/c9de61c37cf2bca1100600b82d7e4782/IMG_0308-2_-_Asl\u00c4__Tu\u00cc_rker.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/aslı-türker-95a00b235/" },
        { name: "Sara Fonseca", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4aJ5y91XCmNC5osTToHkLn/265d430bf474bf9a16df921c29a9ba63/IMG_0210-2_-_Sara_Fonseca.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/sara-garcia-da-fonseca" },
        { name: "Stephanie Pittara", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/69UQnf21sVlYr9eSZhlP1L/22ce989fb237aad52d29c9a4e8d9ae89/IMG_8138_-_Stephanie_Pittaras.jpeg?fm=webp&q=80&w=600", linkedin: "https://linkedin.com/in/stephanie-pittara-52066b275" },
        { name: "Sophia Zhou", role: "Graphic Designer ", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3PBhQPhmiKJAcJVA5jU2Lr/e99d54cacf682939b9da9f3ae96ac0cb/IMG_0200-2-2_-_Sophia_Z.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/sophia-z-a01559349" },
        { name: "Daniel Schulze", role: "Website Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6t9lhJtBXUc3Spg4mZJl7n/877c79aa70f4093e00db8d3bea1b1b5e/IMG_0237-2.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/daniel-a-schulze-550910205/" },
      ],
      Finance: [
        { name: "Dorothea Theurer", role: "Head of Finances", photo: "https://images.ctfassets.net/4fo2kk5ozptr/YSiEEm3lZMRgswHplKYZB/7a0fde9d32a9721b5e4d869e54cc3126/IMG_1748.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "David Frei", role: "Financial and Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7p0sCtsBQv30nDHXezO8Lo/07100f500fc32d0608cd3487699e1a4b/IMG_0192-2_-_TEDxKI_Finance_Team.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/david-frei-aaa418219/" },
        { name: "Adam Gaoui", role: "Financial and Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2Y85AdrwzZN1KRAqjBUPXU/fef1176c658aa4e4672ca97252ce869c/IMG_2748_-_Adam_Gaoui.png?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/adamgaoui" },
        { name: "Maria Mierzejewska", role: "Financial and Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5LxapGNrtTRNOy6zecBMd7/f7c96c5ac6be5a237be8085684b37894/IMG_0203-2_-_TEDxKI_Finance_Team.JPEG?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/maria-mierzejewska/" },
        { name: "Veronika Smolková", role: "Financial and Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1PrjEfJ6sCOziUiaMOWmfU/1e43cdbd33bf9cb6d5bfea34149992ca/IMG_0215-2_-_TEDxKI_Finance_Team.jpg?fm=webp&q=80&w=600", linkedin: "https://linkedin.com/in/veronika-smolkova" },
        { name: "Melanie Blix Grimaldi", role: "Financial Resource Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4nYXgYUe40ff2dy7r3jYvB/d2c02092267c51d8ebdbc3da554272ae/IMG_0173-2-3_-_TEDxKI_Finance_Team.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/melanie-blix-grimaldi-57328939a/" },
      ],
      Logistics: [
        { name: "Zsolt Fehér", role: "Head of Logistics ", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1bnBP7BRBE6hTqOq4kZXdH/e0b0ad11e1ae5b3d2be0d686ea1b219e/IMG_0233-2_2__-_Zsolt_Fehe\u00cc_r.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/zsolt-feh%C3%A9r-724226205/" },
        { name: "Milda Semaškaitė", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6ZoqQl2VA5KuM48SBKERrb/d3a5af318bee2174f3b4b727ed1d26d8/IMG_0222-2__1__-_Milda_Semaskaite.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/milda-sema%C5%A1kait%C4%97-364a20359/" },
        { name: "Arnau Vila Bertomeu", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6AAPb9ReU9d45ptjf6MvLw/7a91ad7de5ed3ffc93d689f14f5b3943/IMG_0190-2_-_Arnau_Vila_Bertomeu.jpeg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/arnau-vila-bertomeu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
        { name: "Nguyen Nguyen", role: "Executive Producer & Photographer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/Io4DbBVO6WTBCbZTnZ7Vw/25d7826c8d1b4461ffff204baaa87ada/IMG_0304-2-Enhanced-NR_-_Nguyen_Nguyen.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/nguyen-nguyen-0923b9208/" },
        { name: "Jasmin Kleubler", role: "Operations Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/oYlHvJtkfC92Kra0MlSjc/389cf5a1d0fa5853bb63caf4f77191aa/IMG_0276-2_-_Jasmin_Kleubler.jpeg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/jasmin-kleubler-630bb4206" },
        { name: "Akzhan Zhundibayeva", role: "Operations Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3s0UgBdeYdVrCAAGiFdoeV/42787523de60c0fb87ac8eec1a1cbc0f/IMG_0252-2_-_Akzhan_Zhundibayeva.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/akzhan-zhundibayeva" },
        { name: "Kate Grossenbacher", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/vTc0gYUuIWpIZkisVTqvt/ea0ad0e81ee3a91778533f047e33b09d/IMG_0184-2_-_Kate_Grossenbacher.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/kate-grossenbacher-2a2433262/" },
        { name: "Cristina Siretanu", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2ALODgkV21E39Z7wrOnTZe/c2aecf05852ef101a410e3a6c395bd45/IMG_0267-2_-_Cristina_Siretanu.jpg?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/cristina-siretanu-575553307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      ],
    },
  },
  {
    year: 2025,
    members: {
      Executive: [
        { name: "Karolina Kublickiene", role: "Organiser - License Holder", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7jDZok5Cn5mOx2qOzmBAQC/e5ddb8b8c41fa1bd09a829dad1d64660/Karolina_Kublickiene.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Vedanti Meshram", role: "Co-Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/438OP2wm8nOMovM4maJtL6/cf90dd289dbb52d094c5517b6e234b3d/Vedanti_Meshram.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Jeanne Hochart", role: "Co-Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4JjRaW7nxQhZ1UkvZLg7ri/f01d8ad2e0a6fc956005c4973f2d095b/Jeanne_Hochart.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Ayodele Oluwatobi", role: "Vice Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1PTIxdzN6AeRwyyN9eMFcb/c95ecd654a42b39117dbd148ca301392/Ayodele_Oluwatobi.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Kirke Viktoria Kley", role: "Vice Lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3Ki4fXipkzc6sf7P5y3O2B/a3be41572419519f1fa57f5a6bacb30a/Kirke_Viktoria_Kley.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Speaker: [
        { name: "Mirel Mesila", role: "Co-Head of Speaker", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7CGo2jVhjv14C8occjIxzT/01369894f7f6b7f109c8dbf7c403d8d9/Mirel_Mesila.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Daniela Montemayor Tamez", role: "Co-Head of Speaker", photo: "https://images.ctfassets.net/4fo2kk5ozptr/21GKg4AHo57qi1xL4gGnX8/bbd4927474f84f8c12b14ca93b8dd1bd/Daniela_Montemayor_Tamez.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Lou Langhammer", role: "Performance Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1jHOt6GeGpCi8lcz5i2W6S/a3a745e1bab840ace38da78cd91d6544/Lou_Langhammer.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Belinda Rönni", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1NGdUw4rKX9t74gA99U3uD/a94f0b628856234d52d5cd72015e63cd/Belinda_Ro_nni.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Maja Piechocka", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2qA8drss1avZJyEvvlkN09/374602c1a3a8d916e7b778affdedd967/Maja_Piechocka.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Lif Wilsby", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7wQnlf29vKOEJEn0sUepUm/0d5878929e9e5b6e87d7b8f47bfc15dd/Lif_Wilsby.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Layla Abu Al Hassan", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/Jn8ARH7QC00cRoTEJ8hEY/00eb90c2baa993004937bc142546ec36/Layla_Abu_Al_Hassan.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Maria Capertonová", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6maifMUeEwp58TCP3XV9Qt/56c32c54cfbdeae41442c5640fc785c7/Maria_Capertonova_.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Lucia Adam", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/15gd5gsFVNhKY6RBMCaFAa/f9548a4b11b469d1f12983a1a089e2b7/Lucia_Adam.png?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/lucia-adam/" },
        { name: "Sam Brouwers", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5MfG4tITQXwUVnsHd5qvcI/485ab0c6fd21299850241cb559d9120c/Sam_Brouwers.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Diana Tikhomirova", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/62DqpsFSRoQVH3SHo5nKhf/8087ad1bd0b0acb70a579ebebd419a0b/Diana_Tikhomirova.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Daniel Langdon", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1cLc3IhdyiiDYFtq7YxjOH/10b4084d1e82f29e8ee3f5aa8d0c1645/Daniel_Langdon.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Marketing: [
        { name: "Desar Dauti", role: "Head of Marketing", photo: "https://images.ctfassets.net/4fo2kk5ozptr/JueFVyQhKGsG8jUBpo84m/5bfbdcebb19cdae0ba0e322b12f04469/Desar_Dauti.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Theresa Roewer", role: "Design Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3fWBoU3dHsj7N8mTgg7KuU/19049ebcd9563fc502044b7bf6da9afc/Theresa_Roewer.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Melina Riepl", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1WfcytNJw9IMPtN8ED1p5F/3e03669daeb95fc19255d4b0feba6bf3/Melina_Riepl.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Muriel Klonk", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4m6Uh00C6V8KSepGB3tXh7/517a6c11d39e395e5d4a64c0cc7f6f86/Muriel_Klonk.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Zsolt Fehér", role: "Web Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3GmFUQXHP6aG9KUNxWSoZT/42c6f85661ea0af97dd6e4090a8ffd91/Zsolt_Fehe_r.png?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/zsolt-feh%C3%A9r-724226205/" },
        { name: "Anastasia Bonivento", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/34unXzCZCN8NKhCzaMWYfB/5ac0384c35a0fa9dcf122db3f5ba37e7/Anastasia_Bonivento.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Mansi Shekhawat", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/656Br0a8gMsuRO6KiTYtWJ/0f4a5b3a51dd604a234c1d993b4c93c7/Mansi_Shekhawat.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Jingxuan Huang", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3IQkHVqTI9yvl7vWIcyb6Z/2c5118687dd818dd26b1980e0af95c52/Jingxuan_Huang.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Finance: [
        { name: "Ingrid Hughes", role: "Head of Finance", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4f4ZYYW6NWx0bGNLOtyNhB/86af9c359360c85e4dd62b6f091c53f6/Ingrid_Hughes.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Yu Shi", role: "Financial and Product Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5uX8qO1q67PIBq9efFVmFC/1c9f24a1950bb9c337beb8c09e743f51/Yu_Shi.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Irem Koc", role: "Financial and Product Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1bYebDyiSWrHynjJ0iPe30/534a6e873596b2c20c9805dc1a7d6b88/Irem_Koc.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Wendy Boakai", role: "Financial and Product Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7c1rOLPpvvDh9CeovYG53a/0b868de59715af0f379a5ef9467ec374/Wendy_Boakai.png?fm=webp&q=80&w=600", linkedin: "https://www.linkedin.com/in/wendy-boakai-2b967b226/" },
        { name: "Rebeca Varela Lores", role: "Financial and Product Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5axJktpkAzY1U0yvcPqAs/30aa6e3974db992468d8febbc01dab76/Rebeca_Varela_Lores.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Logistics: [
        { name: "Ijan Joshua Tapican", role: "Head of Logistics", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4Ejmvl6k5UW0MuN6W5dL85/4f357b9149924f317e4a080e4691a824/Ijan_Joshua_Tapican.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Florian Tubes", role: "Executive Producer & Photographer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4pBfJu6vsSXtYQleEpiRVO/6b916448b224a285e90e07d6221e7996/Florian_Tubes.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Dorothea Theurer", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6ur8pQVaSuvIH56UtnxusW/f177ebca6a05242cc2903ddd90e87353/Dorothea_Theurer.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Kalliopi Giantsi", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/SDMMspmGBqSKN81ORSoBx/c5a19245e4b7b427fcb51566b149fd57/Kalliopi_Giantsi.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Anh Le", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2qCzsZycB36oMTNd8Qfyjr/9c96692fba91d23f40bdbd73a727eed2/Anh_Le.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Nour Hassaan", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5Zw5DoJ7SRdzdoP8h2gav5/b658a586e0ae374c1ebee8671b5a6219/Nour_Hassaan.png?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Indu Negi", role: "Operations Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/q6cmXBDNFGa5BR9MRBd2Y/4e363cf982eb0389ded51116b1cc153f/Indu_Negi.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
    },
  },
  {
    year: 2024,
    members: {
      Executive: [
        { name: "Tina Hoecher", role: "Co-lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4XygUYQEgxC5gvxXOB5evr/bf4cec897d773d33304206e11d40f4de/Tina.PNG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Belén Custodio", role: "Co-lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/51UsYWwVmZjzv5afgTjR9j/d0151fb1229932f2fcf15014e50dd42c/Belen.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Karolina Kublickiene", role: "Organiser", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2ndMtjwvURtkZS0Gw8uqTr/e5f0131424e6b05a75f5e1ba73a655d8/Karolina.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Speaker: [
        { name: "Pinja Ojanen", role: "Head of Speaker", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3QDjXb8K0ShBRuZgxHkzbc/341dc0bdc31b285af3eaa4a3bf894675/Pinja.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Gina Rinaldo", role: "Speaker Team Advisor", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6QfdZrgGfgsUGl6Nx8lD9P/4abf05b5ec66a28ed0262bd1be6c170c/Gina.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Lamija Coric", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3hxdWDls93aj3F6bELOLA/406b9d6eda54e2bb484e112193d013f2/Lamija.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Silvia Bergt", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4GSwObZsGN5J7OTlnNa8PT/7ce99d329f7355980ddf9213469593b5/Silvia.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Eleni Chronopoulou", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2kzQO1RblT5H7WcEdI68lZ/dbee564b1532c546834d67016859f99e/IMG_4552.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Marta Dumanska", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4E8CG3TATsJdNb2WLqSVLG/88bbc6480251963472646ca9170fd03f/Marta.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Mirel Mesila", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6T73jph4irmoGJQSgMvjm8/1e7ce6b9fa7f2b714336387187db08e2/Mirel.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Desar Dauti", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5ViaDoz75lHJP9KDxGsRcX/e655afcb25087e8343b9c2bf1d082b51/Desar.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Kisakye Jackline Nsanze", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2HL66PQx6IarOIFnQBfZpM/aa627e0bbf29ad42f9caa77a91eca479/Jackie.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Sushmita Sruti Choudhury", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/25bagQa7mSGTTHYrblPj2G/28d9b52e5e8ef68141ba006cdb2489a5/Sushmita.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Ashwini Bidnurmath", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5M6cNtcTJhL5eS1vtCkQwY/ef0ea5cc4726640c6ad739a24b77e096/Ashwini.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Inés Talaya Vidal", role: "Performance Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/JgHxa29yMt9RJk2pY2cmg/1801ec54c803d23d2bfca96caae361cd/Ines.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Marketing: [
        { name: "Jeanne Hochart", role: "Head of Marketing", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1eTQ6DhBMRT7mcbLjDorBv/56470bbd7b59cbf377223bde5715e834/Jeanne.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Maria Querol Canut", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1MwR2lDnsygpzrVPzvId9x/5c74f8d1cf3caa50299dab9c57a134de/Maria.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Selina Noe", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2zotHUMDe1hc0pTWVFcU66/c2d2fc5ac81f77ea0e9b6b908336af4f/Selina.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Michael Cebral López", role: "Design Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7unWUIFR0CDnptM9Flzl8S/0bfe07267405a42a063cbb7ddd6b7bf9/Michael.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Antonia Knipper", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/sluWwdIVHcyBm2LlKKvZf/12b12d5db03cd20c28465cb2eb3f7dd3/Antonia.jpeg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Sophie Oppelt", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7h9M9EudgJfLIN3ROS8137/b1a3fa5b38a586435347fb4f0cf204f6/Sophie.PNG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Joy Zeng", role: "Photographer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1kEeNsZDzFEcxPrg0qK6Xq/e8eaaf96a82cfad4a304d96691c719b9/Joy_.PNG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Susana Barrambana", role: "Website Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/13IYRJE7NktFIMYTzRbJLn/98f1fb56ba2994f9df9e12b9a46a3ada/Susana.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Finance: [
        { name: "Federico Picciau", role: "Head of Finance", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2fPuuSzCh02YMuPqtunV8V/eccf80d0a64ba7642d8f3302d7da3274/Federico.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Sigrún Elfa Snæbjörnsdóttir", role: "Financial Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/42FgVOJtx78X9xhI4SjdLj/e61cfba3e7a14e368146136d83b24e92/Sigrun_.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Noah-Leon Rappl", role: "Financial Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2cevU5KnluztbGDEwaCRb3/f693f8fd2eb1f2645cd0a4107b1b705f/Noah.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Agnes Rehn", role: "Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5SNja1EL4OMMNsRK4hqdCd/6453c23877de12b4dd006803775c9fa9/Agnes.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Benjamin Hellsten", role: "Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6VhUHYWhl1KcP8rLFC4Wsb/b490f58c05626b9d98b6566178ce523c/benjamin.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Logistics: [
        { name: "Emmanouella Xanthopoulou", role: "Head of Logistics", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1DzIk7jJWOyqcUQSLTl0ZI/750503535aaaa52ba5a01f4235b45081/Emmanouella.PNG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Chiara Barizza", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/12WDIFHEq7qPNk0gmWJrit/ac47750170604da20e0b874872592623/Chiara.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Vedanti Meshram", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3rgyV4kzC5L8FVm1timknL/82b540b65653b0245f49c0af1fa4478f/Vedanti.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Parisa Nabili", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/XIZqnAuLs14mx87zWUHCa/8110fa645cbf51108c7bb14f0ebbafaf/Parisa.PNG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Tim Schäfer", role: "Executive Producer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3pdhsEeCiDnaLedB9dqAQG/60f86f0539cf20113eda5a41586e1a88/Tim.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Lea Vettermann", role: "Executive Producer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7eF5z3Rz4ivWkUFuGhdsYz/90cbf73ddc4773e8c733f771c9e440d4/Lea_.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Christina Samakovli", role: "Operations Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4hkUM1DPmwi2Riz005AF9D/8bfb37da8478e71d79cde5634ce7baa0/Christina.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
    },
  },
  {
    year: 2023,
    members: {
      Executive: [
        { name: "Elisa Gobbo", role: "Co-lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1EbqDJuew1X1Yj9snUgVCZ/644322f306d68fc3f40a6642ade5553d/elisa.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Helén Han", role: "Co-lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/49DfaXYfqbJZBzQ24dC2Ja/4b314162869c091912d6bcc275f7ba9e/helen.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Sofia Fredin", role: "Vice-lead", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1BSNkZwjklip35WyQgC5vw/da84a7bfdad53e1caf23a893173f45f6/sofia.png?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Speaker: [
        { name: "Arianna March", role: "Head of Speaker Team", photo: "https://images.ctfassets.net/4fo2kk5ozptr/4tSmH9Th0429cQVe1dZ5Oa/3f3aaf964c0543891f19d0b94a9ee4fa/ari.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Pinja Ojanen", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/38zVTMmFyWdBCF1tSEOEUZ/b35156f175e71a011f8c7d121985fe3d/pinja.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Gina Rinaldo", role: "Content Curator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1Bt38ojYNOeh0g9UiLZ5gv/aed7c7011c681cb8c92b729e18fb7d6e/gina.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Margaux Balduck", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/41PVgH2EpXwAWPurRG7Vf2/814355d9ce1b92bc0b7d9f88f31e6c3a/margaux.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Jaskaran Singh", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1ulFdIBG5A5VP0XxdCU8kf/ba82d3c67f73d90c930a051c9f953968/jaskaran.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Andrea Villanueva Raisman", role: "Speaking Coach", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3tr8nRGkpfAb4DLuqfNFsa/2d95cc38b57ddfa58e0853553dd699ac/andrea.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Zoja Savic", role: "Performance Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1S3v8fpDRVuoR4b3MygWyj/f5046346d9d6af4c9da9787b2e301e02/zoja.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Marketing: [
        { name: "Caroline Baltzer", role: "Head of Marketing Team", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2KPGLTtJhwEVvty51nIeCR/e920cb27750f0bec2fcde00c0a902cb5/caro.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Claudia Ferrer", role: "Communication Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3SiQXaYJjW8a7TQ1AzDSKA/83700970039143a53a8bd0afbc58adc0/claudia.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Laura Farias", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3pI1XQKPGWQWlaIfuZhvEm/1056f8b836cd2bcc531cde76de4bddc4/laura.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Jeanne Hochart", role: "Graphic Designer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/o7BnH2xh3n7JuFYnva473/34350c3b45a6c7aed94ec33575e2e04b/jeanne.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Olga Gkounti", role: "Photographer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2uGMMW3X08EaGCxtoGcW7Y/2c3f747871297e61a6ab63e93cc15bf0/olga.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Nils Berg", role: "Website Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6H388x7gIls8uk21lZFCgs/2986cf1f0db3568c8819a2c7fe687044/nils.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Finance: [
        { name: "Nikoletta Frost", role: "Financial Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2fs0ItuQ6cX919wQiV0OIh/7f0fbb33ddc869a91700324a00a49eb2/niko.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Cathy Sun", role: "Financial Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/6ilXB84h5MF1KIL63VUtzs/39918d67ab790084a58ddc546d24116c/cathy.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Cecilia Levin", role: "Financial & Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7j5Ebjrw8yaTsUOk4fguzM/4327a40bc8f3333d79695797d2eac638/cecilia.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Alicia Blåder", role: "Financial & Partnership Strategist", photo: "https://images.ctfassets.net/4fo2kk5ozptr/54tXuJZHYVD6DJEDiFEB4L/2b291a4a40be67df09e1e39870a8a414/alicia.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "David Fernandez", role: "Head of Finance Team", photo: "https://images.ctfassets.net/4fo2kk5ozptr/1HJ0jC8ao9hOpPI7qgyaXT/f1724b90ca1f553e6e7418961253e56c/david.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
      Logistics: [
        { name: "Georg Nilsson", role: "Event Manager", photo: "https://images.ctfassets.net/4fo2kk5ozptr/7LMF0QuceLh4kh5DCWqRpX/d20fc1d27b869002c0451bcde256935d/georg.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Christina Hoecher", role: "Head of Logistics Team", photo: "https://images.ctfassets.net/4fo2kk5ozptr/3DCGhlQAiye4AVripWtrtB/28cacd66f64b41629ef4f582e61b6e7a/tina.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Maria Nomikou", role: "Team Coordinator", photo: "https://images.ctfassets.net/4fo2kk5ozptr/5O3FeSy1kH5XFKLrtQUs9f/21f179adb40c39daa539040d6fca2f59/nomikou.JPG?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Juliana de Oliveria", role: "Executive Producer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/61avgCCZOfQqmJNA1zx4vz/afa54f2235dd01007d073f7eeefef102/juliana.jpg?fm=webp&q=80&w=600", linkedin: "" },
        { name: "Francisca Leonardo", role: "Assistant Executive Producer", photo: "https://images.ctfassets.net/4fo2kk5ozptr/2qfhbUfSKGtj4KBTlt9Brv/6e94acc3a51cc8619dc0fcc7682d0329/francisca.JPG?fm=webp&q=80&w=600", linkedin: "" },
      ],
    },
  },
];

const SPONSOR_TIERS = [
  {
    id: 'platinum',
    name: 'Platinum',
    blurb: 'Our lead partners, with the most visibility before, during and after the event.',
    benefits: [
      'Largest logo on our sponsors page and event signage',
      'Logo on the screens during breaks',
      'Logo in the printed programme',
      'Six tickets to the event',
      'Dedicated thank-you post on our social media',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    blurb: 'Strong visibility for organisations that want to be part of the day.',
    benefits: [
      'Logo on our sponsors page and event signage',
      'Logo in the printed programme',
      'Four tickets to the event',
      'Thank-you post on our social media',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    blurb: 'A great way to support new ideas at Karolinska Institutet.',
    benefits: [
      'Logo on our sponsors page',
      'Name in the printed programme',
      'Two tickets to the event',
      'Group thank-you post on our social media',
    ],
  },
];

const SPONSORS = [
  { name: 'Sponsor One', tier: 'platinum', logo: '', url: '' },
  { name: 'Sponsor Two', tier: 'platinum', logo: '', url: '' },
  { name: 'Sponsor Three', tier: 'gold', logo: '', url: '' },
  { name: 'Sponsor Four', tier: 'gold', logo: '', url: '' },
  { name: 'Sponsor Five', tier: 'silver', logo: '', url: '' },
  { name: 'Sponsor Six', tier: 'silver', logo: '', url: '' },
];

const PAGES = ['home', 'events', 'team', 'sponsors', 'contact'];
const PAGE_ALIASES = { 'become-a-sponsor': { page: 'contact', tab: 'sponsor' } };
const DESKTOP_QUERY = '(min-width: 860px)';

const HERO_FRAMES = [
  { lines: 'images/hero-lines.jpg', color: 'images/hero-color.jpg' },
];

const SCENE_OPTIONS = {
  storageKey: 'tedxki-hero-played',
  colorStart: 0.03,
  colorEnd: 0.8,
  framesEnd: 0.85,
  blend: 0.35,
  wordsStart: 0.3,
  wordStep: 0.08,
  actionsAt: 0.82,
};

const HELIX_OPTIONS = {
  holdMs: 2800,
  twistMs: 1500,
  logoWidth: 0.7,
  rungsPerHalfTurn: 7,
};

const COUNTER_OPTIONS = {
  duration: 1600,
  threshold: 0.6,
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => {
    if (value === null || value === undefined || value === false) return;
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value === true ? '' : value);
  });

  node.append(...children.flat().filter(Boolean));
  return node;
}

function icon(name) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  const use = document.createElementNS(SVG_NS, 'use');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('aria-hidden', 'true');
  use.setAttribute('href', `#icon-${name}`);
  svg.append(use);
  return svg;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter((part) => /\p{L}/u.test(part))
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function avatar(person, extraClass = '') {
  const content = person.photo
    ? el('img', { src: person.photo, alt: '', loading: 'lazy', onerror: (event) => event.target.replaceWith(initials(person.name)) })
    : document.createTextNode(initials(person.name));
  return el('div', { class: `avatar ${extraClass}`.trim(), 'aria-hidden': 'true' }, content);
}

function linkedinButton(person) {
  if (!person.linkedin) return null;
  return el(
    'a',
    {
      class: 'icon-btn',
      href: person.linkedin,
      target: '_blank',
      rel: 'noopener',
      'aria-label': `${person.name} on LinkedIn`,
    },
    icon('linkedin'),
  );
}

/* Header, navigation, pages */

function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initNavigation() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  if (!header || !nav || !burger) return;

  const desktop = window.matchMedia(DESKTOP_QUERY);
  const isOpen = () => nav.classList.contains('is-open');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', () => setOpen(!isOpen()));

  header.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen()) return;
    setOpen(false);
    burger.focus();
  });

  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

function initRouter() {
  const pages = new Map([...document.querySelectorAll('[data-page]')].map((page) => [page.dataset.page, page]));
  const links = document.querySelectorAll('.nav__link');
  let current = null;

  function resolve() {
    const hash = window.location.hash.slice(1);
    if (PAGES.includes(hash)) return { page: hash };
    if (PAGE_ALIASES[hash]) return PAGE_ALIASES[hash];
    if (!hash || current === null) return { page: 'home' };
    return null;
  }

  function show(fromNavigation) {
    const route = resolve();
    if (!route) return;

    const page = pages.get(route.page);
    const changed = route.page !== current;

    if (changed) {
      pages.forEach((section, id) => {
        section.hidden = id !== route.page;
      });

      links.forEach((link) => {
        if (link.getAttribute('href') === `#${route.page}`) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });

      document.title = page.dataset.title || 'TEDxKI';
    }

    if (current !== null) {
      if (changed) {
        page.classList.remove('is-entering');
        void page.offsetWidth;
        page.classList.add('is-entering');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (fromNavigation) page.querySelector('h1')?.focus({ preventScroll: true });
    }

    current = route.page;
    document.dispatchEvent(new CustomEvent('pagechange', { detail: route }));
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('a[href="#"]')) event.preventDefault();
  });

  window.addEventListener('hashchange', () => show(true));
  show(false);
}

/* Home: scroll scene */

function splitWords(element, options) {
  const words = element.textContent.trim().split(/\s+/);
  element.textContent = '';

  words.forEach((word, index) => {
    const span = el('span', { class: 'hero__word', text: word });
    span.style.setProperty('--at', (options.wordsStart + index * options.wordStep).toFixed(3));
    element.append(span, ' ');
  });
}

function buildFrames(art, frames) {
  const layers = frames.map((frame, index) => {
    const layer = el(
      'div',
      { class: 'hero__frame' },
      el('img', { class: 'hero__image', src: frame.lines, alt: '', decoding: 'async' }),
      el('img', { class: 'hero__image hero__image--color', src: frame.color, alt: '', decoding: 'async' }),
    );
    layer.style.opacity = index === 0 ? '1' : '0';
    return layer;
  });
  art.replaceChildren(...layers);
  return layers;
}

function showFrame(layers, position, blend) {
  const index = Math.min(Math.floor(position), layers.length - 1);
  const within = position - index;
  const fade = Math.min(Math.max((within - (1 - blend)) / blend, 0), 1);

  layers.forEach((layer, i) => {
    let opacity = 0;
    if (i === index) opacity = 1;
    else if (i === index + 1) opacity = fade;
    layer.style.opacity = String(opacity);
  });
}

function readFlag(key) {
  try {
    return sessionStorage.getItem(key) === '1';
  } catch (error) {
    return false;
  }
}

function writeFlag(key) {
  try {
    sessionStorage.setItem(key, '1');
  } catch (error) {
    // Storage can be blocked; the animation then simply replays.
  }
}

function createScene(root, options) {
  const pin = root.querySelector('[data-scene-pin]');
  const art = root.querySelector('[data-scene-art]');
  const layers = HERO_FRAMES.length ? buildFrames(art, HERO_FRAMES) : [];
  const words = root.querySelector('[data-scene-words]');
  const actions = root.querySelector('[data-scene-actions]');
  const clamp = (value) => Math.min(Math.max(value, 0), 1);
  let frame = null;
  let seen = readFlag(options.storageKey);

  function progress() {
    if (reducedMotion.matches || root.classList.contains('is-played')) return 1;
    const distance = root.offsetHeight - pin.offsetHeight;
    if (distance <= 0) return 1;
    const top = parseFloat(getComputedStyle(pin).top) || 0;
    return clamp((top - root.getBoundingClientRect().top) / distance);
  }

  function update() {
    frame = null;
    const value = progress();
    const color = clamp((value - options.colorStart) / (options.colorEnd - options.colorStart));
    const eased = color < 0.5 ? 2 * color * color : 1 - Math.pow(-2 * color + 2, 2) / 2;
    const visible = value >= options.actionsAt;

    root.style.setProperty('--progress', value.toFixed(4));
    root.style.setProperty('--spread', eased.toFixed(4));
    if (layers.length > 1) {
      const frames = clamp(value / options.framesEnd) * (layers.length - 1);
      showFrame(layers, frames, options.blend);
    }
    actions.classList.toggle('is-visible', visible);
    actions.inert = !visible;

    if (value >= 1 && !seen) {
      seen = true;
      writeFlag(options.storageKey);
    }
  }

  // Once the animation has played, show the finished picture on every later visit to Home.
  function settle() {
    if (!seen || root.classList.contains('is-played')) return;
    root.classList.add('is-played');
    requestUpdate();
  }

  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  splitWords(words, options);
  root.classList.add('is-live');
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  document.addEventListener('pagechange', (event) => {
    if (event.detail.page === 'home') settle();
    requestUpdate();
  });
  reducedMotion.addEventListener('change', requestUpdate);
  if (seen) root.classList.add('is-played');
  update();
}

function initScene() {
  const scene = document.querySelector('[data-scene]');
  if (scene) createScene(scene, SCENE_OPTIONS);
}

/* Year tabs (Events and Team) */

function createYearTabs(name, items, renderPanel, startIndex = 0) {
  const list = document.querySelector(`[data-tabs="${name}"]`);
  const panel = document.querySelector(`[data-tab-panel="${name}"]`);
  if (!list || !panel || !items.length) return;

  panel.className = 'tab-panel';
  panel.setAttribute('role', 'tabpanel');
  panel.id = `${name}-panel`;
  panel.tabIndex = 0;

  const tabs = items.map((item, index) =>
    el('button', {
      class: 'year-tab',
      type: 'button',
      role: 'tab',
      id: `${name}-tab-${item.year}`,
      'aria-controls': panel.id,
      text: String(item.year),
      onclick: () => select(index, true),
    }),
  );

  function select(index, animate) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[index].id);
    panel.replaceChildren(renderPanel(items[index]));

    if (animate) {
      panel.classList.remove('is-entering');
      void panel.offsetWidth;
      panel.classList.add('is-entering');
    }
  }

  list.addEventListener('keydown', (event) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in keys)) return;
    const index = tabs.indexOf(document.activeElement);
    const next = (index + keys[event.key] + tabs.length) % tabs.length;
    tabs[next].focus();
    select(next, true);
  });

  list.append(...tabs);
  select(Math.max(startIndex, 0), false);
}

/* Events */

function youtubeLink(talk, year) {
  if (talk.video) return `https://www.youtube.com/watch?v=${encodeURIComponent(talk.video)}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${talk.speaker} TEDxKI ${year}`)}`;
}

function renderTalk(talk, year) {
  const href = youtubeLink(talk, year);
  const thumb = talk.video
    ? el('img', {
      src: `https://i.ytimg.com/vi/${encodeURIComponent(talk.video)}/hqdefault.jpg`,
      alt: '',
      loading: 'lazy',
      onerror: (event) => event.target.replaceWith(el('span', { class: 'talk__initials', text: initials(talk.speaker) })),
    })
    : talk.thumb
      ? el('img', { src: talk.thumb, alt: '', loading: 'lazy' })
      : el('span', { class: 'talk__initials', text: initials(talk.speaker) });

  return el(
    'article',
    { class: 'talk' },
    el(
      'a',
      { class: 'talk__media', href, target: '_blank', rel: 'noopener', 'aria-label': `Watch ${talk.speaker} on YouTube` },
      thumb,
      el('span', { class: 'talk__play' }, icon('play')),
    ),
    el(
      'div',
      { class: 'talk__body' },
      el('div', { class: 'talk__who' }, talk.photo && avatar({ name: talk.speaker, photo: talk.photo }, 'avatar--small'), el('h4', { class: 'talk__speaker', text: talk.speaker })),
      talk.title && el('p', { class: 'talk__title', text: talk.title }),
      el('p', { class: 'talk__caption', text: talk.caption }),
      el(
        'div',
        { class: 'talk__actions' },
        el('a', { class: 'watch-link', href, target: '_blank', rel: 'noopener' }, talk.video ? 'Watch talk' : 'Find on YouTube', icon('arrow')),
        linkedinButton({ name: talk.speaker, linkedin: talk.linkedin }),
      ),
    ),
  );
}

function renderPersonRow(person) {
  return el(
    'li',
    { class: 'person-row' },
    avatar(person, 'avatar--small'),
    el('div', {}, el('p', { class: 'person-row__name', text: person.name }), person.caption && el('p', { class: 'person-row__caption', text: person.caption })),
    person.video && el(
      'a',
      { class: 'icon-btn', href: `https://www.youtube.com/watch?v=${encodeURIComponent(person.video)}`, target: '_blank', rel: 'noopener', 'aria-label': `Watch ${person.name} on YouTube` },
      icon('play'),
    ),
    linkedinButton(person),
  );
}

function renderBlock(title, count, content) {
  return el(
    'section',
    { class: 'block' },
    el('h3', { class: 'block__title' }, title, count !== null && el('span', { class: 'block__count', text: String(count) })),
    content,
  );
}

function renderPeopleBlock(title, people, emptyText) {
  const content = people.length
    ? el('ul', { class: 'person-list' }, people.map(renderPersonRow))
    : el('p', { class: 'empty-note', text: emptyText });
  return renderBlock(title, people.length || null, content);
}

function renderFact(iconName, label, value) {
  return el('div', { class: 'fact' }, icon(iconName), el('div', {}, el('dt', { text: label }), el('dd', { text: value })));
}

function renderEvent(event) {
  const talks = event.talks.length
    ? el('div', { class: 'talk-grid' }, event.talks.map((talk) => renderTalk(talk, event.year)))
    : el('p', { class: 'empty-note', text: 'Speakers will be announced here as they are confirmed.' });

  return el(
    'article',
    { class: 'event' },
    el(
      'header',
      { class: 'event__head' },
      el(
        'div',
        { class: 'event__intro' },
        el('p', { class: 'eyebrow', text: `TEDxKI ${event.year}` }),
        el('h2', { class: 'event__theme', text: event.theme }),
        el('p', { class: 'event__summary', text: event.summary }),
      ),
      el(
        'dl',
        { class: 'facts' },
        renderFact('calendar', 'Date', event.date),
        renderFact('pin', 'Venue', event.venue),
      ),
    ),
    renderBlock('Talks', event.talks.length || null, talks),
    el(
      'div',
      { class: 'event__people' },
      renderPeopleBlock('Hosts', event.hosts, event.talks.length ? 'No hosts listed for this year.' : 'Hosts will be announced.'),
      renderPeopleBlock('Performers', event.performers, event.talks.length ? 'No performers listed for this year.' : 'Performers will be announced.'),
    ),
  );
}

function initEvents() {
  createYearTabs('events', EVENTS, renderEvent, EVENTS.findIndex((event) => event.talks.length));
}

/* Team */

function renderMember(person) {
  return el(
    'article',
    { class: 'member' },
    avatar(person),
    el(
      'div',
      { class: 'member__body' },
      el('div', {}, el('h4', { class: 'member__name', text: person.name }), el('p', { class: 'member__role', text: person.role })),
      linkedinButton(person),
    ),
  );
}

function renderTeam(team) {
  return el(
    'div',
    {},
    TEAM_GROUPS.map((group) => {
      const members = team.members[group.name] || [];
      const content = members.length
        ? el('div', { class: 'member-grid' }, members.map(renderMember))
        : el('p', { class: 'empty-note', text: 'Members will be added soon.' });

      return el(
        'section',
        { class: 'block team-group' },
        el('h3', { class: 'block__title' }, `${group.name} team`, members.length > 0 && el('span', { class: 'block__count', text: String(members.length) })),
        el('p', { class: 'team-group__intro', text: group.intro }),
        content,
      );
    }),
  );
}

function initTeam() {
  createYearTabs('team', TEAMS, renderTeam);
}

/* Sponsors */

function placeholderLogo(name, index) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = `${[700, 300, 800, 500][index % 4]} 64px Inter, system-ui, sans-serif`;
  const text = index % 3 === 1 ? name.toUpperCase() : name;
  const mark = 90;

  ctx.font = font;
  const textWidth = ctx.measureText(text).width;
  canvas.width = Math.ceil(mark + 24 + textWidth + 8);
  canvas.height = 120;

  ctx.font = font;
  ctx.fillStyle = '#161616';
  ctx.strokeStyle = '#161616';
  ctx.textBaseline = 'middle';

  const cx = mark / 2;
  const cy = canvas.height / 2;
  ctx.beginPath();
  if (index % 3 === 0) {
    ctx.arc(cx, cy, mark / 2 - 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (index % 3 === 1) {
    ctx.lineWidth = 12;
    ctx.strokeRect(10, cy - mark / 2 + 10, mark - 20, mark - 20);
  } else {
    ctx.moveTo(cx, cy - mark / 2 + 4);
    ctx.lineTo(mark - 4, cy + mark / 2 - 8);
    ctx.lineTo(4, cy + mark / 2 - 8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillText(text, mark + 24, cy + 4);
  return canvas;
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function sponsorLogo(sponsor, index) {
  if (sponsor.logo) return el('img', { src: sponsor.logo, alt: sponsor.name, loading: 'lazy' });
  const canvas = placeholderLogo(sponsor.name, index);
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', sponsor.name);
  return canvas;
}

function renderTiers() {
  const root = document.querySelector('[data-tiers]');
  if (!root) return;

  root.append(
    ...SPONSOR_TIERS.map((tier) =>
      el(
        'article',
        { class: `tier tier--${tier.id}` },
        el('h3', { class: 'tier__name', text: tier.name }),
        el('p', { class: 'tier__blurb', text: tier.blurb }),
        el('ul', { class: 'tier__list' }, tier.benefits.map((benefit) => el('li', {}, icon('check'), el('span', { text: benefit })))),
        el('a', { class: 'btn btn--ghost', href: '#become-a-sponsor', 'data-level': tier.name }, `Ask about ${tier.name}`),
      ),
    ),
  );

  root.addEventListener('click', (event) => {
    const link = event.target.closest('[data-level]');
    const select = document.querySelector('#sponsor-level');
    if (link && select) select.value = link.dataset.level;
  });
}

function renderSponsorGroups() {
  const root = document.querySelector('[data-sponsor-groups]');
  if (!root) return;

  SPONSOR_TIERS.forEach((tier) => {
    const sponsors = SPONSORS.filter((sponsor) => sponsor.tier === tier.id);
    if (!sponsors.length) return;

    const tiles = sponsors.map((sponsor) => {
      const logo = sponsorLogo(sponsor, SPONSORS.indexOf(sponsor));
      return el('li', {}, sponsor.url
        ? el('a', { class: 'logo-tile', href: sponsor.url, target: '_blank', rel: 'noopener' }, logo)
        : el('div', { class: 'logo-tile' }, logo));
    });

    root.append(el('section', {}, el('h3', { class: 'sponsor-group__title', text: `${tier.name} sponsors` }), el('ul', { class: 'logo-grid' }, tiles)));
  });
}

/* Sponsors: watercolour DNA helix with logos printed on the ribbon */

function createHelix(canvas, logos, options) {
  const ctx = canvas.getContext('2d');
  const band = canvas.closest('.helix-band');
  const toggle = band?.querySelector('[data-helix-toggle]');
  const ref = document.querySelector(canvas.dataset.maxWidthRef);
  const colors = { red: '200, 16, 46', ink: '38, 38, 40' };
  const state = {
    width: 0,
    height: 0,
    ratio: 1,
    halfTurn: 0,
    amplitude: 0,
    firstSlot: 0,
    slots: [],
    queue: 0,
    cycle: 0,
    clock: 0,
    last: 0,
    frame: null,
    visible: false,
    paused: false,
    splashes: [],
    cache: new Map(),
  };
  const period = options.holdMs + options.twistMs;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const face = (slot, cycle) => (slot + cycle) % 2;

  function nextLogo() {
    const index = state.queue % logos.length;
    state.queue += 1;
    return index;
  }

  function fitted(index) {
    const key = `${index}|${state.boxW}|${state.boxH}`;
    if (state.cache.has(key)) return state.cache.get(key);

    const source = logos[index];
    const sw = source.naturalWidth || source.width;
    const sh = source.naturalHeight || source.height;
    const scale = Math.min(state.boxW / sw, state.boxH / sh);
    const w = Math.max(1, Math.round(sw * scale * state.ratio));
    const h = Math.max(1, Math.round(sh * scale * state.ratio));
    const out = document.createElement('canvas');
    out.width = w;
    out.height = h;
    out.getContext('2d').drawImage(source, 0, 0, w, h);
    const entry = { canvas: out, w: w / state.ratio, h: h / state.ratio };
    state.cache.set(key, entry);
    return entry;
  }

  function layout() {
    const width = Math.round(canvas.clientWidth);
    const height = Math.round(canvas.clientHeight);
    if (!width || !height) return false;
    if (width === state.width && height === state.height) return true;

    state.ratio = Math.min(window.devicePixelRatio || 1, 2);
    state.width = width;
    state.height = height;
    canvas.width = Math.round(width * state.ratio);
    canvas.height = Math.round(height * state.ratio);
    ctx.setTransform(state.ratio, 0, 0, state.ratio, 0, 0);

    const count = width < 640 ? 1 : width < 1000 ? 2 : width < 1500 ? 3 : 4;
    state.halfTurn = count === 1 ? width * 0.85 : width / (count + 0.5);
    state.amplitude = Math.min(height * 0.36, state.halfTurn * 0.38);
    state.firstSlot = width / 2 - ((count - 1) / 2) * state.halfTurn;

    let boxW = state.halfTurn * options.logoWidth;
    if (ref?.offsetWidth) boxW = Math.min(boxW, ref.offsetWidth * 0.9);
    state.boxW = Math.round(boxW);
    state.boxH = Math.round(state.amplitude * 0.75);
    state.cache.clear();

    const previous = state.slots;
    state.slots = Array.from({ length: count }, (_, i) => {
      if (previous[i]) return { ...previous[i], x: state.firstSlot + i * state.halfTurn };
      const faces = [0, 0];
      faces[face(i, state.cycle)] = nextLogo();
      faces[1 - face(i, state.cycle)] = nextLogo();
      return { x: state.firstSlot + i * state.halfTurn, faces };
    });

    const random = (() => {
      let seed = 11;
      return () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    })();
    state.splashes = Array.from({ length: Math.round(width / 28) }, () => ({
      x: random() * width,
      y: height / 2 + (random() - 0.5) * state.amplitude * 2.9,
      r: 1 + random() * random() * 6,
      color: random() < 0.55 ? colors.red : colors.ink,
      alpha: 0.25 + random() * 0.5,
    }));
    return true;
  }

  function phase() {
    if (reducedMotion.matches) return state.cycle * Math.PI;
    const within = state.clock - state.cycle * period;
    const turn = within < options.holdMs ? 0 : ease((within - options.holdMs) / options.twistMs);
    return (state.cycle + turn) * Math.PI;
  }

  function strandPoints(offset, theta) {
    const points = [];
    for (let x = -10; x <= state.width + 10; x += 4) {
      const t = theta(x) + offset;
      points.push({ x, y: state.height / 2 - state.amplitude * Math.cos(t), depth: (Math.sin(t) + 1) / 2 });
    }
    return points;
  }

  function drawStrand(points, color, front) {
    const base = Math.max(5, state.amplitude * 0.085);
    ctx.lineCap = 'round';

    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1];
      const b = points[i];
      const depth = (a.depth + b.depth) / 2;
      if ((depth >= 0.5) !== front) continue;

      const width = base * (0.45 + depth * 0.75);
      ctx.strokeStyle = `rgba(${color}, ${0.1 + depth * 0.14})`;
      ctx.lineWidth = width * 2.1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      ctx.strokeStyle = `rgba(${color}, ${0.3 + depth * 0.55})`;
      ctx.lineWidth = width;
      ctx.stroke();

      if (front) {
        ctx.strokeStyle = `rgba(20, 20, 20, ${0.35 * depth})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y - width / 2);
        ctx.lineTo(b.x, b.y - width / 2);
        ctx.stroke();
      }
    }
  }

  function drawRungs(theta) {
    const gap = state.halfTurn / options.rungsPerHalfTurn;
    const clear = state.boxW / 2 + 14;
    const width = Math.max(4, Math.min(9, state.amplitude * 0.06));
    const first = state.firstSlot - Math.ceil(state.firstSlot / gap + 1) * gap + gap / 2;
    ctx.lineCap = 'round';

    for (let x = first; x <= state.width + gap; x += gap) {
      if (state.slots.some((slot) => Math.abs(x - slot.x) < clear)) continue;
      const reach = state.amplitude * Math.cos(theta(x));
      if (Math.abs(reach) < width * 2) continue;
      const top = state.height / 2 - reach;
      const bottom = state.height / 2 + reach;
      const middle = state.height / 2;
      const inset = Math.sign(reach) * width * 1.4;

      ctx.lineWidth = width;
      ctx.strokeStyle = `rgba(${colors.red}, 0.55)`;
      ctx.beginPath();
      ctx.moveTo(x, top + inset);
      ctx.lineTo(x, middle - Math.sign(reach) * 2);
      ctx.stroke();

      ctx.strokeStyle = `rgba(${colors.ink}, 0.5)`;
      ctx.beginPath();
      ctx.moveTo(x, middle + Math.sign(reach) * 2);
      ctx.lineTo(x, bottom - inset);
      ctx.stroke();
    }
  }

  function drawLogos(theta) {
    const strip = 2;
    state.slots.forEach((slot) => {
      slot.faces.forEach((logoIndex, faceIndex) => {
        const logo = fitted(logoIndex);
        const sign = faceIndex === 0 ? 1 : -1;
        const left = slot.x - logo.w / 2;

        for (let sx = 0; sx < logo.w; sx += strip) {
          const x = left + sx;
          const facing = Math.cos(theta(x + strip / 2)) * sign;
          if (facing < 0.04) continue;
          const h = logo.h * facing;
          ctx.globalAlpha = Math.min(1, facing * 1.4);
          ctx.drawImage(
            logo.canvas,
            sx * state.ratio,
            0,
            Math.min(strip, logo.w - sx) * state.ratio,
            logo.canvas.height,
            x,
            state.height / 2 - h / 2,
            Math.min(strip, logo.w - sx) + 0.4,
            h,
          );
        }
        ctx.globalAlpha = 1;
      });
    });
  }

  function draw() {
    const p = phase();
    const theta = (x) => (Math.PI * (x - state.firstSlot)) / state.halfTurn + p;
    const red = strandPoints(0, theta);
    const ink = strandPoints(Math.PI, theta);

    ctx.clearRect(0, 0, state.width, state.height);

    state.splashes.forEach((dot) => {
      ctx.fillStyle = `rgba(${dot.color}, ${dot.alpha})`;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fill();
    });

    drawStrand(red, colors.red, false);
    drawStrand(ink, colors.ink, false);
    drawRungs(theta);
    drawLogos(theta);
    drawStrand(red, colors.red, true);
    drawStrand(ink, colors.ink, true);
  }

  function tick(time) {
    const delta = state.last ? Math.min(time - state.last, 64) : 16;
    state.last = time;
    state.clock += delta;

    const cycle = Math.floor(state.clock / period);
    if (cycle !== state.cycle) {
      state.cycle = cycle;
      state.slots.forEach((slot, i) => {
        slot.faces[1 - face(i, cycle)] = nextLogo();
      });
    }

    draw();
    state.frame = requestAnimationFrame(tick);
  }

  function play() {
    if (state.frame || !state.visible || state.paused || reducedMotion.matches || !state.width) return;
    state.last = 0;
    state.frame = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(state.frame);
    state.frame = null;
  }

  function refresh() {
    if (!layout()) return;
    draw();
    play();
  }

  if (toggle) {
    toggle.hidden = reducedMotion.matches;
    toggle.addEventListener('click', () => {
      state.paused = !state.paused;
      toggle.setAttribute('aria-pressed', String(state.paused));
      toggle.querySelector('[data-icon-pause]').hidden = state.paused;
      toggle.querySelector('[data-icon-play]').hidden = !state.paused;
      toggle.querySelector('span').textContent = state.paused ? 'Play animation' : 'Pause animation';
      if (state.paused) stop();
      else play();
    });
  }

  reducedMotion.addEventListener('change', () => {
    if (toggle) toggle.hidden = reducedMotion.matches;
    stop();
    refresh();
  });

  new ResizeObserver(refresh).observe(canvas);
  new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    if (state.visible) refresh();
    else stop();
  }).observe(canvas);
}

async function initSponsors() {
  renderTiers();
  renderSponsorGroups();

  const canvas = document.querySelector('[data-helix]');
  if (!canvas || !SPONSORS.length) return;
  const logos = await Promise.all(
    SPONSORS.map(async (sponsor, index) => (await loadImage(sponsor.logo)) || placeholderLogo(sponsor.name, index)),
  );
  createHelix(canvas, logos, HELIX_OPTIONS);
}

/* Contact forms */

function initForms() {
  const tabs = [...document.querySelectorAll('[data-form-tab]')];
  const forms = new Map([...document.querySelectorAll('[data-form]')].map((form) => [form.dataset.form, form]));

  function selectForm(name) {
    tabs.forEach((tab) => {
      const active = tab.dataset.formTab === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    forms.forEach((form, key) => {
      form.hidden = key !== name;
    });
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => selectForm(tab.dataset.formTab)));

  document.addEventListener('pagechange', (event) => {
    if (event.detail.page === 'contact') selectForm(event.detail.tab || 'general');
  });

  forms.forEach((form) => form.addEventListener('submit', (event) => submitForm(event, form)));
}

function setStatus(form, type, content) {
  const status = form.querySelector('[data-form-status]');
  status.className = `form__status is-${type}`;
  status.replaceChildren(...[].concat(content));
  status.hidden = false;
}

function mailtoFallback(data, subject) {
  const body = Object.entries(data)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function submitForm(event, form) {
  event.preventDefault();

  const fields = [...form.querySelectorAll('[required]')];
  const invalid = fields.filter((field) => !field.checkValidity());
  fields.forEach((field) => field.setAttribute('aria-invalid', String(invalid.includes(field))));

  if (invalid.length) {
    setStatus(form, 'error', 'Please fill in the highlighted fields and tick the box so we can reply.');
    invalid[0].focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  if (data._honey) return;
  delete data._honey;
  data.consent = 'Yes';

  const subject = `${form.dataset.subject} from ${data.name}`;
  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  setStatus(form, 'info', 'Sending…');

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _subject: subject, _template: 'table', _captcha: 'false' }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || String(result.success) !== 'true') throw new Error('Not sent');

    form.reset();
    setStatus(form, 'success', 'Thank you! Your message has been sent. We usually reply within a few days.');
  } catch (error) {
    setStatus(form, 'error', [
      'We could not send your message right now. ',
      el('a', { class: 'text-link', href: mailtoFallback(data, subject) }, 'Send it by email instead'),
      ` or write to ${CONTACT_EMAIL}.`,
    ]);
  } finally {
    button.disabled = false;
  }
}

/* Counters and footer */

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || reducedMotion.matches) return;

  const format = new Intl.NumberFormat('en-US');
  const write = (element, value) => {
    element.textContent = `${format.format(Math.round(value))}${element.dataset.suffix || ''}`;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const target = Number(entry.target.dataset.count);
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / COUNTER_OPTIONS.duration, 1);
        write(entry.target, target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: COUNTER_OPTIONS.threshold });

  counters.forEach((counter) => observer.observe(counter));
}

function setCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = year;
  });
}

initHeader();
initNavigation();
initForms();
initScene();
initEvents();
initTeam();
initCounters();
setCurrentYear();
initRouter();
(document.fonts ? document.fonts.ready : Promise.resolve()).then(initSponsors);
