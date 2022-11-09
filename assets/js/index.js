function SetLanguage(lang) {
  window.localStorage.setItem("Lang", lang);
  window.location = window.location.href;
}
let textShown = false;
let lang = window.localStorage.getItem("Lang");
function ShowText() {
  let roundedMiddleDiv = document.getElementById("rounded-middle"),
    roundedUpDiv = document.getElementById("rounded-up"),
    roundedBottomDiv = document.getElementById("rounded-bottom"),
    roundedMiddleStringDiv = document.getElementById("rounded-middle-string");
  textShown = !textShown;
  if (textShown) {
    roundedMiddleDiv.style.opacity = 0;
    roundedMiddleDiv.style.cursor = "default";
    roundedMiddleStringDiv.style.maxHeight = "200px";
    roundedMiddleStringDiv.style.padding = "5% 0px";
  } else {
    roundedMiddleDiv.style.opacity = 1;
    roundedUpDiv.style.marginBottom = "0px";
    roundedBottomDiv.style.marginTop = "0px";
    roundedMiddleStringDiv.style.maxHeight = "0px";
    roundedMiddleStringDiv.style.padding = "0px 0px";
  }
}
function CheckLanguage() {
  let roundedMiddleDiv = document.getElementById("rounded-middle"),
    roundedUpDiv = document.getElementById("rounded-up"),
    roundedBottomDiv = document.getElementById("rounded-bottom"),
    roundedMiddleStringDiv = document.getElementById("rounded-middle-string"),
    langDiv = document.getElementById("lang"),
    headerDiv = document.getElementById("Header"),
    firstSectionDiv = document.getElementById("first-section-header"),
    mainSectaionDiv = document.getElementById("main-section"),
    footerHeaderDiv = document.getElementById("footer-header"),
    footerItemsDiv = document.getElementById("footer-items");
  if (!lang || lang != "en") {
    document.body.dir = "rtl";
    footerHeaderDiv.innerHTML = `<p class="footer-header-one">بيان الرمال</p>
    <p class="footer-header-two">لتوريد الأغذية و المشروبات</p>`;
    footerItemsDiv.innerHTML = `                <div class="py-1">
    <span>٠٥٩٦٦٢٠٣٧٧</span>
    <i class="fa-brands fa-square-whatsapp"></i>
</div>
<div class="py-1">
    <span>info@baft.sa</span>

    <i class="fa-solid fa-square-envelope"></i>
</div>
<div class="py-1">
    <span>baft_1</span>

    <i class="fa-brands fa-square-twitter"></i>
</div>`
    headerDiv.innerHTML = `<p id="HeaderOne">بيان الرمال</p>
      <p id="HeaderTwo">لتوريد الأغذية و المشروبات</p>`;

    langDiv.innerHTML = `
       <img src="/assets/img/Flag_of_Saudi_Arabia.svg.webp"
           class="border border-0 bg-none col-2 col-xs-3 hand-cursor p-0 m-1 img-fluid " onclick="SetLanguage('en')" />
       <p class="col-3 text-start m-0 p-0 lang hand-cursor ps-2" onclick="SetLanguage('en')">العربية</p>`;

    firstSectionDiv.innerHTML = `
    <img src="/assets/img/selecting-wheat-varieties_870x580.jpeg" class="img-fluid px-0 w-100">
    <div class="position-absolute ar">
    <h1>بيان الرمال</h1>
    <h2> لتوريد الأغذية و المشروبات</h2></div>`;

    mainSectaionDiv.innerHTML = `
    <div class="col-12 col-sm-4 my-3 mx-auto justify-content-center align-items-center d-flex">
    <img src="/assets/img/whoAreWeAR.png" class="img-fluid who-we-are ">
</div>
        <div class="col-12 col-sm-8  m-auto my-5 position-relative ">
            <div id="rounded-up" class="rounded-up w-75  ">
                <p class="rounded-body">
                    تعتبر سنة ٢٠٢٠ البداية الحقيقية لشركة بيان الرمال المتخصصة
                    بتوريد الأغذية والمشروبات للفنادق والمطاعم  وجميع المؤسسات
                    العاملة بمجال تقديم الأغذية والمشروبات للجماهير
                    </p>
            </div>
            <div id="rounded-middle" class=" text-center rounded-pill hand-cursor rounded-middle-ar" onclick="ShowText()">
                اقراء المزيد ....</div>
            <div id="rounded-middle-string" class="text-center" onclick="ShowText()">
                <p>الإعلامي مسلم الرمالي هو المالك لمؤسسة بيان الرمال والتي تم تأسيسها في عام 2015 
                    والتي نسعي لان تصبح كيان يساعد ويساهم في تحقيق اهداف رؤية 2030</p>
                    <p>ترخيص رقم 01095047883</p>
            </div>
            <div id="rounded-bottom" class="w-75 rounded-bottom ">
                <p class="rounded-body  ">
                    تعتبر شركة بيان الرمال للأغذية والمشروبات فرع من كيان أكبر في تخصصات مختلفة
                    مثل الإاعلام والسياحة والمقاولات 
                </p>
            </div>
        </div>
        <div class="col-8  mx-auto justify-content-center align-items-center">
        <p class="parg-header d-block text-center w-100">رؤيتنا</p>
        <p class="parg-body d-block text-center">مواكبة رؤية المملكة٢٠٣٠ والوصول لاعلى مستوى من الجودة في مجال 
            توريد الأغذية والمشروبات </p>

        <p class="parg-header d-block text-center w-100">رسالتنا </p>
        <p class="parg-body d-block text-center">إمداد المنشأت المتخصصة بتقديم الأغذية والمشروبات بمنتجات عالية الجودة طبقاً لأنظمة ومعايير 
            الجودة والسلامة المطبقة عالمياً </p>

        <p class="parg-header d-block text-center w-100">قيمنا </p>
    </div>
    <div class="row text-center container m-auto mb-5">
        <div class="col-sm-6 col-xs-12 ">
            <div class="card-header">
                <img src="/assets/img/Group 252.png" class="img-fluid">
                <p >المسؤولية</p>
            </div>
            <div class="card-body w-75 m-auto">
                <p>
                    تحمل بيان الرمال نفسها المسؤولية التنظيمية لاداء 
رسالتها باعلى معايير الجودة المطلوبة تجاه منسوبيها وعملائها لتقديم غذاء 
امن للمجتمع
                </p>
            </div>
        </div>
        <div class="col-sm-6 col-xs-12  ">
            <div class="card-header">
                <img src="/assets/img/Group 255.png" class="img-fluid">
                <p >التمكين</p>
            </div>
            <div class="card-body w-75 m-auto">
                <p>تمكن بيان الرمال موظفيها من خلال التدريب
                    المستمر وتوفير الأدوات والوسائل اللازمة 
                    التى يحتاجون اليها لاتخاذ وتنفيذ القرارات الصائبة 
                    لحماية الصحة العامة وتعزيز سلامة الاغذية</p>
            </div>
        </div>
        <div class="col-sm-6 col-xs-12  ">
            <div class="card-header">
                <img src="/assets/img/Group 257.png" class="img-fluid">
                <p >النزاهة</p>
            </div>
            <div class="card-body w-75 m-auto">
                <p>ملتزمون بأداء اعمالنا بأمانة وعدل ووفق اعلى 
                    المعايير الأخلاقية </p>
            </div>
        </div>
        <div class="col-sm-6 col-xs-12 ">
            <div class="card-header">
                <img src="/assets/img/Group 253.png" class="img-fluid">
                <p >التعاون</p>
            </div>
            <div class="card-body w-75 m-auto">
                <p>تعمل بيان الرمال علي تعزيز روح التعاون داخل 
                    المنشأة ومع شركائها أى جهة ذات علاقة مباشرة 
                    بسلامة الغذاء لحماية الصحة العامة والوقاية 
                    من المرض </p>
            </div>
        </div>
        
    </div>
    `;
  } else {
    document.body.dir = "ltr";
    footerHeaderDiv.innerHTML = `<p class="footer-header-one ">Bayan Alrmal</p>
    <p class="footer-header-two ">For Food & Beverage Supply</p>`;
    footerItemsDiv.innerHTML = `                <div class="py-1">
    <i class="fa-brands fa-square-whatsapp"></i>
    <span>0596620377</span>
</div>
<div class="py-1">
<i class="fa-solid fa-square-envelope"></i>
    <span>info@baft.sa</span>

</div>
<div class="py-1">
<i class="fa-brands fa-square-twitter"></i>
    <span>baft_1</span>
</div>`
    headerDiv.innerHTML = `<p id="HeaderOne">Bayan Alrmal</p>
    <p id="HeaderTwo">For Food & Beverage Supply</p>`;

    langDiv.innerHTML = `
       <img src="/assets/img/Flag_of_the_United_Kingdom.svg.png"
           class="border border-0 bg-none col-3 col-sm-2 hand-cursor p-0 m-1 img-fluid" onclick="SetLanguage('ar')" />
       <p class=" ps-2 col-3 text-start m-0 p-0 lang hand-cursor" onclick="SetLanguage('en')">English</p>`;

    firstSectionDiv.innerHTML = `
       <img src="/assets/img/selecting-wheat-varieties_870x580.jpeg" class="img-fluid px-0 w-100">
       <div class="position-absolute en">
       <h1>Bayan Alrmal</h1>
       <h2> For Food & Beverage Supply</h2></div>`;

    mainSectaionDiv.innerHTML = `
       <div class="col-12 col-sm-4  mx-auto justify-content-center align-items-center d-flex">
       <img src="/assets/img/whoWeAreEN.png" class="img-fluid who-we-are">
   </div>
       <div class="ccol-12 col-sm-8 m-auto my-5 position-relative ">
           <div id="rounded-up" class="rounded-up w-75  ">
               <p class="rounded-body en">The year <span class="year">2020</span> is considered the real beginning of Bayan Alrmal Company, which specializes in supplying food and beverages to hotels, restaurants, and all institutions working in the field of providing food and beverages to the masses.
                   </p>
           </div>
           <div id="rounded-middle" class=" text-center rounded-pill hand-cursor rounded-middle-en" onclick="ShowText()">
           See More ....
           </div>
           <div id="rounded-middle-string" class="text-center" onclick="ShowText()">
           <p>
           The journalist Musallam Alrmaly is the owner of the Bayan Alrmal Foundation, which was established in <span class="year">2015</span> and seeks to become an entity that helps and contributes to achieving the goals of Vision <span class="year">2030</span>.
           </p>
           <p>License No: <span class="year">000000</span></p>
           </div>
           <div id="rounded-bottom" class="w-75 rounded-bottom ">
               <p class="rounded-body  en">
               Bayan Alrmal Food and Beverage Company is considered a branch of a larger entity in various specializations such as media, tourism, and contracting.
               </p>
           </div>
       </div>
       
       
   `+`<div class="col-8 mt-5 mx-auto justify-content-center align-items-center">
   <p class="parg-header d-block text-center w-100">Our Vision</p>
   <p class="parg-body-en d-block text-center">Keeping pace with the Kingdom's <span class="year">2030</span> vision and reaching the highest quality in the field of food and beverage supply.</p>

   <p class="parg-header d-block text-center w-100">Our Mission </p>
   <p class="parg-body-en d-block text-center">Providing food and beverage establishments with high-quality products following internationally applicable quality and safety standards and regulations.</p>

   <p class="parg-header d-block text-center w-100">Our Values </p>
</div>
<div class="row text-center container m-auto mb-5">
   <div class="col-sm-6 col-xs-12">
       <div class="card-header">
           <img src="/assets/img/Group 252.png" class="img-fluid">
           <p >Responsibility</p>
       </div>
       <div class="card-body w-75 m-auto">
           <p class="en">Bayan Alrmal bears the organizational responsibility to perform its mission with the highest quality standards required towards its employees and customers to provide safe food for the community.</p>
       </div>
   </div>
   <div class="col-sm-6 col-xs-12">
       <div class="card-header">
           <img src="/assets/img/Group 255.png" class="img-fluid">
           <p >Empowerment</p>
       </div>
       <div class="card-body w-75 m-auto">
           <p class="en">Bayan Alrmal empowers its employees through continuous training and the provision of the necessary tools and means they need to make and implement the right decisions to protect public health and enhance food safety.</p>
       </div>
   </div>

   <div class="col-sm-6 col-xs-12">
       <div class="card-header">
           <img src="/assets/img/Group 253.png" class="img-fluid">
           <p >Cooperate</p>
       </div>
       <div class="card-body w-75 m-auto">
           <p class="en">Bayan Alrmal works to enhance the spirit of cooperation within the facility with its partners and any party directly related to food safety to protect public health and prevent disease.</p>
       </div>
   </div>
   <div class="col-sm-6 col-xs-12">
   <div class="card-header">
       <img src="/assets/img/Group 257.png" class="img-fluid">
       <p >Integrity </p>
   </div>
   <div class="card-body w-75 m-auto">
       <p class="en">	We are committed to performing our business honestly, fairly, and according to the highest ethical standards.</p>
   </div>
</div>
   
</div>`;
  }
}
