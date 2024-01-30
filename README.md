# Witcher Card Match

Witcher Card Match is a game that intends to attract people that are first of all gamers and after that lovers of the "Witcher" books, games TV Series or what not. This game will be targeted towards all ages that are passionate and love the "Witcher" universe in general. Witcher Card Match will give users the oportunity to develop their memory abilities while having fun.

![Responsive Mockup](media\amiresponsive_witcher.png)

## Features


### Existing Features

- **Card matching**

  - Users are able to click the cards to reveal images and match pairs of cards.
 
![Card matching Desktop](media\card_matching_desktop.png)
![Card matching Mobile](media\card_matching_mobile.png)

- **Game Board**

  - Users can play on a dynamically created 4x5 grid.

![Game Board](media\gameboard.png)

- **Shuffling Cards**

  - Cards are shuffled at the beginning of the game for randomness.

![Shuffling Cards](media\shuffling_cards.png)

- **Winning Condition**

  - If the users match all pairs they will win and trigger a victory message.

![Winning Condition](media\winning_condition.png)

- **Errors Count**
  
  - Users can keep track of errors to challenge themselves.

![Errors Count](media\errors_count.png)

- **Modals**

  - Users can choose to get instructions at the start if they click the corresponding button which shows the instruction modal, and see another modal when they win.

![Modals](media\modals.png)

- **Try Again and Quit Buttons**

  - Users have a choice to try again or quit the game(First button resets and the second stops the game).

![Try Again and Quit buttons](media\modals.png)

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
