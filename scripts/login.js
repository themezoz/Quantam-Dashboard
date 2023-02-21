const togglePasswordIcon = document.querySelector("#password-visibility-icon");
const password = document.querySelector("#password");

togglePasswordIcon.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    console.log(this.getAttribute('src'));
    let iconSrc = this.getAttribute('src');
    if(iconSrc.indexOf('view.svg') > 0) {
        this.setAttribute('src', iconSrc.replace('view.svg', 'hide.svg'));
    } else {
        this.setAttribute('src', iconSrc.replace('hide.svg', 'view.svg'));
    }
});