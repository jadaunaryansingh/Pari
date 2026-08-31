/**
 * Configuration & Story Data for Pari & Aryan's Proposal Website
 */
const CONFIG = {
    groomName: "Aryan",
    brideName: "Pari",
    petName: "Baby",
    adoptedKidName: "Toto (Haramkhor)",
    
    // Key Milestone Dates (Format: YYYY-MM-DDTHH:MM:SS)
    dates: {
        metDate: "2024-10-31T20:00:00",         // Krishna's Birthday
        confessionAryan: "2026-08-03T00:00:00", // Aryan confessed feelings
        officialDate: "2026-08-08T18:00:00",     // Pari confessed & First Barsana Date
    },

    // Audio Settings
    audio: {
        defaultSongTitle: "Can't Help Falling in Love (Romantic Piano & Strings)",
        customAudioPath: "", // e.g. "assets/audio/song.mp3"
        enableWebAudioSynthesizer: true
    },

    // WhatsApp Notification Number (Optional: Aryan's phone number with country code, e.g. "919876543210")
    whatsAppNumber: "",

    // Our Journey Milestones (The Real Story)
    milestones: [
        {
            title: "First Sight in Class",
            date: "The Spark",
            icon: "👀✨",
            summary: "That first glance across the classroom...",
            story: "The very first time I saw you sitting in class, my heart skipped a beat. I literally said to myself, 'Yaar sexy girl hai...' Little did I know that stunning girl would one day become my whole entire world, my peace, and my future wife.",
            tag: "Destiny Begins"
        },
        {
            title: "Krishna's Birthday Bash",
            date: "31st October 2024",
            icon: "🎉🎂",
            summary: "Where our paths officially crossed...",
            story: "On 31st October 2024, on Krishna's birthday, fate officially introduced us. From that evening onwards, the universe started weaving our stories together.",
            tag: "First Meet"
        },
        {
            title: "The 'Anshul Case' & Midnight Calls",
            date: "Late Nights & Endless Talks",
            icon: "📞🌙",
            summary: "From solving drama to talking until sunrise...",
            story: "Our first proper conversation started all because of the 'Anshul case' when he used to like you! But what began as funny discussions turned into daily calls, staying awake all night just listening to each other's voices. Slowly and beautifully, you became my 'most person'—the one I couldn't live a single day without.",
            tag: "Midnight Talks"
        },
        {
            title: "The Spandhan Festival",
            date: "The Unspoken Love",
            icon: "🌸🤍",
            summary: "The day I kissed your head for the first time...",
            story: "On the day of Spandhan, something shifted in the cosmos. That was the day I truly fell hopelessly in love with you. When I leaned in and gently kissed your head for the first time, my soul knew: you were the one. I carried that love quietly in my heart, waiting for the right moment.",
            tag: "Forehead Kiss"
        },
        {
            title: "The Big Confession",
            date: "03rd August 2026",
            icon: "💌❤️",
            summary: "Gathering the courage to speak my truth...",
            story: "After keeping this ocean of feelings inside, on 3rd August, I couldn't hold it back anymore. I laid my heart bare and confessed my feelings to you, hoping with everything I had that my love would reach your soul.",
            tag: "Aryan Confessed"
        },
        {
            title: "She Said It Back & The Barsana Date",
            date: "08th August 2026",
            icon: "🏍️🛕",
            summary: "Mutual confession & the best bike ride of my life...",
            story: "On 8th August, you confessed your feelings back to me—the most magical words I had ever heard. That very day, we went on our first Barsana date. The wind in our hair, you holding me tight on that bike ride, and the sweet way you kissed me... baby, it was hands down the absolute best bike ride of my entire life!",
            tag: "Official Love"
        },
        {
            title: "Toto (Haramkhor) & Our Adopted Balak Date",
            date: "Our Little Family",
            icon: "🧸🐾",
            summary: "First official gift to my girlfriend...",
            story: "Then came Toto (the legendary Haramkhor!), my first official gift to my girlfriend! Taking our adopted balak out on a date with us was the funniest, cutest, and happiest date of my life. In that moment, I saw a glimpse of our beautiful future family.",
            tag: "Adopted Balak"
        },
        {
            title: "Cha Maska & That Electric First Kiss",
            date: "Pure Magic",
            icon: "☕💋",
            summary: "The sensation that stopped time...",
            story: "And then came our date at Cha Maska... where I got my first real kiss from you. Babyyyyy, kya hi bolu main wo sensation! The world stopped spinning, fireworks went off in my chest, and every fiber of my being whispered: 'I love this girl with everything I have.'",
            tag: "Electric Kiss"
        }
    ],

    // 4 Heartfelt Love Letters
    letters: [
        {
            id: 1,
            chapter: "Chapter I",
            title: "From 'Sexy Girl' to My Forever Soulmate",
            subtitle: "The Unfolding of Destiny",
            preview: "Remember that first glance in class and Krishna's birthday? How every little coincidence brought me to you...",
            content: `My Dearest Pari,

Looking back at how we began feels like reading the most beautiful, serendipitous romance novel ever written. 

I still vividly remember that first day in class. I caught one glimpse of you and whispered to myself, "Yaar sexy girl hai..." I was in absolute awe of you from second one. Then 31st October 2024 arrived—Krishna's birthday—and the universe finally brought us into the same room.

And who would have guessed that the whole "Anshul case" would become our golden bridge? What started as conversations about random drama quickly dissolved into hours-long late night calls where neither of us wanted to say goodbye. You slipped into my days, my thoughts, and my heart so effortlessly. Before I even realized it, you weren't just a friend anymore—you became my *most person* in the entire world.

Every memory from that time is etched into my soul with golden ink.

Forever yours,
Aryan ❤️`
        },
        {
            id: 2,
            chapter: "Chapter II",
            title: "Spandhan & The Love I Kept in My Heart",
            subtitle: "The Sacred Forehead Kiss",
            preview: "The day I kissed your head and realized my heart had found its only home...",
            content: `My Sweet Pari,

If there is one day I could replay a million times over, it is Spandhan. 

That was the day the world faded into background noise, leaving only you and me. The moment I kissed your head for the first time, something inside me settled forever. It was gentle, pure, and overwhelming. I realized right then that I wasn't just attracted to you; I was deeply, undeniably, and hopelessly in love with you.

I held that love close to my chest, protecting it like the most precious treasure, waiting for the day I could look into your eyes and give you all of me.

Every time I look at you, I still feel that exact same reverence and warmth I felt on that day.

Loving you endlessly,
Aryan ❤️`
        },
        {
            id: 3,
            chapter: "Chapter III",
            title: "Barsana, Toto & The Cha Maska Sensation",
            subtitle: "Our Adventures & Sweetest Kisses",
            preview: "8th August, the best bike ride of my life, our adopted balak Toto, and the sensation of your lips...",
            content: `Pari Baby,

03rd August was the day I poured my heart out, but 08th August was the day heaven opened up when you confessed your feelings too! 

Our first Barsana date that day will forever remain the greatest bike ride of my life. Having your arms wrapped around me, feeling the warmth of your kiss on that ride—baby, there is no luxury on earth that compares to holding you.

And how can I ever forget our legendary adopted balak—Toto (the sweetest Haramkhor)! Gifting him to you as my first official present and taking our little adopted kid out on dates made me laugh harder and smile wider than I ever thought possible.

And Cha Maska... babyyyyy kya hi bolu main wo sensation! When our lips met, every thought went silent. It was electric, sweet, and intoxicating. I knew right there that I wanted to spend every single day of my life kissing you and making you smile.

With all my passion,
Aryan ❤️`
        },
        {
            id: 4,
            chapter: "Chapter IV",
            title: "Why You Are My Forever & My Home",
            subtitle: "The Vow to Build a Lifetime Together",
            preview: "We have talked about living life together, and now I want to make it an eternal promise...",
            content: `My Beautiful Pari,

We have spent so many hours dreaming, talking about our future, planning how we'll live life side by side through every storm and every sunshine. 

You are the first person I want to talk to when something good happens, and the only sanctuary I need when the world gets heavy. You make mundane days feel like adventures, and you make my heart beat with purpose.

I don't just love you for who you are today; I love who you were when I first saw you, who you are right now, and the wonderful woman you will grow into over the decades to come. 

I want to build our home, our dreams, our morning coffees, our late-night drives, and our lifetime together. You are my home, Pari.

Yours through all eternity,
Aryan ❤️`
        }
    ],

    // Memory Polaroids with your real photos
    polaroids: [
        {
            id: 1,
            title: "The First Spark",
            date: "Classroom Days",
            caption: "When you first caught my eye and stole my breath away...",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.09 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
            tag: "Destiny"
        },
        {
            id: 2,
            title: "Spandhan Magic",
            date: "The Day of Spandhan",
            caption: "The gentle forehead kiss where my heart chose you forever.",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.12 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            tag: "Pure Love"
        },
        {
            id: 3,
            title: "Barsana Bike Ride",
            date: "08th August 2026",
            caption: "Best bike ride of my life. Holding you tight across Barsana.",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.18 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
            tag: "First Date"
        },
        {
            id: 4,
            title: "With Our Balak Toto",
            date: "First Official Gift",
            caption: "Date with Toto (Haramkhor) & my gorgeous girlfriend!",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.20 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
            tag: "Our Little Family"
        },
        {
            id: 5,
            title: "The Cha Maska Sensation",
            date: "Cha Maska Cafe",
            caption: "Babyyyyy that unforgettable first kiss sensation... 💋",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.25 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            tag: "Electric Kiss"
        },
        {
            id: 6,
            title: "Growing Old With You",
            date: "Now & Forever",
            caption: "Every single day with you is a blessing I will protect forever.",
            image: "photos/WhatsApp Image 2026-09-01 at 1.30.28 AM.jpeg",
            fallbackBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            tag: "Our Future"
        }
    ],

    // Curated Memory Reel / Photo Wall
    galleryPhotos: [
        "photos/WhatsApp Image 2026-09-01 at 1.30.09 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.09 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.12 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.18 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.18 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.19 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.20 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.21 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.22 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.22 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.25 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.25 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.26 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.26 AM (2).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.26 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.27 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.27 AM (2).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.27 AM (3).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.27 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.28 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.28 AM (2).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.28 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.29 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.29 AM (2).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.29 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.30.30 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.05 AM.jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.12 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.12 AM (2).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.15 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.18 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.24 AM (3).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.27 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.31 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.31.33 AM (1).jpeg",
        "photos/WhatsApp Image 2026-09-01 at 1.32.02 AM (1).jpeg"
    ],

    // Reasons Why I Love You (Interactive Deck)
    reasons: [
        "The way your eyes light up when you smile at me.",
        "How you became my 'most person' during our endless midnight calls.",
        "The way you held me tightly on our Barsana bike ride.",
        "Your infectious laughter that can turn my worst day into pure sunshine.",
        "The unforgettable sensation of our first kiss at Cha Maska.",
        "How adorable you look whenever you are holding Toto (Haramkhor).",
        "The sweet way you kissed me and made me feel like the luckiest guy alive.",
        "How safe and peaceful I feel whenever I kiss your forehead.",
        "Because you understand my silence just as well as my words.",
        "The way we started our story from the hilarious 'Anshul case' and turned it into eternal love.",
        "Your kindness, your beauty, and the pure gold inside your heart.",
        "How cute you get when you're being playful with me.",
        "Because talking to you at 3 AM is my favorite part of any day.",
        "The way you believe in me and inspire me to be the best version of myself.",
        "Because our souls clicked the moment we met on Krishna's birthday.",
        "The warmth of your hands when you hold mine.",
        "How you make every ordinary cafe date feel like a fairytale.",
        "Because you are not just my girlfriend, you are my best friend and my home.",
        "Because I want to wake up next to your gorgeous face every morning for the rest of my life.",
        "Simply because you are PARI — my one, my only, and my forever angel."
    ],

    // Grand Proposal Speech
    proposal: {
        heading: "Pari, My Soul, My Everything...",
        leadIn: "From that first glance in class to the late-night talks, from our sacred Spandhan kiss to the wild Barsana bike ride with Toto...",
        speech: `Pari, you came into my life and made every corner of my world brighter. With you, I have found the kind of love people write poetry about. You are my greatest joy, my calmest peace, my best friend, and the only person I want to walk through this life with.

I don't want just today or tomorrow with you. I want every single sunrise, every midnight conversation, every crazy adventure, and every quiet moment for all the years we are given.

I want to grow old laughing with you, caring for you, cherishing you, and falling in love with you over and over again every single day.`,
        question: "Pari, will you marry me and make me the happiest man in the universe?",
        yesButtonText: "YES! A Thousand Times YES! 💍❤️",
        noButtonText: "No... 😜",
        noPlayfulResponses: [
            "Nice try, Pari! But you are stuck with me forever! ❤️",
            "Error 404: 'No' is not permitted in our love story! 😉",
            "Toto (Haramkhor) says you have to say YES! 🧸",
            "Remember that Cha Maska kiss? You know you want to say YES! 💋",
            "Look how big the YES button is getting! Click it baby! 💍✨",
            "You can't escape my love, sweetheart! Press YES! 💖"
        ],
        keepsakeTitle: "Official Engagement Certificate of Eternal Love",
        keepsakeMessage: "On this sacred day, Pari said YES to Aryan. Two souls, bound by friendship, laughter, midnight calls, and infinite love, officially united forever."
    }
};

if (typeof window !== "undefined") {
    window.CONFIG = CONFIG;
}
