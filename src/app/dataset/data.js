import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightIcon from '@mui/icons-material/Highlight';
import SchoolIcon from '@mui/icons-material/School';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FlareIcon from '@mui/icons-material/Flare';
const Menu=[
    {
        id: 1,
        title: "Paragaph Rewriter",
        link: "/",
    },
    {
        id: 2,
        title: "Paragaph Generator",
        link: "/paragraphgenerator"
    },
    {
        id: 3,
        title: "Sentence Rewriter",
        link: "/sentencerewriter"
    },
];
const Tabs=[
    {
        id: 1,
        title: "Normal",
        icon: <FormatColorFillIcon style={{color: '#D4BDAC'}}/>
    },
    {
        id: 2,
        title: "Fluent",
        icon: <BorderColorIcon style={{color: 'green'}}/>
    },
    {
        id: 3,
        title: "Formal",
        icon: <HighlightIcon style={{color: '#78B7D0'}}/>
    },
    {
        id: 4,
        title: "Innovative",
        icon: <TipsAndUpdatesIcon style={{color: 'orange'}}/>
    },
    {
        id: 5,
        title: "Coherent",
        icon: <FlareIcon style={{color: 'pink'}}/>
    },
    {
        id: 6,
        title: "Academic",
        icon: <SchoolIcon style={{color: 'black'}}/>
    },
];

// const Textparagraph=[
//     {
//         id: 1,
//         title: "Introducing Our AI-Based Paragraph Rewriter",
//         content: "Our paragraph rewriter utilizes AI models to understand the provided text before making changes to it. This helps it to avoid making any modifications that alter the meaning or context of the content. Thanks to this advanced functionality of our AI paragraph rewriting tool, you can trust it with all types of content, whether it is marketing copies or academic papers.",
//     },
//     {
//         id: 2,
//         title: "How to Use Rewrite Paragraph Tool?",
//         content: "Behind the scenes, our rewriter tool performs the following steps on the provided text: Checks and reads the text to properly understand it Determines the changeable and replaceable parts of the text Replaces the aforementioned parts with suitable alternatives and synonyms Checks the output to make sure it is true to the original meaning and context After that, the text is provided back to the user.",
//     },
// ];
const generatorTextparagraph=[
    {
        id: 1,
        title: "Understanding the Working and Functionality of Our Paragraph Generator",
        content: "The working and functionality at the backend of our paragraph generator are complex yet quite simple. Our tool works on generative AI. It uses AI models to understand the provided prompt along with the instructions/preferences. Then, using the data it has available, the tool creates a paragraph containing useful and insightful information. This paragraph generator is like ChatGPT, except that it is focused on creating paragraphs on specific topics. You can give it a prompt, which can be a single word or a detailed line of instructions. As long as it’s coherent and doesn’t ask for anything other than a paragraph(s), our tool will be able to understand it.",
    },
    
];
const benefitData=[
    {
        id: 1,
        title: "Save time and effort",
        content: "One of the main benefits of using an AI paragraph generator is that you can save time and effort. Instead of doing your research manually, finding all the key points to cover, writing a paragraph on them, and then checking it, you can simply use a tool and get all of these steps taken care of in a click. ",
    },
    {
        id: 2,
        title: "Gain ideas and inspiration",
        content: "Even if you don’t want to use the paragraph generator to create the entire content for you, you can still use it to gain ideas and inspiration. You can generate a few paragraphs and then get an idea of how you can write your own. This is an ideal use case for our tool in situations where AI tools are not allowed, such as school assignments.",
    },
    {
        id: 3,
        title: "Helps in consistency",
        content: "If you have to create a lot of paragraphs on different topics, using an AI generator can give you the benefit of consistency in writing style and tone. Since all of them will originate from a single source, they will be similar in terms of their wording and style.",
    },
];
// const SentenceRewriteText=[
//     {
//         id: 1,
//         title: "What Exactly is the Sentence Rewriter?",
//         content: "The sentence rewriter is an online tool that allows you to change the wording and phrasing of any sentence to make it look different from its original version. The purpose of the sentence rewriter is to make the sentence look different but have the same meaning as before. There are many different uses and purposes for our sentence rewriter. For example, you can use it to: Reword a piece of content to remove plagiarism from it. Improve a piece of text by replacing words and phrases with other suitable alternatives. And so on.",
//     },
//     {
//         id: 2,
//         title: "How Does Our Sentence Rewriter Work?",
//         content: "Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely. You can start using our AI Paragraph rewriter by following the below-given simple steps.",
//     },
// ];
// cards data
const CardData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Enter Your Paragraph",
        content: "To get started, enter the paragraph that you want to rewrite. You can type it directly into the provided space or upload a file from your local storage.",
        color: "bg-gray-200",
        textColor:"text-black"
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkcUh5lEpv5hmoVSw8mO3hfWoqbFyDucy3w&s",
        title: "Select the Rewriting Mode",
        content: "After entering the paragraph, select the mode that you want to use. Pick from the different modes, including Normal, Fluent, Formal, Innovative, Coherent, and Academic.",
        color: "bg-pink-700",
        textColor:"text-black"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Start the Rewriting Process",
        content: "Click on the “Rewrite” button to start the rewriting process. Wait for a few seconds for our tool to finish.",
        color: "bg-cyan-600",
        textColor:"text-black"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Copy or Download the Rewritten Text",
        content: "After the process is complete, click on the “Copy” or “Download” buttons to copy or save the text.",
        color: "bg-blue-800",
        textColor:"text-black"
    },
];

