var jsonObj = {
	"trending": {
				"data": {
				"images":[
					{
					"url": "./images/01.jpg",
					"title": "Fashion & Beauty",
					"price": "2000"
					}, 
					{
					"url": "./images/ew.jpg",
					"title": "Fashion & Beauty",
					"price": "2023"
					},
					{
					"url": "./images/pe.jpg",
					"title": "Fashion & Beauty",
					"price": "40323"
					},
					
					{
					"url": "./images/su.jpg",
					"title": "Fashion & Beauty",
					"price": "20233"
				  },
				  
				  {
					"url": "./images/01.jpg",
					"title": "Fashion & Beauty",
					"price": "2000"
					},
					{
					"url": "./images/ew.jpg",
					"title": "Fashion & Beauty",
					"price": "2023"
					},
					{
					"url": "./images/pe.jpg",
					"title": "Fashion & Beauty",
					"price": "40323"
					},
					
					{
					"url": "./images/su.jpg",
					"title": "Fashion & Beauty",
					"price": "20233"
					}
				
				]
				}
	},
	"entertainment": {
				"data": {
				"images":[
					{
					"url": "./images/01.jpg",
					"title": "Fashion & Beauty",
					"price": "2000"
					},
					{
					"url": "./images/ew.jpg",
					"title": "Fashion & Beauty",
					"price": "2023"
					},
					{
					"url": "./images/pe.jpg",
					"title": "Fashion & Beauty",
					"price": "40323"
					},
					
					{
					"url": "./images/su.jpg",
					"title": "Fashion & Beauty",
					"price": "20233"
					}
				]
				}
			},
			
	"travel": {
				"data": {
				"images":[
					{
					"url": "./images/01.jpg",
					"title": "Fashion & Beauty",
					"price": "2000"
					},
					{
					"url": "./images/ew.jpg",
					"title": "Fashion & Beauty",
					"price": "2023"
					},
					{
					"url": "./images/pe.jpg",
					"title": "Fashion & Beauty",
					"price": "40323"
					},
					
					{
					"url": "./images/su.jpg",
					"title": "Fashion & Beauty",
					"price": "20233"
					}
				]
				}
			},
			
	"food": {
				"data": {
				"images":[
					{
					"url": "./images/01.jpg",
					"title": "Fashion & Beauty",
					"price": "2000"
					},
					{
					"url": "./images/ew.jpg",
					"title": "Fashion & Beauty",
					"price": "2023"
					},
					{
					"url": "./images/pe.jpg",
					"title": "Fashion & Beauty",
					"price": "40323"
					},
					
					{
					"url": "./images/su.jpg",
					"title": "Fashion & Beauty",
					"price": "20233"
					}
				]
				}
			},
						
			
}
console.log("json data for images Rahul "+jsonObj.trending.data.images.length);



