# Program-9

Find the Area and Perimeter of a Rectangle using user input and several other components for my class. 

### Instructions

1. User Input called "Find the Area & Perimeter Of A Rectangle" where the user can input "a" or "p", capitalized or not and it will work. 

2. Input for Length.

3. Input For Width.

4. Empty <p> element to output the function from user input. 

   ### Change Of Code Last Minute for User Input

I first built a page where the user just had to input the length and width and they would get both. But my instructor insisted on the user input field so I just added the new statement here so the user input was available and flexible with the capitalization as well and could have gone even further with this: 

```javascript
if (type == "a" || type == "A") {
     answer = length * width;
     label = 'Area';
   } else if (type == "p" || type == "P") {
     answer = 2 * length + 2 * width;
     label = 'Perimiter';
   } else {
     mainSolution.innerText = "Invalid. Must Enter 'A' or 'P'";
     return;
   }
```

### Conclusion

I already know simplistic JavaScript like if/else statements, but it was nice to give myself a small challenge of adding a user input to the entire thing I had already built. 