// generator Paragraph section cards
const GenerateCardData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Enter paragraph topic",
        content: "To get started, enter the paragraph topic into the provided space. It can be a word, a phrase, a sentence, or even longer.",
        color: "bg-gray-200",
        textColor:"text-black"
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkcUh5lEpv5hmoVSw8mO3hfWoqbFyDucy3w&s",
        title: "Select paragraph tone",
        content: "Next, select the tone that you want the paragraph to have. Choose between seven different tones, including Diplomatic, Formal, and Informal.",
        color: "bg-pink-700",
        textColor:"text-black"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Select length/number",
        content: "After that, select the length of the generated paragraphs along with the total number of paragraphs you need.",
        color: "bg-cyan-600",
        textColor:"text-black"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Copy/save the results",
        content: "Wait a few seconds for the paragraph(s) to be generated, and then copy or download the output using the provided buttons.",
        color: "bg-blue-800",
        textColor:"text-black"
    },
];

const SentenceCardsData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Enter your sentence(s)",
        content: "To get started, enter your sentences into our tool by typing, copy-pasting, or uploading a file from your local storage.",
        color: "bg-gray-200",
        textColor:"text-black"
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkcUh5lEpv5hmoVSw8mO3hfWoqbFyDucy3w&s",
        title: "Choose a rewriting mode",
        content: "Next, select a rewriting mode to adjust the tone of the rewritten sentences. Each mode makes its own unique style of changes.",
        color: "bg-pink-700",
        textColor:"text-black"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Start the rewriting process",
        content: "Once the input has been entered and the mode has been selected, click on the “Sentence Rewrite” button to start the rewriting process.",
        color: "bg-cyan-600",
        textColor:"text-black"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Save or copy the rewritten sentences",
        content: "After the process is complete, you can download the rewritten sentences to your local storage or copy them to your clipboard.",
        color: "bg-blue-800",
        textColor:"text-black"
    },
];
// Featured Cards
const FeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Quick & Accurate",
        content: "Thanks to the AI-based functionality of our tool, you can perform the rewriting process quickly and accurately. The process takes a few seconds to complete, and the changes made to the paragraph are all in line with its existing context.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Completely Free to Use",
        content: "There are no paid plans or subscriptions that you have to worry about when using our tool. It is completely free to use. All the modes are unlocked for all users, and there is no paywall.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " No Registration Needed",
        content: "Not only is our tool free to use, but it also doesn’t require any registration. You don’t have to provide your email or phone number to get started. You also don’t have to remember or enter a password to log in.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Multiple Modes Available",
        content: "Our paragraph rewriter provides multiple modes. You can choose from the modes depending on your needs and requirements. Each mode makes different changes to the provided text.",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " Downloading and Uploading Feature",
        content: "You can upload files from your local storage to save time on copy-pasting. Once the process is complete, our tool allows you to download the rewritten paragraph in the form of a TXT or DOC file.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Large Input Limit",
        content: "With our AI paragraph rewriter, you can enter up to 1,500 words at the same time. Thanks to this large input limit, you can rewrite all types of paragraphs, whether it’s academic papers or blog content.",
    },
    {
        id: '07',
        style: {
            color: 'green',
        },
        title: " Plagiarism-Free & Unique Output",
        content: "The changes made to your paragraph are unique. The final output is plagiarism-free, and you can use it easily for your SEO content or academic content without any worries. ",
    },
    {
        id: '08',
        style:{
            color: "purple",
        },
        title: " Smart & Contextual Changes",
        content: "Not only are the changes made to the paragraph unique, but they are also smart and contextually suitable. Our tool analyzes the existing words and phrases and then utilizes the best possible alternatives for them.",
    },
    {
        id: '09',
        style: {
            color: 'blue',
        },
        title: " Integration with Other Tools",
        content: "There are other tools on our website that you can utilize along with the paragraph rewriter. You can navigate to the paragraph generator and the sentence rewriter by simply clicking on the provided buttons.",
    },
];
// paragraph Generator Feaatured Card
const GenerateFeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Quick outputs",
        content: "Our tool is fast, and it can provide you with unique paragraphs on any topic in a matter of seconds. It has a very quick working process.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Completely free to use",
        content: "There are no subscriptions or paid plans that you have to worry about when using our tool. It is completely free and requires no registration.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " Various paragraph tones to choose from",
        content: "You can choose the ideal tone for the generated paragraphs according to your needs and requirements.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Generate multiple paragraphs",
        content: "Our tool allows you to generate multiple paragraphs at the same time. You can create one, three, or five paragraphs at once.",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " Choose from different lengths",
        content: "With our paragraph generator, you can create detailed or concise paragraphs. Choose the required length before starting the generation process.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Word and character count",
        content: "Once the paragraph is generated, our tool provides you with the exact word and character count so that you know how long it is.",
    },
    {
        id: '07',
        style: {
            color: '#FF8343',
        },
        title: " Download results to your device",
        content: "Save the generated paragraphs to your device using the “Download” option. The paragraphs will be downloaded in the “.doc” format.",
    },
    {
        id: '08',
        style: {
            color: 'green',
        },
        title: " Quick copy option",
        content: "If you want to copy the paragraph(s) to your clipboard, you can click on the Copy icon and do it quickly in a second.",
    },
    {
        id: '09',
        style: {
            color: '#CC2B52',
        },
        title: " Plagiarism-free and accurate results",
        content: "The paragraphs provided by our tool are unique and plagiarism-free. They are also accurate and contain genuine information about the topic described by the user.",
    },
    
    
];

const SentenceFeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Offers various rewriting modes",
        content: "One of the best things about our sentence rewriter is that it offers multiple rewriting modes that you can choose from. You can pick the best one depending on your needs and requirements.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Upload files from local storage",
        content: "Our tool allows you to upload files from your local storage, making everything quick and easy. If you have a file full of sentences that you need to rewrite, you can simply upload the file instead of copy-pasting the sentences one by one.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " Download rewritten sentences to your device",
        content: "Not only can you upload files to our tool, but you can also download the rewritten sentences back to your device once the process is complete. You can choose between TXT and DOC formats to download the file.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Fast and smart results",
        content: "Our sentence rewriter works quickly and provides outputs fast. You don't have to worry about long delays and pauses for the process to complete. Along with being fast, our tool is also smart and intelligent, thanks to its AI-driven functionality.  ",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " Ensures correct meaning and context",
        content: "When rewriting the provided sentences, our tool makes sure that the meaning and context are not disturbed. All of the changes are calculated to ensure that the tone and original meaning of the text are preserved.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Sentence counter",
        content: "There is an integrated sentence counter available in our tool. This counter allows you to check the total number of sentences that you've entered.",
    },
    {
        id: '07',
        style: {
            color: '#FF8343',
        },
        title: " Completely free to use",
        content: "There is no payment or subscription that you have to worry about making when using our tool. It is completely free from start to end. Everyone with an internet connection and browser can access and enjoy our sentence rewriter.",
    },
    {
        id: '08',
        style: {
            color: 'green',
        },
        title: " No registration required",
        content: "You don't have to sign up with your email address or phone number when it comes to using our tool. There is no registration required.",
    },
    {
        id: '09',
        style: {
            color: '#CC2B52',
        },
        title: " User-friendly interface",
        content: "Thanks to the user-friendly interface of our tool, you can easily find all the options and buttons. There are no menus that you have to navigate through, nor are there any complicated website designs that you need to worry about.",
    },
];
const AIToolData=[
    {
        id:1,
        content:"The free paragraph rewriter helps refine your writing and ensure it is clear and easier to understand."
    },
    {
        id:2,
        content:"Our AI Rewriter can simplify complex paragraphs, making them accessible to a wider audience."
    },
    {
        id:3,
        content:"The rewriting tool allows users to automatically set a desired writing tone in the paragraph."
    },
    {
        id:4,
        content:"The AI rewriter is efficient in removing keyword stuffing and repetitive phrases."
    },
    {
        id:5,
        content:"As compared to manual rewriting, our AI Rewriter can save you time and effort."
    },
    {
        id:6,
        content:"Our AI paragraph rewriter is completely free and unlimited to use."
    },
    {
        id:7,
        content:"Paragraph Rewriter can automatically turn your boring paragraphs into compelling ones."
    },
];
const Rewritertooldata=[
    {
        id:1,
        image:"https://cdn-icons-png.flaticon.com/512/354/354637.png",
        alt: "student",
        title:"Students",
        content: "Students can use our paragraph rewriting tool to improve the quality of their content. They can improve and polish the quality of their assignments before handing them in. Our tool provides an “Academic” tone for these users in particular.",
    },
    {
        id:2,
        image:"https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png?f=webp",
        alt: "Digital Marketing Expert",
        title:"Digital Marketing Expert",
        content: "Digital marketing experts often need to create content for their marketing campaigns, whether it’s in the form of website copies or catchy emails. They can use our AI rewriter to enhance the quality of their content before putting it to use.",
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToulW-McgQC_VHHzPM8izZw97Gaw81Iwoo0wfpoAFzdMJbj-_zaMpfgPMm8fsE0Ui33Y&usqp=CAU",
        alt: "Content Writers",
        title:"Content Writers",
        content: "Content writers have to write content on a regular basis. Whether freelance or full-time, a helpful tool such as our paragraph rewriter can come in handy for these professionals. It can give them ideas on improving the quality of their content and also remove any accidental plagiarism that may occur in their writing.",
    },
    {
        id:4,
        image:"https://thumbs.dreamstime.com/b/video-blogger-icon-web-eps-file-easy-to-edit-332010573.jpg",
        alt: "Bloggers and SEO Experts",
        title:"Bloggers and SEO Experts",
        content: "Bloggers and SEO experts have to create and edit content for their websites. They have to make sure that the content is high-quality and easy to read. Our tool can help them with this by improving the flow of the text and making it plagiarism-free.",
    },
];

