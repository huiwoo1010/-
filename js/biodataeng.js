const bioqnaListeng = [
    {
      q: '1. You slept late yesterday and are so sleepy.',
      a: [
        { answer: 'a. You sleep on a sofa in the school corridors during break time.', type: [5], score: [3]},
        { answer: 'b. You sneak into the school dormitories.', type: [7], score: [1] },
        { answer: 'c. You stay awake drinking coffee.', type: [1, 3, 6] , score: [2, 2, 1]},
      ]
    },
    {
      q: '2. There is an assignment due tomorrow.',
      a: [
        { answer: 'a. You submit early because you\'ve done some of it before.', type: [6, 1, 9] ,score: [1, 3, 3]},
        { answer: 'b. You start preparing the moment you realized.', type: [3, 0], score:[1, 1] },
        { answer: 'c. You leave it for tomorrow.', type: [5], score:[2] },
      ]
    },
    {
      q: '3. Your teacher promised to give you feedback about your assignment, but he/she hasn\'t told you anything yet.',
      a: [
        { answer: 'a. You go to the teacher and remind him/her.', type: [2, 6], score: [1, 3] },
        { answer: 'b. You wait until the teacher brings it up.', type: [8, 9], score: [3, 1] },
        { answer: 'c. You ask another teacher for additional feedback.', type: [3], score: [1] }
      ]
    },
    {
      q: '4. There is a new kid in school.',
      a: [
        { answer: 'a. You talk to him/her first to become friends.', type: [0, 2, 6], score: [3, 3, 3] },
        { answer: 'b. You don\'t mind and continue with your own business.', type: [1, 9, 3 ], score: [2, 1, 3] },
        { answer: 'c. You walk up to her carefully when your friend becomes friends with him/her.', type: [4, 5 ], score: [3, 1] },
      ]
    },
    {
      q: '5. Your friend spilled liquid medium onto your pants during a biology experiment.',
      a: [
        { answer: 'a. You think to yourself that it may have been better to experiment alone.', type: [4, 9], score: [1, 2]},
        { answer: 'b. You get angry with the friend.', type: [3], score: [2]},
        { answer: 'c. You just get over with it because anyone can make mistakes.', type: [8, 5, 2], score: [1, 2, 3] },
      ]
    },
  
  
    {
      q: '6. The school\'s air conditioner is not working.',
      a: [
        { answer: 'a. You wander around the school to find a cool place.', type: [6, 2], score: [2, 1] },
        { answer: 'b. You just endure the heat.', type: [9, 8], score: [1, 2] },
        { answer: 'c. You wonder why the air conditioner and try to fix it.', type: [1], score: [1] },
      ]
    },
    {
      q: '7. Your classmate suddenly tells you that he/she likes you in a romantic way.',
      a: [
        { answer: 'a. You wonder why he/she likes you.', type: [8], score: [2] },
        { answer: 'b. You are proud about how awesome you are.', type: [7, 6], score: [3, 2] },
        { answer: 'c. You say no because you have many things to do apart from dating.', type: [1], score: [2] },
      ]
    },
    {
      q: '8. You left your school textbook at home.',
      a: [
        { answer: 'a. You just take notes on a notebook.', type: [3, 8], score: [2, 1] },
        { answer: 'b. You borrow the textbook from another friend.', type: [0], score: [3] },
        { answer: 'c. You ask the teacher if he/she can print you a copy.', type: [9], score: [1] },
      ]
    },
    {
      q: '9. The lunch menu today is terrible.',
      a: [
        { answer: 'a. You can enjoy any food.', type: [5], score: [2] },
        { answer: 'b. You eat drinks and snacks you brought from home.', type: [8], score: [2] },
        { answer: 'c. You escape the school building and go to a nearby restaurant.', type: [7, 0], score: [2, 2] },
      ]
    },
    {
      q: '10. There is only one week left until exams.',
      a: [
        { answer: 'a. You already studied quite a lot.', type: [1, 6], score: [3, 2] },
        { answer: 'b. You spend time searching up ways to study efficiently on Youtube.', type: [5, 7], score: [3, 2] },
        { answer: 'c. You at least start studying now.', type: [2, 4], score: [1, 1] },
      ]
    },
    {
      q: '11. Two friends in front of you are exchanging notes during class.',
      a: [
        { answer: 'a. You are annoyed because it interrupts you.', type: [1], score: [3] },
        { answer: 'b. You wonder what the notes are about. ', type: [8, 4], score: [3, 3]},
        { answer: 'c. You ask them what the notes were about after class.', type: [7, 3], score: [3, 1] },
      ]
    },
    {
      q: '12. You are given free time in PE class.',
      a: [
        { answer: 'a. You go outside to the field to run around.', type: [0], score: [3] },
        { answer: 'b. You chat with your friends at the bench.', type: [7, 2, 4], score: [1, 2, 2] },
        { answer: 'c. You go into the classroom.', type: [9, 1], score: [3, 1] },
      ]
    },
    {
      q: '13. Your friend told you his/her secret.',
      a: [
        { answer: 'a. You are glad that you earned your friend\'s faith.', type: [7, 4, 8], score: [1, 2, 2] },
        { answer: 'b. You soon forget the secret.', type: [5], score: [1] },
        { answer: 'c. You want to tell others but don\'t.', type: [3], score: [1] },
      ]
    },
    {
      q: '14. You are packing up for a school trip which is tomorrow.',
      a: [
        { answer: 'a. You didn\'t start packing yet.', type: [5, 7, 0], score: [3, 2, 2] },
        { answer: 'b. You pack only the necessities.', type: [6], score: [1] },
        { answer: 'c. You pack all sorts of things you may need.', type: [9, 4], score: [3, 2] },
      ]
    },
    {
      q: '15. You brought things you need for class, but your friend didn\'t.',
      a: [
        { answer: 'a. You soon realize that actually you didn\'t bring it too.', type: [0, 5], score: [1, 1] },
        { answer: 'b. You lend your friend the materials.', type: [4, 9, 2], score: [3, 2, 3] },
        { answer: 'c. You are worried but don\'t try to help beforehand.', type: [3, 1], score: [3, 2] },
      ]
    },
    {
      q: '16. Nobody is applying for the class president election.',
      a: [
        { answer: 'a. You apply for candidate before the others.', type: [0, 6], score: [2, 3] },
        { answer: 'b. You ask your friend to apply.', type: [2], score: [2] },
        { answer: 'c. You don\'t do anything.', type: [5, 9, 8], score: [3, 2, 3] },
      ]
    },
    {
      q: '17. You are having difficulties to answer a friend\'s question after a presentation.',
      a: [
        { answer: 'a. You debate about the question with the friend at the spot.', type: [7, 3], score: [3, 3] },
        { answer: 'b. You honestly answer that you don\'t know well.', type: [1, 4, 0], score: [1, 2, 1] },
        { answer: 'c. You tell him/her that you will answer after class.', type: [6, 2], score: [2, 2] },
      ]
    },
    {
      q: '18. You are at a campfire site with your friends on the last day of a school trip.',
      a: [
        { answer: 'a. You start crying because it reminds of your parents.', type: [8, 0], score: [3, 2] },
        { answer: 'b. You cannot understand why some friends are crying.', type: [7, 3], score: [2, 3] },
        { answer: 'c. You aren\'t really thinking about anything.', type: [5, 9], score: [2, 1] },
      ]
    },
    {
      q: '19. Your boyfriend/girlfriend broke up with you.',
      a: [
        { answer: 'a. You cut ties with him right away.', type: [7, 1], score: [1, 1] },
        { answer: 'b. You accept it but you are sad for a week.', type: [8, 0], score: [1, 1] },
        { answer: 'c. You ask him/her why he/she broke up with you.', type: [2], score: [1] },
      ]
    },
    {
      q: '20. There is a conflict between your classmates during a group project.',
      a: [
        { answer: 'a. You support the opinion you think is better.', type: [7, 3, 6], score: [3, 2, 3] },
        { answer: 'b. You suggest an opinion in the middle.', type: [2, 4, 0], score: [3, 3, 1] },
        { answer: 'c. You wait until the opinion is over.', type: [9, 8], score: [3, 1] },
      ]
    },
    {
      q: '21. Your friends ask you to ditch after-school classes to hang out with them.',
      a: [
        { answer: 'a. You ask your parents for permission to ditch class.', type: [4, 2, 8], score: [1, 2, 1] },
        { answer: 'b. You just ditch class.', type: [0, 3], score: [3, 1] },
        { answer: 'c. You should still go to class.', type: [1, 6, 9], score: [3, 1, 2] },
      ]
    }
  ]

  const bioinfoListeng = [
    {
      name: '<muscle cell>',
      desc: 'Your personality type is muscle cell! You have an energetic and passionate nature, enjoying lively activities. Muscle cells are responsible for moving our bodies and enabling physical activity by regulating the strength and frequency of muscle contractions. People with this type share the common trait of being extroverted. You enjoy meeting new people, participating in various activities, and value social interactions. You primarily derive energy from external sources, have a practical nature, and show a keen interest in concrete experiences. Additionally, you tend to find pleasure in new experiences and activities, being spontaneous, and reacting sensitively to the present situation rather than sticking to plans. Your strengths include being impromptu and having quick reflexes.'
    },
    {
      name: '<neuron>',
      desc: 'Your personality type is a neuron! Neurons are the basic units of the nervous system, transmitting nerve signals and playing a crucial role in conveying information. Like a neuron, you are quick, organized, and prioritize efficiency. You are goal-oriented, possess intellectual curiosity, and have an intelligent and analytical nature. With a strategic mindset, you consider various options and have the ability to plan in complex situations to achieve the best outcomes.'
    },
    {
      name: '<chondrocyte>',
      desc: 'Your personality type is a chondrocyte! You are the type that connects relationships among friends and excels in effective communication. Much like healthy chondrocytes that generate collagen and contribute to the elasticity of cartilage, individuals of this type show deep interest in those around them and find great satisfaction in helping others. Emphasizing harmony in social relationships, you make efforts to avoid or resolve conflicts. You are an essential person for maintaining a harmonious atmosphere within a group.'
    },
    {
      name: '<epithelial cell>',
      desc: 'Your personality type is an epithelial cell! Epithelial cells form a protective layer covering various parts of our body, such as skin and organs, and play a role in shielding the body from external stimuli. Like an epithelial cell, you are resilient and strong, able to withstand external challenges with a robust recovery and adaptability. You possess high intellectual curiosity and analytical thinking, making efforts to approach and solve problems in a creative manner. Additionally, you have the ability to adapt flexibly to various environments.'
    },
    {
      name: '<endocrine cell>',
      desc: 'Your personality type is an endocrine cell! Endocrine cells synthesize and secrete various chemical substances, such as hormones, to regulate the internal environment of the body. Like an endocrine cell, you place importance on emotional regulation and social harmony. You are also someone who actively provides assistance when others seek help.'
    },
    {
      name: '<adipocyte>',
      desc: 'Your personality type is an adipocyte (fat cell)! You are generally quiet but can move quickly when needed. Adipocytes play a role in energy storage and regulation, efficiently utilizing energy. Similarly, individuals of this type solve problems in a practical and logical manner, demonstrating the ability to adapt flexibly to situations as needed. Moreover, you respond effectively to real experiences and the practical aspects of situations.'
    },
    {
      name: '<red blood cell>',
      desc: 'Your personality type is red blood cell! You are someone who always works hard and puts in effort. Red blood cells play a crucial role in blood circulation and gas exchange, and individuals of this type often exhibit leadership within organizations, taking charge of tasks in a structured and systematic manner. You highly value your duties and responsibilities, and your reliability and diligence are highly regarded. You demonstrate enthusiasm and passion in fulfilling assigned tasks, shaping your daily life through hard work and dedication.'
    },
    {
      name: '<white blood cell>',
      desc: 'Your personality type is a white blood cell! You possess passion for uncovering creative ideas. White blood cells perform the function of engulfing antigens, and individuals of this type have an exploratory and argumentative nature. Similar to how white blood cells distinguish between self and non-self to combat pathogens, you enjoy approaching things in new ways, exploring from various perspectives, and delight in developing ideas and opinions through debates and discussions.'
    },
    {
      name: '<cilia cell>',
      desc: 'Your personality type is cilia cell! Cilia are tiny hair-like structures on the surface from the nasal passages to the bronchi, with an average length of 7 micrometers. These cilia play a role in moving mucus and particles out of the respiratory tract, preventing them from reaching the lungs. Similar to cilia, you can be easily influenced by what others say. While you have a delicate mindset, your heart is warm, and you take good care of your friends. You are sensitive to emotions, strive for harmony with others, and tend to avoid conflict.'
    },
    {
      name: '<liver cell>',
      desc: 'Your personality type is liver cell! Liver cells play a crucial role in various metabolic regulations, detoxification processes, and hormone synthesis in the body. You are known to be someone who always carries many items, demonstrating thorough preparedness. Additionally, you enjoy maintaining a stable environment in your surroundings. Therefore, you have a tendency to manage tasks and daily life in a systematic and responsible manner. You also make efforts to anticipate various scenarios and perform tasks safely.'
    },
  ]
  
  