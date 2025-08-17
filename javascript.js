const faqSection = document.querySelectorAll(".faqsection");

faqSection.forEach(faq => {

    faq.addEventListener("click", () => {

        faqSection.forEach(section => {
            if(section !== faq){
                section.nextElementSibling.style.maxHeight = null;
                const svg = section.querySelector("svg path");

                if (svg) {
                    svg.setAttribute("d", "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z");
                    svg.setAttribute("fill", "#AD28EB");
                }
            }
        })

        const svg = faq.querySelector("svg path");


        const answer = faq.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.classList.remove("marg-bot");
            if (svg) {
                svg.setAttribute("d", "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z");
                svg.setAttribute("fill", "#AD28EB");
            }
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add("marg-bot");
            if (svg) {
                svg.setAttribute("d", "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z");
                svg.setAttribute("fill", "#301534");
            }
        }
    })
})