const paragraphGeneratorTools=[
    {
        id:1,
        image:"https://cdn-icons-png.flaticon.com/512/354/354637.png",
        alt: "student",
        title:"Students",
        content: "Students can use our tool to quickly generate paragraphs on any topic they need. They can use our tool to get help with their assignments. Students don’t have to worry about plagiarism when generating paragraphs with this tool due to its AI-based working. ",
    },
    {
        id:2,
        image:"https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png?f=webp",
        alt: "Writers",
        title:"Writers",
        content: "Professional writers can make their everyday tasks quicker and easier with the help of our tool. They can generate paragraphs on topics that they’re confused about and then lightly modify them using their own working. The paragraph generator is also a great tool for research purposes, as it provides useful and insightful information on the provided topics.",
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToulW-McgQC_VHHzPM8izZw97Gaw81Iwoo0wfpoAFzdMJbj-_zaMpfgPMm8fsE0Ui33Y&usqp=CAU",
        alt: "Researchers",
        title:"Researchers",
        content: "Researchers often need to write statements and explanations during the course of their studies. When done manually, this can take time and effort. However, with the help of our tool, this problem doesn't remain. With a simple prompt, entire paragraphs can be created at the click of a button.",
    },
    {
        id:4,
        image:"https://thumbs.dreamstime.com/b/video-blogger-icon-web-eps-file-easy-to-edit-332010573.jpg",
        alt: "SEO experts",
        title:"SEO experts",
        content: "SEO experts often have to create content in the form of blogs, on-page copies, emails, etc. With our tool, they can transform a long and arduous writing journey into a one-click generator process.",
    },
];
const FAQsData=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "Is using a paragraph rewriter legal?",
        answer: "Yes, using a paragraph rewriter is legal as long as there is no deception involved. For example, you should only use the rewriter if you have permission from your employer/teacher to do so. If you’re simply experimenting on your own, then there is no problem."
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "Is the output provided by a paragraph rewriting tool unique and plagiarism-free?",
        answer: "Yes, the output provided by our tool is unique and plagiarism-free. The changes our rewriter makes to the text are enough to render the latter different from its original version."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "How long does it usually take for your tool to provide results?",
        answer: "Usually, our tool can scan and rewrite the provided paragraph within a few seconds. If the text is long and lengthy, the process can take up a bit more time."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "What other tools can I use on your platform?",
        answer: "There is a sentence rewriter and a paragraph generator that you can use on our website along with the paragraph rewriter."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "What is the purpose of having different rewriting modes?",
        answer: "The different rewriting modes help ensure that the rewriting is done according to your needs and requirements. For example, rewriting the text in the Academic mode will give it a crisp and formal tone."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "Will rewriting the paragraphs change their meaning?",
        answer: "No, rewriting the paragraphs using our tool does not change their meaning. Our tool uses AI to understand the meaning and context of the paragraphs so that the changes don’t modify either of them. "
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "What should I do if my paragraph(s) are longer than 1,500 words?",
        answer: "You can break your input content into smaller pieces so that they can be entered one by one into our tool. Although there is a 1,500-word limit on our rewriter, there is no limit on the number of times that you can use it."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "Where can I find the downloaded files on my device?",
        answer: "Usually, the Downloads folder is where you can find downloaded files on your device. However, if you have selected a different destination for the downloads, you will have to navigate to that particular folder."
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Does my content get used anywhere after I upload it to your website?",
        answer: "No, we don't utilize your content or share it with any third parties. Your data stays safe and private when you use our tool."
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "What is the best way to rewrite a paragraph?",
        answer: "The best way to rewrite a paragraph is to pick an AI rewriter (like ours) and then select the mode that suits your needs the best (such as Academic, Fluent, etc.)."
    },
];
const ParagraphFAQs=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "How does the paragraph generator work?",
        answer: "The paragraph generator utilizes generative AI. It analyzes and understands the provided input and then provides an output created from the data that it is trained on. "
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "Does the paragraph generator copy-paste content from somewhere?",
        answer: "No, our tool doesn't copy-paste content from a source. Rather, it uses its data to create a unique response to each prompt. You don’t have to worry about any duplication or plagiarism."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "Is it safe to use the paragraph generator?",
        answer: "Yes, the paragraph generator is safe to use. You don't have to provide any sort of details about yourself, nor will the tool ask you to enter your credit card details, etc. All you need to do is give the prompt and then copy/save the provided output."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "Is it legal/allowed to use the paragraph generator?",
        answer: "Using the paragraph generator is perfectly fine as long as you don't use it in a setting where online tools or generative AI tools are banned/disallowed. For example, if you are working for a client or company that has expressly prohibited the use of AI tools in the writing process, then you shouldn’t use our paragraph generator."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "Why should I use this paragraph generator instead of ChatGPT?",
        answer: "With ChatGPT, you first have to sign up using your email, and then you have to sign in. After that, if you want to generate a paragraph, you have to prepare a prompt detailing your requirements and topic. On the other hand, with our tool, there is no signup needed, nor do you have to make an elaborate prompt. Instead, you just have to enter the topic, adjust the settings as per your requirements, and then click on the button to start the process."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "What is the “Diplomatic” tone?",
        answer: "The diplomatic tone is a type of formal tone that you can use for professional emails, research papers, proposals, etc. "
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "What should I do if I don't like the quality of the generated paragraph?",
        answer: "If you don't like the quality of the generated paragraph, you can simply run the process again with the same prompt. Our tool will give you a different output, and you can check it to see if it suits your liking."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "Where do I find the downloaded paragraphs on my device?",
        answer: "You can find the downloaded files on your device in the Downloads folder. Or, if you have changed the download folder to some other destination, that is where you'll find the saved outputs from our tool."
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Will I get in trouble at school if I use your paragraph generator?",
        answer: "You won't get in trouble at school if there is no prohibition or ban on AI tools. However, if your teacher doesn't allow AI tools, such as content generators, then you shouldn't use our tool."
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "I want longer paragraphs. What should I do?",
        answer: "Simply select the “Detailed” option in the “Paragraph Length” drop-down menu. By making this selection, the generated paragraphs will be long and lengthy. "
    },
   
];

