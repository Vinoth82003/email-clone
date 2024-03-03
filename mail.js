// Define mailData
var mailData = [
    { category: "", status: "read draft", title: "Draft", description: "You build apps, we manage databases - If you are building a modern app or website, you can rely on us to handle the complexities of database management for you. Our team of experts will ensure optimal performance, security, and scalability for your database infrastructure. Let us take care of the backend so you can focus on building great products.", time: "12:06" },
    { category: "promotion", status: "read stared", title: "SVGator", description: "Enhance UX with SVG animations - Bring your projects to a new level. Attract and captivate your audience with stunning SVG animations. With SVGator, you can easily create and animate SVG graphics without writing a single line of code. Whether you're designing a website, presentation, or mobile app, SVGator has everything you need to create engaging animations that will leave a lasting impression.", time: "12:06" },
    { category: "social", status: "stared", title: "TechTonic Weekly", description: "Unlock the power of technology - Discover the latest innovations and trends in the tech industry, and stay ahead of the curve with TechTonic Weekly. Our team of experts scours the web to bring you the most relevant and insightful articles, videos, and podcasts on topics ranging from artificial intelligence and cybersecurity to cloud computing and digital marketing. Subscribe now and join thousands of tech enthusiasts who rely on TechTonic Weekly for their weekly dose of tech news and insights.", time: "09:15" },
    { category: "primary", status: "read spam", title: "Digital Trends Magazine", description: "Stay updated with the digital world - Explore the latest gadgets, apps, and digital lifestyle trends, and never miss out on what's trending in the digital space. Digital Trends Magazine is your go-to source for in-depth reviews, hands-on demos, and expert opinions on the latest tech products and innovations. Whether you're a casual consumer or a tech aficionado, you'll find something of interest in every issue of Digital Trends Magazine.", time: "12:30" },
    { category: "promotion", status: "read important", title: "CodeCrunch Newsletter", description: "Level up your coding skills - Get insights, tips, and tutorials on programming and software development, and take your coding skills to the next level with CodeCrunch Newsletter. Our team of experienced developers and tech enthusiasts curates the best content from around the web to help you stay updated on the latest trends, tools, and techniques in the world of coding. Whether you're a beginner looking to learn the basics or an experienced coder seeking advanced tips and tricks, CodeCrunch Newsletter has something for everyone.", time: "14:45" },
    { category: "social", status: "send spam", title: "AI Insights Report", description: "Dive deep into artificial intelligence - Explore the latest research, applications, and breakthroughs in AI, and gain valuable insights into the world of artificial intelligence. AI Insights Report provides comprehensive coverage of AI-related topics, including machine learning, neural networks, natural language processing, and more. Whether you're a researcher, developer, or business leader, you'll find valuable information and actionable insights in every issue of AI Insights Report.", time: "16:20" },
    { category: "primary", status: "read important", title: "Gadget Gazette", description: "Your ultimate guide to gadgets - Reviews, comparisons, and recommendations for all your tech needs, helping you make informed decisions when it comes to gadgets and tech accessories. Gadget Gazette features in-depth reviews of the latest smartphones, laptops, wearables, and other tech gadgets, along with buying guides, product comparisons, and expert advice. Whether you're shopping for yourself or looking for the perfect gift, Gadget Gazette has you covered.", time: "10:00" },
    { category: "promotion", status: "stared", title: "Cybersecurity Digest", description: "Stay secure in the digital world - Learn about the latest threats, vulnerabilities, and security best practices, and keep your digital assets safe with Cybersecurity Digest. Our team of cybersecurity experts monitors the ever-changing threat landscape to bring you timely insights and practical tips for protecting yourself and your organization against cyber attacks. Whether you're a business owner, IT professional, or concerned individual, Cybersecurity Digest has the information you need to stay safe online.", time: "11:55" },
    { category: "social", status: "read important", title: "Data Science Weekly", description: "Unlock the power of data - Discover insights, tools, and techniques for data analysis and machine learning, and harness the power of data with Data Science Weekly. Our newsletter covers a wide range of topics, including data visualization, predictive modeling, and big data analytics, to help you stay at the forefront of this rapidly evolving field. Whether you're a data scientist, analyst, or enthusiast, Data Science Weekly has something for everyone.", time: "08:45" },
    { category: "primary", status: "send spam", title: "Cloud Computing Chronicle", description: "Explore the cloud frontier - Stay updated on cloud technologies, trends, and best practices, and make the most of the cloud with Cloud Computing Chronicle. Our team of cloud experts provides in-depth analysis, case studies, and tutorials to help you navigate the complexities of cloud computing and harness its full potential for your business. Whether you're a cloud architect, developer, or decision-maker, Cloud Computing Chronicle has the insights you need to succeed in the cloud.", time: "13:20" },
    { category: "promotion", status: "read", title: "TechStartup Spotlight", description: "Discover the next big thing in tech - Profiles, interviews, and stories about innovative startups and entrepreneurs, inspiring you to innovate and disrupt with TechStartup Spotlight. Our platform highlights the most promising tech startups from around the world, showcasing their innovative products, groundbreaking technologies, and entrepreneurial journeys. Whether you're an investor, entrepreneur, or tech enthusiast, TechStartup Spotlight is your guide to the future of technology.", time: "15:10" },
    { category: "social", status: "read stared", title: "VR World Magazine", description: "Immerse yourself in virtual reality - Reviews, news, and features about the latest VR hardware and experiences, taking you on a journey through the immersive world of virtual reality with VR World Magazine. Our team of VR enthusiasts brings you the latest updates on VR headsets, games, and experiences, along with in-depth reviews and insightful commentary. Whether you're a VR developer, gamer, or simply curious about the possibilities of virtual reality, VR World Magazine has something for everyone.", time: "17:30" },
    // Additional entries
    { category: "primary", status: "read", title: "TechTonic Weekly 2", description: "Unlock the power of technology - Discover the latest innovations and trends in the tech industry, and stay ahead of the curve with TechTonic Weekly. Our team of experts scours the web to bring you the most relevant and insightful articles, videos, and podcasts on topics ranging from artificial intelligence and cybersecurity to cloud computing and digital marketing. Subscribe now and join thousands of tech enthusiasts who rely on TechTonic Weekly for their weekly dose of tech news and insights.", time: "09:15" },
    { category: "promotion", status: "read important", title: "Digital Trends Magazine 2", description: "Stay updated with the digital world - Explore the latest gadgets, apps, and digital lifestyle trends, and never miss out on what's trending in the digital space. Digital Trends Magazine is your go-to source for in-depth reviews, hands-on demos, and expert opinions on the latest tech products and innovations. Whether you're a casual consumer or a tech aficionado, you'll find something of interest in every issue of Digital Trends Magazine.", time: "12:30" },
    { category: "social", status: "stared", title: "CodeCrunch Newsletter 2", description: "Level up your coding skills - Get insights, tips, and tutorials on programming and software development, and take your coding skills to the next level with CodeCrunch Newsletter. Our team of experienced developers and tech enthusiasts curates the best content from around the web to help you stay updated on the latest trends, tools, and techniques in the world of coding. Whether you're a beginner looking to learn the basics or an experienced coder seeking advanced tips and tricks, CodeCrunch Newsletter has something for everyone.", time: "14:45" },
    { category: "primary", status: "read", title: "AI Insights Report 2", description: "Dive deep into artificial intelligence - Explore the latest research, applications, and breakthroughs in AI, and gain valuable insights into the world of artificial intelligence. AI Insights Report provides comprehensive coverage of AI-related topics, including machine learning, neural networks, natural language processing, and more. Whether you're a researcher, developer, or business leader, you'll find valuable information and actionable insights in every issue of AI Insights Report.", time: "16:20" },
    { category: "promotion", status: "send", title: "Gadget Gazette 2", description: "Your ultimate guide to gadgets - Reviews, comparisons, and recommendations for all your tech needs, helping you make informed decisions when it comes to gadgets and tech accessories. Gadget Gazette features in-depth reviews of the latest smartphones, laptops, wearables, and other tech gadgets, along with buying guides, product comparisons, and expert advice. Whether you're shopping for yourself or looking for the perfect gift, Gadget Gazette has you covered.", time: "10:00" },
    { category: "social", status: "stared important", title: "Cybersecurity Digest 2", description: "Stay secure in the digital world - Learn about the latest threats, vulnerabilities, and security best practices, and keep your digital assets safe with Cybersecurity Digest. Our team of cybersecurity experts monitors the ever-changing threat landscape to bring you timely insights and practical tips for protecting yourself and your organization against cyber attacks. Whether you're a business owner, IT professional, or concerned individual, Cybersecurity Digest has the information you need to stay safe online.", time: "11:55" },
    { category: "primary", status: "read trash", title: "Data Science Weekly 2", description: "Unlock the power of data - Discover insights, tools, and techniques for data analysis and machine learning, and harness the power of data with Data Science Weekly. Our newsletter covers a wide range of topics, including data visualization, predictive modeling, and big data analytics, to help you stay at the forefront of this rapidly evolving field. Whether you're a data scientist, analyst, or enthusiast, Data Science Weekly has something for everyone.", time: "08:45" },
    { category: "promotion", status: "stared", title: "Cloud Computing Chronicle 2", description: "Explore the cloud frontier - Stay updated on cloud technologies, trends, and best practices, and make the most of the cloud with Cloud Computing Chronicle. Our team of cloud experts provides in-depth analysis, case studies, and tutorials to help you navigate the complexities of cloud computing and harness its full potential for your business. Whether you're a cloud architect, developer, or decision-maker, Cloud Computing Chronicle has the insights you need to succeed in the cloud.", time: "13:20" },
    { category: "social", status: "send trash", title: "TechStartup Spotlight 2", description: "Discover the next big thing in tech - Profiles, interviews, and stories about innovative startups and entrepreneurs, inspiring you to innovate and disrupt with TechStartup Spotlight. Our platform highlights the most promising tech startups from around the world, showcasing their innovative products, groundbreaking technologies, and entrepreneurial journeys. Whether you're an investor, entrepreneur, or tech enthusiast, TechStartup Spotlight is your guide to the future of technology.", time: "15:10" },
    { category: "primary", status: "read stared", title: "VR World Magazine 2", description: "Immerse yourself in virtual reality - Reviews, news, and features about the latest VR hardware and experiences, taking you on a journey through the immersive world of virtual reality with VR World Magazine. Our team of VR enthusiasts brings you the latest updates on VR headsets, games, and experiences, along with in-depth reviews and insightful commentary. Whether you're a VR developer, gamer, or simply curious about the possibilities of virtual reality, VR World Magazine has something for everyone.", time: "17:30" }
];



