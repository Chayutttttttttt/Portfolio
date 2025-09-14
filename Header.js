class Myheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <nav class="menu">
                <a href="Main.html" class="button">Home</a>
                <a href="About.html" class="button">About</a>
                <a href="Skils.html" class="button">Skils</a>
                <a href="Experience.html" class="button">Experience</a>
                <a href="Contact.html" class="button" >Contact</a>
            </nav>
        </header>
        `;
    }
}
customElements.define('my-header', Myheader);