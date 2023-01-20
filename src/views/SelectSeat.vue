<template>
    <div class="container">
        <div class="grid grid-cols-12">
            <p class="bg-black text-white font-bold py-2 px-4 rounded w-screen mb-5">
            Screen
            </p>
        </div>
        <div class="grid grid-cols-5 gap-4">
            <button id="a1" value="1" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_a1()">A1</button>
            <button id="a2" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_a2()">A2</button>
            <button id="a3" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_a3()">A3</button>
            <button id="a4" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_a4()">A4</button>
            <button id="a5" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_a5()">A5</button>
            <button id="b1" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_b1()">B1</button>
            <button id="b2" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_b2()">B2</button>
            <button id="b3" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_b3()">B3</button>
            <button id="b4" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_b4()">B4</button>
            <button id="b5" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_b5()">B5</button>
            <button id="c1" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_c1()">C1</button>
            <button id="c2" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_c2()">C2</button>
            <button id="c3" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_c3()">C3</button>
            <button id="c4" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_c4()">C4</button>
            <button id="c5" class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="dot_c5()">C5</button>
        </div>
        <div class="flex flex-row">
            <select id="totalseats" class="flex-2 w-32 mr-5" @change="backto()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5 flex-auto" @click="choose()">
            Select
            </button>
        </div>
    </div>
    
</template>

