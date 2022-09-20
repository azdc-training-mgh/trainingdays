(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{516:function(e,t,r){e.exports=r.p+"assets/img/azuredevops.b0dbed26.png"},756:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"challenge-0-create-an-azure-devops-organization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenge-0-create-an-azure-devops-organization"}},[e._v("#")]),e._v(" Challenge 0: Create an Azure DevOps Organization")]),e._v(" "),t("img",{attrs:{src:r(516),width:"300",height:"200"}}),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("ul",[t("li",[e._v("Create an Azure DevOps account for your organization")]),e._v(" "),t("li",[e._v("Create a Team Project with an Agile Process Template")]),e._v(" "),t("li",[e._v("Invite Team members to your organization and projects")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#azure-devops"}},[e._v("Azure DevOps")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#getting-started"}},[e._v("Getting started")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#authentication"}},[e._v("Authentication")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-an-azure-devops-organisation"}},[e._v("Create an Azure DevOps Organization")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-a-new-project"}},[e._v("Create a new Project")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-a-new-team-within-the-new-project"}},[e._v("Create a new Team within the Project")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#add-your-colleagues-to-the-college-team"}},[e._v('Add your Colleagues to the "College Team"')])])]),e._v(" "),t("h2",{attrs:{id:"azure-devops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-devops"}},[e._v("#")]),e._v(" Azure DevOps")]),e._v(" "),t("p",[e._v("Azure DevOps provides developer services to support teams to "),t("em",[e._v("plan work")]),e._v(", "),t("em",[e._v("collaborate")]),e._v(" on code development, and "),t("em",[e._v("build and deploy")]),e._v(" applications.\nDevelopers can work in the cloud using Azure DevOps Services or on-premises using Azure DevOps Server. Azure DevOps Server was formerly named Visual Studio Team Foundation Server (TFS).")]),e._v(" "),t("p",[e._v("Azure DevOps provides integrated features that you can access through your web browser or IDE client. You can use one or more of the following services based on your business needs:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Azure Repos")]),e._v(" provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code")]),e._v(" "),t("li",[t("strong",[e._v("Azure Pipelines")]),e._v(" provides build and release services to support continuous integration and delivery of your apps")]),e._v(" "),t("li",[t("strong",[e._v("Azure Boards")]),e._v(" delivers a suite of Agile tools to support planning and tracking work, code defects, and issues using Kanban and Scrum methods")]),e._v(" "),t("li",[t("strong",[e._v("Azure Test Plans")]),e._v(" provides several tools to test your apps, including manual/exploratory testing and continuous testing")]),e._v(" "),t("li",[t("strong",[e._v("Azure Artifacts")]),e._v(" allows teams to share Maven, npm, and NuGet packages from public and private sources and integrate package sharing into your CI/CD pipelines")])]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),t("p",[e._v("To get started with Azure DevOps navigate to the "),t("a",{attrs:{href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps overview page"),t("OutboundLink")],1),e._v(". Here you will find further links to the documentation, support, pricing and blogs.")]),e._v(" "),t("h2",{attrs:{id:"authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),t("p",[e._v("Before we can create an Azure DevOps account we need to understand which Identity Providers are supported by Azure DevOps.\nAzure AD, MSA (Microsoft account) and a GitHub account is supported if you want to use cloud authentication. It is recommended to use Azure AD when a large group of users must be managed or if you want to integrate Azure DevOps to your organization's Azure AD, otherwise use your Microsoft or GitHub account.\nFor on-premises deployments Active Directory is recommended.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 If you want to integrate Azure DevOps into your organization's Azure AD make sure that you have the needed permission to create a ServicePrincipal in your Azure AD. We will create a ServicePrincipal in further challenges to authorize Azure DevOps to access your Azure Subscription in order to deploy Azure resources.")])]),e._v(" "),t("h2",{attrs:{id:"create-an-azure-devops-organization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-devops-organization"}},[e._v("#")]),e._v(" Create an Azure DevOps Organization")]),e._v(" "),t("ol",[t("li",[e._v("Navigate to "),t("a",{attrs:{href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v('Click "Start for free >", if you don\'t see a login page, please open a private browser window to make sure that you use the right account (either an Azure AD, MSA or GitHub account).')]),e._v(" "),t("li",[e._v("Give your new project a name and select a country/region.")]),e._v(" "),t("li",[e._v("Create an organization. Instructions can be found "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/organizations/accounts/create-organization?toc=%2Fazure%2Fdevops%2Fget-started%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fget-started%2Fbreadcrumb%2Ftoc.json&view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"create-a-new-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-project"}},[e._v("#")]),e._v(" Create a new Project")]),e._v(" "),t("p",[e._v('Create a new project, name it "College" and use the "Agile" process template.\nInstructions can be found '),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/organizations/projects/create-project?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"create-a-new-team-within-the-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-team-within-the-project"}},[e._v("#")]),e._v(" Create a new Team within the Project")]),e._v(" "),t("p",[e._v('Create a new team, name it "College Team" and set it as your default team. Instructions can be found '),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/organizations/settings/add-teams?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"add-your-colleagues-to-the-college-team"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-your-colleagues-to-the-college-team"}},[e._v("#")]),e._v(' Add your Colleagues to the "College Team"')]),e._v(" "),t("p",[e._v('Now it\'s time to give your colleagues access to the project and to add them to the "College Team".\nInstructions can be found '),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/organizations/security/add-users-team-project?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day4-azdevops/"}},[e._v("🔼 Day 4")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-1.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);