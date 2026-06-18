// Sample database structure. You will expand this with all DI programs.
const hockeyPrograms = [
    // ==========================================
    // WCHA CONFERENCE (8 Teams)
    // ==========================================
    {
        school: "University of Wisconsin",
        conference: "WCHA",
        record: "35-4-2",
        finish: "2nd (National Runner-Up)",
        coachName: "Mark Johnson",
        coachPhoto: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2016%2F9%2F8%2F160907WH_7166_Johnson.jpg&width=180&height=270&type=webp",
        coachBio: "The winningest coach in NCAA women's hockey history, leading the Badgers to multiple national titles.",
         assistants: [
            { name: "Dan Koch (Associate HC)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2016%2F1%2F5%2FKoch_Dan_HS_2015.jpg&width=180&height=270&type=webp" },
            { name: "Jackie Crum (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2016%2F9%2F8%2F160907WH_1061_Crum.jpg&width=180&height=270&type=webp" },
            { name: "Mark Greenhalgh (Goalie Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fuwbadgers.com%2Fimages%2F2020%2F11%2F15%2FGreenhalgh_Mark_Headsot_2021.jpg&width=180&height=270&type=webp" }
        ]
    },
    {
        school: "Ohio State University",
        conference: "WCHA",
        record: "36-5-0",
        finish: "1st (National Champions)",
        coachName: "Nadine Muzerall",
        coachPhoto: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2023%2F6%2F8%2FMuzerall_Nadine-1024x819.jpg&width=180&height=270&type=webp",
        coachBio: "Has turned the Buckeyes into a perennial national powerhouse with multiple Frozen Four championships.",
         assistants: [
            { name: "James Wisniewski (Associate HC)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2024%2F10%2F14%2FWisniewski__James2.jpg&width=180&height=270&type=webp" },
            { name: "Kelsey Cline (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2023%2F6%2F8%2FCline-Kelsey-2-rotated-e1664379579906-1024x819.jpg&width=180&height=270&type=webp" },
            { name: "Logan Davis (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2024%2F10%2F14%2FDavis__Logan3.jpg&width=180&height=270&type=webp" }
        ]
    },
    {
        school: "University of Minnesota",
        conference: "WCHA",
        record: "26-12-1",
        finish: "3rd",
        coachName: "Greg May",
        coachPhoto: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgophersports.com%2Fimages%2F2026%2F4%2F22%2FMay_Greg_4489.jpg&width=180&height=270&type=webp",
        coachBio: "Promoted to lead the historic Gopher program in 2026, keeping Minnesota at the forefront of elite hockey.",
        assistants: [
            { name: "Marty Sertich (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgophersports.com%2Fimages%2F2026%2F4%2F22%2FSertich_Marty_4490.jpg&width=180&height=270&type=webp" },
            { name: "Winny Brodt Brown (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgophersports.com%2Fimages%2F2026%2F4%2F22%2FWHKYCoach.jpg&width=180&height=270&type=webp" },
            { name: "Amanda Leveille (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgophersports.com%2Fimages%2F2026%2F4%2F22%2FLeveille_Amanda_4491.jpg&width=180&height=270&type=webp" }
        ]
    },
    {
        school: "University of Minnesota Duluth",
        conference: "WCHA",
        record: "21-14-4",
        finish: "4th",
        coachName: "Laura Schuler",
        coachPhoto: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/umd.sidearmsports.com/images/2024/8/26/Schu.png?width=300",
        coachBio: "An Olympic silver medalist and veteran coach commanding the legendary Bulldogs program.",
        assistants: [
            { name: "Ashleigh Brykaliuk (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/umd.sidearmsports.com/images/2024/8/26/Bryk.png?width=300" },
            { name: "Olivia Soares (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/umd.sidearmsports.com/images/2024/8/27/Liv_Soares.png?width=300" },
            { name: "Justin Grant (Goalie Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/umd.sidearmsports.com/images/2023/9/25/JustinGrant.png?width=300" }
        ]
    },
    {
        school: "St. Cloud State University",
        conference: "WCHA",
        record: "17-17-2",
        finish: "5th",
        coachName: "Mira Jalosuo",
        coachPhoto: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fstcloudstate.sidearmsports.com%2Fimages%2F2022%2F8%2F30%2FMira_Jalosuo.jpg&width=100&height=150&type=webp",
        coachBio: "Former PWHL star managing the Huskies' historic first all-female NCAA coaching staff blueprint.",
        assistants: [
            { name: "Jinelle Siergiej (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fstcloudstate.sidearmsports.com%2Fimages%2F2023%2F8%2F20%2FJinelle_Siergiej.jpg&width=100&height=150&type=webp" },
            { name: "Emily Ach (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fstcloudstate.sidearmsports.com%2Fimages%2F2024%2F9%2F6%2FEmily_Ach_2024-25.jpg&width=100&height=150&type=webp" },
            { name: "Noora Räty (Goalie Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fstcloudstate.sidearmsports.com%2Fimages%2F2024%2F7%2F30%2FNoora_Ra_ty_Headshot_-_Jere_Hietala_Photography_8Cju3.jpeg&width=100&height=150&type=webp" }
        ]
    },
    {
        school: "Minnesota State University",
        conference: "WCHA",
        record: "13-25-0",
        finish: "6th",
        coachName: "Shari Dickerman",
        coachPhoto: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/msumavericks.com/images/2009/9/3/Vogt,%20Shari.jpg?width=300",
        coachBio: "Legendary 1980 US Olympic 'Miracle on Ice' team member who brings rich hockey expertise to the Mavericks.",
        assistants: [
            { name: "Jeff Giesen (Associate HC)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/msumavericks.com/images/2015/7/13/Giesen_Jeff.jpg?width=300" },
            { name: "Mackenzie Bruch (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/msumavericks.com/images/2025/3/25/BRI_5316.jpg?width=300" },
	    { name: "Emily Antony (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/msumavericks.com/images/2025/1/27/Antony__Emily_BRI_0228.jpg?width=300" }
            
        ]
    },
    {
        school: "Bemidji State University",
        conference: "WCHA",
        record: "4-30-2",
        finish: "7th",
        coachName: "Amber Fryklund",
        coachPhoto: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/bemidjistateu.sidearmsports.com/images/2024/3/27/FryklundPhoto.jpg?width=300",
        coachBio: "A highly respected alumna who stepped up to take the reins of the Beavers' programmatic vision.",
        assistants: [
            { name: "Emma Sobieck (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/bemidjistateu.sidearmsports.com/images/2025/9/18/25BSU_WHKY_Sobieck.jpg?width=300" },
            { name: "Sarah Bobrowski-Laird (Assistant Coach)", photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/bemidjistateu.sidearmsports.com/images/2024/9/18/2425BSU_WHKY_Bobrowski.jpg?width=300" }
        ]
    },
    {
        school: "University of St. Thomas",
        conference: "WCHA",
        record: "10-26-1",
        finish: "8th",
        coachName: "Bethany Brausen",
        coachPhoto: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Ftommiesports.com%2Fimages%2F2021%2F10%2F14%2F210921MRB001_028.jpg&width=180&height=270&type=webp",
        coachBio: "Former US Women's Olympic Head Coach establishing the Tommies' Division I footprint.",
        assistants: [
            { name: "Jason Carter (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Ftommiesports.com%2Fimages%2F2026%2F6%2F1%2FScreenshot_2026-05-21_at_3.33.45_PM.png&width=180&height=270&type=webp" },
            { name: "Allison Berg (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Ftommiesports.com%2Fimages%2F2021%2F10%2F14%2F210809LJD001_014.jpg&width=180&height=270&type=webp" },
	    { name: "Alli Altmann (Assistant Coach)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Ftommiesports.com%2Fimages%2F2025%2F9%2F8%2FNo_Name_Board.jpg&width=180&height=270&type=webp" },
            { name: "Dani Cameranesi Brodzinski (Player Development & Scouting Coordinator)", photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Ftommiesports.com%2Fimages%2F2026%2F6%2F2%2FIMG_7254.jpeg&width=180&height=270&type=webp" }
        ]
    },

    // ==========================================
    // ECAC HOCKEY (12 Teams Complete)
    // ==========================================
    {
        school: "Clarkson University",
        conference: "ECAC",
        record: "33-5-2",
        finish: "1st",
        coachName: "Matt Desrosiers",
        coachPhoto: "https://clarksonathletics.com",
        coachBio: "Has managed the Golden Knights to three NCAA National Championship titles.",
        assistants: [
            { name: "Kris Hogg (Assistant Coach)", photo: "https://clarksonathletics.com" },
            { name: "Cam Basarab (Assistant Coach)", photo: "https://clarksonathletics.com" }
        ]
    },
    {
        school: "Colgate University",
        conference: "ECAC",
        record: "32-7-1",
        finish: "2nd",
        coachName: "Stefan Decosse",
        coachPhoto: "https://colgateathletics.com",
        coachBio: "Elevated to maintain Colgate's aggressive, elite offensive national identity.",
        assistants: [
            { name: "Breanne Wilson-Bennett (Assistant Coach)", photo: "https://colgateathletics.com" },
            { name: "Alex Gettens (Assistant Coach)", photo: "https://colgateathletics.com" },
            { name: "Trevor Coykendall (Assistant Coach/Ops)", photo: "https://colgateathletics.com" }
        ]
    },
    {
        school: "Cornell University",
        conference: "ECAC",
        record: "25-8-2",
        finish: "3rd",
        coachName: "Doug Derraugh",
        coachPhoto: "https://cornellbigred.com",
        coachBio: "Former AHCA National Coach of the Year who keeps the Big Red at a championship baseline.",
        assistants: [
            { name: "Edith Racine (Associate HC)", photo: "https://cornellbigred.com" },
            { name: "Tim Crowley (Assistant Coach)", photo: "https://cornellbigred.com" }
        ]
    },
    {
        school: "St. Lawrence University",
        conference: "ECAC",
        record: "28-11-0",
        finish: "4th",
        coachName: "Chris Wells",
        coachPhoto: "https://saintsathletics.com",
        coachBio: "A veteran presence in the ECAC who has overseen numerous NCAA tournament-bound rosters.",
        assistants: [
            { name: "Mare MacDougall Bari (Associate HC)", photo: "https://saintsathletics.com" },
            { name: "Ted Wisner (Assistant Coach)", photo: "https://saintsathletics.com" }
        ]
    },
    {
        school: "Quinnipiac University",
        conference: "ECAC",
        record: "25-11-1",
        finish: "5th",
        coachName: "Cassandra Turner",
        coachPhoto: "https://gobobcats.com",
        coachBio: "Holds the record for the fastest coach in NCAA history to secure 100 career wins.",
        assistants: [
            { name: "Matt Woodard (Assistant Coach)", photo: "https://gobobcats.com" },
            { name: "Tori Sullivan (Assistant Coach)", photo: "https://gobobcats.com" }
        ]
    },
    {
        school: "Yale University",
        conference: "ECAC",
        record: "16-15-2",
        finish: "6th",
        coachName: "Mark Bolding",
        coachPhoto: "https://yalebulldogs.com",
        coachBio: "Transformed Yale into a national contender, leading them to their first Frozen Four appearance.",
        assistants: [
            { name: "Danielle Marmer (Assistant Coach)", photo: "https://yalebulldogs.com" },
            { name: "Ned Braden (Assistant Coach)", photo: "https://yalebulldogs.com" }
        ]
    },
    {
        school: "Princeton University",
        conference: "ECAC",
        record: "14-12-6",
        finish: "7th",
        coachName: "Cara Morey",
        coachPhoto: "https://goprincetontigers.com",
        coachBio: "Commands a highly competitive, modern program built on speed, dynamic checking, and academic excellence.",
        assistants: [
            { name: "Daniel Church (Assistant Coach)", photo: "https://goprincetontigers.com" },
            { name: "Melissa Samoskevich (Assistant Coach)", photo: "https://goprincetontigers.com" }
        ]
    },
    {
        school: "Brown University",
        conference: "ECAC",
        record: "11-16-2",
        finish: "8th",
        coachName: "Mel Ruzzi",
        coachPhoto: "https://brownbears.com",
        coachBio: "Alumna leading an aggressive rebuild to restore Brown to its historic ECAC prominence.",
        assistants: [
            { name: "Justin Simpson (Assistant Coach)", photo: "https://brownbears.com" },
            { name: "Bethany Dymowski (Assistant Coach)", photo: "https://brownbears.com" }
        ]
    },
    {
        school: "Rensselaer Polytechnic Institute (RPI)",
        conference: "ECAC",
        record: "13-17-5",
        finish: "9th",
        coachName: "Bryan Vines",
        coachPhoto: "https://rpiathletics.com",
        coachBio: "Focused on assembling a highly disciplined, gritty roster structure in Troy, New York.",
        assistants: [
            { name: "Christie Catterson (Assistant Coach)", photo: "https://rpiathletics.com" },
            { name: "Marc Cavosie (Assistant Coach)", photo: "https://rpiathletics.com" }
        ]
    },
    {
        school: "Harvard University",
        conference: "ECAC",
        record: "5-23-3",
        finish: "10th",
        coachName: "Laura Bellamy",
        coachPhoto: "https://gocrimson.com",
        coachBio: "Former Harvard goaltender returning to direct her alma mater back into national contention.",
        assistants: [
            { name: "Meredith Roth (Associate HC)", photo: "https://gocrimson.com" },
            { name: "Arlan Connolly (Assistant Coach)", photo: "https://gocrimson.com" }
        ]
    },
    {
        school: "Dartmouth College",
        conference: "ECAC",
        record: "6-21-2",
        finish: "11th",
        coachName: "Maura Crowell",
        coachPhoto: "https://dartmouthsports.com",
        coachBio: "Award-winning veteran coach who took over the Big Green to inject an elite cultural reboot.",
        assistants: [
            { name: "Ben Coughlin (Assistant Coach)", photo: "https://dartmouthsports.com" },
            { name: "Mia Fowler (Assistant Coach)", photo: "https://dartmouthsports.com" }
        ]
    },
    {
        school: "Union College",
        conference: "ECAC",
        record: "8-25-2",
        finish: "12th",
        coachName: "Tony Maci",
        coachPhoto: "https://unionathletics.com",
        coachBio: "Brings extensive championship technical experience from Clarkson to advance the Union project.",
        assistants: [
            { name: "Olivia Fox (Assistant Coach)", photo: "https://unionathletics.com" },
            { name: "Chris Shott (Assistant Coach)", photo: "https://unionathletics.com" }
        ]
    },

    // ==========================================
    // HOCKEY EAST (10 Teams Complete)
    // ==========================================
    {
        school: "Northeastern University",
        conference: "Hockey East",
        record: "25-11-3",
        finish: "1st",
        coachName: "Dave Flint",
        coachPhoto: "https://nuhuskies.com",
        coachBio: "The winningest coach in Huskies history, renowned for tactical blueprints and goalie development.",
        assistants: [
            { name: "Nick Carpenito (Associate HC)", photo: "https://nuhuskies.com" },
            { name: "Melissa Piacentini (Assistant Coach)", photo: "https://nuhuskies.com" },
            { name: "Shelly Picard (Assistant Coach)", photo: "https://nuhuskies.com" }
        ]
    },
    {
        school: "University of Connecticut",
        conference: "Hockey East",
        record: "25-8-5",
        finish: "2nd",
        coachName: "Chris MacKenzie",
        coachPhoto: "https://uconnhuskies.com",
        coachBio: "Engineered UConn's breakout rise into a defensive titan within Hockey East.",
        assistants: [
            { name: "Casey Turner (Assistant Coach)", photo: "https://uconnhuskies.com" },
            { name: "Cory Dombest (Assistant Coach)", photo: "https://uconnhuskies.com" }
        ]
    },
    {
        school: "Boston College",
        conference: "Hockey East",
        record: "15-14-7",
        finish: "3rd",
        coachName: "Katie King Crowley",
        coachPhoto: "https://bceagles.com",
        coachBio: "Three-time Olympian and legendary Eagles bench boss with multiple Frozen Four appearances.",
        assistants: [
            { name: "Courtney Kennedy (Associate HC)", photo: "https://bceagles.com" },
            { name: "Andie Anastos (Assistant Coach)", photo: "https://bceagles.com" }
        ]
    },
    {
        school: "University of New Hampshire",
        conference: "Hockey East",
        record: "18-16-2",
        finish: "4th",
        coachName: "Hilary Witt",
        coachPhoto: "https://unhwildcats.com",
        coachBio: "US Hockey Hall of Famer maintaining a highly competitive team identity in Durham.",
        assistants: [
            { name: "Stephanie Jones (Associate HC)", photo: "https://unhwildcats.com" },
            { name: "Sam Faber (Assistant Coach)", photo: "https://unhwildcats.com" }
        ]
    },
    {
        school: "Providence College",
        conference: "Hockey East",
        record: "13-17-5",
        finish: "5th",
        coachName: "Matt Kelly",
        coachPhoto: "https://friars.com",
        coachBio: "Consistently recruits elite talent to make the Friars a challenging matchup year in and year out.",
        assistants: [
            { name: "Ali Domenico (Associate HC)", photo: "https://friars.com" },
            { name: "Nicole Guagliardo (Assistant Coach)", photo: "https://friars.com" }
        ]
    },
    {
        school: "Boston University",
        conference: "Hockey East",
        record: "14-18-3",
        finish: "6th",
        coachName: "Tara Watchorn",
        coachPhoto: "https://goterriers.com",
        coachBio: "Olympic Gold Medalist alumna building a fast, heavy-checking identity for the Terriers.",
        assistants: [
            { name: "Megan Myers (Assistant Coach)", photo: "https://goterriers.com" },
            { name: "Bo Brauer (Assistant Coach)", photo: "https://goterriers.com" }
        ]
    },
    {
        school: "University of Vermont",
        conference: "Hockey East",
        record: "13-17-5",
        finish: "7th",
        coachName: "Jim Plumer",
        coachPhoto: "https://uvmathletics.com",
        coachBio: "The winningest coach in Catamounts history, establishing Vermont as a consistent Hockey East threat.",
        assistants: [
            { name: "Jess Koizumi (Associate HC)", photo: "https://uvmathletics.com" },
            { name: "Alex Thomas (Assistant Coach)", photo: "https://uvmathletics.com" }
        ]
    },
    {
        school: "University of Maine",
        conference: "Hockey East",
        record: "15-18-2",
        finish: "8th",
        coachName: "Molly Engstrom",
        coachPhoto: "https://goblackbears.com",
        coachBio: "Two-time Olympic medalist defenseman shaping a deeply physical style of play in Orono.",
        assistants: [
            { name: "Kirsten Nergaard (Assistant Coach)", photo: "https://goblackbears.com" },
            { name: "Genisouis King (Assistant Coach)", photo: "https://goblackbears.com" }
        ]
    },
    {
        school: "Merrimack College",
        conference: "Hockey East",
        record: "11-22-3",
        finish: "9th",
        coachName: "Erin Hamlen",
        coachPhoto: "https://merrimackathletics.com",
        coachBio: "The inaugural head coach of the Warriors program, known for building structured, gritty teams.",
        assistants: [
            { name: "Steph Moberg (Associate HC)", photo: "https://merrimackathletics.com" },
            { name: "Chris Hall (Assistant Coach)", photo: "https://merrimackathletics.com" }
        ]
    },
    {
        school: "College of the Holy Cross",
        conference: "Hockey East",
        record: "8-24-3",
        finish: "10th",
        coachName: "Katie Lachapelle",
        coachPhoto: "https://goholycross.com",
        coachBio: "Highly experienced USA Hockey national staff coach leading the Crusaders' recruitment path.",
        assistants: [
            { name: "Janine Weber (Assistant Coach)", photo: "https://goholycross.com" },
            { name: "Devan Taylor (Assistant Coach)", photo: "https://goholycross.com" }
        ]
    },

    // ==========================================
    // ATLANTIC HOCKEY AMERICA / AHA (6 Teams Complete)
    // ==========================================
    {
        school: "Penn State University",
        conference: "AHA",
        record: "22-13-3",
        finish: "1st",
        coachName: "Jeff Kampersal",
        coachPhoto: "https://gopsusports.com",
        coachBio: "Named national coach of the year after mentoring multiple All-Americans and capturing a fourth straight conference regular-season title.",
        assistants: [
            { name: "Madi Litchfield (Assistant Coach)", photo: "https://gopsusports.com" },
            { name: "John Haudenchild (Assistant Coach)", photo: "https://gopsusports.com" }
        ]
    },
    {
        school: "Mercyhurst University",
        conference: "AHA",
        record: "20-17-1",
        finish: "2nd",
        coachName: "Michael Sisti",
        coachPhoto: "https://hurstathletics.com",
        coachBio: "A legendary presence who crossed the milestone of 600 career victories, guiding the Lakers since their inception.",
        assistants: [
            { name: "Trey Flesch (Assistant Coach)", photo: "https://hurstathletics.com" },
            { name: "Scott Spencer (Assistant Coach)", photo: "https://hurstathletics.com" },
            { name: "Natasha Hawkins (Assistant Coach)", photo: "https://hurstathletics.com" }
        ]
    },
    {
        school: "Robert Morris University",
        conference: "AHA",
        record: "13-21-2",
        finish: "3rd",
        coachName: "Logan Bittle",
        coachPhoto: "https://rmuathletics.com",
        coachBio: "Proud alumnus who successfully rebuilt and stabilized the program's competitive Division I footprint.",
        assistants: [
            { name: "Jordan Lipson (Assistant Coach)", photo: "https://rmuathletics.com" },
            { name: "Jake Williams (Assistant Coach)", photo: "https://rmuathletics.com" }
        ]
    },
    {
        school: "Rochester Institute of Technology (RIT)",
        conference: "AHA",
        record: "13-19-3",
        finish: "4th",
        coachName: "Celeste Brown",
        coachPhoto: "https://ritathletics.com",
        coachBio: "Former Tiger captain engineering structured, gritty roster growth to contend at the top of the conference.",
        assistants: [
            { name: "Shauna Green (Assistant Coach)", photo: "https://ritathletics.com" },
            { name: "Jordon McKenzie (Assistant Coach)", photo: "https://ritathletics.com" }
        ]
    },
    {
        school: "Syracuse University",
        conference: "AHA",
        record: "10-11-3",
        finish: "5th",
        coachName: "Britni Smith",
        coachPhoto: "https://cuse.com",
        coachBio: "Injects championship organizational strategy and quick-transition systems into the Orange structure.",
        assistants: [
            { name: "Jordan Lipson (Assistant Coach)", photo: "https://cuse.com" },
            { name: "Megan Foley (Assistant Coach)", photo: "https://cuse.com" }
        ]
    },
    {
        school: "Lindenwood University",
        conference: "AHA",
        record: "14-18-2",
        finish: "6th",
        coachName: "AHA Selected (Head Coach)",
        coachPhoto: "https://lindenwoodlions.com",
        coachBio: "Program navigating a major leadership restructuring transition after matching a team-high record of 14 wins.",
        assistants: [
            { name: "Lindenwood Staff (Assistant Coach)", photo: "https://lindenwoodlions.com" }
        ]
    },
    {
        school: "University of Delaware",
        conference: "AHA", // CHANGED from Independent to AHA
        record: "0-0-0",
        finish: "Inaugural Season",
        coachName: "Allison Coomey",
        coachPhoto: "https://bluehens.com",
        coachBio: "Elite tactical mind hired away from Penn State to launch Delaware's historic brand brand new DI hockey franchise.",
        assistants: [
            { name: "Delaware Staff (Assistant Coach)", photo: "https://placeholder.com" }
        ]
    },

    // ==========================================
    // NEWHA CONFERENCE (8 Teams Complete)
    // ==========================================
    {
        school: "Franklin Pierce University",
        conference: "NEWHA",
        record: "23-12-2",
        finish: "1st (Conference Champions)",
        coachName: "David Stockdale",
        coachPhoto: "https://fpuravens.com",
        coachBio: "Award-winning tactical architect who successfully secured back-to-back conference titles and advanced the Ravens to the NCAA national tournament brackets.",
        assistants: [
            { name: "Marissa Shaw (Assistant Coach)", photo: "https://fpuravens.com" },
            { name: "John Gurskis (Assistant Coach)", photo: "https://fpuravens.com" }
        ]
    },
    {
        school: "Long Island University (LIU)",
        conference: "NEWHA",
        record: "19-10-4",
        finish: "2nd",
        coachName: "Kelly Nash",
        coachPhoto: "https://liuathletics.com",
        coachBio: "Two-time NEWHA Coach of the Year and former pro champion who engineered an absolute powerhouse footprint on Long Island.",
        assistants: [
            { name: "Nora Maclaine (Assistant Coach)", photo: "https://liuathletics.com" },
            { name: "Sonjia Shelly (Assistant Coach)", photo: "https://liuathletics.com" },
            { name: "Kristen Barbara (Assistant Coach)", photo: "https://liuathletics.com" }
        ]
    },
    {
        school: "Sacred Heart University",
        conference: "NEWHA",
        record: "15-16-5",
        finish: "3rd",
        coachName: "Thomas O'Malley",
        coachPhoto: "https://sacredheartpioneers.com",
        coachBio: "Vastly experienced leader driving the Pioneers' high-tempo tactical systems and consistent postseason contention profiles.",
        assistants: [
            { name: "Allison Roethke (Assistant Coach)", photo: "https://sacredheartpioneers.com" },
            { name: "Caroline Peterson (Assistant Coach)", photo: "https://sacredheartpioneers.com" }
        ]
    },
    {
        school: "Stonehill College",
        conference: "NEWHA",
        record: "17-16-3",
        finish: "4th",
        coachName: "Lee-J Mirasolo",
        coachPhoto: "https://stonehillskyhawks.com",
        coachBio: "Commanded instant varsity success, establishing Stonehill as a heavyweight with high-intensity execution standards.",
        assistants: [
            { name: "Christoph Donatelli (Assistant Coach)", photo: "https://stonehillskyhawks.com" },
            { name: "Jillian Dempsey (Assistant Coach)", photo: "https://stonehillskyhawks.com" }
        ]
    },
    {
        school: "Saint Anselm College",
        conference: "NEWHA",
        record: "13-17-4",
        finish: "5th",
        coachName: "Sam Fabbrini",
        coachPhoto: "https://saintanselmhawks.com",
        coachBio: "Instills highly structured defensive positioning frameworks to keep the Hawks incredibly competitive in tight matches.",
        assistants: [
            { name: "Kendra Broad (Assistant Coach)", photo: "https://saintanselmhawks.com" },
            { name: "Jim Tortorella (Assistant Coach)", photo: "https://saintanselmhawks.com" }
        ]
    },
    {
        school: "Assumption University",
        conference: "NEWHA",
        record: "10-22-2",
        finish: "6th",
        coachName: "Jack Sweeney",
        coachPhoto: "https://assumptiongreyhounds.com",
        coachBio: "Inaugural manager tasked with plotting out and constructing the initial foundation for the Greyhounds' Division I footprint.",
        assistants: [
            { name: "Taylor Shuman (Assistant Coach)", photo: "https://assumptiongreyhounds.com" },
            { name: "Courtney Turner (Assistant Coach)", photo: "https://assumptiongreyhounds.com" }
        ]
    },
    {
        school: "Post University",
        conference: "NEWHA",
        record: "8-26-1",
        finish: "7th",
        coachName: "Gretchen Silverman",
        coachPhoto: "https://posteagles.com",
        coachBio: "Olympic Gold Medalist deploying elite international experience to systematically transform the Eagles' team identity.",
        assistants: [
            { name: "Patrik Lovell (Assistant Coach)", photo: "https://posteagles.com" }
        ]
    },
    {
        school: "Saint Michael's College",
        conference: "NEWHA",
        record: "6-28-1",
        finish: "8th",
        coachName: "Meghan Sweezey",
        coachPhoto: "https://smcathletics.com",
        coachBio: "Dedicated program alumna executing a detailed player development system in Vermont.",
        assistants: [
            { name: "Chris Line (Assistant Coach)", photo: "https://smcathletics.com" },
            { name: "Leonora Lussier (Assistant Coach)", photo: "https://smcathletics.com" }
        ]
    },
];
	
		
const container = document.getElementById("teamsContainer");
const searchBar = document.getElementById("searchBar");
const conferenceFilter = document.getElementById("conferenceFilter");

// Function to print cards to the page
function displayTeams(teams) {
    // 1. Wipe out any remnants from the main viewport
    container.innerHTML = ""; 
    
    if (teams.length === 0) {
        container.innerHTML = "<p>No programs match your search filters.</p>";
        return;
    }

    // 2. Process each team one by one
    teams.forEach(team => {
        const card = document.createElement("div");
        card.className = "team-card";
        
        // 3. Build the assistant rows as an isolated string FIRST
        let assistantsHTML = "";
        if (team.assistants && team.assistants.length > 0) {
            assistantsHTML = team.assistants.map(asst => `
                <div class="assistant-row" style="display: flex; align-items: center; gap: 15px; margin-bottom: 12px; background: #fdfdfd; padding: 10px; border-radius: 4px; border: 1px solid #eee;">
                    <img class="assistant-img" 
                         src="${asst.photo}" 
                         alt="${asst.name}" 
                         style="width: 60px !important; height: 80px !important; object-fit: cover; border-radius: 4px; border: 1px solid #ddd; flex-shrink: 0;"
                         color="transparent">
                    <span class="assistant-name" style="font-size: 14px; font-weight: bold; color: #444;">
                        ${asst.name}
                    </span>
                </div>
            `).join(''); 
        } else {
            assistantsHTML = "<p style='font-size:13px; color:#777;'>Staff information updating...</p>";
        }

        // 4. Safely construct the final card component layout
        // NOTICE WHERE THE ASSISTANT WRAPPER SITS AT THE VERY BOTTOM HERE:
        card.innerHTML = `
            <div class="team-header">
                <h2>${team.school}</h2>
                <span class="conference-tag">${team.conference} Conference</span>
                <p><strong>Record:</strong> ${team.record} | <strong>Finish:</strong> ${team.finish}</p>
            </div>
            <div class="coach-section">
                <img class="coach-img" src="${team.coachPhoto}" alt="${team.coachName}">
                <div>
                    <h3>${team.coachName} (Head Coach)</h3>
                    <p style="font-size:13px; margin:5px 0 0 0;">${team.coachBio}</p>
                </div>
            </div>
            
            <!-- HERE IS THE EXACT PLACE THE ASSISTANT WRAPPER GOES -->
            <div class="assistants-section" style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 15px;">
                <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Coaching Staff:</h4>
                <div class="assistants-grid" style="display: flex; flex-direction: column;">
                    ${assistantsHTML}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Function to handle interactive filtering
function filterTeams() {
    const searchText = searchBar.value.toLowerCase();
    const selectedConf = conferenceFilter.value;

    const filtered = hockeyPrograms.filter(team => {
        // 1. Check if the search text matches the school name or head coach name
        const matchesSchoolOrHead = team.school.toLowerCase().includes(searchText) || 
                                    team.coachName.toLowerCase().includes(searchText);
        
        // 2. NEW: Sweep through the assistants array to find any name matches
        // We use a safe fallback (|| []) in case a team has no assistant coaches listed yet
        const matchesAssistant = (team.assistants || []).some(asst => 
            asst.name.toLowerCase().includes(searchText)
        );

        // Combine them: a card matches if it fits the search text (school, head, or assistant)
        const matchesSearch = matchesSchoolOrHead || matchesAssistant;
        
        // 3. Keep your original conference check intact
        const matchesConf = selectedConf === "all" || team.conference === selectedConf;
        
        return matchesSearch && matchesConf;
    });

    displayTeams(filtered);
}

// Event Listeners for user actions
//searchBar.addEventListener("input", filterTeams);
//conferenceFilter.addEventListener("change", filterTeams);

// Run on page load
//displayTeams(hockeyPrograms);

// 1. Add your normal event listeners
searchBar.addEventListener("input", filterTeams);
conferenceFilter.addEventListener("change", filterTeams);

// 2. CREATE A PROTECTION FLAG: Prevents the page from initializing twice
let isPageAlreadyLoaded = false;

function initializePageOnce() {
    // If the browser attempts to run this script again, stop it immediately
    if (isPageAlreadyLoaded) return; 
    
    // Run the display loop
    displayTeams(hockeyPrograms);
    
    // Lock the flag permanently
    isPageAlreadyLoaded = true; 
}

// 3. Trigger the protective launcher instead of the raw function
initializePageOnce();