### Front-end Technologies

- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular framework
- ReactJS

### Backend Technologies

- Node.js
       - express.js
       - nodemoon
       - cors
       - dotenv
- PHP
- C#
- Java
- Python

### Databases

- MongoDb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle


+ Virtual Control system(VCS) or Source code management(SCM)
     - Distributed VCS
        - Ex:Git,Mercurial
     - Remote(Central) VCS
        - Github,Bitbucket


### Git

 - git init
 - git add filename
 - git add filename1 filename5 filename100(Add specific files)
 - git add . or git add --all(To add all files)
 - git status(shows file added and which or not)
 - Do git configurations(set user.name and user.gmail)
 - commit data with commit message

### HTML5

 - Hyper Text Markup Language
 - Latest version of HTML is html5
 - HTML have 3 types of elememts:
    - semantic elements
        - Describes the developers 
        - Some of them are:
        - header
        - section
        - article(display in form of article)
        - aside
        - footer(coorperates information)
        - table
    - Block level elements
        - Occupy entire width of the browser
        - All semantic elements are block level but not viceversa
        - Some of them are:
        - h1 to h6(Headings)(# defines number of heading)
        - p(paragraphs)
        - div
        - all semantic elements
        - Text will start from new line
    - Inline elements
        - span
        - img
        - a
        - nav
        - form
        - input
        - textarea
        - legend
        - sup
        - sub

### Points
- The data in <body>....</body> will be displayed for the user
- Place holder is used to represent the hint in the bar
Task :
=====
- audio
- video
- canvas
- progress
- meter
- datalist
- select 

### CSS

- Cascading Style sheets
- Add Styles 
+ Types of CSS:
   - Inline CSS
   - Internal CSS
   - External CSS
+ Syntax of CSS
...
selector{
    css properties
}
- This syntax is for internal and external css

- In default we get font size as 16px
- To give seperate style for specific text use Inline css

### Selectors

+ simple selectors
    - Universal selectors(*)
    - By Element Name]
    - Grouping selector (,)
    - Class selector(.)
    - Id selector(#)
 + Combinators
    + Descendant selector( )
        - Select two selector and apply styles   
    + Child selector(>)
        - Only childs get styles
    + Adjacent sibling selector(+)  
    + General sibling selector(~)  
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector   

### Box model

+ margin
+ border
+ padding
    - padding :10px(for all adjacent sides)
    - padding :10px 30px(10px for top;30 for left&right)
    - padding :10px 300px 50px(10px for top;300px for left&right
        50px for bottom)
    - padding :10px 30px 4px 50px(top,right,bottom,left)
+ width
- 1rem:16px




+ display
    - none
    - inline
    - block
    - inline-block
+ position
    - static
    - relative
    - absolute
    - fixed
    - sticky
+ align-content
+ align-items
+ align-self

### Responsive Web Design
### Flex-box

- display
    - flex
        - flex-wrap
        - justify-content
        - flex-direction
        - flex-flow

Task 2:
=====

   - Index.html
   - Login.html
   - Register.html

### Media Queries

   - Extra small devices(Mobiles)
      - max-width:600px(break point)
   - Small devices(Large mobile)
      - min-width:600px
      - max-width:767px
   - Medium devices(small laptops)
      - min-width:768px
   - large devices(Large laptops or desktops)
      - min-width:992px
   - Extra Large Devices(LED screens)
      - min-width:1200px

   ...
   Syntax for media  queries

   @media only screen (min-width:320px) and (max-width:500px){
       CSS Code
   }
   ...

### Bootstrap 4.6

   - It is a CSS framework
 Task 3:
   ===
   - Navbar with responsive

- module(collection of functions and claases)
- package(collection of modules)
- library(collection of packages)
- framework(collection of libraries)
+ module --> Package --> Library --> Framework

+ Types of Modes
     - offline
     - online
          - CDN links

+ background-color - bg 
+ text-white(For color of text)
+ Mragin in Bootstrap (m-* (0-5))
   - 0 --> 0rem
   - 1 --> 0.25rem (4px)
   - 2 --> 0.5rem(8px)
   - 3 --> 1rem(16px)
   - 4 --> 1.5rem(24px)
   - 5 --> 3rem(45px)
   - m(margin in all directions)
   - ml-5 (margin left)
   - mt (margin-top)
   - mb (margin bottom)
   - mr (margin right)
   
+ Padding(padding-left --> p1-5)
+ colors
     - primary
     - secondary
     - info
     - success
     - warning
     - danger
     - light
     - dark
     - white

 + We can use color classes for
     - Buttons btn btn-primary)
     - text (text-white)
     - background (bg-secondary)  
     - alerts (alert alert-primary)  

 + Grid System
     -  col-sm-12
     - sm (small devices)
     - md (medium devices)
     - lg (large devices)
     - xl (Extra large devices)
 + Modal
 + Table

 ### Javascript    

  + In 1995 by "Brenden Eich" introduced JavaScript (ES-262)
  - JavaScript is loosely touple and dynamic language
  - It is a text based programming language and we can run in client side and in server slide(Node.js) for dynamic web applications
  - ECMA-Script (European country Manufacture Association) (ES-6)
       - let & const
       - var keyword(to create any variable)
       - map(for itertion)
       - arrow function
       - classes
       - spread opeartor
       - rest operator
   + Datatypes
       - Number
       - BigInt(2^53-1)
       - String
       - Boolean
       - Undefine
       - null
       - object
       - Array
   + variables      
       - var,let & const
       - Scope
       - function level --> var
       - block level --> let & const
       - Redefine --> var,let
       - Redeclare --> var
    + `typeof()`
    + Object
       - It is pair of key and values
       - Entity that has state and behaviour
    ...
    
    {
      name:Hetheesh
    }
    ...
    + Arrays

 ### Alerts

    + To generate notifications
         - alert(alert("registration is completed successfully"))
         - prompt(to take input from user)(let number1=prompt("Enter username"))
         - confirm(confirm("Are you sure you want to exit?"))
