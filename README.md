# FAQ accordion

<img width="1920" height="917" alt="127 0 0 1_5500_faq-accordion-main_" src="https://github.com/user-attachments/assets/6dc559a9-270f-4544-b352-306d5a199a1c" />

FAQ Accordion created for one of the challengeds at FrontendMentor. The task was to replicate the design, while adding an accordion effect to the FAQ.

# Tools used

1. HTML;
2. CSS;
3. Javascript/JS.

# What was learned

1. Came up with a neat trick to make a fixed background that doesn't resize as the viewport stretchet. Simply put, a div that contains that border image is required, positioned as a sibling of the main content, and give it a fixed heigth (preferably the same a the image) and a width of 100%, and an absolute position, with top set to 0. I did not like how it was stretching the background when put on the body element, so I had to look up some ideas on how to make it not stretch. I still used the mobile sized background despite this, as the motif was not visible in its entirety if I kept it unchanged.
2. I've tried to use top/left followed by translate to center the container of the content to the center. Issues where showing up when viewport was streatched to a mobile size, where it looked like the right side's margin did not respond, but the left side was responding. Apparently, translate did not behave well, so I had to give up and go with flexbox.
3. hr is a much better option to make a customizable line, rather than making a ::before or ::after or div that would look like a line.
4. First time using Javascript to give interactivity to a document. I had to look up about the elements to be used for doing this. I knew about querySelector, but not about querySelectorAll and forEach. Did not know about nextElementSibling, to target the immediate sibling of an element, or the setAttribute. I guess, this project was helpfull to give me an insight about how interactivity works

# What needs work

1. I tried to make classes that I would reutilize repeatedly in the document. Unfortunately, I could only do so for the ones about spacing and positioning, as others I felt needed for fine-tuning;
2. I struggled with a particular case where the SVGs were getting shrinked as the viewport was getting smaller. I tried with padding, margin, absolute positioning, but eventually I found out I could just target the SVGs through CSS and give them a fixed sizing to make them not shrink. I am not sure if Flex shrinking works, or if I understood how it actually works.
3. As I said, I needed to look up how to work with Javascript. So far in my learning, I've only ever seen functions, if statements, switches, arrays or objects. I am still in the dark about the ones that interact with the HTML, so this feels a bit sour as an accomplishment. I will check out more about this later.

# Afterwords

Any suggestions or criticisms are welcome!