<script>
const seat = [];
var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;
var a5 = false;
var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;
var b5 = false;
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var c5 = false;
export default {
    name: 'SelectSeat', 
     methods: {
    backto:function(){
  
        document.getElementById('a1').style.backgroundColor = 'green';  
        a1=false

        document.getElementById('a2').style.backgroundColor = 'green';  
        a2=false 

        document.getElementById('a3').style.backgroundColor = 'green';  
        a3=false 

        document.getElementById('a4').style.backgroundColor = 'green';  
        a4=false 

        document.getElementById('a5').style.backgroundColor = 'green';  
        a5=false 

        document.getElementById('b1').style.backgroundColor = 'green';  
        b1=false

        document.getElementById('b2').style.backgroundColor = 'green';  
        b2=false 

        document.getElementById('b3').style.backgroundColor = 'green';  
        b3=false 

        document.getElementById('b4').style.backgroundColor = 'green';  
        b4=false 

        document.getElementById('b5').style.backgroundColor = 'green';  
        b5=false 
        
        document.getElementById('c1').style.backgroundColor = 'green';  
        c1=false

        document.getElementById('c2').style.backgroundColor = 'green';  
        c2=false 

        document.getElementById('c3').style.backgroundColor = 'green';  
        c3=false 

        document.getElementById('c4').style.backgroundColor = 'green';  
        c4=false 

        document.getElementById('c5').style.backgroundColor = 'green';  
        c5=false 
        
        },
    dot_a1:function(){
       if (document.getElementById('a1').style.backgroundColor == 'red') {
        document.getElementById('a1').style.backgroundColor = 'green';  
        a1=false 
        
        }
        else{
            document.getElementById('a1').style.backgroundColor = 'red'
            a1 = true
        }
        
        },
    dot_a2:function(){
       if (document.getElementById('a2').style.backgroundColor == 'red') {
        document.getElementById('a2').style.backgroundColor = 'green';
        a2=false    
        }
        else{
            document.getElementById('a2').style.backgroundColor = 'red'
            a2=true 
        }
        
        },
    dot_a3:function(){
       if (document.getElementById('a3').style.backgroundColor == 'red') {
        document.getElementById('a3').style.backgroundColor = 'green';
        a3=false    
        }
        else{
            document.getElementById('a3').style.backgroundColor = 'red'
            a3=true 
        }
        
        },
    dot_a4:function(){
       if (document.getElementById('a4').style.backgroundColor == 'red') {
        document.getElementById('a4').style.backgroundColor = 'green';
        a4 = false   
        }
        else{
            document.getElementById('a4').style.backgroundColor = 'red'
            a4 = true
        }
        
        },
    dot_a5:function(){
       if (document.getElementById('a5').style.backgroundColor == 'red') {
        document.getElementById('a5').style.backgroundColor = 'green'; 
          a5 = false
        }
        else{
            document.getElementById('a5').style.backgroundColor = 'red'
            a5 = true
        }
        
        },
    dot_b1:function(){
       if (document.getElementById('b1').style.backgroundColor == 'red') {
        document.getElementById('b1').style.backgroundColor = 'green';  
        b1=false 
        
        }
        else{
            document.getElementById('b1').style.backgroundColor = 'red'
            b1 = true
        }
        
        },
    dot_b2:function(){
       if (document.getElementById('b2').style.backgroundColor == 'red') {
        document.getElementById('b2').style.backgroundColor = 'green';
        b2=false    
        }
        else{
            document.getElementById('b2').style.backgroundColor = 'red'
            b2=true 
        }
        
        },
    dot_b3:function(){
       if (document.getElementById('b3').style.backgroundColor == 'red') {
        document.getElementById('b3').style.backgroundColor = 'green';
        b3=false    
        }
        else{
            document.getElementById('b3').style.backgroundColor = 'red'
            b3=true 
        }
        
        },
    dot_b4:function(){
       if (document.getElementById('b4').style.backgroundColor == 'red') {
        document.getElementById('b4').style.backgroundColor = 'green';
        b4 = false   
        }
        else{
            document.getElementById('b4').style.backgroundColor = 'red'
            b4 = true
        }
        
        },
    dot_b5:function(){
       if (document.getElementById('b5').style.backgroundColor == 'red') {
        document.getElementById('b5').style.backgroundColor = 'green'; 
          b5 = false
        }
        else{
            document.getElementById('b5').style.backgroundColor = 'red'
            b5 = true
        }
        
        },
    dot_c1:function(){
       if (document.getElementById('c1').style.backgroundColor == 'red') {
        document.getElementById('c1').style.backgroundColor = 'green';  
        c1=false 
        
        }
        else{
            document.getElementById('c1').style.backgroundColor = 'red'
            c1 = true
        }
        
        },
    dot_c2:function(){
       if (document.getElementById('c2').style.backgroundColor == 'red') {
        document.getElementById('c2').style.backgroundColor = 'green';
        c2=false    
        }
        else{
            document.getElementById('c2').style.backgroundColor = 'red'
            c2=true 
        }
        
        },
    dot_c3:function(){
       if (document.getElementById('c3').style.backgroundColor == 'red') {
        document.getElementById('c3').style.backgroundColor = 'green';
        c3=false    
        }
        else{
            document.getElementById('c3').style.backgroundColor = 'red'
            c3=true 
        }
        
        },
    dot_c4:function(){
       if (document.getElementById('c4').style.backgroundColor == 'red') {
        document.getElementById('c4').style.backgroundColor = 'green';
        c4 = false   
        }
        else{
            document.getElementById('c4').style.backgroundColor = 'red'
            c4 = true
        }
        
        },
    dot_c5:function(){
       if (document.getElementById('c5').style.backgroundColor == 'red') {
        document.getElementById('c5').style.backgroundColor = 'green'; 
          c5 = false
        }
        else{
            document.getElementById('c5').style.backgroundColor = 'red'
            c5 = true
        }
        
        },
    choose:function(){
       if (a1 == true) {
            seat.push("a1");
        }
        if (a2 == true) {
            seat.push("a2");
        }
        if (a3 == true) {
            seat.push("a3");
        }
        if (a4 == true) {
            seat.push("a4");
        }
         if (a5 == true) {
            seat.push("a5");
        }
        if (b1 == true) {
            seat.push("b1");
        }
        if (b2 == true) {
            seat.push("b2");
        }
        if (b3 == true) {
            seat.push("b3");
        }
        if (b4 == true) {
            seat.push("b4");
        }
         if (b5 == true) {
            seat.push("b5");
        }
        if (c1 == true) {
            seat.push("c1");
        }
        if (c2 == true) {
            seat.push("c2");
        }
        if (c3 == true) {
            seat.push("c3");
        }
        if (c4 == true) {
            seat.push("c4");
        }
         if (c5 == true) {
            seat.push("c5");
        }
        if(seat.length != totalseats.value){
            alert("jumlah kursi selected tidak sama dengan angka pada dropdown")
            seat.length = 0
            
        }
        else{
            var text = seat.join(", ")
            this.$store.dispatch('insertMovieHistory', {MovieId: this.$route.params.id, SeatCode: text})
            window.location.href = "http://localhost:8080/moviehistory";
        }
        },
    }


    
}
</script>