const SentenceFAQsData=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "Why should I rewrite my sentences?",
        answer: "You should rewrite your sentences if you think they need a little bit of tweaking in their quality. Our rewriter can improve the flow and clarity of the provided sentences. It can also be a good idea to rewrite your sentences if you suspect that they contain plagiarism."
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "What happens if I pick the “Improver” mode?",
        answer: "The Improver mode is designed to improve the quality of the provided text. It focuses on finding and replacing the clunky parts of the content, such as unsuitable words and phrases."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "Does sentence rewriting remove plagiarism?",
        answer: "Technically, yes, rewriting a sentence (using a tool) does remove plagiarism. However, the tools should not be used for this purpose as it is an unethical practice. In other words, you should not take someone else’s content and then rewrite it using our online tool and then claim it as your own. If there is some accidental plagiarism in your own content, then you can use our online tool to remove it."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "Is it okay to use a sentence rewriter in school?",
        answer: "Typically, teachers and educators discourage the use of such online tools as they sap the creativity of their students. These tools are used as a shortcut by the students so that they don’t have to think and work on their own. If your teacher has disallowed online AI tools to be used for writing assignments and creating presentations, etc., then it will not be okay to use a sentence rewriter since it falls in the aforementioned category."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "Will my data be saved or sold on your platform?",
        answer: "No, your data will not be sold or saved on our platform. We take care to protect our user's data and make sure that their experience is safe and secure."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "What should I do if I don't like the quality of the rewritten results?",
        answer: "If you don't like the quality of the provided outputs, you can run the process again with the same input and mode. Our tool will rewrite the same text in a different way, and you can then check it to see if it is as per your preferences. You can also try changing the rewriting mode and then see if the changes are made according to your expectations or not."
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "What makes your tool better than other online rewriting platforms?",
        answer: "There are a number of things that make our tool better than other online platforms. For one, we provide completely free access without any sort of registration. Many other platforms require users to either sign up or buy a paid plan before they can get full access. Other than the accessibility and availability of our tool, the fast and accurate performance is also a factor that makes it outstanding."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "What can I do to maximize the quality of this tool's outputs?",
        answer: "To get the most out of our sentence rewriter, enter only a few sentences into the tool at one time. Don't enter sentences of different tones and topics at once, as that could confuse the AI engine"
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Are there any other tools that I can use on your platform?",
        answer: "Yes, there are other tools that you can use on our platform. You can try out the paragraph rewriter and the paragraph generator for free. "
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "I need to rewrite entire paragraphs and not just sentences. Can I use this tool for that purpose?",
        answer: "While you can use the sentence rewriter for larger pieces of text, the ideal recourse is to use the dedicated paragraph rewriter instead. We offer this tool on our website as well, and you can access it for free without any registration. "
    },
];
const UsersInfo=[
    {
        id: 1,
        email:"abcd@gmail.com",
        subject:"rewrite data",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        email:"hello@gmail.com",
        subject:"rewrite the sentence",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
]
export default Menu;
export {Tabs,generatorTextparagraph,CardData,FeaturedCardData,AIToolData,Rewritertooldata,FAQsData,UsersInfo,ParagraphFAQs,GenerateCardData,benefitData, GenerateFeaturedCardData,paragraphGeneratorTools,SentenceCardsData,SentenceFeaturedCardData,SentenceFAQsData};