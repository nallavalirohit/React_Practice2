There are two types of export/import.

1. Default export/import

export default Component/Variable;
import Component/Variable from ".path";

2. Named export/import.

export const Component/Variable;
import {Component/Variable} from "./path";

We use export 'default' keyword if we are exporting only one compnent from a file. But if we are exporting multiple components/variables from a file we don't use default keyword.

*******************************************Day 3***********************************************************

There are 2 types of components :

1) Class based components: It is the old way of writing React code. Nobody uses this approach.
2) Functional components: The current and latest approach to write components is based on JS functions.

Component composition: It is a concept of nesting one component into another component.

const Heading = () => {
	<h1> This is heading.</h1>
}

const Heading Composition = () =>{
	<Heading />
	<p>Example of component composition</p>
}}

*************************************Day 4*********************************************************************

Every component should have their own file. Easier for developers to work on different components based on their respective files.

resData?.data - the ?. is called optional chaining so that we if data node is not present then it won't throw an error but return empty.

Whenever you're looping over an array using .map(), always give a key property which is a unique id to each array element. 

Reason being, In case of adding/deleting an element from an array React will know a new ID has been added to the array and will render ONLY that new element in the DOM.
Without key, React will not know which element was newly added and so React will re-render ALL the elements on the UI. This can be an issue working with large data rendering.
It is an optimization technique to make the app faster using key attribute.

Note: It is a bad practice to use array index as key, if the order or items might change. It may negatively impact the performance and may cause issues with the states. 

