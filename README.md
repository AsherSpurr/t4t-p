
# <p align="center">[T4Tp](https://t4tp.vercel.app/) ~40hrs</p>
<p align='center' >👆<b>Click the heading to visit the deploy link</b>👆</p>

<p align="center">A single-user application aimed at providing compatible and safe(er) local bathrooms to transgender individuals.</p>

### <p align="center">Contributors</p>
<div align="center">
  
  [Asher Spurr](https://github.com/AsherSpurr)

</div>

## Preview:
<div align="center">
  

https://github.com/AsherSpurr/t4t-p/assets/144856487/ec65412f-242c-46bf-8749-f2baaf02b620



</div>
<p align="center">Technologies Used</p>
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" alt="Cypress" title="Cypress"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub"/></code>
	<code><img width="50" src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/253220886-02494c7c-de6a-43a6-9293-6369696842ed.png" alt="Canva" title="Canva"/></code>
</div>

## Installation Instructions:
- Visit the deployed [link](https://t4tp.vercel.app/)
- OR run the following on the command line to clone the repo and run the app locally:
    ```
    git clone git@github.com:corysanders3/spilled.git
    cd spilled
    npm install
    npm start
    ```
### Environment variables
After cloning and installing packages
- Create a `.env` file in the root directory
- Copy and paste `REACT_APP_GOOGLE=myKey`
- `Substitute myKey` with `your Google API` key or `message me on GitHub` so I can provide mine.
### Run Tests
- Ensure you're running the app locally (see Installation Instructions above)
- Run the following on the command line to open Cypress: `npm run cypress` or `npx cypress open`
- Click `E2E Testing`, then `Start E2E Testing` in the desired browser
- Select `a test suite` to run all tests related to that suite
## Future Features/Improvements
  1. Refactor media queries to include view options, toggling from list and map view.
  2. Incorporate Google's Places API to provide further service and convenience for users
  3. Re-try using query parameters to filter in real time. This was almost achieved but in the interest of time for submission had to pivot away.
  4. Refactor to use Google's lat & lng data for a given location based on the address, the Refugee Restroom coordinates are slightly off.
  5. Replace CSS with MUI and add a dynamic loading state
  6. Add multiple language options, the API's I am using are worldwide and I would like T4Tp to be as well.
## Context:
<!-- wins, challenges, time spent, goals, approaches etc -->
### Wins
- Creating reusable components throughout the application
- Incorporating Googles Map SDK
- Successfully appending and deleting query params from the URL (This is no longer included in production)

### Challenges
- The filter function I originally had would override my query parameters. I am eager to revert back to this version so I can continue problem-solving how it was able to achieve this.
- Getting the Filter checkboxes to filter in real-time. They always were one step behind the filter state because of their async behavior. Tried a few versions to keep the filter function and Filter state in sync, but none worked in the time frame given. I look forward to revisiting this.




