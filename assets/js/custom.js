document.addEventListener("DOMContentLoaded", function () {


    //accordion 2 code
    var accordionItems = document.querySelectorAll(".accordion2_item");

    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Toggle the active class to show/hide the answer
            item.classList.toggle("active");

            // Toggle the arrow icon
            var arrowIcon = item.querySelector(".ri-arrow-down-s-line");
            arrowIcon.classList.toggle("ri-arrow-up-s-line");

            // Slide down or up the answer section
            var answerSection = item.querySelector(".accordion2_ans");
            if (item.classList.contains("active")) {
                answerSection.style.maxHeight = answerSection.scrollHeight + "px";
            } else {
                answerSection.style.maxHeight = 0;
            }

            // Close other open accordions
            accordionItems.forEach(function (otherItem) {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".accordion2_ans").style.maxHeight = 0;
                    otherItem.querySelector(".ri-arrow-up-s-line").classList.remove("ri-arrow-up-s-line");
                }
            });
        });
    });




    //accordion 3 code
    const accordionItem = document.querySelectorAll('.accordion3_item');

    accordionItem.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            // Toggle the arrow icon
            var arrowIcon = item.querySelector(".ri-arrow-down-s-line");
            arrowIcon.classList.toggle("ri-arrow-up-s-line");

            const accordionAns = this.querySelector('.accordion3_ans');
            if (this.classList.contains('active')) {
                accordionAns.style.maxHeight = accordionAns.scrollHeight + 'px';
            } else {
                accordionAns.style.maxHeight = '0';
            }

            // Close other open items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAccordionAns = otherItem.querySelector('.accordion3_ans');
                    otherAccordionAns.style.maxHeight = '0';
                }
            });
        });
    });
    
});