// $("#tab1button0").addClass("disabledbutton");
	$(function(){
		  displayProduct("trending");
		  displayProduct("entertainment");
		  displayProduct("travel");
		  displayProduct("food");
		  
		  $('ul.tabs li:first').addClass('active');
		  $('.block section').hide();
		  $('.block section:first').show();
		  $('ul.tabs li').on('click',function(){
		    $('ul.tabs li').removeClass('active');
		    $(this).addClass('active')
		    $('.block section').hide();
		    var activeTab = $(this).find('a').attr('href');
		    console.log(activeTab);
		    var idName = activeTab.split("#"); 
		    // displayProduct(idName[1]);
		    $(activeTab).show();
		    return false;
		  });
    })

  
    function displayProduct(tabIdName) {
	   	// body...
		  
	//    console.log("idName call"+ tabIdName); 
	   var sizeOfJson;
	   var prodcutData;
	   var typeTab = 0;
	   if(tabIdName == "trending" ){
		    typeTab = 1;
		    console.log("tabs Name trending called" );
			sizeOfJson = jsonObj.trending.data.images.length;
			prodcutData = jsonObj.trending.data;
	   }else if(tabIdName == "entertainment"){
		    typeTab = 2;
            console.log("tabs Name entertainment called" );
			sizeOfJson = jsonObj.entertainment.data.images.length;
			prodcutData = jsonObj.entertainment.data;
	   }else if(tabIdName == "travel"){
		    typeTab = 3;
            console.log("tabs Name travel called" );
			sizeOfJson = jsonObj.travel.data.images.length;
			prodcutData = jsonObj.travel.data;
	   }else{
		   typeTab = 4;
            console.log("tabs Name food called" );
			sizeOfJson = jsonObj.food.data.images.length;
			prodcutData = jsonObj.food.data;
	   }
	console.log("size of images url "+sizeOfJson);
	   for(var i = 0; i < sizeOfJson ; i++){ 
			var id = i.toString();	
			//  first create outerDiv and appendChild to tabIdName (it will add based on tab id )
			var outerDiv = document.createElement('div');
			outerDiv.id = tabIdName+'_item_'+id;
			outerDiv.className = 'item';
			outerDiv.style.backgroundImage = "url('"+ prodcutData.images[i].url+"')";
			document.getElementById(tabIdName).appendChild(outerDiv);
			//  now will create another innerDiv add to parent div (outerDiv)
			var innerDiv = document.createElement('div');
			innerDiv.className = 'image-details';
			outerDiv.appendChild(innerDiv);

           // inside of innerDiv - : create anothe two div (one for title & price anothe for add Cart button)
		    var innerDivFirst = document.createElement('div');
			innerDivFirst.className = 'image-title-price';
			innerDiv.appendChild(innerDivFirst); 

			// create span for  display title of product and add with innerDivFirst
			var innerSpanFirst = document.createElement('span');
			innerSpanFirst.className = ''; // will put class name later if required
			innerDivFirst.appendChild(innerSpanFirst);
			innerSpanFirst.innerHTML = "<b>Title &nbsp; &nbsp; &nbsp;"+ prodcutData.images[i].title +"<b><br>"; // here will put prodcutImage details from json object 

            // create span for display price of product and add with innerDivFirst
			var innerSpanSecond = document.createElement('span');
			innerSpanSecond.className = ''; // will put class name later if required
			innerDivFirst.appendChild(innerSpanSecond);
			innerSpanSecond.innerHTML = "<b>Price &nbsp; &nbsp;  &#8377; &nbsp;" + prodcutData.images[i].price; + "</b>" // here will put product price details from json object 

            //  cretae second div for add Cart button and add with innerDiv
			var innerDivSecond = document.createElement('div');
			innerDivSecond.className = ''; // will put class name after
			innerDivSecond.id = tabIdName+'_ButtonDiv_'+id;
			innerDiv.appendChild(innerDivSecond);   
            var buttonId = tabIdName+'button_'+id;
			// pass button id as a paramter
			document.getElementById(tabIdName+'_ButtonDiv_'+i).innerHTML = '<input type="button" id = '+ buttonId +' class="image-footer-button" title = "Add To CART" value="ADD TO CART" onclick="addToCart('+ i +', '+typeTab+')" />'; 
      
           // create button and assign to innerDivSecond div   
			
		
	   	}
   }
   var totalItem = 0;
   function addToCart(buttonIndex, tabType){
	//    var buttonIdName ;
	   if(tabType == 1){
			console.log(tabType + "dfsdffsd");
			var buttonIdName =  "trendingbutton_"+buttonIndex;
		
	   }else if(tabType == 2){
           buttonIdName =  "entertainmentbutton_"+buttonIndex;
	   }else if(tabType == 3){
          buttonIdName =  "travelbutton_"+buttonIndex;

	   }else {
         buttonIdName =  "foodbutton_"+buttonIndex;
	   }
	   console.log("rahul-------------"+ buttonIdName,tabType);
	   	document.getElementById(buttonIdName).disabled = true;
	   document.getElementById(buttonIdName).style = 'cursor: not-allowed;';

	  
	   
	   
	// var nodes = document.getElementById("item0").getElementsByTagName('*');
	// 	for(var i = 0; i < nodes.length; i++){
	// 		nodes[i].disabled = true;
	// 	}
	   console.log("add functio call ");
	   totalItem = totalItem + 1
	   document.getElementById("total-item-cart").innerHTML= totalItem ;
	//    document.getElementsByClassName("total-item-cart").innerHTML = totalItem;
	   console.log(totalItem);
   }

   function openMenu() {
	   console.log("called");
	//  document.getElementById('menu-list').style.display = 'block';
	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
   }
}

function displayCartItem(){ 
	console.log("Cart display called");
        document.getElementById('cart-pop-up-display').style.display = 'block';
}