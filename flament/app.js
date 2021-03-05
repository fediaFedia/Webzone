
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}




function c(ugh) {




var h1 = ugh.slice(0, 6);
var h2 = ugh.slice(8, 14);
var h3 = ugh.slice(16, 22);
var h4 = ugh.slice(24, 30);



 console.log(h1); console.log(h2); console.log(h3); console.log(h4);

$('.c1').css('background-color', '#'+h1);
$('.c2').css('background-color', '#'+h2);
$('.c3').css('background-color', '#'+h3);
$('.c4').css('background-color', '#'+h4);
$('.t1').css('color', '#'+h2);
$('.t2').css('color', '#'+h3);
$('.t3').css('color', '#'+h4);
$('.t4').css('color', '#'+h2);


$('.tran1').text('#'+h1);
$('.tran2').text('#'+h2);
$('.tran3').text('#'+h3);
$('.tran4').text('#'+h4);

$('body').css('background', '#'+h1);



 }





function collection(sm) {

var layout = document.getElementById("getVariant").innerHTML;

var c1 = sm.substring(0,6); 
var c2 = sm.substring(6,12); 
var c3 = sm.substring(12,18); 
var c4 = sm.substring(18,24);

$('.c1').css('background-color', '#'+c1);
$('.c2').css('background-color', '#'+c2);
$('.c3').css('background-color', '#'+c3);
$('.c4').css('background-color', '#'+c4);
$('.t1').css('color', '#'+c2);
$('.t2').css('color', '#'+c3);
$('.t3').css('color', '#'+c4);
$('.t4').css('color', '#'+c2);



hex1 = c1.replace('#','');r = parseInt(hex1.substring(0,2), 16);g = parseInt(hex1.substring(2,4), 16);b = parseInt(hex1.substring(4,6), 16);r1 = parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) //base10
if (r1 > 383) {$('.c1').css('background-image', 'url("assets/img/layouts/' + layout + '/black/4.png")');$('h1').css('color', 'black');$('.line').css('background', 'black');$('#inner').css('background', 'black');

$("#iphone-topicons").attr("src", "assets/img/iphone-b.png");

$("#window-topicons").attr("src", "assets/img/window-b.png");
$("#heart2").attr("src", "heart-b.png");


$("#close").attr("src", "close-b.png");

} 
else {$('.c1').css('background-image', 'url("assets/img/layouts/' + layout + '/white/4.png")');$('h1').css('color', 'white');$('.line').css('background', 'white');$('#inner').css('background', 'white');

$("#iphone-topicons").attr("src", "assets/img/iphone-w.png");

$("#window-topicons").attr("src", "assets/img/window-w.png");

$("#heart2").attr("src", "heart-w.png");
$("#close").attr("src", "close-w.png");


}



hex2 = c2.replace('#','');r = parseInt(hex2.substring(0,2), 16);g = parseInt(hex2.substring(2,4), 16);b = parseInt(hex2.substring(4,6), 16);r2 = parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) //base10
if (r2 > 383) {$('.c2').css('background-image', 'url("assets/img/layouts/' + layout + '/black/3.png")');} 
else {$('.c2').css('background-image', 'url("assets/img/layouts/' + layout + '/white/3.png")');}

hex3 = c3.replace('#','');r = parseInt(hex3.substring(0,2), 16);g = parseInt(hex3.substring(2,4), 16);b = parseInt(hex3.substring(4,6), 16);r3 = parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) //base10
if (r3 > 383) {$('.c3').css('background-image', 'url("assets/img/layouts/' + layout + '/black/2.png")');} 
else {$('.c3').css('background-image', 'url("assets/img/layouts/' + layout + '/white/2.png")');}

hex4 = c4.replace('#','');r = parseInt(hex4.substring(0,2), 16);g = parseInt(hex4.substring(2,4), 16);b = parseInt(hex4.substring(4,6), 16);r4 = parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) //base10
if (r4 > 383) {$('.c4').css('background-image', 'url("assets/img/layouts/' + layout + '/black/1.png")');} 
else {$('.c4').css('background-image', 'url("assets/img/layouts/' + layout + '/white/1.png")');}

