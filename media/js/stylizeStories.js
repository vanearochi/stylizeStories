$(document).ready(function(){
	
	console.log("Welcome to stylizeStories by Vane")
	var boxContainerNumber=0
	

	var takeInformation = function (){
	    
	    var userStories = function(json){

	    	for (var i = 0; i < json.length; i++) {
	    		var timeElapsed = timePosted() 
	    			
	    			if(json[i].image===""){
	    				console.log("bla")
	    				displayInformation(json[i].author.picture, json[i].headline, json[i].link, json[i].author.username, json[i].author.picture, json[i].upVotes.length, timeElapsed, i )
	    			}
					else{

	    				displayInformation(json[i].image, json[i].headline, json[i].link, json[i].author.username, json[i].author.picture, json[i].upVotes.length, timeElapsed, i )
	    			}
	    	};

	    	
	    	//displayInformation(json.length)

		
		};

		

		


		$.ajax({
			url:"http://www.freecodecamp.com/news/hot",
			success: userStories,
			error: function(e){
				console.log(e.message);
			}
		});

	}

	var timePosted = function(){};

	var displayInformation = function(img, headLine, link, userName, userPic, likes, time, counter){
		
		 
		if(counter%4===0 && counter>0){
			boxContainerNumber=counter;
			$(".container").append("<div class= 'boxContainer"+counter+" row box1' ></div>")
		}
		
			
		$(".boxContainer"+boxContainerNumber).append("<div class ='inner"+counter+ " box col-xs-3'></div>")
		if(img===""){
			$(".inner"+counter).append("<a href='"+link+"'><img class='picture' glyphicon glyphicon-picture></a>");
		}

		$(".inner"+counter).append("<a href='"+link+"'><img class=' image' src='"+img+"'></a>");
		$(".inner"+counter).append("<div class='row'><a href='"+link+"'><div class='headLine col-xs-12'>"+headLine+"</div></a></div>");
		$(".inner"+counter).append("<div class='userInfo row'><div class='username col-xs-9 '> by <a href='http://freecodecamp.com/"+userName+"'>"+userName+"</div></a><div class=' col-xs-3'><a href='http://freecodecamp.com/"+userName+"'><img class='img-responsive userPic'src='"+userPic+"'></a></div></div>")
		$(".inner"+counter).append("<div class='row other'><div class='col-xs-9 likes'><b class='glyphicon glyphicon-heart'> </b>"+likes+"</div><b class='glyphicon ' ></b><div class='col-xs-3 time'>"+counter+"</div></div>")
		
		//$(".container").html("<div class='col-xs-12'><img src="+json[0].image+"></div>")

	}
	//$(".inner"+counter).append("<div class='image row'><div class='col-xs-12'><img class='img-responsive' src='"+img+"'></div></div>");

//$(".inner"+counter).append("<div class='row '><div class='col-xs-10 image '><img class='img-responsive' src='"+img+"'></div></div>");
	takeInformation()
});