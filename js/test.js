function doStuff(data) {
    //Data is usable here
    console.log(data);

  //   var tableData = "";

  //   for (i = 0; i < data.length; i++) {
		// if( data[i].chart != "" ) {
		// 	tableData += '<tr><td class="chart">' + data[i].chart + '</td><td class="description">' + data[i].description + '</td><td class="prefix">' + data[i].documentPrefix + '</td><td class="email"><a href="mailto:' + data[i].email + '">' + data[i].email + '</a></td></tr>';
		// }
  //   }

  //   $('#tData').html(tableData);

  //   var options = {
  //       valueNames: ['chart', 'description', 'prefix', 'email']
  //   };

  //   var userList = new List('users', options);

  //   userList.sort('prefix', {
  //       order: "asc"
  //   });

  //   $('input[type=radio][name=radios]').change(function() {
  //       var chosen = $(this).val();
  //       console.log(chosen);

  //       userList.filter(function(item) {
  //           if (item.values().chart.indexOf(chosen) >= 0) {
		// 		return true;
		// 	} else if (chosen === "all") {
		// 		return true;  
		// 	} else {
		// 		return false;
		// 	}

  //       });
  //       return false;
  //   });

  //   // $('#sort').change(function() {
  //   //     var chosen = $(this).val();
  //   //     console.log(chosen);
  //   // userList.filter(function(item) {
  //   //     console.log(item);
  //   //     if (item.values().category.indexOf(chosen) >= 0) {
  //   //         return true;
  //   //     } else {
  //   //         return false;
  //   //     }
  //   // });
  //   // return false;
  //   // });

  //   $('#reset').click(function() {
  //       //reset the search box
  //       $('.search').val('');
  //       userList.search();
  //       //reset the radio buttons
  //       $('input[type=radio][name=radios]').prop("checked", false);
  //       // reset the list
  //       userList.filter();
  //       userList.sort('prefix', {
  //           order: "asc"
  //       });
  //       return false;
  //   });
}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("madera-sample-data.csv", doStuff);
