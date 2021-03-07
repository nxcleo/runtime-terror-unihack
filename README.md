# CovFree
### UNIHack 2021
### Team #38 Runtime Terror - Aaron Jiang, Anna Giang, Katherine Moffat, Kevin Cai

## Figma Prototype
Check out our Figma prototype [here](https://www.figma.com/proto/FNLITO0MA9jumtGfu2mgFO/iOS-App-Wireframes-Community?node-id=4%3A1556&scaling=min-zoom).

## Live version
Check out our proof-of-concept demo [here](https://nxcleo.com/home).

## Watch our pitch
Check out our pitch video [here](https://youtu.be/xSA8_XgnZ1M).

## Inspiration

Lockdowns are detrimental to the economy and the mental health of our communities. 

Shutdowns of what is deemed a 'non-essential service' have negatively impacted small businesses and those who use their services regularly.

Victoria lost 128,000 jobs in April 2020 alone, compared to 38,000 jobs in March 1991 which was the largest single-month job reduction in Victoria in the 1990s recession.

Furthermore, the decision of what is essential and non-essential to consumers is made without any input from the consumers themselves.

For example, exercise is critical to many people's mental health. To those in this group that have home delivery for their groceries, the gym may be a more essential business than a supermarket.

However, under the current system, only supermarkets are essential — gyms are not.

**We want to reduce the impact of the COVID-19 pandemic, and future disasters, on our community's financial and mental health by introducing a point system that reduces risk *without* shutting down businesses.**

## What it does

Our mission with CovFree is to reduce risk without reducing freedom.

CovFree extends on the current QR code check-in system, introducing the concept of **contact points** that allow individuals to visit the services they need most, while continuing to reduce and trace their exposure.

Each user has a set amount of contact points each day to spend where they like, decided by the government based on current regulations. Each business will also cost a number of contact points to visit, weighted based on the exposure risk at the business - the more people checking in to a location, the larger the weight of that location.

Users will check-in at visited locations via CovFree's QR code scanner, which will log their visit while deducting the number of points of the business from the user's point balance.

Users can decide what is essential to them through budgeting their points - they can search up locations in advance to determine the cost of visiting. They can also manage their check-ins by viewing their check-in history. Their exposure to the virus will remain reduced, since there is a limit to the number of places they can visit depending on their point balance.

Businesses are no longer strictly classified as essential and non-essential. However, risk of exposure is still mitigated, as high-risk businesses will have a high point cost, deterring against a high number of visitors, but will still remain available to those who truly need them. 

## How we built it

The CovFree proof-of-concept demo is built with React and NodeJs Express frameworks. 

Half of the team worked on the codebase, and made sure we had a working demonstration ready for submission. The other half of the team concentrated on designing and prototyping the ideal UI, and refining and preparing materials for our submission and pitch. 

We were able to combine the design and codebase to create our final webapp.

In the future, CovFree will be integrated with databases and connected with cloud providers to enable more data-driven feature

Furthermore, the application in the future will also ****feature automatic adjustments to the daily contact point balance of users, and the point cost of visiting business taking into account data such as COVID-19 case number data, the popularity of businesses, and government regulations. 

## Challenges we ran into

**Ideation of our project** Each of us had ideas of solutions for a range of different problems, so it was hard to settle on one issue we all had the same vision for. 

**Defining the scope of our project** For Melbourne, Australia, the COVID-19 pandemic is (luckily/hopefully) at its end, so we needed to define our project scope to ensure that it was still relevant post-pandemic (and we did - see What's Next for CovFree below!)

**Project tracking and teamwork** Given that the hackathon was all-remote this year, it proved to be difficult to maintain motivation and effective communication across the team. 

**Front-end implementation of styles** Replicating the prototyped UIs using code into dynamic, functionally correct webpages was definitely a challenge.

## Accomplishments that we're proud of

- Despite the idea initially being highly-targeted towards problems during COVID-19, our solutions are now adaptable to many situations!
- Our designers had no design experience but we learned how to use Figma during the hackathon, and built the entire app prototype!
- We were able to replicate most of the prototyped pages in actual code - and the product of that is a working example that proves our concept!
- Although we can only communicate through the internet, we built a structural coding project by using React framework to let everyone have a separate section to work with, which reduced the possibility of working conflicts and improved coding efficiency.
- We stuck to it towards the end - despite everything!

## What we learned

- How to critically analyse our ideas and refine their scope
- How to prototype using Figma (and how to transfer the Figma prototypes into the real app!)
- Continued to improve our knowledge of React and Node
- How to write an elevator pitch
- How to work well with a team remotely (especially how to communicate effectively and keep the motivation up)

## What's Next for CovFree

There was so much more we wanted to do in 48 hours.

**Additional features we plan to add to CovFree include:**

- **Journey tracking**: Not all exposure sites are businesses, allowing CovFree to track your journeys will result in more accurate contact tracking
- **Variable point cost**: As people use the app, we would be able to collect anonymous data in real-time and make accurate forecasts on the number of people at a location at certain times during the day. This can then be used to vary the point cost at the location to encourage off-peak activity.

**CovFree as a platform model** 

We plan to increase the scope of CovFree by providing it as a platform that supports a disaster management response for a variety of situations. 

For example, resource management is a major issue in most disasters, and the point system as introduced in CovFree can provide a way to manage this. Instead of contact points, users will be allocated resource points they can spend on essential items. Properly tracking resource distribution through the CovFree app platform will solve the issue of depleted resources and panic buying.

-----

## Running Instructions

### Method 1: Using default create react server:

Use this method if you do not need any back-end logic.

1. **npm install** (Install all packages for server-side)

2. **npm run full-build**   (Install packages for client-side and build the React project)

3.  **npm run client** (Start the server, and it will automatically re-build after any code updates)

4. Go to "localhost:3000" in browser - should be automatic


## Method 2: Using NodeJS server:

Use this method if you need back-end logic we wrote in NodeJS. (In this way you will need to build React project manually every time you have updated files in React)

1. **npm install** (Install all packages for server-side)

2. **npm run full-build**   (Install packages for client-side and build the React project)

3. **npm run build** (Only build the React project. ***i.e. After full-build, could just use this command after every update in "client" folder, unless there is a new package installed for client-side***)

4. **npm start** (Start the nodeJS server)

5. Go to `localhost:3000` in browser
