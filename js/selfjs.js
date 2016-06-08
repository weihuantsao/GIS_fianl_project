function choose_data_url(category_selectedIndex) {
    var data_url = "";
    var Dentistry_url = "https://api.myjson.com/bins/12t6f"; //牙醫
    var Obstetrics_url = "https://api.myjson.com/bins/2mbmv"; //腹產科
    var TCM_url = "https://api.myjson.com/bins/20fqz"; //中醫
    var joint_url = "https://api.myjson.com/bins/57j9n"; //聯合
    var Medical_url = "https://api.myjson.com/bins/2jq6z"; //內科 
    var Pediatrics_url = "https://api.myjson.com/bins/2dapn"; //小兒科
    var Orthopedic_url = "https://api.myjson.com/bins/3dqfv"; //整形外科
    var Otolaryngology_url = "https://api.myjson.com/bins/2wl5n"; //耳鼻喉科
    var Surgical_url = "https://api.myjson.com/bins/vpp7"; //外科
    var Dermatology_url = "https://api.myjson.com/bins/167sb"; //皮膚科
    var Urology_url = "https://api.myjson.com/bins/5a3uz"; //泌尿科
    var Home_url = "https://api.myjson.com/bins/30vh7"; //家醫科
    var Orthopedics_url = "https://api.myjson.com/bins/586ez"; //骨科
    var Ophthalmology_url = "https://api.myjson.com/bins/2x95j"; //眼科
    var Rehabilitation_url = "https://api.myjson.com/bins/3x0vv"; //復健科        
    var Psychiatric_url = "https://api.myjson.com/bins/47yej"; //精神科

    var LargeHospital_url = "https://api.myjson.com/bins/2hl17"; // 大醫院

    switch (category_selectedIndex) {
        case 0:
            alert("have no choose ");
            break;
        case 1:
            data_url = Dentistry_url;
            break;
        case 2:
            data_url = Obstetrics_url;
            break;
        case 3:
            data_url = TCM_url;
            break;
        case 4:
            data_url = joint_url;
            break;
        case 5:
            data_url = Medical_url;
            break;
        case 6:
            data_url = Pediatrics_url;
            break;
        case 7:
            data_url = Orthopedic_url;
            break;
        case 8:
            data_url = Otolaryngology_url;
            break;
        case 9:
            data_url = Surgical_url;
            break;
        case 10:
            data_url = Dermatology_url;
            break;
        case 11:
            data_url = Urology_url;
            break;
        case 12:
            data_url = Home_url;
            break;
        case 13:
            data_url = Orthopedics_url;
            break;
        case 14:
            data_url = Ophthalmology_url;
            break;
        case 15:
            data_url = Rehabilitation_url;
            break;
        case 16:
            data_url = Psychiatric_url;
            break;
    }
    return data_url;
}

function test_selfjs() {
    alert("hello my name is selfjs ^^~");
}

function encode_choose(d, t) {
    search_hex = 0x000000;
    switch (d) {
        case 0:
            alert("have no choose ");
            break;
        case 1:
            search_hex = 0x1c0000;
            break;
        case 2:
            search_hex = 0x038000;
            break;
        case 3:
            search_hex = 0x007000;
            break;
        case 4:
            search_hex = 0x000e00;
            break;
        case 5:
            search_hex = 0x0001c0;
            break;
        case 6:
            search_hex = 0x000038;
            break;
        case 7:
            search_hex = 0x000007;
            break;
    }
    switch (t) {
        case 0:
            alert("have no choose ");
            break;
        case 1:
            search_hex = search_hex & 0x124924;
            break;
        case 2:
            search_hex = search_hex & 0x92492;
            break;
        case 3:
            search_hex = search_hex & 0x49249;
            break;
    }
    return search_hex;
}


function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    if (d > 1) return Math.round(d) + "km";
    else if (d <= 1) return Math.round(d * 1000) + "m";

    return d;
}

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};

function addMarker(location, who) {
    var marker = new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: who
    });
    markers.push(marker);
}

function info_seting(count, data_time) {
    var info;
    info = "<h3><strong>" + load_data[category][count].name +
        "</strong></h3>醫師 : " + load_data[category][count].doctor +
        "<br> 電話 : " + load_data[category][count].phone +
        "<br> 地址 : " + load_data[category][count].address +
        make_table(data_time);
    return info;
}

function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    // Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    Circle.setMap(null);
    markers = [];
}


function OpenorNot(data_time, choose_time) {
    data_time = "0x" + data_time;
    temp = data_time & choose_time;
    if (temp & choose_time) {
        return true;
    } else {
        return false;
    }
}

(function() {
    var convertBase = function(num) {
        this.from = function(baseFrom) {
            this.to = function(baseTo) {
                return parseInt(num, baseFrom).toString(baseTo);
            };
            return this;
        };
        return this;
    };

    // binary to decimal
    this.bin2dec = function(num) {
        return convertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    this.bin2hex = function(num) {
        return convertBase(num).from(2).to(16);
    };

    // decimal to binary
    this.dec2bin = function(num) {
        return convertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    this.dec2hex = function(num) {
        return convertBase(num).from(10).to(16);
    };

    // hexadecimal to binary
    this.hex2bin = function(num) {
        return convertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    this.hex2dec = function(num) {
        return convertBase(num).from(16).to(10);
    };

    return this;
})();

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}

function repalce(a) {
    if (a == 1) {
        return "O";
    } else {
        return "X";
    }
}


function make_table(data_time) {
    data_time = "0x" + data_time;
    data_time = hex2dec(data_time);
    bool_data = [];
    b = 2;

    for (var i = 0; i < 24; i++) {

        cc = data_time % b;
        data_time = parseInt(data_time / b);
        bool_data.push(cc);
    };

    time_tmp = parse("<table><thead><tr><th>門診時間</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody><tr><td>上午9:00~12:00</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr><tr><td>下午15:00~18:00</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr><tr><td>晚上18:30~21:30</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr></</table>", repalce(bool_data[20]), repalce(bool_data[17]), repalce(bool_data[14]), repalce(bool_data[11]), repalce(bool_data[8]), repalce(bool_data[5]), repalce(bool_data[2]), repalce(bool_data[19]), repalce(bool_data[16]), repalce(bool_data[13]), repalce(bool_data[10]), repalce(bool_data[7]), repalce(bool_data[4]), repalce(bool_data[1]), repalce(bool_data[18]), repalce(bool_data[15]), repalce(bool_data[12]), repalce(bool_data[9]), repalce(bool_data[6]), repalce(bool_data[3]), repalce(bool_data[0]));

    return time_tmp;
}

function fn_match(key1, key2, data_name, data_doctor, data_phone) {
    //Setting default
    if ((data_name.match(key1) != null || data_doctor.match(key1)) && data_phone.match(key2) != null) {
        return "match";
    } else {
        return " no match";
    }

}
