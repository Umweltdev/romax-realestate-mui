 
### File Structure


- **src**: The main source directory.
  - **assests**: Stores static assets (images, fonts, etc.).
  - **components**: 
    - `Card.jsx/` : component to display the details of a property .
    - `Categories.jsx/` : component to display a list of property category.
    - `CategoryItem.jsx/` : component to display the details of property category.
    - `Facilities.jsx/` : component to display the list of required facilities. 
    - `Filter.jsx/` : component to filter property on the Home Page.  
    - `Footer.jsx/` : footer component.   
    - `Hero.jsx/` :  hero section.  
    - `Loader.jsx/` : component used for loading state .   
    - `MobileNavBar.jsx/` : Mobile Navbar Component for mobile screen. 
    - `Navbar.jsx/` : main navbar Component. 
    - `Navbar.jsx/` : drawer component for mobile screen. 
    - `Products.jsx`: component to display featured property on the Home Page.
    - `Slider.jsx/` : Caurousel component. 
    - `Timeline.jsx/` : component to display list of timelines. 

   
  - **pages**: 
     - `booking/`
       - `index.jsx`: Page for make a booking. 
    - `faq/`
       - `index.jsx`: Page for listing available faqs.
         - `API Endpoints`: 
             - `/api/faq -[GET]`: Endpoint to get the list of all faqs in the database.
    - `Login.jsx`: Login Page.
       - `API Endpoints`: 
             - `/api/auth/login -[POST]`: Endpoint for to log in.

    - `Register.jsx`: Signing up Page.
      - `API Endpoints`: 
             - `/api/auth/register -[POST]`: Endpoint for to signing up. 
    - `user-dashboard/`
       - `Address.jsx`: Page for Adding and Editing an Address.
          - `API Endpoints`: 
             - `/api/address -[POST]`: Endpoint to add address.
             - `/api/address/:id -[PUT]`: Endpoint to update an address with a specified id.
             - `/api/address/:id -[GET]`: Endpoint to get information of an address with a specified id.   
       - `Addresses.jsx`: Page for listing available addresses created by the logged user.
          - `API Endpoints`: 
             - `/api/address -[GET]`: Endpoint to get list of addresses created by a user. 
       - `Booking.jsx`: Page for display details of a booking done by a user.
           - `API Endpoints`: 
             - `/api/booking/:id -[GET]`: Endpoint to get information of a booking with a specified id.  
       - `Bookings.jsx`: Page for listing all bookings made by a user.
          - `API Endpoints`: 
             - `/api/booking -[GET]`: Endpoint to get list of a bookings related to a user.  
       - `Edit-Profile.jsx`: Page for editing user information.
         - `API Endpoints`: 
             - `/api/users -[PUT]`: Endpoint to update user profile.   
       - `Header.jsx`: Header Component
       - `Profile.jsx`: Page for user profile information.
       - `PropertyDetails.jsx`: component for displaying details of a property.
       - `SavedCard.jsx`: card component for listing details of a property.
       -`SavedProperties.jsx`: Page for listing property saved by a user.
         - `API Endpoints`: 
             - `/api/users/user-saved-properties -[GET]`: Endpoint to get list of property saved by  a user.  
    - `product-description/`
       - `index.jsx` : main file for the product description page.
          - `API Endpoints`: 
             - `/api/products/:id -[GET]`: Endpoint to get a  details of a property with a specified id. 
             - `/api/users/save-property/:id -[PUT]`: Endpoint to allow user add or remove property from wishlist, by passing property id. 
       - `Description.jsx`: component for displaying product description and features.
       - `ProdDescCarousel.jsx`: carousel component for display property images.
       - `Tab.jsx`: 
    - `product-list/`
       - `index.jsx` : main file for the product listing page.
          - `API Endpoints`: 
             - `/api/products? -[GET]`: Endpoint to get list of property in the database, also considering query parameters if provided.
       - `card.jsx`: card component for displaying the details of a property .
       - `ProdListCarousel.jsx`: carousel component for display property images.
       - `range.jsx`: component to filter properties.
       - `sort.jsx`: component to view amount of properties listed and sort properties based on citeria.


  - **redux**: 
     - `apiCalls.js/` : Service for dispatching redux action.
     - `store.js`: root file for redux state management.
     - `userRedux.js`: file for containing actions related to user.
     -  `filter.js`: file for containing actions related to filtering a property.
  - **requestMethod** :Service for making API requests to the backend
  - **App.js**: The main entry point for the application.
  - **theme.js**:  Material UI theme setup. 
  - **index.js**: The application's root file.