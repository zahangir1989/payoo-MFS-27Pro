
// show cash our form
document.getElementById('btn-out').addEventListener('click', function(){
    // console.log('show cash our is clicked')
    
 document.getElementById('cash-out-form').classList.remove('hidden');

 document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('btn-money').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    
    document.getElementById('cash-out-form').classList.add('hidden');
})

