const nameInput=document.querySelector('#name');
const birthInput=document.querySelector('#birthday');
const subBtn=document.querySelector('.btn');
const wishBtn=document.querySelector('.wishBtn');
const Wish=document.querySelector('#wishName');
const price=document.querySelector('#price');
const msg=document.querySelector('.msg');
const msg2=document.querySelector('.msg2');
const msg3=document.querySelector('.msg3');
const myForm=document.querySelector('#my-form');
const wishForm=document.querySelector('#myForm');
const list=document.querySelector('#list1');
const wishList=document.querySelector('.list2');
wishForm.style.visibility='hidden';

subBtn.addEventListener('click',onSub);
wishBtn.addEventListener('click',wishSub);

wishList.addEventListener('click',removeItem);

function onSub(e) {
	e.preventDefault();
	if (nameInput.value==='' || birthInput.value==='') {
		msg.classList.add('error');
		msg.innerHTML='<p>please enter all fields</p>';
		setTimeout(()=> msg.remove(),3000);
	} else if(nameInput.value!=='' && birthInput.value!==''){
		msg.classList.add('succ');
		msg.innerHTML='<p>Thanks for your response</p>';
		msg2.classList.add('mid');
		msg2.style.background='#f4f4f4';
		msg2.innerHTML=`<h1>${nameInput.value} WishList</h1>`
		setTimeout(()=>myForm.remove(),800);
		setTimeout(()=>wishForm.style.visibility='visible',800);
		
	}
}

function wishSub(e){
	e.preventDefault();
	// if (nameInput.value!='' && birthInput.value!='') {
	if (Wish.value==='' || price.value==='') {
		msg3.classList.add('error');
		msg3.innerHTML='<p>please enter all fields</p>';
		setTimeout(()=> msg3.remove(),3000);
} else {
	const deleteBtn=document.createElement('button');
	const priceBtn=document.createElement('button');
	const li=document.createElement('li');
	deleteBtn.appendChild(document.createTextNode('X'));
	deleteBtn.className='delete';
	priceBtn.className='price-btn';
	priceBtn.appendChild(document.createTextNode(`₦${price.value}`))
	li.appendChild(deleteBtn);
	li.appendChild(priceBtn);
	
	li.className='list1';
	li.appendChild(document.createTextNode(`${Wish.value}`));
	wishList.appendChild(li);
	//clear all fields
	Wish.value='';
	price.value='';



}
/*else{
	msg.classList.add('error');
		msg.innerHTML='<p>please enter above fields</p>';
		setTimeout(()=> msg.remove(),3000);

}*/
}
function removeItem(e){
	e.preventDefault();
	if (e.target.classList.contains('delete')) {
 		if (confirm('Are You Sure?')) {
			var lib =e.target.parentElement;
			wishList.removeChild(lib);
		}
	}
}

// var wishlist={
// 	name:wish.value;
// 	price:price.value
// }

// if(localStorage.getItem('wish')===null){
// 	var wishLists=[];
// 	wishLists.push(wishlist);

// 	localStorage.setItem('wish',JSON.stringify(wishLists));
// }else{
// 	var wishLists=JSON.parse(localStorage.getItem('wish'))

// 	wishLists.push(wishlist);
// }
