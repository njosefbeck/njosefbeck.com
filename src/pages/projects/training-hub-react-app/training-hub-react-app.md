---
title: "training-hub-react-app"
description: "A training application built with React"
slug: "/project/training-hub-react-app"
template: "project"
image: "./training-hub-react-app.png"
---

As part of my work at FleishmanHillard I was tasked with creating an internal training application for several of our practice groups. The training app had to live on our intranet, which is housed in a SharePoint Online environment. The application content was a number of levels, divided into modules. Each module contained a video, additional downloadable resources, and a short quiz. The app needed to save each module and level completion for each user, and notify via API when a module or level completion email needed to be sent out. Additionally, the app needed to be configurable to account for differences between content that each practice group wanted.

To handle the extensive user requirements, I developed a React application backed by a SharePoint list, which acted as the app's database. This app taught me a great many things about building production-level applications used by a large user base.