// Function to create a new mail element
function createMailElement(status,title, description, time) {
    // Create the <li> element
    var li = document.createElement("li");
    li.className = `mail ${status}`;

    // Construct the inner HTML
    li.innerHTML = `
        <div class="mail_left">
            <div class="check_box">
                <input type="checkbox" name="checkbox" id="checkbox">
            </div>
            <div class="star">
                <img src="icons/star_normal.png" alt="star" class="normal">
                <img src="icons/star_active.png" alt="star" class="active">
            </div>
            <div class="mail_title">
                <p class="mail_text">${title}</p>
            </div>
        </div>
        <div class="mail_middle">
            <p class="middle_text">
                <span class="weight">${description}</span>
            </p>
        </div>
        <div class="mail_options">
            <ul class="option_check active">
                <li class="option archive hover">
                    <i class="fas fa-archive"></i>
                    <i class="fas fa-long-arrow-alt-down"></i>
                    <span class="span_text">Archive</span>
                </li>
                <li class="option hover delete">
                    <img src="icons/delete_baseline_nv700_20dp.png" alt="delete">
                    <span class="span_text">Delete</span>
                </li>
                <li class="option hover read">
                    <i class="far fa-envelope-open"></i>
                    <span class="span_text">Mark as Read</span>
                </li>
                <li class="option hover time">
                    <i class="far fa-clock"></i>
                    <span class="span_text">Snoozed</span>
                </li>
            </ul>
        </div>
        <div class="mail_time">${time}</div>
    `;

    return li;
}

