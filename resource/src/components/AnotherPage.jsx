// AnotherPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./anotherpage.module.css";

function AnotherPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const resourceId = params.get("resourceId");
  const apResources = [
    {
      class: "AP Practice Tests",
      resources: [
        {
          name: "CrackAP Practice Exams (A lot of practice tests)",
          url: "https://www.crackap.com/ap/index.html",
        },
        {
          name: "Albert IO AP Practice Tests",
          url: "https://www.albert.io/subjects/high-school/ap",
        },
        {
          name: "Kaplan AP Practice Tests",
          url: "https://www.kaptest.com/study/ap-exam/",
        },
        {
          name: "Knowt practice and FRQ",
          url: "https://knowt.com/exams/AP",
        },
        {
          name: "High School Test Prep AP practice tests",
          url: "https://highschooltestprep.com/ap/",
        },
        {
          name: "Varsity Tutor Diagnostic Tests",
          url: "https://www.varsitytutors.com/advanced_placement-practice-tests",
        },
      ],
    },
    {
      class: "AP Art History",
      resources: [
        {
          name: "AP Art History Youtube Playlist",
          url: "https://youtube.com/playlist?list=PLoGgviqq484479U3Mvh2nUNvSUSPyZohj&si=lvCX41bxRTpW9Ju4",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-art-history",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/humanities/ap-art-history",
        },
        {
          name: "Teacher Oz",
          url: "https://www.teacheroz.com/",
        },
        { name: "Smarthistory", url: "https://smarthistory.org/" },
        {
          name: "Heilbrunn Timeline of Art History",
          url: "https://www.metmuseum.org/toah/",
        },
        {
          name: "Google Arts & Culture",
          url: "https://artsandculture.google.com/",
        },
        { name: "Artcyclopedia", url: "http://www.artcyclopedia.com/" },
        {
          name: "MoMA Learning",
          url: "https://www.moma.org/learn/moma_learning/",
        },
      ],
    },
    {
      class: "AP Biology",
      resources: [
        {
          name: "AP Biology YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847VchRdUdvbDPzsp9ResrjD",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-biology",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/science/ap-biology",
        },
        {
          name: "Amoeba Sisters",
          url: "https://www.youtube.com/user/AmoebaSisters",
        },
        {
          name: "Bozeman Science",
          url: "http://www.bozemanscience.com/ap-biology",
        },
        {
          name: "Crash Course Biology",
          url: "https://thecrashcourse.com/courses/biology",
        },
        {
          name: "Winnie Sloan",
          url: "https://www.youtube.com/user/WinnieLitten/playlists",
        },
        { name: "Albert.io", url: "https://www.albert.io/ap-biology" },
      ],
    },
    {
      class: "AP Calculus AB",
      resources: [
        {
          name: "AP Calculus AB YouTube Playlist",
          url: "https://youtube.com/playlist?list=PLoGgviqq4844keKrijbR_EPKRNIW6hahV&si=1sNTDXomw2kdjKMD",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-calculus-ab",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/math/ap-calculus-ab",
        },
        {
          name: "AP Calculus Practice Exams",
          url: "https://www.appracticeexams.com/ap-calculus-ab",
        },
        {
          name: "Paul's Online Math Notes",
          url: "http://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx",
        },
        {
          name: "Michel van Biezen (Good Example Problems)",
          url: "https://www.youtube.com/user/ilectureonline/playlists",
        },
        { name: "Symbolab", url: "https://www.symbolab.com/" },
        { name: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
        {
          name: "Derivative Calculator",
          url: "https://www.derivative-calculator.net/",
        },
        {
          name: "Integral Calculator",
          url: "https://www.integral-calculator.com/",
        },
      ],
    },
    {
      class: "AP Calculus BC",
      resources: [
        {
          name: "AP Calculus BC YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844oVJMjJ8YkD4mQIoMp4Cbu",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-calculus-bc",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/math/ap-calculus-bc",
        },
        {
          name: "AP Calculus Practice Exams",
          url: "https://www.appracticeexams.com/ap-calculus-bc",
        },
        {
          name: "Paul's Online Math Notes",
          url: "http://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx",
        },
        {
          name: "Michel van Biezen (Good Example Problems)",
          url: "https://www.youtube.com/user/ilectureonline/playlists",
        },
        { name: "Symbolab", url: "https://www.symbolab.com/" },
        { name: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
        {
          name: "Derivative Calculator",
          url: "https://www.derivative-calculator.net/",
        },
        {
          name: "Integral Calculator",
          url: "https://www.integral-calculator.com/",
        },
      ],
    },
    {
      class: "AP Chemistry",
      resources: [
        {
          name: "AP Chemistry YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845Sy3UfnNh_PljzAptMR7MQ",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-chemistry",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/science/ap-chemistry",
        },
        {
          name: "Abigal Giordano",
          url: "https://www.youtube.com/@GiordanoAPChemistry",
        },
        {
          name: "Bozeman Science",
          url: "http://www.bozemanscience.com/ap-chemistry",
        },
        {
          name: "AP Chemistry Ultimate Review",
          url: "https://docs.google.com/document/d/1oqabXpncmbTzDiCWdklvkeoFlet4UeBtcUpq7Ae2qC4/edit",
        },
      ],
    },
    {
      class: "AP Chinese Language and Culture",
      resources: [
        {
          name: "AP Chinese YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847R2JKQ7-nYVhrnD2ajSG7Y",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-chinese-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/chinese/",
        },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/zh/en/Learn-Chinese",
        },
        { name: "ChinesePod", url: "https://www.chinesepod.com/" },
        { name: "HelloChinese", url: "https://www.hellochinese.cc/" },
        { name: "FluentU", url: "https://www.fluentu.com/blog/chinese/" },
      ],
    },
    {
      class: "AP Comparative Government and Politics",
      resources: [
        {
          name: "AP Comparative Government and Politics YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847a2DzrJb-ftSzsICV5Gdi0",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-comparative-government-and-politics",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/humanities/ap-us-government-and-politics",
        },
        {
          name: "Crash Course Government and Politics",
          url: "https://thecrashcourse.com/courses/government",
        },
        { name: "iCivics", url: "https://www.icivics.org/" },
        {
          name: "CIA World Factbook",
          url: "https://www.cia.gov/the-world-factbook/",
        },
      ],
    },
    {
      class: "AP Computer Science A",
      resources: [
        {
          name: "AP Computer Science A YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845xKOY11PnkE7aqJC7-bYrd",
        },
        {
          name: "Coding Bat",
          url: "https://codingbat.com/java",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-computer-science-a",
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/learn/learn-java",
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org/specializations/java-programming",
        },
        { name: "EdX", url: "https://www.edx.org/learn/java" },
        { name: "CS50", url: "https://cs50.harvard.edu/" },
        {
          name: "Geeks for Geeks",
          url: "https://www.geeksforgeeks.org/?download-android-apps-without-play-store%2F=",
        },
      ],
    },
    {
      class: "AP Computer Science Principles",
      resources: [
        {
          name: "AP Computer Science Principles YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844vbwcKegJgIxSQyVHDzSXT",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-computer-science-principles",
        },
        { name: "Code.org", url: "https://studio.code.org/s/csp1-2020" },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/computing/ap-computer-science-principles",
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/learn/computer-science",
        },
        {
          name: "Crash Course",
          url: "https://thecrashcourse.com/topic/computerscience/",
        },
        {
          name: "EdX",
          url: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
        },
        {
          name: "Exploring Computer Science",
          url: "http://www.exploringcs.org/",
        },
      ],
    },
    {
      class: "AP English Language and Composition",
      resources: [
        {
          name: "AP English Language and Composition YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845w6_VxQLtAmVypmSMtTd0r",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-english-language-and-composition",
        },
        { name: "SparkNotes", url: "https://www.sparknotes.com/lit/" },
        { name: "Literary Devices", url: "https://literarydevices.net/" },
      ],
    },
    {
      class: "AP English Literature and Composition",
      resources: [
        {
          name: "AP English Literature and Composition YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845L7Yj9c1kkIfdskkaLOUzD",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-english-literature-and-composition",
        },
        { name: "SparkNotes", url: "https://www.sparknotes.com/lit/" },
        { name: "Literary Devices", url: "https://literarydevices.net/" },
        { name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
      ],
    },
    {
      class: "AP Environmental Science",
      resources: [
        {
          name: "AP Environmental Science YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847IAo58jX32INd_UxDVW0YJ",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-environmental-science",
        },
        {
          name: "Bozeman Science",
          url: "http://www.bozemanscience.com/ap-environmental-science",
        },
        {
          name: "Crash Course Ecology",
          url: "https://thecrashcourse.com/courses/ecology",
        },
        {
          name: "National Geographic",
          url: "https://www.nationalgeographic.com/environment/",
        },
      ],
    },
    {
      class: "AP European History",

      resources: [
        {
          name: "AP European History YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq48471wZEJTgkJCJxOw2q1wmYM",
        },
        {
          name: "Heimler History",
          url: "https://www.youtube.com/@heimlershistory/playlists",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-european-history",
        },
        {
          name: "Crash Course European History",
          url: "https://thecrashcourse.com/courses/europeanhistory",
        },
        {
          name: "EuroDocs",
          url: "http://eudocs.lib.byu.edu/index.php/Main_Page",
        },
        { name: "Best History Sites", url: "http://www.besthistorysites.net/" },
      ],
    },
    {
      class: "AP French Language and Culture",
      resources: [
        {
          name: "AP French YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq48450RQdBgdqj-a4J0eD9lrkw",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-french-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/french/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/french/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/fr/en/Learn-French",
        },
        { name: "FrenchPod101", url: "https://www.frenchpod101.com/" },
        { name: "TV5Monde", url: "https://langue-francaise.tv5monde.com/" },
        { name: "Le Point du FLE", url: "https://www.lepointdufle.net/" },
        { name: "Loecsen", url: "https://www.loecsen.com/en/learn-french" },
      ],
    },
    {
      class: "AP German Language and Culture",
      resources: [
        {
          name: "AP German YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844xCVbFUawcSsJ_iOJ_3Cvt",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-german-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/german/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/german/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/de/en/Learn-German",
        },
        { name: "GermanPod101", url: "https://www.germanpod101.com/" },
        { name: "DeutschAkademie", url: "https://www.deutschakademie.de/en/" },
        { name: "Lingoda", url: "https://www.lingoda.com/en/german" },
        { name: "Easy German", url: "https://www.easygerman.org/" },
      ],
    },
    {
      class: "AP Human Geography",
      resources: [
        {
          name: "AP Human Geography YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847gGLvmfXPT5pYZRqBqsqLN",
        },
        {
          name: "Heimler History",
          url: "https://www.youtube.com/@heimlershistory/playlists",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-human-geography",
        },
        {
          name: "Mr. Sinn Youtube Channel",
          url: "https://www.youtube.com/@MrSinn/featured",
        },
        {
          name: "National Geographic Education",
          url: "https://www.nationalgeographic.org/education/resource-library/",
        },
        { name: "Population Reference Bureau", url: "https://www.prb.org/" },
        { name: "Geography Education", url: "http://geographyeducation.org/" },
      ],
    },
    {
      class: "AP Italian Language and Culture",
      resources: [
        {
          name: "AP Italian YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844fvUz7G3obGEDqiz5q8G9L",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-italian-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/italian/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/italian/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/it/en/Learn-Italian",
        },
        { name: "ItalianPod101", url: "https://www.italianpod101.com/" },
        { name: "LearnAmo", url: "https://learnamo.com/" },
        { name: "Loecsen", url: "https://www.loecsen.com/en/learn-italian" },
      ],
    },
    {
      class: "AP Japanese Language and Culture",
      resources: [
        {
          name: "AP Japanese YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847sWgSD6H0I18jdFzxNrvGj",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-japanese-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/japanese/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/japanese/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/ja/en/Learn-Japanese",
        },
        { name: "JapanesePod101", url: "https://www.japanesepod101.com/" },
        {
          name: "NHK World",
          url: "https://www3.nhk.or.jp/nhkworld/en/learnjapanese/",
        },
        { name: "Japanese From Zero", url: "https://japanesefromzero.com/" },
      ],
    },
    {
      class: "AP Latin",
      resources: [
        {
          name: "AP Latin YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq48459FanuiZNHWzyvs8AfIEre",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-latin",
        },
        {
          name: "Perseus Digital Library",
          url: "http://www.perseus.tufts.edu/hopper/",
        },
        { name: "Textkit", url: "https://www.textkit.com/" },
        { name: "Latin Library", url: "http://www.thelatinlibrary.com/" },
        { name: "Wheelock's Latin", url: "http://wheelockslatin.com/" },
        { name: "National Latin Exam", url: "https://www.nle.org/" },
      ],
    },
    {
      class: "AP Macroeconomics",
      resources: [
        {
          name: "AP Macroeconomics YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4846HpniS9auPk8siwRF5LoPB",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-macroeconomics",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics",
        },
        { name: "ACDC Econ", url: "https://www.acdcecon.com/" },
        {
          name: "Jacob Clifford (ACDC Econ) Youtube Channel",
          url: "https://www.youtube.com/@JacobAClifford",
        },

        {
          name: "Crash Course Economics",
          url: "https://thecrashcourse.com/courses/economics",
        },
      ],
    },
    {
      class: "AP Research",
      resources: [
        {
          name: "AP Research YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845Tiot5ihu6Axzh81Po2mOo",
        },
        {
          name: "College Board - AP Research",
          url: "https://apstudents.collegeboard.org/courses/ap-research",
        },
        {
          name: "Purdue Online Writing Lab (OWL)",
          url: "https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html",
        },
        {
          name: "Research Methods Knowledge Base",
          url: "https://www.socialresearchmethods.net/kb/",
        },
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/",
        },
        {
          name: "JSTOR",
          url: "https://www.jstor.org/",
        },
        {
          name: "PubMed",
          url: "https://pubmed.ncbi.nlm.nih.gov/",
        },
        {
          name: "Project Gutenberg",
          url: "https://www.gutenberg.org/",
        },
      ],
    },
    {
      class: "AP Seminar",
      resources: [
        {
          name: "AP Seminar YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847dwdY25XcCHLlN0uo0ccW6",
        },
        {
          name: "College Board - AP Seminar",
          url: "https://apstudents.collegeboard.org/courses/ap-seminar",
        },
        {
          name: "Purdue Online Writing Lab (OWL)",
          url: "https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html",
        },
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/",
        },
        {
          name: "JSTOR",
          url: "https://www.jstor.org/",
        },
        {
          name: "Project Gutenberg",
          url: "https://www.gutenberg.org/",
        },
      ],
    },
    {
      class: "AP Microeconomics",
      resources: [
        {
          name: "AP Microeconomics YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847-M3z5bOgGoX1fWVshEsLL",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-microeconomics",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/economics-finance-domain/ap-microeconomics",
        },
        { name: "ACDC Econ", url: "https://www.acdcecon.com/" },
        {
          name: "Jacob Clifford (ACDC Econ) Youtube Channel",
          url: "https://www.youtube.com/@JacobAClifford",
        },
        {
          name: "Crash Course Economics",
          url: "https://thecrashcourse.com/courses/economics",
        },
      ],
    },
    {
      class: "AP Music Theory",
      resources: [
        {
          name: "AP Music Theory YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4846e6QsN6lj_QzbOo-TDf86A",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-music-theory",
        },
        { name: "MusicTheory.net", url: "https://www.musictheory.net/" },
        { name: "Teoria", url: "https://www.teoria.com/" },
        {
          name: "Dolmetsch Online",
          url: "https://www.dolmetsch.com/theoryintro.htm",
        },
        { name: "The College Music Society", url: "https://www.music.org/" },
      ],
    },
    {
      class: "AP Physics 1",
      resources: [
        {
          name: "AP Physics 1 YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847W5Jc1K3o99YHTGLx-L75m",
        },
        {
          name: "MIT College workbook",
          url: "https://web.mit.edu/~yczeng/Public/WORKBOOK%201%20FULL.pdf",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-physics-1",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/science/ap-physics-1",
        },
        { name: "Flipping Physics", url: "https://www.flippingphysics.com/" },
        { name: "Physics Classroom", url: "https://www.physicsclassroom.com/" },
        {
          name: "AP Physics Practice Exams",
          url: "https://www.apphysicsresources.com/ap-physics-1-exams",
        },
      ],
    },
    {
      class: "AP Physics 2",
      resources: [
        {
          name: "AP Physics 2 YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845KrxuxxrWj4WM7oM6Wxl1m",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-physics-2",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/science/ap-physics-2",
        },
        {
          name: "HyperPhysics",
          url: "http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html",
        },
        { name: "Physics Classroom", url: "https://www.physicsclassroom.com/" },
      ],
    },
    {
      class: "AP Physics C: Electricity and Magnetism",
      resources: [
        {
          name: "AP Physics C: Electricity and Magnetism YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845HXjP2hMrCCHw-koPsj7oY",
        },
        {
          name: "AP Physics C – Practice Workbook",
          url: "https://drive.google.com/file/d/1rpQpEDoI217iUQk8un-QYVd5x6XXq62a/view?usp=sharing",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism",
        },
        {
          name: "HyperPhysics",
          url: "http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html",
        },
        { name: "Flipping Physics", url: "https://www.flippingphysics.com/" },
        { name: "Physics Classroom", url: "https://www.physicsclassroom.com/" },
      ],
    },
    {
      class: "AP Physics C: Mechanics",
      resources: [
        {
          name: "AP Physics C: Mechanics YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq48467T6PU5a6QwxNgUb5SgI9V",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics",
        },
        {
          name: "HyperPhysics",
          url: "http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html",
        },
        { name: "Flipping Physics", url: "https://www.flippingphysics.com/" },
        { name: "Physics Classroom", url: "https://www.physicsclassroom.com/" },
      ],
    },
    {
      class: "AP Psychology",
      resources: [
        {
          name: "AP Psychology YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844U91iotDP7n7brR_ovoSFB",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-psychology",
        },
        {
          name: "Crash Course Psychology",
          url: "https://thecrashcourse.com/courses/psychology",
        },
        { name: "Psych Central", url: "https://psychcentral.com/" },
        {
          name: "APA Psychology",
          url: "https://www.apa.org/",
        },
      ],
    },
    {
      class: "AP Spanish Language and Culture",
      resources: [
        {
          name: "AP Spanish Language and Culture Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847NrGXhnmp6QnzSwknYH3SJ",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-spanish-language-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/spanish/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/spanish/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/es/en/Learn-Spanish",
        },
        { name: "SpanishPod101", url: "https://www.spanishpod101.com/" },
        { name: "StudySpanish.com", url: "https://studyspanish.com/" },
        {
          name: "Instituto Cervantes",
          url: "https://www.cervantes.es/default.htm",
        },
        { name: "SpanishDict", url: "https://www.spanishdict.com/" },
      ],
    },
    {
      class: "AP Spanish Literature and Culture",
      resources: [
        {
          name: "AP Spanish Lit Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4846hRB2oasV7sYAA4yW7VrbG",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-spanish-literature-and-culture",
        },
        {
          name: "BBC Languages",
          url: "http://www.bbc.co.uk/languages/spanish/",
        },
        { name: "FluentU", url: "https://www.fluentu.com/blog/spanish/" },
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/course/es/en/Learn-Spanish",
        },
        { name: "SpanishPod101", url: "https://www.spanishpod101.com/" },
        { name: "StudySpanish.com", url: "https://studyspanish.com/" },
        {
          name: "Instituto Cervantes",
          url: "https://www.cervantes.es/default.htm",
        },
        { name: "SpanishDict", url: "https://www.spanishdict.com/" },
      ],
    },
    {
      class: "AP Statistics",
      resources: [
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-statistics",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/math/ap-statistics",
        },
        { name: "Stats Medic", url: "https://www.statsmedic.com/" },
        { name: "OpenIntro Statistics", url: "https://www.openintro.org/" },
        { name: "Stat Trek", url: "https://stattrek.com/" },
      ],
    },
    {
      class: "AP Studio Art: 3-D Design",
      resources: [
        {
          name: "AP Studio Art: 3-D Design Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847cOCZ8RaO3D3SnvLpIzAW6",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-3-d-art-and-design",
        },
        { name: "Artcyclopedia", url: "http://www.artcyclopedia.com/" },
        { name: "The Art Story", url: "https://www.theartstory.org/" },
        { name: "JSTOR", url: "https://www.jstor.org/" },
        {
          name: "Google Arts & Culture",
          url: "https://artsandculture.google.com/",
        },
        {
          name: "Smithsonian American Art Museum",
          url: "https://americanart.si.edu/",
        },
        { name: "National Gallery of Art", url: "https://www.nga.gov/" },
      ],
    },
    {
      class: "AP Studio Art: 2-D Design",
      resources: [
        {
          name: "AP Studio Art: 2-D Design Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845m2Svz93jITSTAU5yt1QuW",
        },
        {
          name: "College Board",
          url: "https://apcentral.collegeboard.org/courses/ap-2-d-art-and-design",
        },
        { name: "Artcyclopedia", url: "http://www.artcyclopedia.com/" },
        { name: "The Art Story", url: "https://www.theartstory.org/" },
        { name: "JSTOR", url: "https://www.jstor.org/" },
        {
          name: "Google Arts & Culture",
          url: "https://artsandculture.google.com/",
        },
        {
          name: "Smithsonian American Art Museum",
          url: "https://americanart.si.edu/",
        },
        { name: "National Gallery of Art", url: "https://www.nga.gov/" },
      ],
    },
    {
      class: "AP Studio Art: Drawing",
      resources: [
        {
          name: "AP Drawing Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4844OAmdzExvl2Qcm1Q4xImZl",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-drawing",
        },
        { name: "Artcyclopedia", url: "http://www.artcyclopedia.com/" },
        { name: "The Art Story", url: "https://www.theartstory.org/" },
        { name: "JSTOR", url: "https://www.jstor.org/" },
        {
          name: "Google Arts & Culture",
          url: "https://artsandculture.google.com/",
        },
        {
          name: "Smithsonian American Art Museum",
          url: "https://americanart.si.edu/",
        },
        { name: "National Gallery of Art", url: "https://www.nga.gov/" },
      ],
    },

    {
      class: "AP United States Government and Politics",
      resources: [
        {
          name: "AP US Government and Politics Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847dhi0SrQsNup5c76p7m3Ve",
        },
        {
          name: "Heimler History",
          url: "https://www.youtube.com/@heimlershistory/playlists",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-united-states-government-and-politics",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/social-science/ap-us-government-and-politics",
        },
        { name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
        { name: "Oyez", url: "https://www.oyez.org/" },
      ],
    },
    {
      class: "AP United States History",
      resources: [
        {
          name: "AP US History Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4847VRWTPXkDwxeVvNNfoKD7J",
        },
        {
          name: "Heimler History",
          url: "https://www.youtube.com/@heimlershistory/playlists",
        },
        {
          name: "APUSH One Pagers",
          url: "https://drive.google.com/drive/folders/1BgnTfiuKToymm_TWfmGI8YhPUmlwOFUT?usp=sharing ",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-united-states-history",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/humanities/ap-us-history",
        },
        {
          name: "Gilder Lehrman Institute of American History",
          url: "https://www.gilderlehrman.org/",
        },
        { name: "History Channel", url: "https://www.history.com/" },
        { name: "Digital History", url: "http://www.digitalhistory.uh.edu/" },
      ],
    },
    {
      class: "AP World History",
      resources: [
        {
          name: "AP World History: Modern Youtube Playlist",
          url: "https://www.youtube.com/playlist?list=PLoGgviqq4845dmFXqxdQ3LBR2fxLgv0GM",
        },
        {
          name: "Heimler History",
          url: "https://www.youtube.com/@heimlershistory/playlists",
        },
        {
          name: "College Board",
          url: "https://apstudents.collegeboard.org/courses/ap-world-history-modern",
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org/humanities/ap-world-history",
        },
        { name: "History Channel", url: "https://www.history.com/" },
      ],
    },
  ];
  const apList = [
    {
      name: "AP Practice Tests",
      image:
        "https://www.healthyplace.com/sites/default/files/images/stories/Self-Help/adhd-exams-healthyplace.jpg",
    },
    {
      name: "AP Art History",
      image:
        "https://about.jstor.org/wp-content/uploads/2013/10/armnig_10313257933.jpg",
    },
    {
      name: "AP Biology",
      image:
        "https://veritaspress.com/images/blog/_800x450_crop_center-center_100_none/Depositphotos_173276132_l-2015.jpg",
    },
    {
      name: "AP Calculus AB",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tangent_to_a_curve.svg",
    },
    {
      name: "AP Calculus BC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Washer_method.png?20210731115654",
    },
    {
      name: "AP Chemistry",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/1V-LSD_Chemical_Structure.svg",
    },
    {
      name: "AP Chinese Language and Culture",
      image: "https://i.ytimg.com/vi/bIhqugVuSV4/mq2.jpg",
    },
    {
      name: "AP Comparative Government and Politics",
      image:
        "https://rimmeysapgov.weebly.com/uploads/1/0/3/0/10305918/990930.jpg?372",
    },
    {
      name: "AP Computer Science A",
      image:
        "https://scriptmag.com/.image/t_share/MTY3Mzc4OTk2NTUwNDQ0NjU2/image-placeholder-title.jpg",
    },
    {
      name: "AP Computer Science Principles",
      image:
        "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
    },
    {
      name: "AP English Language and Composition",
      image:
        "https://mariahmccune.weebly.com/uploads/1/9/2/8/19282013/header_images/1465222900.jpg",
    },
    {
      name: "AP English Literature and Composition",
      image:
        "https://excelsiorecampus.com/wp-content/uploads/2018/11/AP-English-Lit.png",
    },
    {
      name: "AP Environmental Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WwhF7AWOzLkDS8nCzM-Mi1z7E2ZirWgzTA&s",
    },
    {
      name: "AP European History",
      image:
        "https://www.mrtredinnick.com/uploads/7/2/1/5/7215292/ap-euro-01_2_orig.png",
    },
    {
      name: "AP French Language and Culture",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/1200px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
    },
    {
      name: "AP German Language and Culture",
      image: "https://cdn.mos.cms.futurecdn.net/sUZ2PzB275ZMBPoWJgqDxD.jpg",
    },
    {
      name: "AP Human Geography",
      image:
        "https://study.com/cimages/course-image/human-geography-textbook_137698_large.jpg",
    },
    {
      name: "AP Italian Language and Culture",
      image:
        "https://eatingarounditaly.com/wp-content/uploads/2023/03/breaking-pasta-scaled.jpg",
    },
    {
      name: "AP Japanese Language and Culture",
      image:
        "https://www.japanshoreexcursions.com/wp-content/uploads/Japanese-traditional-culture-facts.jpg",
    },
    {
      name: "AP Latin",
      image:
        "https://www.collegetransitions.com/wp-content/uploads/2024/02/ap-latin.jpg",
    },
    {
      name: "AP Macroeconomics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VKRlvL4dsYAcGXdW6Xk7zlPi0Chshgh76w&s",
    },
    {
      name: "AP Microeconomics",
      image:
        "https://images.theconversation.com/files/418067/original/file-20210826-21-1sf8j51.png?ixlib=rb-4.1.0&rect=0%2C8%2C997%2C788&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    },
    {
      name: "AP Music Theory",
      image: "https://enthu.com/blog/wp-content/uploads/2023/10/image2-13.png",
    },
    {
      name: "AP Physics 1",
      image:
        "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/672f46420dea.jpg",
    },
    {
      name: "AP Physics 2",
      image: "https://i.ytimg.com/vi/-Wvrwn1h784/maxresdefault.jpg",
    },
    {
      name: "AP Physics C: Electricity and Magnetism",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv4pANNAWsL3SEOq2TdqNeOi_QoeU9w1CIg&s",
    },
    {
      name: "AP Physics C: Mechanics",
      image:
        "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/3682/PS0_CapacitorCircuit.png",
    },
    {
      name: "AP Psychology",
      image:
        "https://www.american.edu/cas/psychology/images/colorful-marketing-brain-psych-mob-1710.jpg",
    },
    {
      name: "AP Research",
      image: "https://i.ytimg.com/vi/EzH-WmHPoCM/maxresdefault.jpg",
    },
    {
      name: "AP Seminar",
      image: "https://i.ytimg.com/vi/0gXjxvpBwS8/hqdefault.jpg",
    },
    {
      name: "AP Spanish Language and Culture",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7K4qhR__pJVUBz01f-9WP_FYaPtYt2P4coA&s",
    },
    {
      name: "AP Spanish Literature and Culture",
      image:
        "https://static.wixstatic.com/media/508373_593a49579dec43d1b336c89c52f44ff0~mv2.jpg/v1/fill/w_420,h_234,al_c,lg_1,q_80,enc_auto/508373_593a49579dec43d1b336c89c52f44ff0~mv2.jpg",
    },
    {
      name: "AP Statistics",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Standard_Normal_Distribution.png/800px-Standard_Normal_Distribution.png",
    },
    {
      name: "AP Studio Art: 2-D Design",
      image:
        "https://gwhsnews.org/wp-content/uploads/2017/02/KelleyDualSis-900x582.jpg",
    },
    {
      name: "AP Studio Art: 3-D Design",
      image:
        "https://www.agerart.com/uploads/1/2/7/9/12795042/unnamed-3_2_orig.jpg",
    },
    {
      name: "AP Studio Art: Drawing",
      image:
        "https://chhsart.weebly.com/uploads/1/3/3/0/13308104/7940002_orig.jpg",
    },
    {
      name: "AP United States Government and Politics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMHjkebZK7xL5Z_zw_zMdFL9P7gKAwHvzCQ&s",
    },
    {
      name: "AP United States History",
      image:
        "https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659634390/BestColleges.com/BC_Resources_Colleges-Planning_test-Prep_AP-US_History_3.4.22_FTR_24329d5eb0/BC_Resources_Colleges-Planning_test-Prep_AP-US_History_3.4.22_FTR-1024x683.jpg",
    },
    {
      name: "AP World History",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOde7Hgu5I_5KioxORAKvtCB2h6qNhuYXGNQ&s",
    },
  ];
  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      {apResources.map((apClass, index) => (
        <div>
          {apClass.class === resourceId ? (
            <div>
              <div className={styles.space}> </div>{" "}
              <div className={styles.className}>{apClass.class}</div>{" "}
              <div>
                {apClass.resources.map((resource, idx) => (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.comp}
                  >
                    {resource.name}
                  </a>
                ))}
              </div>{" "}
            </div>
          ) : null}
        </div>
      ))}
      <button className={styles.button} onClick={handleReturnHome}>
        Return Home
      </button>
      <header className={styles.space}></header>{" "}
    </div>
  );
}
export default AnotherPage;
