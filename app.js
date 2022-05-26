const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(){
  if (toggleBtn.checked) {
    document.documentElement.style.setProperty(`--${"background"}`, `hsl(230, 17%, 14%)`);
    document.documentElement.style.setProperty(`--${"topBackground"}`, `hsl(232, 19%, 15%)`);
    document.documentElement.style.setProperty(`--${"cardBackground"}`, `hsl(228, 28%, 20%)`);
    document.documentElement.style.setProperty(`--${"textLight"}`, `hsl(228, 34%, 66%)`);
    document.documentElement.style.setProperty(`--${"textDark"}`, `hsl(0, 0%, 100%)`);
    document.documentElement.style.setProperty(`--${"cardHover"}`, `#333a55`);
    document.documentElement.style.setProperty(`--${"toggle"}`, `linear-gradient(to right top, hsl(210, 78%, 56%), hsl(146, 68%, 55%))`);
    document.documentElement.style.setProperty(`--${"hr"}`, `#333A55`);
  } else {
    document.documentElement.style.setProperty(`--${"background"}`, `hsl(0, 0%, 100%)`);
    document.documentElement.style.setProperty(`--${"topBackground"}`, `hsl(225, 100%, 98%)`);
    document.documentElement.style.setProperty(`--${"cardBackground"}`, `hsl(227, 47%, 96%)`);
    document.documentElement.style.setProperty(`--${"textLight"}`, `hsl(228, 12%, 44%)`);
    document.documentElement.style.setProperty(`--${"textDark"}`, `hsl(230, 17%, 14%)`);
    document.documentElement.style.setProperty(`--${"cardHover"}`, `#e1e4f0`);
    document.documentElement.style.setProperty(`--${"toggle"}`, `#aeb3cb`);
    document.documentElement.style.setProperty(`--${"hr"}`, ` #848BAB`);
  }

});