// Function to append mail elements to the list
function appendMailElements() {
    document.querySelector(".category_box").style.display = "none";
    document.querySelector(".snoozed_container").style.display = "none";
    document.querySelector(".inbox").style.display = "block";
    // Get the parent element
    var parentElement = document.querySelector(".all_mails");
    parentElement.innerHTML = "";
    // Loop through mailData and append each item
    mailData.forEach(function(data) {
        var mailElement = createMailElement(data.status, data.title, data.description, data.time);
        parentElement.appendChild(mailElement);
    });
}

// Call the function to append mail elements
// appendMailElements();


function filterMailsExcludingDraft() {
    document.querySelector(".category_box").style.display = "block";
    document.querySelector(".snoozed_container").style.display = "none";
    document.querySelector(".inbox").style.display = "block";
    // Clear existing mail elements
    var parentElement = document.querySelector(".all_mails");
    parentElement.innerHTML = "";

    // Filter mailData by excluding "draft" status
    var filteredMails = mailData.filter(function(data) {
        return data.status !== "read draft";
    });

    // Append filtered mail elements
    filteredMails.forEach(function(data) {
        var mailElement = createMailElement(data.status, data.title, data.description, data.time);
        parentElement.appendChild(mailElement);
    });
}

filterMailsExcludingDraft();

