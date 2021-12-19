<!-- window.addEventListener("DOMContentLoaded", loadRestfields);

      function loadRestfields() {
        const url = "https://www.weblinks.cc/wp-json/wb/v1/domains";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onload = function () {
          if (this.status == 200) {
            data = JSON.parse(this.responseText);
            //console.log(data);

            // for (const key in data) {
            //   if (data.hasOwnProperty(key)) {
            //     console.log(`${key} : ${data[key]}`);
            //   }
            // }
            var queries = [];
            var i = 0;
            Object.entries(data).forEach((entry) => {
              domain = entry[1].custom_domain[0];
              Object.entries(domain).forEach((item) => {
                i++;
                queries[i] = item[1];
              });
            });
            console.log(queries);
          }
        };
        xhr.send();
      } -->