$('.tran1').text('#'+c1);
$('.tran2').text('#'+c2);
$('.tran3').text('#'+c3);
$('.tran4').text('#'+c4);

$('body').css('background', '#'+c1);


}

var data = [
'f9ed69f08a5db83b5e6a2c70-361','222831393e4600adb5eeeeee-2763','2b2e4ae8454590374953354a-238','f38181fce38aeaffd095e1d3-7642','48466d3d84a846cdcfabedd8-1504','2d4059ea5455f07b3fffd460-7247','56bfb538817af5f093fbd66f-274','eb586fd8e9f04aa0d5454553-3460','f0f5f9c9d6df52616b1e2022-1649','ff6575f1ad65fff6619be8f9-2285','3498dbecf0f134495ef1c40f-7817','7a9eaf655989de88a5ffcebb-227','00b8a9f8f3d4f6416cffde7d-9506','f06868fab57aedf79880d6ff-6998','4ac6b74f5e7f965f8aff7070-2738','a9eee6fefaecf9a1bc625772-3986','ff5335dfe0d43e92a3353940-4071','e2eff1b6d5e165799b555273-192','0e2e3b1666787db9b3d8d7c3-2487','15567460beb379f8bbf5ffae-7956','002c6ae45171f8a79bf8d99b-6713','2e38371666787db9b3e1f6f4-6941','e4e4e441b3d361d2dc444444-2937','118df00e2f56ff304fececda-7195','288fb41d556fefddb2fa360a-5124','a8d8eaaa96dafcbad3ffffd2-8328','2fc5cc6df1cce3ffc3ff89c0-8941','33425b5baaec526ed0484cb0-278','0c22330654710a91abffc045-4461','ff895dd5eeff78bbe61b435d-8082','f78536dfebed4972852b4450-8184','e4f5e5a6dfde88a6e58d6ec8-7641','081f375fc9f32e79ba1e549f-8015','35013f561050951556e9b5d2-8171','4ac3bea3dec9e6efbffaac64-3452','f4f7f7aacfd079a8a91f4e5f-8283','35394126282b5f85db90b8f8-643','eefca9b7e57683cc615a9e7c-282','ffeed0f79f24e200497c064d-7303','0278ae51dacf9ef5cfe8ffb1-8168','3841374066613bb87394ed88-659','fbf8caa13f805e1043360827-839','f64662c6195174193856132a-9474','f33535d8e9f033425b29252c-9148','1a2634203e5fffcc00fee5b1-2715','ffb400fffbe02994b2474744-9140','f06161eb786bf3a871e9ec82-8321','ff6464ffbd67f8fe855be7a9-5132','ff004d9d0b285a082d33030d-7968','c8f0f086d8dc7047a33a276a-7635','07588a6ac1b8bfe9dbe1f6f4-3629','83ffe17045ffc768ffffaded-8529','15274436759161d2b49dfdc7-6053','563761a7425cf3825fffe26f-4698','eeeeeeff9966e52b509c2542-8029','dbd8e35c5470352f442a2438-8350','eb2a5dff6f41ffb44bffeb7d-2829','2185d53a4750303841f3f3f3-9084','73f7dd2cc4cb1972a42e3a87-8025','6ea7c16b55aee67fa2ffefa1-7640','48829e51dacf9ef5cfe8ffb1-190','a6f2db7bcace678eb44f4e79-233','f75b5bc83b4c46265c794d9a-470','22576341d8bf2f89b33b50b2-362','d9dad7c24d2c3e4a611a2639-4343','ff895dd5eeff78bbe61b435d-2183','1a2634203e5feec550f9e3a3-1608','a212321a183120615bdece9c-5563','47d0bddaec8bfffdd6ff5da2-3574','2f3c4f506f86fbb040de703c-5271','001f3f0833580d63a5ffd717-6131','fcff89fe7187ca4b7c6e386e-9834','73f7dd2cc4cb1972a42e3a87-5447','43bfc769e9f5645fce40356f-7638','114b5f1a936f88d498f3e9d2-2759','83afa658727fe5e5e5d3a284-5308','7b99fa53cdd896eab7f1f3b8-8182','57385ca75265ec7263febe7e-6567','d2e4f18facc0818d97484d51-2389','3d62713d899c45a298d8f8b7-10225','ffea54ffcb3cfeaa2bff5757-1037','1f3a5241a1868cca6ed3f689-3061','4337512f576e748b9cf0e3e3-9522','ffe165de424284243b412135-9264','e0fffb29cdb5008698f39c9c-4535','353b6e25224374deed9365db-8013','d1dbbd91aa9d3e606f193441-3267','26635212806153c0a2b5f7e6-717','314357456672e3b587c98c70-231','5dacbd24527aa7bcb9e0ebeb-2870','d5441c013c4d9dd5cbf3e5b1-3538','1d025101908174cc7ed2eba7-2314','04879c0c3c78090030f30a49-4038','293462211a4cf33535a51c2d-4803','f6ea8cf26d5bc03546492540-8123','0000330066cc0099ffededed-4111','231a31e42f45b42b3f8ab2ff-2128','fffac0ffd79a73b9d79de6e8-5582','f35f5fcc435ff1ea6536a3eb-5485','bdd8f182a6cb3667a6214177-2978','ffe390ff926bff4a4aa83c54-3589','c1f88055c59d4f5aa87481cf-471','cc0500ef2f2aef832aefac2a-7431','5156612e9f8268c170d6ec8c-3383','5585b553a8b679c2d0bbe4e9-6496','fbe0d84d727e2836447a6552-8043','e9e6c9ca6144566683393e51-3173','2c5460bbdc2f61b136cbe0e0-7277','2b1f31413d655fb9b0bef992-1893','2b39643482aa6db3b5f9cc7b-3740','36413d4c657ef29696ffe2ad-205','004182118df0fbffa3ff4b68-6236','3038413a475000adb5eeeeee-10792','80a3a2abcecfc4dce0daf4f5-5656','ff9234ffcd3cfafcb4b0db72-2655','343434055e6862a388b9d2d2-2562','fcf5b8b4cd93427a5b403f3f-8765','422b72266d983cb29ac4f080-7355','303242394359f2be8dba6c65-2499','a62671db466bf96c48f5d773-2982','88bef5ba53def469a9f4fa9c-10607','1b4b4df3f66ff1d15fe8984a-469','b2085df9c11c0d85493a3d44-8303','062925044a423a9188b8e1dd-4910','f2676afbe087ad295962013c-7555','feed30ff6868924992504077-3043','f7f37365d2692d8b7d2f64a3-7919','ffe0a3e182379439396a2634-7636','5d697a383838f66b34f2d639-3792','00a38879bd8fbeeb9fffff9d-6588','ff94c7e760bf7e49ac343a69-272','d7df710e5f76083d56081e3f-1464','feff94ad64c583d9efbcfff2-8306','59b79183f084f3ffa1f1d665-7637','b9dbe65f818a36595f304852-6482','3629994262c544aec293efed-1909','d4ed9d64a97b3a54653d3931-8016','ff8a69f06161bb42727a3476-5243','152a3829435c556e53d1d4c9-6901','bef2ff4f709793a7d11bf5af-7429','d93153eb5033ff9d00ffd82c-2358','ee0e51e4dcef505458363540-9501','062c800e6ac74fb9fcf6f5da-2881','96c99c55829c4857913a316e-280','ebedc89ab5c174698cc1867b-6850','db5ca6942e88f9cc6afcff88-7639','3e1e68583c87e45a84ffacac-5043','f8aa27fac55bfff8b620655f-5091','fffbe3ffa9a96a425c26271a-3807','0b88a8a6dc8cdfeb95095062-7403','0e153a3d5af122d1eee2f3f5-2053','4ec9df63a1d03576a7344986-1043','ff304f002651775ada28c7fa-3604','21775663b75db0d553fced25-7187','f1f5bcfecb92f99a9ad1f6a4-3890','764f517fc5ca9fe6dccfffff-228','f6f6d947e4e05f81e4f67ff5-4994','f3f2c9f0d58793af56336371-5337','152a382f5241d6cfb9e4e5db-8634','352d4d6d619269b0c192e0a9-226','eaf88779dc963bbbb3377aaf-5241','eeccb4d83c654f1567604cc3-7938','ee837454567adab784f8f3b6-237','1b515e33827588b990abcd9e-3661','fadb3fecf7c5ea565627332d-3269','d15260e95c63ff9d7bf2f089-6116','ffebbc5da7ae543d46292830-212','304d4e4b75518a9e52f0d699-222','2f2342e42f45b42b3f7ca0e5-2661','66e1b400615900796f009589-5986','ff6d3fb14b4b59405736162e-3656','feff94ad64c588d8ecbcfff2-7659','442d7c6341b4f85acadafa8b-5389','fdfbdad3d0a8819f7f2d4659-3177','e5f1e3a3cd9e52947135635b-195','7400218d0033bd3246fdc8aa-2814','ffd7be95977a3f4c48373640-224','f0f08e91ca624780773a4874-7634','241023883c82b7569affbf00-7422','fba834fce850387adf50c4ed-3062','ccf62c98c74e60a261357a5b-3459','80c0ce4672929adea2c2f69b-5242','e7272dae2a2ffec24af6e5e4-1303','3d065ab51a6270d4b4ddddc7-5831','9bcb3ceff669f29f3dcf3333-9214','51af5bb3e55efeed30ffcb3c-5429','f3cba5975a5e45395325161b-6186','fdf3f3f8e7e7a070a1724060-3527','3b939b2f818991f3fcc9fbff-4319','438a7052ceba8affb4eaff81-1813','b9bc6dffe894ef765f95415a-8012','523f79807be473cff0afffea-5239','d0f66a36c186158a8c1e5287-3186','272e6effffc3ffc55ce95d35-4057','f7deadcd443972b8966f7777-4581','5c4b776990e4b145adf6a2d4-7223','83cbfb377fd9edf68df1d851-1894','0d7685084d6869c181ccf186-3528','990000ff6600c1d343f7f7cf-9585','35013f561050951556e9b5d2-6319','e4f68f50c19a686354444036-11150','ffc8c8ff9999444f5a3e4149-12081','ffde74ffa974ff715aff3757-9409','1a2f4b28475c2f888684c69b-10701','faee5ae4fcf9ace6f64b89ac-11196','f8e796c98b70635270363863-12280','d8fff178e4d4b485d85b73a7-9385','f1f1f1ff41ed8109b70c1845-11000','f1fafba0e4f17ea6f44a4de7-10468','f78536dfebed4972852b4450-10278','fe7847ca2c3fa217384c0b2f-11994','d4ffa300d8b11f9ec73f7a9c-9375','ff5ab0f7fed44df4ff1bb5ec-9353','152a3829435c556e53d1d4c9-8656','dd4747ed6d54ffbe5bffe559-9544','a3f7bf29a19c4b628960316e-11237','feffcbffb576ff6b83c6394d-11343','3b5f4166a96b98e19ac5f5c2-9416','f8c957ecf0f13498db34495e-10697','a561fffd72adfcce9ecfe3ff-10953','3038413a475000adb5eeeeee-10792','37b7b5a0e4e0c7f6f5f6b132-10119','ffee7db767ff534c9844fadd-9970','ee0e51e4dcef505458363540-9501','004182118df0fbffa3ff4b68-8169','faf6edf6bf4fa2453daaaaaa-8863','88bef5ba53def469a9f4fa9c-10607','3d62713d899c45a298d8f8b7-10225','9bcb3ceff669f29f3dcf3333-9214','73f7dd2cc4cb1972a42e3a87-8025','fcf5b8b4cd93427a5b403f3f-8765','fcff89fe7187ca4b7c6e386e-9834','f33535d8e9f033425b29252c-9148','00b8a9f8f3d4f6416cffde7d-9506','4337512f576e748b9cf0e3e3-9522','990000ff6600c1d343f7f7cf-9585','feff94ad64c583d9efbcfff2-8306','ffb400fffbe02994b2474744-9140','0278ae51dacf9ef5cfe8ffb1-8168','f64662c6195174193856132a-9474','2185d53a4750303841f3f3f3-9084','f4f7f7aacfd079a8a91f4e5f-8283','83ffe17045ffc768ffffaded-8529','ffe165de424284243b412135-9264','d4ed9d64a97b3a54653d3931-8016','2fc5cc6df1cce3ffc3ff89c0-8941','fcefed6173f43b2e40f35e3e-8860','bef2eb6dc9953a91aa6b4897-8011','f78536dfebed4972852b4450-8184','913131e5ab39c2ff6ba7da46-8835','7b99fa53cdd896eab7f1f3b8-8182','152a382f5241d6cfb9e4e5db-8634','a8d8eaaa96dafcbad3ffffd2-8328','f06161eb786bf3a871e9ec82-8321','081f375fc9f32e79ba1e549f-8015','b2085df9c11c0d85493a3d44-8303','dbd8e35c5470352f442a2438-8350','f38181fce38aeaffd095e1d3-7642','35013f561050951556e9b5d2-8171','c8f0f086d8dc7047a33a276a-7635','fbe0d84d727e2836447a6552-8043','ff895dd5eeff78bbe61b435d-8082','f6ea8cf26d5bc03546492540-8123','15567460beb379f8bbf5ffae-7956','eeeeeeff9966e52b509c2542-8029','b9bc6dffe894ef765f95415a-8012','353b6e25224374deed9365db-8013','eeccb4d83c654f1567604cc3-7938','f0d39498651e6e4b1f533710-8001','3498dbecf0f134495ef1c40f-7817','ff004d9d0b285a082d33030d-7968','a03232c86f5ee6c073fffeb8-7908','f7f37365d2692d8b7d2f64a3-7919','db5ca6942e88f9cc6afcff88-7639','43bfc769e9f5645fce40356f-7638','ffe0a3e182379439396a2634-7636','59b79183f084f3ffa1f1d665-7637','6ea7c16b55aee67fa2ffefa1-7640','e4f5e5a6dfde88a6e58d6ec8-7641','feff94ad64c588d8ecbcfff2-7659','f0f08e91ca624780773a4874-7634','0b88a8a6dc8cdfeb95095062-7403','5c4b776990e4b145adf6a2d4-7223','152a3829435c556e53d1d4c9-6901','894949b2704ecd9d77fcc0c0-6843','f2676afbe087ad295962013c-7555','bef2ff4f709793a7d11bf5af-7429','241023883c82b7569affbf00-7422','21775663b75db0d553fced25-7187','b074e9e09ee8f6e97ff3f74d-7469','2e38371666787db9b3e1f6f4-6941','ffeed0f79f24e200497c064d-7303','cc0500ef2f2aef832aefac2a-7431','422b72266d983cb29ac4f080-7355','2c5460bbdc2f61b136cbe0e0-7277','2d4059ea5455f07b3fffd460-7247','430d27582233713045c94e4e-6577','5585b553a8b679c2d0bbe4e9-6496','118df00e2f56ff304fececda-7195','b7b9f45254d8192294000278-6679','552e5acf7979f6e198ecffa3-7129','853e3ec15757ead27af7f79b-7128','b9dbe65f818a36595f304852-6482','00c3ffb463a65c49783b475e-6917','4cb3cd52d6d35968b1302579-6362','41646e4e7376c2be53e4e1b0-6749','f06868fab57aedf79880d6ff-6998','ebedc89ab5c174698cc1867b-6850','ef5353b84040dbee7be2c85b-6837','66e1b400615900796f009589-5986','352f442a2438411e8f310a5d-6158','2f3c4f506f86fbb040de703c-5271','aa1111b15858f2c280fcf8a6-6770','068b789ed79af2ff97ffcf5e-6644','002c6ae45171f8a79bf8d99b-6713','793b89be2490e5a0dce9bbe5-6379','f3cba5975a5e45395325161b-6186','00a38879bd8fbeeb9fffff9d-6588','57385ca75265ec7263febe7e-6567','f4ec09e9bd07ff0033b7031c-6338','33364484577cc65f63e1bf7f-6494','3972988ac4ff9179ef7b417d-5334','54447b49b47e94dd4dffd944-6156','f3ff92f6ce592e8fc656cfd2-5895','827055a79e8bd4ceb0ede7cf-6324','dcdadad869c0fffd8cffbd59-6303','35013f561050951556e9b5d2-6319','004182118df0fbffa3ff4b68-6236','f0f0efedd690b1bd5d955a47-6178','6b62ce372e962f99ad84efe2-4175','001f3f0833580d63a5ffd717-6131','d15260e95c63ff9d7bf2f089-6116','15274436759161d2b49dfdc7-6053','61bbb6a1dfffad56cd4a3b85-6054','fffac0ffd79a73b9d79de6e8-5582','761a1ac13131a7cd78fff279-5979','1b00445727a39153f4d6c5f0-5594','f4f78785eb4e32c38c3f84ac-5896','da5c53a8e4b14aa3ba306d75-5712','3d065ab51a6270d4b4ddddc7-5831','80a3a2abcecfc4dce0daf4f5-5656','fff07ad69830ab31245f233f-5512','a212321a183120615bdece9c-5563','44918791e4a65f64c0453064-5335','f35f5fcc435ff1ea6536a3eb-5485','442d7c6341b4f85acadafa8b-5389','51af5bb3e55efeed30ffcb3c-5429','73f7dd2cc4cb1972a42e3a87-5447','7696db562d7dae427bff8a98-5240','80c0ce4672929adea2c2f69b-5242','83afa658727fe5e5e5d3a284-5308','222831393e4600adb5eeeeee-2763','f3f2c9f0d58793af56336371-5337','363b4e4f3b78927fbfc4bbf0-5272','e25d4ea93545d9528bff92e8-5336','523f79807be473cff0afffea-5239','eaf88779dc963bbbb3377aaf-5241','ff8a69f06161bb42727a3476-5243','f6f982d9d46ffa5862c64272-5246','f6f6d947e4e05f81e4f67ff5-4994','3e1e68583c87e45a84ffacac-5043','51af5bb3e55ef7ffa3dddb6a-5044','f8aa27fac55bfff8b620655f-5091','f9f3cfede7cfddbc89aa512f-5163','89fad04ec9e16796e5228291-5125','288fb41d556fefddb2fa360a-5124','ff6464ffbd67f8fe855be7a9-5132','d9dad7c24d2c3e4a611a2639-4343','f6ea8cf26d5bc03546492540-4284','c6f1a2a8d96643a367385380-4900','f7f5b2bad4f95e89ef352771-4973','6a2e2ecd5a5affcf68eff6a5-4899','f46188491d7f642ab67779ff-4901','489cc174f6a743a680236969-4902','062925044a423a9188b8e1dd-4910','a099ff5a67a6fcb241d68d08-4733','96cd39f5ff65ffba47ff5b44-4802','293462211a4cf33535a51c2d-4803','243d44167a8b2dea8f24b273-4804','9a60c1ac92fa96ebf048c3be-4281','563761a7425cf3825fffe26f-4698','f2eb80a2bf392685bf144673-4464','1c0c2a343b9961bdf69affdc-4622','8e334cec9454f1f08ac6cd78-4282','0c22330654710a91abffc045-4461','f7deadcd443972b8966f7777-4581','f7f4ea9ce3cf6a7ff5574b9b-4515','a9eee6fefaecf9a1bc625772-3986','b7569a883c82e4f091f9cd76-4260','f1efe9beceb034857fb0a48a-3881','e0fffb29cdb5008698f39c9c-4535','ffb19bf660609a2c80551863-4390','620808a53f3ff4ce74ffe9c1-4337','80ef914ba54df3ef82f0c15a-4285','f0e9ffcea9ffb346ff545454-4371','302a775457a6eebb55f1e6d1-4125','3b939b2f818991f3fcc9fbff-4319','80e5e97d77f6793e71e471a7-4259','3c1b1fb21e4be2bf81f6e1b5-4092','ffe180eba0598b3c7641245c-4174'
];