+ console statements
     - `console.log()`
     - `console.info()`
     - `console.warn()`
     - `console.error()`     
+ spread operetor
    - To change array elements from one array to another(Ex:Swap)

    ...

      ...variableName
    ...       
 + Rest parameter
   - To handle functions parameters

    ...
       ...parameter
    ...     

+ Destructuring Array & Object

    
+ Functions
...

function demo(x,y){
    return x+y
}
demo()
...

- Anonymous function
...
let demo=function(x,y)
{
    return x+y
}
...
- Arrow function
...
let demo=(x,y) => {
    return x*y
}
console.log(demo(3,4))

+ for-in
   - To get index values of an array
+ for-of
   - To get elements of an array
 + forEach() --> (ES-5) 
 + map() --> (ES-6)  

####  DOM
     
   - Document Object Model
   - Document
   - History
   - window
   - navigator(To store data offline)
+ DOM Methods   
   - `getElementById`
   - `getElementsByClassName()`
   - `querySelector`
   - `innertext`
   - `textContent`
   - `append`
   - `appendChild`
   - `innerHTML`
   - `setAttribute()`
   - `classList`
   - `style`
   - `src`

##### JSON
+ JavaScript Object Notation
    - To exchange information between application and server  

...
{
    "name":"kalyan",
    "salary":"6.5LPA",
    "Designation":"MERN Developer",
    "mobile":9578478974
}
...
+ Ajax call or Promises (fetch API) or axios

#### ReactJS
   - To implement user interface
#### ReactJS Features
+ It is a library
+ It follows component based architecture
    - Functional Component
    - Class Component
    - Pure Component
    - Higher Order Component 
+ It provides Virtual DOM
+ Unidirectional data flow
+ We can implement Single Page Applications

+ Project Environment setup
      - [DownloadVisualStudioCode]
      - [DownloadNodeJS](https://nodejs.org/en/download/)
      - Install nodejs and check versions of `node` and `npm`
          - `node -v`
          - `npam -v`
      - `webpack` and `babel`
      - ` create react-app`
          - `npm install create-react app`
          - ` create-react-app projectname`
      -  `npx create-react-app appaname`  
+ Index.html
+ index.js
   + IndexPage
     - nav.js
     - body.js
     - footer.js
   + Home.js
     - nav
     - body
     - gooter
   + Login.js
   + Register
   + About
   + contact            
##### Reference Links 
   - [flaticon](https://www.flaticon.com/authors/flat-icons)
   - [SVG Icons](https://freesvg.org)
   - [colorcodes](https://htmlcolorcodes.com/)
   - [WebAim(checkscontrast)](https://webaim.org/resources/contrastchecker/) 