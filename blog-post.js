function accordionAppend() {
    const richTextElement = document.querySelector('[js-el="article"]');
    const accordion1 = document.querySelector('[js-el="accordion-1"]');
    const accordion2 = document.querySelector('[js-el="accordion-2"]');
    const accordion3 = document.querySelector('[js-el="accordion-3"]');
  
    replacePlaceholder(richTextElement, "{{accordion-1}}", accordion1);
    replacePlaceholder(richTextElement, "{{accordion-2}}", accordion2);
    replacePlaceholder(richTextElement, "{{accordion-3}}", accordion3);
  
    if (typeof Webflow !== "undefined") {
      Webflow.require("ix2").init();
    }
  
    function replacePlaceholder(richText, placeholder, accordion) {
      let richTextHTML = richText.innerHTML;
      let accordionHTML = accordion.outerHTML;
      richText.innerHTML = richTextHTML.replace(placeholder, accordionHTML);
      accordion.remove();
    }
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    accordionAppend();
  });
  