var rd = Math.floor(Math.random()*data.length); collection(data[rd]);

$('.place').click(function() {
var rd = Math.floor(Math.random()*data.length); collection(data[rd]);
$('send', 'event', 'inside-tab', 'refresh-colors'); });



$('.place span').click(function(e) { e.stopPropagation(); 






});








$('#inner').hover(function() {
  $('#colors').fadeOut();
  $('#topicons').fadeOut();
});
$('#inner').mouseleave(function() {
  $('#colors').fadeIn();
    $('#topicons').fadeIn();
});




    
  $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            console.log('scrolling up !');
      
      $( ".place" ).trigger( "click" );
        }
        else{
            console.log('scrolling down !');
      
  $( ".place" ).trigger( "click" );

      
      
        }
    });






$('#heart').click(function()
{


  alert(hex1 + hex2 + hex3 + hex4);



});


//array to store values
var stores = Array();
//input field text

var storesRetrieved = localStorage.getItem("database");
 stores.push(storesRetrieved);


var storesArray = storesRetrieved.split(' ');

for (i = 0; i < storesArray.length; i++) { 


 console.log( storesArray[i]);

 var Csm = storesArray[i];

 var Chex1 = Csm.substring(0,6); 
var Chex2 = Csm.substring(6,12); 
var Chex3 = Csm.substring(12,18); 
var Chex4 = Csm.substring(18,24);

$( "#write" ).append( "<div onclick='return c(`" + Chex1 +", " + Chex2 + ", " + Chex3 + ", " + Chex4 +  "`);' class='mega' style='clear:both;'><div class='block-mini' style='background:#" + Chex1 + "'></div><div class='block-mini' style='background:#" + Chex2 + "'></div><div class='block-mini' style='background:#" + Chex3 + "'></div><div class='block-mini' style='background:#" + Chex4 + "'></div><div>" );




}



