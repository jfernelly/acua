var accordion = document.getElementsByClassName("container");


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";

        }
    });
}

var ticket = document.getElementsByClassName("ticket");


for (i = 0; i < ticket.length; i++) {
    ticket[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let info = this.nextElementSibling;
        if (info.style.display === "block") {
            info.style.display = "none";

        } else {
            info.style.display = "block";

        }
    });
}