Warning ex: 
app.js:1612 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Body`. See https://reactjs.org/link/warning-keys for more information.
    at RestaurantCard (http://localhost:1234/index.5baa4167.js:3017:13)
    at Body
    at div
    at Applayout
	
Solution:

<RestaurantCard key={data?.data?.id} responseData ={data}/>

Read about React file structure

Approach 1 : Grouping by features or routes 

	- One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.
	- The definition of a “feature” is not universal, and it is up to you to choose the granularity. If you can’t come up with a list of top-level folders, you can ask the users of your product what major parts it consists of, and use their mental model as a blueprint.
	
Approach 2: Grouping by file type 
	-Another popular way to structure projects is to group similar files together
	-Some people also prefer to go further, and separate components into different folders depending on their role in the application.
	-For example, Atomic Design is a design methodology built on this principle. Remember that it’s often more productive to treat such methodologies as helpful examples rather than strict rules to follow.

Approach 3: Avoid too much nesting

	- There are many pain points associated with deep directory nesting in JavaScript projects.
	- It becomes harder to write relative imports between them, or to update those imports when the files are moved.
	-consider limiting yourself to a maximum of three or four nested folders within a single project. 

Read about React fiber and virtualDOM - Reference - https://github.com/acdlite/react-fiber-architecture
 - React Fiber is an ongoing reimplementation of React's core algorithm.
 - The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
 - reconciliation
    The algorithm React uses to diff one tree with another to determine which parts need to be changed.
 - update
    A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
 - React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.
 - Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." 
	- A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory.
	- This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations.
	- When the app is updated (usually via setState), a new tree is generated.
	- The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
 - The key points are:
	- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
	- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." 


Can you do a default export with a named export from a single component?

	- ES6 module syntax allows for a single default export and any number of named exports. In fact, you can have both named exports and a default export in the same module.

Reference : https://til.hashrocket.com/posts/xrtndhi1hi-default-and-named-exports-from-the-same-module

Local state variable has the scope inside the whole component. Where as in JS, let scope will be valid inside a function.

Whenever a state variable changes, React will re-render my component.

React keeps your data layer in sync with your UI layer through use of React hooks(useState hook), that is the reason why React applications are faster.

React uses reconciliation algoright(also known as React fiber). It uses a concept called Virtual DOM, which is a representation of real DOM.

Virtual DOM is a nested JS object or object representation of real DOM. Just try to console log a component in your app.js file and you'll see the virutal DOM object in your browser console.

Diff algorithm - It finds the difference between the two virutal DOM's(updated VD and the previous VD).

=========================================================================Day 6=============================================================================

There are 2 ways to make an API call to render a UI page :

1. Load the application => Make an API call => Once the data is received => render the data to the UI
							(wait for 500ms)
							
							
2. Load the application	=> Render the UI => Make an API call => Render the UI again once the data is received from the API

In React we will use the second approach. It is better because the user can at least see the skeleton of the application as it loads the contents progressively, rather than waiting for 500ms for the initial load with a frozen screen. Also react is super fast in redering the contents to UI.

The second approach has a better user experience since the user understands the application is loading and responsive.

useState(): will re-render the component after a state change.

useEffect():
It is a normal JS function that takes 2 arguments. It is called after every render of the component.
	- 1st argument is a callback function. This callback function is called after your component renders.
	- 2nd argument is the dependency array. This will define how many times the useEffect callback function should be called.
	
If no dependency array is provided useEffect(()=>{}), then useEffect() is called every single time the component renders.
If  the dependency array provided is empty useEffect(()=>{},[]), useEffect is called ONLY once after the component renders the first time.
If the dependency array is provided a value like useEffect(()=>{},[xyz]), then useEffect will be called only if it detects any change to 'xyz' state.
	
Shimmer UI : Loading times are unavoidable in application development. From a user experience (UX) perspective, the most important thing is to show your users that loading is taking place. One popular approach to communicate to users that data is loading is to display a chrome color with a shimmer animation over the shapes that approximate the type of content that is loading.

Reference :https://docs.flutter.dev/cookbook/effects/shimmer-loading

Conditional Rendering - Rendering that is based on condition like Shimmer UI

useState hook:
import { useEffect, useState } from "react";

const [btnName, setbtnName] = useState("Login");

btnName is a state variable given to us by React which is a normal JS variable. The second value in the destructured array 'setbtnName' is a React state function that keeps monitoring the btnName state variable. Whenever the value of the state variable 'btnName' changes using 'setbtnName' monitoring function, React will re-render the component with the updated value on the screen.

How does react change the value of a const variable 'btnName' with initial value set as "Login"?
As per JS, variables declared and initialized as const are immutable. So how does React update a value of a const variable?

React re-renders the component when state changes and redeclares the state variable 'btnName' and initializes it with the new updated value as initial value. This happens extremely fast in React.

Whenever a local state variable updates, React triggers a reconciliation cycle OR React re-renders the component.

=====================================================================Day 7==================================================================================

Best Practices:
	- Always declare your hooks inside the component function, not on top of the component function.
	- Always try to declare all the state variables(useState hook) at the top of the component function. Makes code look good.
	- Never try to create a useState hook inside any if/else or any condition/loops.
	
React Router:

Whenever we have to create Routes in our app, we have to create a Routing Configuration. React router provides createBrowserRouter, which will create a routing configuration.
A routing configuration will set the parameters of a specified path on the app. It defines which page to load on click of a hyperlink on the web page.
createBrowserRouter takes a list/array of objects that has a path and element.

ex) 
import {createBrowserRouter} from "react-router-dom"
const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />
    },
    {
        path: '/about',
        element: <About />
    }
]);

Just defining the router configuration will not be enough, we will need to provide the configuration to render it on the UI. To do this, react-router-dom provides us a functional component called 'RouterProvider'. This RouterProvider will provide the routing configuration to our app.

import {RouterProvider, createBrowserRouter} from "react-router-dom";
ex) root.render(<RouterProvider router={appRoute}/>);

useRouterError is a hook provided by react-router-dom. It gives more details to the error in case the user is accessing the url path that doesn't exist. Provides a good UX experience.

To route to other pages like /about or /contact page and display the contents of the component below the </Header /> component. You will need to place the component below <Header/>
component.

like : 
const Applayout = () => {
    return (
        <div className="app-container">
            <Header />
            <About /> or <ContactUs />
        </div>
    );
}

to achieve this functionality, react-router-dom has provided "Outlet" component that will replace the component under <Header/> component based on the UrL path. For that, we will first need to pass all the required path as children to the <Applayout /> component.

like:

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <ContactUs />
            }
        ],
        errorElement: <Error />
    }
]);

Now, when we use <Outlet /> under the <Header/> component, Outlet will help call the component that has that defined url extension. 

const Applayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    );
}

Like for example :

localhost:1234/about    -- will display the contents of <About/> component under the <Header /> component. Giving us a feeling that header is static to the page.

We cannot use anchor tag in our header section to traverse from one page to the other because it will render the whole page again. Rather, react-router-dom gives us 'Link' component that will render only the body of the page without having to reder the whole page again.

There are 2 types of routing we can have in our web application:

1. Client-side routing - When going from one page to the other, we are not making any network calls. All the components are already loaded, when you initially open the app. So when you traverse from one page to the other, it just loads and replaces the components.

2. Server-side routing - Here, to traverse from one page to the other, you send a request to the server and the server responds with an HTML page to be displayed on the browser.

useParams() hook is given by react-router-dom to get access to the params from the url.

ex) {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }

In the above example, :resId is a parameter in the URL and using useParams() we will get the value of resId in an object. We can destructure the object in out component file and use the value.

url : http://localhost:1234/restaurant/123

const val = useParams();
console.log(val);
output : {val:123}