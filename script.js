var breedImage = $("#breed-image");
var breed;
var dropdown = $('#dog-breeds');
var flag = true;
window.onload = function(){
    alert("WELCOME, HERE YOU CAN SEE IMAGES OF YOUR FAV DOGS");
}

$.get('https://dog.ceo/api/breeds/list/all',function(data){
    let dogBreed = data.message;
    for(let breed in dogBreed){
        dropdown.append('<option value="'+breed+'">'+breed+'</option>');
    }
});

$('form button').click(function(e){
    e.preventDefault();
    breed = dropdown.val();
    var url = "https://dog.ceo/api/breed/"+breed+"/images";
    $("#breed-image img").remove();
    $.get(url,function(data){   
        var pictures = data.message;
        console.log(pictures);
        for(let picture of pictures){
            breedImage.append('<img src="' + picture + '" alt="' + breed + '">');
        }
    })

    
});


