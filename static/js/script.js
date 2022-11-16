var counter = 0;

function displayComment() {
    let text = document.getElementById("comment_text").value;
    let comments = document.getElementById("comment_area");

    if(text != "") {
        comments.innerHTML += `
            <div class="card border-dark shadow" id="comment${counter}">
                <div class="card-header">
                    <div>
                        <strong>User | Avaliação: </strong>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="card-body">
                    <p id="comment">${text}</p>
                </div>
            </div><br>
        `;
    }

    counter++;
}
