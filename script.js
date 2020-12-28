function create(element) {
     return  document.createElement(element);
}
function setAtt(name,att,element) {
    name.setAttribute(att,element)
} 
 var div = create("div")
 setAtt(div,"class","container")
 var row = create("div")
 setAtt(row,"class","row")
 var col1 = create("div")
 setAtt(col1,"class","col-6")
 var col2 = create("div")
 setAtt(col2,"class","col-6")
 var form = create("form")
 var row2 = create("div")
 setAtt(row2,"class","row")

 var text1 = create("div")
 setAtt(text1,"class","form-group")
 var text1lab = create("label")
 setAtt(text1lab,"class","col-12")
 setAtt(text1lab,"for","firstName")
 text1lab.innerHTML = "FirstName"
 var text1inp = create("input")
 setAtt(text1inp,"id","firstName")
 setAtt(text1inp,"type","text")
 setAtt(text1inp,"name","firstName")
 setAtt(text1inp,"class","col-12 form-control")


 var text2 = create("div")
 setAtt(text2,"class","form-group")
 var text2lab = create("label")
 setAtt(text2lab,"class","col-12")
 setAtt(text2lab,"for","lastName")
 text2lab.innerHTML = "LastName"
 var text2inp = create("input")
 setAtt(text2inp,"id","lastName")
 setAtt(text2inp,"class","col-12 form-control")



 var text3 = create("div")
 setAtt(text3,"class","form-group")
 var text3lab = create("label")
 setAtt(text3lab,"class","col-12")
 setAtt(text3lab,"for","address")
 text3lab.innerHTML = "Address"
 var text3inp = create("input")
 setAtt(text3inp,"id","address")
 setAtt(text3inp,"class","col-12 form-control")

 var text4= create("div")
 setAtt(text4,"class","form-group")
 var text4lab = create("label")
 setAtt(text4lab,"class","col-12")
 setAtt(text4lab,"for","pincode")
 text4lab.innerHTML = "PIN CODE"
 var text4inp = create("input")
 setAtt(text4inp,"id","pincode")
 setAtt(text4inp,"class","col-12 form-control")

 var text5= create("div")
 setAtt(text5,"class","form-group")
 var text5lab = create("div")
 setAtt(text5lab,"for","Gender")
 text5lab.innerHTML = "Gender"
 var select = create("select")
 setAtt(select,"id","gender")
 setAtt(select,"class","form-control")
 var opt1 = create("option")
 opt1.innerHTML = "Male"
 var opt2 = create("option")
 opt2.innerHTML = "FeMale"
 var opt3 = create("option")
 opt3.innerHTML = "Other"
 select.append(opt1,opt2,opt3)



 var text8= create("div")
 setAtt(text8,"class","form-group")
 var text8lab = create("div")
 setAtt(text8lab,"for","foodchoice")
 text8lab.innerHTML = "foodchoice"
 var select1 = create("select")
 setAtt(select1,"id","foodchoice")
 setAtt(select1,"class","form-control")
 var opt3 = create("option")
 opt3.innerHTML = "Dessert"
 var opt4 = create("option")
 opt4.innerHTML = "Rice"
 var opt5 = create("option")
 opt5.innerHTML = "Roti"
 var opt6 = create("option")
 opt6.innerHTML = "curd"
 var opt7 = create("option")
 opt7.innerHTML = "Pasta"
 text8.append(text8lab,select1)
 select1.append(opt3,opt4,opt5,opt6,opt7)





 
 var text6= create("div")
 setAtt(text6,"class","form-group")
 var text6lab = create("label")
 setAtt(text6lab,"class","col-12")
 setAtt(text6lab,"for","state")
 text6lab.innerHTML = "State"
 var text6inp = create("input")
 setAtt(text6inp,"id","state")
 setAtt(text6inp,"class","col-12 form-control")

 var text7= create("div")
 setAtt(text7,"class","form-group")
 var text7lab = create("label")
 setAtt(text7lab,"for","country"),
 text7lab.innerHTML = "Country"
 var text7inp = create("input")
 setAtt(text7inp,"id","country")
 setAtt(text7inp,"class","form-control")

 var button = create("button")
 button.innerHTML = "Submit"
 setAtt(button,"type","button")
 setAtt(button,"onclick","tabfun()")
 setAtt(button,"class","btn btn-primary")
 
 var arr = ["firstName","lastName","address","pincode","gender","state","country","foodchoice"]
 var i = 0;
 var table = create("table")
 setAtt(table,"class","table")
function tabfun(){
    var t = document.getElementById(arr[i]).value
    var tr1 = create("tr")
    setAtt(tr1,"class","tr")
    var td1 = create("td")
    td1.innerHTML = arr[i]
    setAtt(td1,"class","td")
    var td2 = create("td")
    td2.innerHTML = t;
    setAtt(td2,"class","td")
    i++;
    tr1.append(td1,td2)
    table.append(tr1)
}
col2.append(table)
 text7.append(text7lab,text7inp)
 text6.append(text6lab,text6inp)
 text5.append(text5lab,select)
 text4.append(text4lab,text4inp)
 text3.append(text3lab,text3inp)
 text3.append(text3lab,text3inp)
 text2.append(text2lab,text2inp)
 text1.append(text1lab,text1inp)
 form.append(text1,text2,text3,text4,text5,text6,text7,text8,button)
 col1.append(form)
 row.append(col1,col2)
 div.append(row)
 document.body.append(div)
