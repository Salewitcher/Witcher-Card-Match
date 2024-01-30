# Witcher Card Match

Witcher Card Match is a game that intends to attract people that are first of all gamers and after that lovers of the "Witcher" books, games TV Series or what not. This game will be targeted towards all ages that are passionate and love the "Witcher" universe in general. Witcher Card Match will give users the oportunity to develop their memory abilities while having fun.

![Responsive Mockup](media\amiresponsive_witcher.png)

## Features


### Existing Features

- **Navigation Bar**

  - Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, History and Sign Up page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.
  - It also has some nice animation on the logo and navbar links hover.

![Nav Bar Desktop](media/navbar_desktop.png)
![Nav Bar Mobile](media/navbar_mobile.png)

- **The landing page image**

  - The landing includes a photograph with text overlay to attract the user to see that there is a chess club nearby which accepts new members
  - This section introduces the user to Chess Lovers with an interesting chess piece picture to intrigue them.

![Landing Page](media/landing_page_image.png)

- **Introduction to chess section**

  - The Introduction to chess section will welcome the user & let the user read a short explanation about what chess is.
  - Hopefully this will light a spark of curiosity within them.
  - More expirienced players as always would like to check the page also as it is in their nature.

![Introduction to chess](media/chess_introduction.png)

- **Life through chessboard section**

  - This section will allow the user to learn that chess has great mental benefits.
  - The user will get to see some wisdom that came from some of the greatest chess geniuses.
  - The user will also take a life lesson or two by reading the quotes.

![Life through chessboard](media/life_chess.png)

- **Finally section**
  
  - This section contains a Youtube responsive video which serves to further wake up the user`s curiosity.
  - This section navigates the user where to find contact information & where to sign up.

![Finally](media/finally.png)

- **The Footer**

  - The footer section includes links to the relevant social media sites for Chess Lovers. The links will open to a new tab to allow easy navigation for the user.
  - The footer is valuable to the user as it encourages them to keep connected via social media.
  - The links in the footer have hover-grow effect for better UX.

![Footer](media/footer.png)

- **History Page**

  - The short history section will tell the user of how different nations viewed chess & explain the origin of the name.
  - The origin section will provide the user with insight of how chess came to be.
  - The arrival to Europe section will tell the user of how chess spreaded through time.

![History Page](media/short_history.png)
![History Page](media/origin.png)
![History Page](media/europe.png)

- **The Sign Up Page**

  - This page will allow the user to get signed up to the chess club to start learning or competing with other players. The user will be able specify if they are a beginner, intermediate, or a pro player. The user will be asked to submit their full name and email address.
  - The user will also be able to see contact for more information.

![Sign Up Page](media/signup.png)
![Sign Up Page](media/contact.png)

- ## Testing

### Manual Testing

- All links work properly
- All hover effects work properly
- Sign Up Form works properly 
- Responsiveness works properly
![Sign Up Form](media/form.png)

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
  
![Landing Page Validation](media/html_landingpage_valid.png)
![History Page Validation](media/html_history_valid.png)
![SignUp Page Validation](media/html_signup_valid.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

![CSS Validation](media/css_valid.png)

### Lighthouse Testing

- All seems OK except the Mobile index.html.
- Tried to resize images with better performance result but not in green.

![index.html Mobile](media/index.html_mobile.png)
![index.html Desktop](media/index.html_desktop.png)
![history.html Mobile](media/history.html_mobile.png)
![history.html Desktop](media/history.html_desktop.png)
![signup.html Mobile](media/signup.html_mobile.png)
![signup.html Desktop](media/signup.html_mobile.png)

### Accessibility Testing

- Two errors found on [Wave Web Accessibility](https://wave.webaim.org/)
- Considered to add an opacity background on wrapper div.
- Decided to leave like it is as a designer`s choice.
![Wave Web Accessibility Screenshot](media/wave_webaim.png)

### Fixed Bugs

- H1 hover grow didn`t work on larger screens (solution: Change font-size and transfer styling in media query)
- Missing part of screen (solution: fixed by adding padding px instead %)
- scale:value; said command doesn`t exist (solution: transition: scale(value))


### Errors

- Closing tag on section missing (solution: Add closing tag)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://salewitcher.github.io/Chess-Lovers/>

## Credits

- Links hover idea from [CSS Tricks](https://css-tricks.com/css-link-hover-effects/)
- Parts of text taken from [Way too Wise](<https://way2wise.com/chess/chess-quotes/>)
- Youtube responsiness code borrowed from [CSS Trick: How to make an embedded iframe responsive?](https://www.youtube.com/watch?v=QG7JQkeaJy4)
- Some of form style found at [Front End Joe`s Page](https://frontendjoe.com/)
- Sign Up page background created at [Superdesigner](https://superdesigner.co/tools/css-backgrounds)
- Instructions on how to implement form validation on the Sign Up page was taken from [Love running](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LRFX101+2023_Q2/courseware/e805068059af42af87681032aa64053f/fc8bba87c52a4d91b32d1c7c28b1d79b/?child=first)

### Content

- The text for the History page was taken from [Wikipedia] (<https://www.wikipedia.org/>)
- Images taken from [Pexels](https://www.pexels.com/search/chess/)
- Youtube video borrowed from[Gotham Chess](https://www.youtube.com/@GothamChess)

### Media

- The favicon used on the home and sign up page is from [Chess icons created by VectorPortal - Flaticon](https://www.flaticon.com/free-icons/chess)
- The icons in the footer & navbar menu were taken from [Font Awesome](https://fontawesome.com/)

[Back To Top](#chess-lovers)
