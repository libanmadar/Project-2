var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/55404?page=2",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
		"x-rapidapi-key": "7233847e62mshc250e35c29f0955p1ad0bfjsnc62aa3539246"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});