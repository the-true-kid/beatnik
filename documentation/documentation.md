 Project Documentation: Beatnik

Overview

Beatnik is a React application designed to be an assistive tool for taking care of houseplants. It achieves this by listing the plants, information about the plants, and care instructions. It also has an interactive feature for synthesized music, directly attributed to the plant's characteristics. 

Table of Contents

1. [Folder Structure]
2. [Components]
   - [HomePage]
   - [PlantProfile]
   - [LovePlant]
   - [ListenPlant]
  - [LearnPlant]
   - [Library]
3. [Routing]
4. [Styling]
5. [Dependencies]


Folder Structure

beatnik/ 
|-- src/
App.js
…….
 | |-- components/
 	| | |-- HomePage.js 
| | |-- PlantProfile.js 
| | |-- LearnPlant.js 
| | |-- ListenPlant.js
| | |-- LovePlant.js
| | |-- Library.js

 Components

HomePage

The HomePage is the entry way into the application. Fully fledged, it will render a search functionality to add new plants to the ever growing list of house plants. It will list these houseplants as buttons, which when the user clicks on them, it takes them to the profile of that respective plant. On the plant buttons, it will display the name of the plants, and a timer counting down how many days left until the plant needs to be watered. When these buttons are clicked, the individual ID number of these plants will be passed through to the PlantProfile, rendering the specific plant profile. There will be an option to be able to delete the plant, when the search functionality is implemented. In addition, there is a library button that connects the user to the library component. 

PlantProfile

PlantProfile is the component that features the profile of the specific plant that is clicked on in HomePage. When the plant is clicked on in the HomePage, the PlantProfile takes the ID number of that plant, and routes it to the PlantProfile component, to display the specific information on this plant. It renders a photo, and a general bio of the plant’s information, as well as the timer for days left until watering. It has three buttons that link to the LovePlant, LearnPlant, and ListenPlant components. It also has a button returning the user back to the HomePage. 

LovePlant

LovePlant is the component that displays the care instructions for the specific plant that was selected in the HomePage, and navigated from the PlantProfile selection. The ID is passed through from the PlantProfile, and applied to LovePlant to display the specific care instructions for the respective plant. 

LearnPlant

LearnPlant is the component that displays more detailed information about the specific plant that was selected in the HomePage, and navigated from the PlantProfile selection. The ID is passed through from the PlantProfile, and applied to LearnPlant to display the specific detailed information for the respective plant. 

ListenPlant

This component is currently under construction. It will be a space on the website to tune into the specific frequencies of the selected plant, connected from the PlantProfile component. It will display synthesized music and visuals that are in tune with the characteristics and attributes of the plant. This allows the user to get in touch with the plant, and adds a fun, creative, introspective and interactive element to the website. Currently, it is displaying prerecorded synthesized music that is in tune with the front end, hard coded static database of the plants. 

Library

The Library component is connected to the HomePage component, with a Library button. It displays a list of resources to learn more about plants, ecology, and other related fields. It has dynamic searching options that filters the resources by categories, enabling an easier user interface. Currently the list of resources is provided with local databases integrated with the front end. Once the backend is integrated, the list of resources will be more comprehensive. 

Routing

The `App.js` file in this React application manages routing using the `react-router-dom` library. Essentially, this enables the capability to navigate between different components and pages of the application. Here's an overview of how the routing is structured:

1. Starting Page/Home Page:
   - Path: `/`
   - Element: `<HomePage />`
   - This is the initial page rendered when the website is loaded at the base URL.

2. Plant Profile Page:
   - Path: `/plant-profile/:plantId`
   - Element: `<PlantProfile />`
   - Dynamically routes to display the specific profile of the plant selected. Uses a dynamic segment (`:plantId`) to capture the plant ID from the URL.

3. Learn Plant Button:
   - Path: `/learn-plant/:plantId`
   - Element: `<LearnPlant />`
   - Rendered dynamically with the ID of the plant from the profile page. Uses a dynamic segment (`:plantId`) for flexibility.

4. Love Plant Button:
   - Path: `/love-plant/:plantId`
   - Element: `<LovePlant />`
   - Rendered dynamically with the ID of the plant from the profile page. Uses a dynamic segment (`:plantId`) for flexibility.

5. Listen Plant Button:
   - Path: `/listen-plant/:plantId`
   - Element: `<ListenPlant />`
   - Rendered dynamically with the ID of the plant from the profile page. Uses a dynamic segment (`:plantId`) for flexibility.

6. Library:
   - Path: `/library`
   - Element: `<Library />`
   - Linked from the homepage, rendering the library component.




Styling

Styling with Bootstrap and Custom Design:

 Bootstrap Integration:

This React application incorporates the Bootstrap framework (`'bootstrap/dist/css/bootstrap.min.css'`) to streamline and enhance the overall user interface. Bootstrap provides a set of pre-designed components, ensuring a clean and responsive layout across various devices. By leveraging Bootstrap, the development process is made more efficient, allowing for a consistent and polished appearance.

Custom Styling:

The application features a custom design aimed at achieving a subtle and grounded user interface, complemented by light touches for enhanced interactivity. User interactions dynamically respond to the mouse, providing an engaging experience. Custom styling is employed to emphasize boldness in different categories, ensuring a visually appealing and intuitive presentation. This combination of Bootstrap for ease of use and custom styling for tailored aesthetics creates a harmonious balance between efficiency and visual appeal.



Dependencies

- `react`
- `react-dom`
- `react-router-dom`