// Function to filter mails by status
function filterMailsByStatus(status) {
    document.querySelector(".category_box").style.display = "none";
    document.querySelector(".snoozed_container").style.display = "none";
    document.querySelector(".inbox").style.display = "block";
    // Clear existing mail elements
    var parentElement = document.querySelector(".all_mails");
    if (status == "trash") {
        parentElement.innerHTML = "<p class='value'>Messages that have been in Trash more than 30 days will be automatically deleted. </p>";
    }else{
        parentElement.innerHTML = "";
    }
    // Filter mailData by status
    var filteredMails = mailData.filter(function(data) {
        return data.status.includes(status);
    });

    // Append filtered mail elements
    filteredMails.forEach(function(data) {
        var mailElement = createMailElement(data.status, data.title, data.description, data.time);
        parentElement.appendChild(mailElement);
    });
}

// Event listener for clicks on elements with class "stared"
document.querySelector(".stared").addEventListener("click", function(event) {
        filterMailsByStatus("stared");
});

document.querySelector(".send_btn").addEventListener("click", function(event) {
    filterMailsByStatus("send");
});

document.querySelector(".draft_btn").addEventListener("click", function(event) {
    filterMailsByStatus("draft");
});

document.querySelector(".important_btn").addEventListener("click", function(event) {
    filterMailsByStatus("important");
});

document.querySelector(".spam_btn").addEventListener("click", function(event) {
    filterMailsByStatus("spam");
});

document.querySelector(".trash_btn").addEventListener("click", function(event) {
    filterMailsByStatus("trash");
});

document.querySelector(".inbox_btn").addEventListener("click", function(event) {
    filterMailsExcludingDraft()
});

document.querySelector(".all").addEventListener("click", function(event) {
    appendMailElements();
});

document.querySelector(".snoozed").addEventListener("click", function(event) {
    document.querySelector(".snoozed_container").style.display = "block";
    document.querySelector(".inbox").style.display = "none";
    document.querySelector(".snoozed_container .value").innerHTML = "No Snoozed Mails yet";
});

document.querySelector(".chat").addEventListener("click", function(event) {
    document.querySelector(".snoozed_container").style.display = "block";
    document.querySelector(".inbox").style.display = "none";
    document.querySelector(".snoozed_container .value").innerHTML = "No chat messages";
});

document.querySelector(".scheduled").addEventListener("click", function(event) {
    document.querySelector(".snoozed_container").style.display = "block";
    document.querySelector(".inbox").style.display = "none";
    document.querySelector(".snoozed_container .value").innerHTML = '<img src="icons/schedule_send_baseline_nv700_20dp.png" alt="important"> Messages in Scheduled will be sent at their scheduled time.';
});