storesArray.forEach(function() {
   











});



//clear the storage
function clearStorage() {
    //clear the storage
  stores = Array();

    localStorage.clear("database");

    $('.colorBlock').hide();
    //visually cleared
console.log("cleared storage");
$("#write").html("");
}

// save the string
function saveStatusLocally() {
    //grab the value of the text box





    var giveme = hex1 + hex2 + hex3 + hex4
    var stringToSave = giveme;


if(jQuery.inArray(giveme, stores) != -1) {
    console.log("is in array");
} else {
    console.log("is NOT in array");
} 




    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } 

else if (jQuery.inArray(giveme, stores) != -1) {
  console.log("is in array");
}

    else {
        //push that value to the array
        stores.push(stringToSave);

        //print that value into the local storage named database and joing by a non-breaking space
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write

$('.colorBlock').show();
$( "#write" ).append( "<div onclick='return c(`" + hex1 +", " + hex2 + ", " + hex3 + ", " + hex4 +  "`);' class='mega' style='clear:both;'><div class='block-mini' style='background:#" + hex1 + "'></div><div class='block-mini' style='background:#" + hex2 + "'></div><div class='block-mini' style='background:#" + hex3 + "'></div><div class='block-mini' style='background:#" + hex4 + "'></div><div>" );


    }
}

// read the string
function readStatus() {
    //print the value of the local storage "database" key
    if (window.localStorage.getItem("database") == null) {
        document.getElementById('write').innerHTML = "nothing stored.";
    } else {
        document.getElementById('write').innerHTML = window.localStorage.getItem("database");
    }
}




